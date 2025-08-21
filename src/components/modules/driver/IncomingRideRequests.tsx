/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { MapPin, Navigation, DollarSign, Clock, Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { Ride } from "@/types/ride.type"


const IncomingRideRequests = () => {


  const rides: Ride[] = [
    {
      id: "ride123",
      riderId: "rider456",
      driverId: "driver789",
      pickupLocation: {
        address: "123 Main St",
        lat: 40.7128,
        lng: -74.0060,
      },
      destination: {
        address: "456 Elm St",
        lat: 40.7138,
        lng: -74.0070,
      },
      status: "accepted",
      fare: 20.5,
      paymentMethod: "card",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "ride1234",
      riderId: "rider456",
      driverId: "driver789",
      pickupLocation: {
        address: "123 Main St",
        lat: 40.7128,
        lng: -74.0060,
      },
      destination: {
        address: "456 Elm St",
        lat: 40.7138,
        lng: -74.0070,
      },
      status: "accepted",
      fare: 20.5,
      paymentMethod: "card",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  ]

  const [incomingRequests, setIncomingRequests] = useState(rides)
  const [processingRequest, setProcessingRequest] = useState<string | null>(null)

  const handleAcceptRide = async (ride: Ride) => {
    setProcessingRequest(ride.id)
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const acceptedRide = {
        ...ride,
        status: "accepted" as const,
        driverId: "current-driver-id",
        updatedAt: new Date().toISOString(),
      }

      // dispatch(setCurrentRide(acceptedRide))
      // dispatch(removeIncomingRequest(ride.id))
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

  const calculateDistance = (pickup: { lat: number; lng: number }) => {
    // Mock distance calculation
    return (Math.random() * 5 + 0.5).toFixed(1)
  }

  const calculateETA = (distance: number) => {
    return Math.ceil(distance * 2) // Rough estimate: 2 minutes per mile
  }

  return (
    <div className="space-y-4">
      {incomingRequests.map((request) => {
        const distance = Number.parseFloat(calculateDistance(request.pickupLocation))
        const eta = calculateETA(distance)
        const isProcessing = processingRequest === request.id

        return (
          <Card key={request.id} className="border-blue-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">New Ride Request</CardTitle>
                <Badge variant="outline" className="bg-blue-50">
                  {distance} mi away
                </Badge>
              </div>
              <CardDescription>Requested {new Date(request?.createdAt).toLocaleTimeString()}</CardDescription>
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
                    <p className="text-sm text-muted-foreground">{request.destination.address}</p>
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
                <Button onClick={() => handleAcceptRide(request)} disabled={isProcessing} className="flex-1" size="lg">
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
                  onClick={() => handleRejectRide(request.id)}
                  disabled={isProcessing}
                  variant="outline"
                  size="lg"
                  className="bg-transparent"
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
