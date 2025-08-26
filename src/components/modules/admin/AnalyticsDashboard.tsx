import Loading from "@/components/layout/Loading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useGetAdminAnalyticsQuery } from "@/redux/features/stats/stats.api"
import { TrendingUp, TrendingDown, Users, Car, DollarSign, MapPin } from "lucide-react"
import { useState } from "react"
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar
} from "recharts"

const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState("7d")
  const { data: analyticsData, isLoading } = useGetAdminAnalyticsQuery(timeRange)

  if (isLoading) return <Loading />

  const getTrendIcon = (trend: string) =>
    trend === "up" ? <TrendingUp className="h-4 w-4 text-green-500" /> : <TrendingDown className="h-4 w-4 text-red-500" />

  const getTrendColor = (trend: string) =>
    trend === "up" ? "text-green-600" : "text-red-600"

  return (
    <div className="space-y-6">
      {/* Header & Time Range */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
          <p className="text-muted-foreground">Platform performance metrics and insights</p>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">Last 24 hours</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Rides */}
        <Card>
          <CardHeader className="flex justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Rides</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData?.totalRides.value.toLocaleString()}</div>
            <div className="flex items-center gap-1 text-xs">
              {getTrendIcon(analyticsData?.totalRides.trend)}
              <span className={getTrendColor(analyticsData?.totalRides.trend)}>
                {analyticsData?.totalRides.change > 0 ? "+" : ""}{analyticsData?.totalRides.change}%
              </span>
              <span className="text-muted-foreground">from last period</span>
            </div>
          </CardContent>
        </Card>

        {/* Active Users */}
        <Card>
          <CardHeader className="flex justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData?.activeUsers.value.toLocaleString()}</div>
            <div className="flex items-center gap-1 text-xs">
              {getTrendIcon(analyticsData?.activeUsers.trend)}
              <span className={getTrendColor(analyticsData?.activeUsers.trend)}>
                {analyticsData?.activeUsers.change > 0 ? "+" : ""}{analyticsData?.activeUsers.change}%
              </span>
              <span className="text-muted-foreground">from last period</span>
            </div>
          </CardContent>
        </Card>

        {/* Total Revenue */}
        <Card>
          <CardHeader className="flex justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${analyticsData?.revenue.value.toLocaleString()}</div>
            <div className="flex items-center gap-1 text-xs">
              {getTrendIcon(analyticsData?.revenue.trend)}
              <span className={getTrendColor(analyticsData?.revenue.trend)}>
                {analyticsData?.revenue.change > 0 ? "+" : ""}{analyticsData?.revenue.change}%
              </span>
              <span className="text-muted-foreground">from last period</span>
            </div>
          </CardContent>
        </Card>

        {/* Average Rating */}
        <Card>
          <CardHeader className="flex justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData?.avgRating.value}/5.0</div>
            <div className="flex items-center gap-1 text-xs">
              {getTrendIcon(analyticsData?.avgRating.trend)}
              <span className={getTrendColor(analyticsData?.avgRating.trend)}>
                {analyticsData?.avgRating.change > 0 ? "+" : ""}{analyticsData?.avgRating.change}
              </span>
              <span className="text-muted-foreground">from last period</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ride Volume Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Ride Volume Trends</CardTitle>
            <CardDescription>Daily ride requests over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={analyticsData?.charts.ridesPerDay}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="_id" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#4ade80" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Revenue Analytics */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Analytics</CardTitle>
            <CardDescription>Revenue breakdown by day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analyticsData?.charts.revenuePerDay}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="_id" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* User Growth */}
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>New user registrations over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={analyticsData?.charts.userGrowth}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="_id" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#facc15" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AnalyticsDashboard
