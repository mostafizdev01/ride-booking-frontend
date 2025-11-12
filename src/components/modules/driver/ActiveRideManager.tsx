/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState, useRef } from "react"
import { MapPin, Navigation, User, Phone, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { toast } from "sonner"
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useNavigate } from "react-router"

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

const pickupIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
})

const destinationIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
})

type RideStatus = "ACCEPTED" | "PICKED_UP" | "IN_TRANSIT" | "COMPLETED"

interface Ride {
  _id: string
  status: RideStatus
  pickupLocation: { coordinates: [number, number]; address: string }
  destinationLocation: { coordinates: [number, number]; address: string }
  rider: { name: string }
  fare: number
  paymentMethod: string
}

const fakeRide: Ride = {
  _id: "RID123456789",
  status: "ACCEPTED",
  pickupLocation: {
    coordinates: [90.4125, 23.8103],
    address: "Banani, Dhaka",
  },
  destinationLocation: {
    coordinates: [90.4075, 23.8150],
    address: "Gulshan, Dhaka",
  },
  rider: { name: "Jhon Deo" },
  fare: 12.5,
  paymentMethod: "Cash",
}

const ActiveRideManagerFake = () => {
  const navigate = useNavigate()
  const [ride, setRide] = useState<Ride | null>(fakeRide)
  const [driverLocation, setDriverLocation] = useState<[number, number] | null>([
    fakeRide.pickupLocation.coordinates[1],
    fakeRide.pickupLocation.coordinates[0],
  ])
  const moveTimer = useRef<NodeJS.Timeout | null>(null)
  const isMutating = false

  useEffect(() => {
    if (!ride || !driverLocation) return

    const [destLat, destLng] = [
      ride.destinationLocation.coordinates[1],
      ride.destinationLocation.coordinates[0],
    ]

    if (moveTimer.current) clearInterval(moveTimer.current)

    if (ride.status === "PICKED_UP" || ride.status === "IN_TRANSIT") {
      moveTimer.current = setInterval(() => {
        setDriverLocation((prev) => {
          const [lat, lng] = prev ?? [
            ride.pickupLocation.coordinates[1],
            ride.pickupLocation.coordinates[0],
          ]
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

  const getStatusProgress = (status: Ride["status"]): number => {
    switch (status) {
      case "ACCEPTED":
        return 25
      case "PICKED_UP":
        return 50
      case "IN_TRANSIT":
        return 75
      case "COMPLETED":
        return 100
      default:
        return 0
    }
  }

  const statusInfo = useMemo(() => {
    const status = ride?.status
    switch (status) {
      case "ACCEPTED":
        return { label: "Heading to Pickup", description: "Navigate to the pickup location", action: "Confirm Pickup", color: "bg-blue-500" }
      case "PICKED_UP":
        return { label: "Passenger Picked Up", description: "Heading to destination", action: "Start Trip", color: "bg-yellow-500" }
      case "IN_TRANSIT":
        return { label: "In Transit", description: "On the way to destination", action: "Complete Trip", color: "bg-green-500" }
      case "COMPLETED":
        return { label: "Trip Completed", description: "Trip finished successfully", action: null, color: "bg-gray-500" }
      default:
        return { label: "Unknown Status", description: "", action: null, color: "bg-gray-500" }
    }
  }, [ride?.status])

  const progress = useMemo(() => (ride ? getStatusProgress(ride.status) : 0), [ride])

  const handleUpdateStatus = () => {
    if (!ride) return
    if (ride.status === "ACCEPTED") setRide({ ...ride, status: "PICKED_UP" })
    else if (ride.status === "PICKED_UP") setRide({ ...ride, status: "IN_TRANSIT" })
    else if (ride.status === "IN_TRANSIT") {
      setRide({ ...ride, status: "COMPLETED" })
      toast.success("Trip completed!")
      setTimeout(() => navigate("/driver/incoming-ride-requests"), 1000)
    }
  }

  const hasCoords = Boolean(
    ride?.pickupLocation?.coordinates?.length === 2 &&
    ride?.destinationLocation?.coordinates?.length === 2
  )

  const pickupLatLng: [number, number] = [
    ride!.pickupLocation.coordinates[1],
    ride!.pickupLocation.coordinates[0],
  ]
  const destLatLng: [number, number] = [
    ride!.destinationLocation.coordinates[1],
    ride!.destinationLocation.coordinates[0],
  ]

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${statusInfo.color} animate-pulse`} />
          <div>
            <h3 className="font-semibold">{statusInfo.label}</h3>
            <p className="text-sm text-muted-foreground">{statusInfo.description}</p>
          </div>
        </div>
        <Badge variant="outline">Ride #{ride!._id?.slice(-6)}</Badge>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Trip Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <MapPin className="h-4 w-4 text-green-500" />
              Pickup Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{ride!.pickupLocation.address}</p>
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
            <p className="text-sm">{ride!.destinationLocation.address}</p>
          </CardContent>
        </Card>
      </div>

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
                <h4 className="font-semibold">{ride!.rider.name}</h4>
                <p className="text-sm text-muted-foreground">Payment: {ride!.paymentMethod}</p>
                <p className="text-sm text-muted-foreground">Fare: ${ride!.fare.toFixed(2)}</p>
              </div>
            </div>
            <Button size="sm" variant="outline">
              <Phone className="h-4 w-4 mr-2" />
              Call
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Navigation</CardTitle>
          <CardDescription>Live driver location</CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          {hasCoords ? (
            <MapContainer center={pickupLatLng} zoom={13} scrollWheelZoom className="h-full w-full">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={pickupLatLng} icon={pickupIcon as any} />
              <Marker position={destLatLng} icon={destinationIcon as any} />
              {driverLocation && <Marker position={driverLocation} icon={pickupIcon as any} />}
              {driverLocation && <Polyline positions={[pickupLatLng, driverLocation, destLatLng]} pathOptions={{ color: "blue" }} />}
            </MapContainer>
          ) : (
            <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
              Location coordinates unavailable.
            </div>
          )}
        </CardContent>
      </Card>

      {statusInfo.action && (
        <Button onClick={handleUpdateStatus} disabled={isMutating} className="flex-1" size="lg">
          {ride!.status === "IN_TRANSIT" ? <CheckCircle className="h-4 w-4 mr-2" /> : <ArrowRight className="h-4 w-4 mr-2" />}
          {statusInfo.action}
        </Button>
      )}
    </div>
  )
}

export default ActiveRideManagerFake
