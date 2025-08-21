import { useState } from "react"
import { Power, DollarSign, Clock, Star, Car, User, History, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"

import IncomingRideRequests from "@/components/modules/driver/IncomingRideRequests"
import ActiveRideManager from "@/components/modules/driver/ActiveRideManager"

const Dashboard = () => {
  const user = { id: "driver", role: "driver", isOnline: true, name: "John Doe" } 
  const [currentRide, setCurrentRide] = useState(null)
  const [incomingRequests, setIncomingRequests] = useState([])
  const [activeTab, setActiveTab] = useState("home")

  if (!user || user.role !== "driver") return null

  const isOnline = user.isOnline || false

  const handleToggleOnline = () => {

  }

  const todayStats = {
    earnings: 127.5,
    rides: 8,
    hours: 6.5,
    rating: 4.8,
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Driver Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user.name}!</p>
          </div>

          {/* Online/Offline Toggle */}
          <Card className={`${isOnline ? "border-green-500 bg-green-50" : "border-gray-300"}`}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Power className={`h-5 w-5 ${isOnline ? "text-green-600" : "text-gray-500"}`} />
                <div className="flex-1">
                  <p className="font-semibold">{isOnline ? "Online" : "Offline"}</p>
                  <p className="text-sm text-muted-foreground">
                    {isOnline ? "Ready to receive rides" : "Not receiving rides"}
                  </p>
                </div>
                <Switch checked={isOnline} onCheckedChange={handleToggleOnline} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Offline Notice */}
        {!isOnline && (
          <Alert className="mb-6">
            <Power className="h-4 w-4" />
            <AlertDescription>
              You're currently offline. Turn on availability to start receiving ride requests and access all features.
            </AlertDescription>
          </Alert>
        )}
      </div>

      {/* Active Ride Alert */}
      {currentRide && (
        <Card className="mb-8 border-primary bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="h-5 w-5 text-primary" />
              Active Ride
            </CardTitle>
            <CardDescription>You have an ongoing ride</CardDescription>
          </CardHeader>
          <CardContent>
            <ActiveRideManager ride={currentRide} />
          </CardContent>
        </Card>
      )}

      {/* Incoming Requests */}
      {isOnline && incomingRequests.length > 0 && (
        <Card className="mb-8 border-blue-500 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Incoming Ride Requests ({incomingRequests.length})
            </CardTitle>
            <CardDescription>New ride requests waiting for your response</CardDescription>
          </CardHeader>
          <CardContent>
            <IncomingRideRequests requests={incomingRequests} />
          </CardContent>
        </Card>
      )}

      {/* Today's Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${todayStats.earnings}</div>
            <p className="text-xs text-muted-foreground">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rides Completed</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.rides}</div>
            <p className="text-xs text-muted-foreground">+2 from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours Online</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.hours}h</div>
            <p className="text-xs text-muted-foreground">Active time today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.rating}</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="space-y-6">
          {isOnline ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common driver actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-transparent" variant="outline">
                    <Clock className="h-4 w-4 mr-2" />
                    Take a Break
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Car className="h-4 w-4 mr-2" />
                    Update Location
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Cash Out Earnings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Summary</CardTitle>
                  <CardDescription>Your recent performance metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Acceptance Rate</span>
                    <span className="font-semibold">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Cancellation Rate</span>
                    <span className="font-semibold">2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Average Rating</span>
                    <span className="font-semibold">4.8 ⭐</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Total Rides</span>
                    <span className="font-semibold">247</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Power className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">You're Currently Offline</h3>
                <p className="text-muted-foreground mb-6">
                  Turn on your availability to start receiving ride requests and access all driver features.
                </p>
                <Button onClick={handleToggleOnline} size="lg">
                  <Power className="h-4 w-4 mr-2" />
                  Go Online
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
       
      </Tabs>
    </div>
  )
}

export default Dashboard
