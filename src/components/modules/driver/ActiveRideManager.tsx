/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useRef, useState } from "react"
import { MapPin, Navigation, User, Phone, CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import icons1 from "../../../assets/images/locationIcon.png"
import icons2 from "../../../assets/images/locationIcon2.png"
import { Ride, RideStatus } from "@/types/ride.type"
import { toast } from "sonner"
import { useGetActiveRideQuery, useUpdateRideStatusMutation } from "@/redux/features/ride/ride.api"

// Leaflet/Map
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useNavigate } from "react-router"

// Fix default Leaflet marker
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

// --- custom icons ---
const pickupIcon = new L.Icon({
  iconUrl: icons1,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
})

const destinationIcon = new L.Icon({
  iconUrl: icons2,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
})

const ActiveRideManager = () => {
  const navigate = useNavigate()

  const {
    data,
    isLoading: isRideLoading,
    isFetching: isRideFetching,
    refetch,
  } = useGetActiveRideQuery(undefined, { refetchOnMountOrArgChange: true })

  const [updateStatus, { isLoading: isMutating } ] = useUpdateRideStatusMutation()

  const [ride, setRide] = useState<Ride | null>(null)

  // Live driver location
  const [driverLocation, setDriverLocation] = useState<[number, number] | null>(null)
  const moveTimer = useRef<NodeJS.Timeout | null>(null)

  // Keep local ride in sync with query data
  useEffect(() => {
    if (data?.data) {
      const r: Ride = data.data
      setRide(r)
      // Initialize driver location at pickup (lat, lng)
      setDriverLocation([
        r.pickupLocation.coordinates[1],
        r.pickupLocation.coordinates[0],
      ])
    } else {
      setRide(null)
      setDriverLocation(null)
    }
  }, [data])

  // Smoothly move driver towards destination while IN_TRANSIT
  useEffect(() => {
    if (!ride || !driverLocation) return

    const [destLat, destLng] = [
      ride.destinationLocation.coordinates[1],
      ride.destinationLocation.coordinates[0],
    ]

    // Clear any previous interval
    if (moveTimer.current) clearInterval(moveTimer.current)

    // Only animate when picked up or in transit
    if (ride.status === RideStatus.PICKED_UP || ride.status === RideStatus.IN_TRANSIT) {
      moveTimer.current = setInterval(() => {
        setDriverLocation((prev) => {
          const [lat, lng] = prev ?? [
            ride.pickupLocation.coordinates[1],
            ride.pickupLocation.coordinates[0],
          ]
          // small step towards destination
          const step = 0.0006
          const dLat = destLat - lat
          const dLng = destLng - lng
          const dist = Math.hypot(dLat, dLng)
          if (dist < step || dist === 0) return [destLat, destLng]
          return [lat + (dLat / dist) * step, lng + (dLng / dist) * step]
        })
      }, 2000)
    }

    return () => {
      if (moveTimer.current) clearInterval(moveTimer.current)
    }
  }, [ride?.status, ride?.destinationLocation, driverLocation, ride])

  const getNextStatus = (currentStatus: Ride["status"]): Ride["status"] | null => {
    switch (currentStatus) {
      case RideStatus.ACCEPTED:
        return RideStatus.PICKED_UP
      case RideStatus.PICKED_UP:
        return RideStatus.IN_TRANSIT
      case RideStatus.IN_TRANSIT:
        return RideStatus.COMPLETED
      default:
        return null
    }
  }

  const getStatusProgress = (status: Ride["status"]): number => {
    switch (status) {
      case RideStatus.ACCEPTED:
        return 25
      case RideStatus.PICKED_UP:
        return 50
      case RideStatus.IN_TRANSIT:
        return 75
      case RideStatus.COMPLETED:
        return 100
      default:
        return 0
    }
  }

  const statusInfo = useMemo(() => {
    const status = ride?.status
    switch (status) {
      case RideStatus.ACCEPTED:
        return {
          label: "Heading to Pickup",
          description: "Navigate to the pickup location",
          action: "Confirm Pickup",
          color: "bg-blue-500",
        }
      case RideStatus.PICKED_UP:
        return {
          label: "Passenger Picked Up",
          description: "Heading to destination",
          action: "Start Trip",
          color: "bg-yellow-500",
        }
      case RideStatus.IN_TRANSIT:
        return {
          label: "In Transit",
          description: "On the way to destination",
          action: "Complete Trip",
          color: "bg-green-500",
        }
      case RideStatus.COMPLETED:
        return {
          label: "Trip Completed",
          description: "Trip finished successfully",
          action: null ,
          color: "bg-gray-500",
        }
      default:
        return {
          label: "Unknown Status",
          description: "",
          action: null ,
          color: "bg-gray-500",
        }
    }
  }, [ride?.status])

  const progress = useMemo(() => (ride ? getStatusProgress(ride.status) : 0), [ride])

  const handleUpdateStatus = async () => {
    if (!ride || isMutating) return
    const nextStatus = getNextStatus(ride.status)
    if (!nextStatus) return

    try {
      await updateStatus({ id: ride._id, data: { status: nextStatus } }).unwrap()

      // Optimistic UI: update local state immediately
      setRide(prev => (prev ? { ...prev, status: nextStatus } : prev))

      // Refresh server state to stay consistent
      const refreshed = await refetch()
      if (refreshed?.data?.data) setRide(refreshed.data.data)

      if (nextStatus === RideStatus.COMPLETED) {
        toast.success("Trip completed successfully! Payment processed.")
        setRide(null)
        navigate("/driver/incoming-ride-requests")
        return
      }

      const label = String(nextStatus).replace(/_/g, " ")
      toast.success(`Status updated to ${label}`)
    } catch (error: any) {
      const message = error?.data?.message || error?.message || "Failed to update ride status"
      toast.error(message)
    }
  }

  // Loading/empty states
  if (isRideLoading || isRideFetching) {
    return (
      <div className="flex flex-col items-center justify-center h-96 space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-600 text-sm">Loading active ride...</p>
      </div>
    )
  }

  if (!ride) {
    return (
      <div className="flex flex-col items-center justify-center h-72 space-y-3">
        <p className="text-sm text-muted-foreground">No active ride at the moment.</p>
        <Button variant="outline" onClick={() => navigate("/driver/incoming-ride-requests")}>
          Go to Requests
        </Button>
      </div>
    )
  }

  const hasCoords = Boolean(
    ride?.pickupLocation?.coordinates?.length === 2 &&
    ride?.destinationLocation?.coordinates?.length === 2
  )

  const pickupLatLng: [number, number] = [
    ride.pickupLocation.coordinates[1],
    ride.pickupLocation.coordinates[0],
  ]

  const destLatLng: [number, number] = [
    ride.destinationLocation.coordinates[1],
    ride.destinationLocation.coordinates[0],
  ]

  return (
    <div className="space-y-6">
      {/* Status Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${statusInfo.color} animate-pulse`} />
          <div>
            <h3 className="font-semibold">{statusInfo.label}</h3>
            <p className="text-sm text-muted-foreground">{statusInfo.description}</p>
          </div>
        </div>
        <Badge variant="outline">Ride #{ride._id?.slice(-6)}</Badge>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Trip Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Trip Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <MapPin className="h-4 w-4 text-green-500" />
              Pickup Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{ride?.pickupLocation?.address}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Navigation className="h-4 w-4 text-red-500" />
              Destination
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{ride?.destinationLocation?.address}</p>
          </CardContent>
        </Card>
      </div>

      {/* Passenger Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Passenger Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">{ride?.rider?.name}</h4>
                <p className="text-sm text-muted-foreground">Payment: {ride?.paymentMethod}</p>
                {typeof ride?.fare === "number" && (
                  <p className="text-sm text-muted-foreground">Fare: ${ride.fare.toFixed(2)}</p>
                )}
              </div>
            </div>
            <Button size="sm" variant="outline">
              <Phone className="h-4 w-4 mr-2" />
              Call
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Map */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Navigation</CardTitle>
          <CardDescription>Live driver location</CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          {hasCoords ? (
            <MapContainer
              center={pickupLatLng}
              zoom={13}
              scrollWheelZoom
              className="h-full w-full"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {/* Pickup Marker */}
              <Marker position={pickupLatLng} icon={pickupIcon as any} />

              {/* Destination Marker */}
              <Marker position={destLatLng} icon={destinationIcon as any} />

              {/* Driver Live Location */}
              {driverLocation && <Marker position={driverLocation} icon={pickupIcon as any} />}

              {/* Polyline from pickup → driver → destination */}
              {driverLocation && (
                <Polyline
                  positions={[pickupLatLng, driverLocation, destLatLng]}
                  pathOptions={{ color: "blue" }}
                />
              )}
            </MapContainer>
          ) : (
            <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
              Location coordinates unavailable.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Action Button */}
      {statusInfo.action && (
        <Button
          onClick={handleUpdateStatus}
          disabled={isMutating}
          className="flex-1"
          size="lg"
        >
          {isMutating ? (
            "Updating..."
          ) : (
            <>
              {ride?.status === RideStatus.IN_TRANSIT ? (
                <CheckCircle className="h-4 w-4 mr-2" />
              ) : (
                <ArrowRight className="h-4 w-4 mr-2" />
              )}
              {statusInfo.action}
            </>
          )}
        </Button>
      )}
    </div>
  )
}

export default ActiveRideManager