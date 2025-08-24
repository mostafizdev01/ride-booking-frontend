

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { MapPin, User, Phone, Navigation } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import type { Ride } from "../../store/slices/rideSlice"

interface ActiveRideTrackerProps {
  ride: Ride
}

const ActiveRideTracker = ({ ride }: ActiveRideTrackerProps) => {
  const [progress, setProgress] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    // Simulate ride progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 5
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getStatusInfo = (status: Ride["status"]) => {
    switch (status) {
      case "requested":
        return { label: "Finding Driver", color: "bg-yellow-500", description: "Looking for a nearby driver..." }
      case "accepted":
        return { label: "Driver Assigned", color: "bg-blue-500", description: "Driver is on the way to pick you up" }
      case "picked_up":
        return { label: "Picked Up", color: "bg-green-500", description: "You're on your way to destination" }
      case "in_transit":
        return { label: "In Transit", color: "bg-green-500", description: "Heading to your destination" }
      case "completed":
        return { label: "Completed", color: "bg-gray-500", description: "Ride completed successfully" }
      case "cancelled":
        return { label: "Cancelled", color: "bg-red-500", description: "Ride was cancelled" }
      default:
        return { label: "Unknown", color: "bg-gray-500", description: "" }
    }
  }

  const statusInfo = getStatusInfo(ride.status)

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
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Trip Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <MapPin className="h-4 w-4 text-green-500" />
              Pickup
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

      {/* Driver Info (if assigned) */}
      {ride.driver && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Your Driver</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">{ride.driver.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {ride.driver.vehicleDetails.color} {ride.driver.vehicleDetails.make}{" "}
                    {ride.driver.vehicleDetails.model}
                  </p>
                  <p className="text-sm text-muted-foreground">{ride.driver.vehicleDetails.licensePlate}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button size="sm" variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <div className="flex items-center gap-1 text-sm">
                  <span>⭐</span>
                  <span>{ride.driver.rating}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Live Tracking</CardTitle>
          <CardDescription>Track your ride in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Live map tracking</p>
              <p className="text-sm text-muted-foreground">Real-time location updates</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1 bg-transparent">
          <Phone className="h-4 w-4 mr-2" />
          Contact Driver
        </Button>
        <Button variant="outline" className="flex-1 bg-transparent">
          Share Trip
        </Button>
        {ride.status === "requested" && (
          <Button variant="destructive" className="flex-1">
            Cancel Ride
          </Button>
        )}
      </div>
    </div>
  )
}

export default ActiveRideTracker
