import { useState } from "react"
import { Power, DollarSign, Clock, Star, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import IncomingRideRequests from "@/components/modules/driver/IncomingRideRequests"
import ActiveRideManager from "@/components/modules/driver/ActiveRideManager"
import { useGetUserStatsQuery } from "@/redux/features/stats/stats.api"
import { role } from "@/constants/role"
import { useUpdateUserMutation } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"

const Dashboard = () => {
  const { data: userStats } = useGetUserStatsQuery([])
  const [updateUser] = useUpdateUserMutation()
  const [isActive, setIsActive] = useState<boolean>()

  const user = userStats?.data


  const [activeTab, setActiveTab] = useState("home")

  if (!user || user.role !== role.DRIVER) return null

  const handleToggleOnline = () => {
    const newStatus = !isActive
    setIsActive(newStatus)

    const promise = updateUser({ id: user._id, data: { isActive: newStatus } })

    promise
      .then(() => {
        toast.success(`You are now ${newStatus ? "online" : "offline"}.`)
      })
      .catch(() => {
        setIsActive(!newStatus)
        toast.error("Failed to update status.")
      })
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
          <Card className={`${isActive ? "border-green-500 bg-green-50" : "border-gray-300"}`}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Power className={`h-5 w-5 ${isActive ? "text-green-600" : "text-gray-500"}`} />
                <div className="flex-1">
                  <p className="font-semibold">{isActive ? "Online" : "Offline"}</p>
                  <p className="text-sm text-muted-foreground">
                    {isActive ? "Ready to receive rides" : "Not receiving rides"}
                  </p>
                </div>
                <Switch checked={isActive} onCheckedChange={handleToggleOnline} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Offline Notice */}
        {!isActive && (
          <Alert className="mb-6">
            <Power className="h-4 w-4" />
            <AlertDescription>
              You're currently offline. Turn on availability to start receiving ride requests and access all features.
            </AlertDescription>
          </Alert>
        )}
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="space-y-6">
          {isActive ? (
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
                    <span className="font-semibold">{user.acceptanceRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Cancellation Rate</span>
                    <span className="font-semibold">{user.cancellationRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Average Rating</span>
                    <span className="font-semibold">{user.averageRating} ⭐</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Total Rides</span>
                    <span className="font-semibold">{user.totalRides}</span>
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

      <Card className="mb-8 border-primary mt-3 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5 text-primary" />
            Active Ride
          </CardTitle>
          <CardDescription>You have an ongoing ride</CardDescription>
        </CardHeader>
        <CardContent>
          <ActiveRideManager />
        </CardContent>
      </Card>

      {/* Incoming Requests */}
      {isActive && (
        <Card className="mb-8 border-blue-500 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Incoming Ride Requests
            </CardTitle>
            <CardDescription>New ride requests waiting for your response</CardDescription>
          </CardHeader>
          <CardContent>
            <IncomingRideRequests />
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
            <div className="text-2xl font-bold">${user.totalEarnings}</div>
            <p className="text-xs text-muted-foreground">{user.earningsGrowth} from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rides Completed</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.ridesCompletedToday}</div>
            <p className="text-xs text-muted-foreground">
              {user.ridesCompletedToday - user.ridesCompletedYesterday} from yesterday
            </p>
          </CardContent>
        </Card>



        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.averageRating}</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
