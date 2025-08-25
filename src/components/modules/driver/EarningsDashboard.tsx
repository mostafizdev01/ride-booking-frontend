/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { DollarSign, TrendingUp, Clock, Car } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { useGetEarningsStatsQuery } from "@/redux/features/stats/stats.api"
import Loading from "@/components/layout/Loading"

interface IEarningsData {
  name: string
  earnings: number
  rides: number
  hours: number
}

export interface IEarningsStats {
  todayEarnings: number
  weeklyData: IEarningsData[]
  monthlyData: IEarningsData[]
  yearlyData: IEarningsData[]
  totalEarnings: number
  totalRides: number
}

const EarningsDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<"week" | "month" | "year">("week")
  const { data: earningsdata, isLoading } = useGetEarningsStatsQuery([])

  const earningsStats = earningsdata?.data as IEarningsStats;
  console.log(earningsStats);
  if (isLoading || !earningsStats) return <Loading />

  const getCurrentData = (): IEarningsData[] => {
    switch (selectedPeriod) {
      case "week":
        return earningsStats.weeklyData || []
      case "month":
        return earningsStats.monthlyData || []
      case "year":
        return earningsStats.yearlyData || []
      default:
        return earningsStats.weeklyData || []
    }
  }

  const currentData = getCurrentData()

  const stats = currentData.reduce(
    (acc, item) => {
      acc.totalEarnings += item.earnings
      acc.totalRides += item.rides
      acc.totalHours += item.hours
      return acc
    },
    { totalEarnings: 0, totalRides: 0, totalHours: 0 }
  )

  const avgPerRide = stats.totalRides ? stats.totalEarnings / stats.totalRides : 0

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Earnings Dashboard</CardTitle>
          <CardDescription>Track your earnings and performance over time</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Tabs */}
          <Tabs value={selectedPeriod} onValueChange={(value) => setSelectedPeriod(value as "week" | "month" | "year")} className="space-y-6">
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
                  <div className="text-2xl font-bold">${stats.totalEarnings?.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">
                    Today: ${earningsStats.todayEarnings?.toFixed(2)}
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Hours Online</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalHours}h</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg per Ride</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${avgPerRide?.toFixed(2)}</div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <TabsContent value="week" className="space-y-6">
              <BarChartCard title="Weekly Earnings" description="Your earnings breakdown for this week" data={earningsStats.weeklyData} />
            </TabsContent>
            <TabsContent value="month" className="space-y-6">
              <BarChartCard title="Monthly Earnings" description="Your earnings breakdown for this month" data={earningsStats.monthlyData} />
            </TabsContent>
            <TabsContent value="year" className="space-y-6">
              <LineChartCard title="Yearly Earnings Trend" description="Your earnings trend for this year" data={earningsStats.yearlyData} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

const BarChartCard = ({ title, description, data }: { title: string; description: string; data?: IEarningsData[] }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data || []}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value}`, "Earnings"]} />
          <Bar
            dataKey="earnings"
            fill="black"
            shape={(props: any) => {
              const { x, y, width, height, value } = props
              let color = "black"
              if (value > 1000) color = "green"
              else if (value > 500) color = "blue"
              else color = "red"
              return <rect x={x} y={y} width={width} height={height} fill={color} />
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
)

const LineChartCard = ({ title, description, data }: { title: string; description: string; data?: IEarningsData[] }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data || []}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value}`, "Earnings"]} />
          <Line type="monotone" dataKey="earnings" stroke="hsl(var(--primary))" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
)

export default EarningsDashboard
