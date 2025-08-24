

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, Users, Car, DollarSign, MapPin } from "lucide-react"
import { useState } from "react"

const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState("7d")

  // Mock analytics data
  const analyticsData = {
    totalRides: { value: 8945, change: 12.5, trend: "up" },
    activeUsers: { value: 2340, change: -3.2, trend: "down" },
    revenue: { value: 125430, change: 8.7, trend: "up" },
    avgRating: { value: 4.7, change: 0.2, trend: "up" },
  }

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? (
      <TrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-500" />
    )
  }

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-600" : "text-red-600"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
          <p className="text-muted-foreground">Platform performance metrics and insights</p>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
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
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Rides</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.totalRides.value.toLocaleString()}</div>
            <div className="flex items-center gap-1 text-xs">
              {getTrendIcon(analyticsData.totalRides.trend)}
              <span className={getTrendColor(analyticsData.totalRides.trend)}>
                {analyticsData.totalRides.change > 0 ? "+" : ""}
                {analyticsData.totalRides.change}%
              </span>
              <span className="text-muted-foreground">from last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.activeUsers.value.toLocaleString()}</div>
            <div className="flex items-center gap-1 text-xs">
              {getTrendIcon(analyticsData.activeUsers.trend)}
              <span className={getTrendColor(analyticsData.activeUsers.trend)}>
                {analyticsData.activeUsers.change > 0 ? "+" : ""}
                {analyticsData.activeUsers.change}%
              </span>
              <span className="text-muted-foreground">from last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${analyticsData.revenue.value.toLocaleString()}</div>
            <div className="flex items-center gap-1 text-xs">
              {getTrendIcon(analyticsData.revenue.trend)}
              <span className={getTrendColor(analyticsData.revenue.trend)}>
                {analyticsData.revenue.change > 0 ? "+" : ""}
                {analyticsData.revenue.change}%
              </span>
              <span className="text-muted-foreground">from last period</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.avgRating.value}/5.0</div>
            <div className="flex items-center gap-1 text-xs">
              {getTrendIcon(analyticsData.avgRating.trend)}
              <span className={getTrendColor(analyticsData.avgRating.trend)}>
                {analyticsData.avgRating.change > 0 ? "+" : ""}
                {analyticsData.avgRating.change}
              </span>
              <span className="text-muted-foreground">from last period</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ride Volume Trends</CardTitle>
            <CardDescription>Daily ride requests over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <p className="text-muted-foreground">Chart visualization would be implemented here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Analytics</CardTitle>
            <CardDescription>Revenue breakdown by time period</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <p className="text-muted-foreground">Chart visualization would be implemented here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>New user registrations over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <p className="text-muted-foreground">Chart visualization would be implemented here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Geographic Distribution</CardTitle>
            <CardDescription>Ride density by location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <p className="text-muted-foreground">Map visualization would be implemented here</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Key performance indicators for the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">Driver Utilization</h4>
              <div className="text-2xl font-bold">73.2%</div>
              <p className="text-sm text-muted-foreground">Average driver active time</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Customer Satisfaction</h4>
              <div className="text-2xl font-bold">94.8%</div>
              <p className="text-sm text-muted-foreground">Positive ride ratings</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Response Time</h4>
              <div className="text-2xl font-bold">2.3 min</div>
              <p className="text-sm text-muted-foreground">Average pickup time</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AnalyticsDashboard
