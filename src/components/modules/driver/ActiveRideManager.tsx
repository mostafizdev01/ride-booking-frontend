import { useState } from "react"
import { MapPin, Navigation, User, Phone, CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

import { Ride } from "@/types/ride.type"
import { toast } from "sonner"



const ActiveRideManager = () => {
  const ride: Ride = {
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
  }
  // const [updateStatus] = useUpdateRideStatusMutation()
  const [isUpdating, setIsUpdating] = useState(false)

  const getNextStatus = (currentStatus: Ride["status"]): Ride["status"] | null => {
    switch (currentStatus) {
      case "accepted":
        return "picked_up"
      case "picked_up":
        return "in_transit"
      case "in_transit":
        return "completed"
      default:
        return null
    }
  }

  const getStatusProgress = (status: Ride["status"]): number => {
    switch (status) {
      case "accepted":
        return 25
      case "picked_up":
        return 50
      case "in_transit":
        return 75
      case "completed":
        return 100
      default:
        return 0
    }
  }

  const getStatusInfo = (status: Ride["status"]) => {
    switch (status) {
      case "accepted":
        return {
          label: "Heading to Pickup",
          description: "Navigate to the pickup location",
          action: "Confirm Pickup",
          color: "bg-blue-500",
        }
      case "picked_up":
        return {
          label: "Passenger Picked Up",
          description: "Heading to destination",
          action: "Start Trip",
          color: "bg-yellow-500",
        }
      case "in_transit":
        return {
          label: "In Transit",
          description: "On the way to destination",
          action: "Complete Trip",
          color: "bg-green-500",
        }
      case "completed":
        return {
          label: "Trip Completed",
          description: "Trip finished successfully",
          action: null,
          color: "bg-gray-500",
        }
      default:
        return {
          label: "Unknown Status",
          description: "",
          action: null,
          color: "bg-gray-500",
        }
    }
  }

  const handleUpdateStatus = async () => {
    const nextStatus = getNextStatus(ride.status)
    if (!nextStatus) return

    setIsUpdating(true)
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000))


      if (nextStatus === "completed") {
        // Move to ride history and clear current ride
        toast.success("Trip completed successfully! Payment processed.")
      } else {
        toast.success(`Status updated to ${nextStatus.replace("_", " ")}`)
      }
    } catch (error) {
      toast.error("Failed to update ride status")
    } finally {
      setIsUpdating(false)
    }
  }

  const handleCancelRide = async () => {
    setIsUpdating(true)
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast.success("Ride cancelled")
    } catch (error) {
      toast.error("Failed to cancel ride")
    } finally {
      setIsUpdating(false)
    }
  }

  const statusInfo = getStatusInfo(ride.status)
  const progress = getStatusProgress(ride.status)

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
        <Badge variant="outline">Ride #{ride.id.slice(-6)}</Badge>
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
            <p className="text-sm">{ride.pickupLocation.address}</p>
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
            <p className="text-sm">{ride.destination.address}</p>
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
                <h4 className="font-semibold">Passenger</h4>
                <p className="text-sm text-muted-foreground">Payment: {ride.paymentMethod}</p>
                <p className="text-sm text-muted-foreground">Fare: ${ride.fare.toFixed(2)}</p>
              </div>
            </div>
            <Button size="sm" variant="outline">
              <Phone className="h-4 w-4 mr-2" />
              Call
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Navigation</CardTitle>
          <CardDescription>Turn-by-turn directions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">GPS Navigation</p>
              <p className="text-sm text-muted-foreground">Real-time directions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3">
        {statusInfo.action && (
          <Button onClick={handleUpdateStatus} disabled={isUpdating} className="flex-1" size="lg">
            {isUpdating ? (
              "Updating..."
            ) : (
              <>
                {ride.status === "in_transit" ? (
                  <CheckCircle className="h-4 w-4 mr-2" />
                ) : (
                  <ArrowRight className="h-4 w-4 mr-2" />
                )}
                {statusInfo.action}
              </>
            )}
          </Button>
        )}

        {ride.status !== "completed" && (
          <Button onClick={handleCancelRide} disabled={isUpdating} variant="destructive" size="lg" className="flex-1">
            Cancel Trip
          </Button>
        )}
      </div>
    </div>
  )
}

export default ActiveRideManager
