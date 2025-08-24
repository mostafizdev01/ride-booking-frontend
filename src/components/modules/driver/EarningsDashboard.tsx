

import { useState } from "react"
import { DollarSign, TrendingUp, Clock, Car } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

const EarningsDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week")

  // Mock data for different time periods
  const weeklyData = [
    { name: "Mon", earnings: 85, rides: 6, hours: 5 },
    { name: "Tue", earnings: 120, rides: 8, hours: 7 },
    { name: "Wed", earnings: 95, rides: 7, hours: 6 },
    { name: "Thu", earnings: 140, rides: 10, hours: 8 },
    { name: "Fri", earnings: 180, rides: 12, hours: 9 },
    { name: "Sat", earnings: 220, rides: 15, hours: 10 },
    { name: "Sun", earnings: 160, rides: 11, hours: 8 },
  ]

  const monthlyData = [
    { name: "Week 1", earnings: 680, rides: 48, hours: 35 },
    { name: "Week 2", earnings: 720, rides: 52, hours: 38 },
    { name: "Week 3", earnings: 650, rides: 45, hours: 32 },
    { name: "Week 4", earnings: 800, rides: 58, hours: 42 },
  ]

  const yearlyData = [
    { name: "Jan", earnings: 2800, rides: 200, hours: 150 },
    { name: "Feb", earnings: 2600, rides: 185, hours: 140 },
    { name: "Mar", earnings: 3200, rides: 230, hours: 170 },
    { name: "Apr", earnings: 3000, rides: 215, hours: 160 },
    { name: "May", earnings: 3400, rides: 245, hours: 180 },
    { name: "Jun", earnings: 3600, rides: 260, hours: 190 },
  ]

  const getCurrentData = () => {
    switch (selectedPeriod) {
      case "week":
        return weeklyData
      case "month":
        return monthlyData
      case "year":
        return yearlyData
      default:
        return weeklyData
    }
  }

  const getTotalStats = () => {
    const data = getCurrentData()
    return {
      totalEarnings: data.reduce((sum, item) => sum + item.earnings, 0),
      totalRides: data.reduce((sum, item) => sum + item.rides, 0),
      totalHours: data.reduce((sum, item) => sum + item.hours, 0),
      avgPerRide: data.reduce((sum, item) => sum + item.earnings, 0) / data.reduce((sum, item) => sum + item.rides, 0),
    }
  }

  const stats = getTotalStats()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Earnings Dashboard</CardTitle>
          <CardDescription>Track your earnings and performance over time</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="week">This Week</TabsTrigger>
              <TabsTrigger value="month">This Month</TabsTrigger>
              <TabsTrigger value="year">This Year</TabsTrigger>
            </TabsList>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${stats.totalEarnings.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+12%</span> from last period
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Rides</CardTitle>
                  <Car className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalRides}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+8%</span> from last period
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Hours Online</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalHours}h</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-blue-600">+5%</span> from last period
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg per Ride</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${stats.avgPerRide.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+3%</span> from last period
                  </p>
                </CardContent>
              </Card>
            </div>

            <TabsContent value="week" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Earnings</CardTitle>
                  <CardDescription>Your earnings breakdown for this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, "Earnings"]} />
                      <Bar dataKey="earnings" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="month" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Earnings</CardTitle>
                  <CardDescription>Your earnings breakdown for this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, "Earnings"]} />
                      <Bar dataKey="earnings" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="year" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Yearly Earnings Trend</CardTitle>
                  <CardDescription>Your earnings trend for this year</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={yearlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, "Earnings"]} />
                      <Line type="monotone" dataKey="earnings" stroke="hsl(var(--primary))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Quick Actions */}
          <div className="flex gap-4 mt-6">
            <Button className="flex-1">
              <DollarSign className="h-4 w-4 mr-2" />
              Cash Out Now
            </Button>
            <Button variant="outline" className="flex-1 bg-transparent">
              View Detailed Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EarningsDashboard
