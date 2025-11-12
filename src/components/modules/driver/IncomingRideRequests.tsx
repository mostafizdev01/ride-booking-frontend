import { useState, useEffect } from "react"
import { MapPin, Navigation, DollarSign, Clock, Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { useAcceptRideMutation, useNearbyRidesMutation } from "@/redux/features/ride/ride.api"
import { Ride } from "@/types/ride.type"

const IncomingRideRequests = () => {
  const [nearbyRides] = useNearbyRidesMutation()
  const [acceptRide] = useAcceptRideMutation()

  const [incomingRequests, setIncomingRequests] = useState<Ride[]>([])
  const [processingRequest, setProcessingRequest] = useState<string | null>(null)

  // console.log(incomingRequests);
  const [isSharingLocation, setIsSharingLocation] = useState(false)
  const [currentCoords, setCurrentCoords] = useState<{ lat: number; lng: number } | null>(null)
  const [watchId, setWatchId] = useState<number | null>(null)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (currentCoords) {
      const fetchNearby = async () => {
        try {
          const response = await nearbyRides({ coordinates: [currentCoords.lng, currentCoords.lat] }).unwrap()
          setIncomingRequests(response.data)
        } catch (err) {
          console.error(err)
        }
      }
      fetchNearby()
      interval = setInterval(fetchNearby, 5000)
    }
    return () => interval && clearInterval(interval)
  }, [currentCoords, nearbyRides])

  const handleAcceptRide = async (ride: Ride) => {
    setProcessingRequest(ride._id)
    try {

      const acceptedRide = {
        ...ride,
        status: "accepted" as const,
        timestamps: {
          acceptedAt: new Date().toISOString(),
        }
      }

      await acceptRide({ id: ride._id, data: acceptedRide }).unwrap();

      toast.success("Ride accepted! Heading to pickup location.")
    } catch (error) {
      toast.error("Failed to accept ride")
    } finally {
      setProcessingRequest(null)
    }
  }

  const handleRejectRide = async (rideId: string) => {
    setProcessingRequest(rideId)
    try {
      toast.success("Ride request declined")
    } catch (error) {
      toast.error("Failed to decline ride")
    } finally {
      setProcessingRequest(null)
    }
  }


  const calculateETA = (distance: number) => {
    return Math.ceil(distance * 2)
  }

  const toggleLiveLocation = () => {
    if (!isSharingLocation) {
      if (navigator.geolocation) {
        const id = navigator.geolocation.watchPosition(
          (position) => {
            const coords = { lat: position.coords.latitude, lng: position.coords.longitude }
            setCurrentCoords(coords)
          },
          () => toast.error("Unable to get location"),
          { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
        )
        setWatchId(id)
        setIsSharingLocation(true)
        toast.success("Live location sharing started")
      } else {
        toast.error("Geolocation not supported")
      }
    } else {
      if (watchId !== null) navigator.geolocation.clearWatch(watchId)
      setIsSharingLocation(false)
      setWatchId(null)
      toast.info("Live location sharing stopped")
    }
  }

  const getDistanceFromLatLonInMiles = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 3958.8
    const dLat = deg2rad(lat2 - lat1)
    const dLon = deg2rad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return parseFloat((R * c).toFixed(1))
  }

  function deg2rad(deg: number) {
    return deg * (Math.PI / 180)
  }


  return (
    <div className="space-y-4">
      {/* Live Location Control */}
      <div className="flex items-center gap-2 mb-4">
        <Button onClick={toggleLiveLocation} size="sm" variant={isSharingLocation ? "destructive" : "default"}>
          {isSharingLocation ? "Stop Sharing" : "Share Live Location"}
        </Button>
        {currentCoords && (
          <span className="text-sm text-muted-foreground">
            Lat: {currentCoords.lat.toFixed(4)}, Lng: {currentCoords.lng.toFixed(4)}
          </span>
        )}
      </div>

      {incomingRequests && incomingRequests?.map((request) => {
        const distance = currentCoords
          ? getDistanceFromLatLonInMiles(
            currentCoords.lat,
            currentCoords.lng,
            request.pickupLocation.coordinates[1], // latitude
            request.pickupLocation.coordinates[0]  // longitude
          )
          : 0

        const eta = calculateETA(distance)
        const isProcessing = processingRequest === request._id

        return (
          <Card key={request._id} className="border-blue-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">New Ride Request</CardTitle>
                <Badge variant="outline" >
                  {distance} mi away
                </Badge>
              </div>
              <CardDescription>
                Requested {new Date(request.createdAt).toLocaleTimeString()}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Route Information */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium">Pickup</p>
                    <p className="text-sm text-muted-foreground">{request.pickupLocation.address}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {eta} min
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="h-5 w-5 text-red-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium">Destination</p>
                    <p className="text-sm text-muted-foreground">{request.destinationLocation.address}</p>
                  </div>
                </div>
              </div>

              {/* Ride Details */}
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="font-semibold">${request.fare.toFixed(2)}</span>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {request.paymentMethod}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">Est. {Math.ceil(distance * 3)} min trip</div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={() => handleAcceptRide(request)}
                  disabled={isProcessing}
                  className="flex-1"
                  size="lg"
                >
                  {isProcessing ? (
                    "Accepting..."
                  ) : (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Accept Ride
                    </>
                  )}
                </Button>

                <Button
                  onClick={() => handleRejectRide(request._id)}
                  disabled={isProcessing}
                  variant="outline"
                  size="lg"
                >
                  {isProcessing ? (
                    "..."
                  ) : (
                    <>
                      <X className="h-4 w-4 mr-2" />
                      Decline
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

        )
      })}
    </div>
  )
}

export default IncomingRideRequests
