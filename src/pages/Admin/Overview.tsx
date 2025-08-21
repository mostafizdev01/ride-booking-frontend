import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Clock, DollarSign, MapPin, TrendingUp, Users } from "lucide-react";

const Overview = () => {
    // Mock overview stats
    const overviewStats = {
        totalUsers: 15420,
        activeRides: 89,
        totalRevenue: 125430,
        completedRides: 8945,
        totalDrivers: 2340,
        totalRiders: 13080,
        avgRating: 4.7,
        responseTime: "2.3 min",
    }
    return (
        <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{overviewStats.totalUsers.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-green-600">+12%</span> from last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Rides</CardTitle>
                        <Car className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{overviewStats.activeRides}</div>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-blue-600">Live tracking</span>
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${overviewStats.totalRevenue.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-green-600">+8%</span> from last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Completed Rides</CardTitle>
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{overviewStats.completedRides.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                            <span className="text-green-600">+15%</span> from last month
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Drivers</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{overviewStats.totalDrivers.toLocaleString()}</div>
                        <div className="flex items-center gap-2 mt-2">
                            <Badge className="bg-green-500">Online: 156</Badge>
                            <Badge variant="outline">Offline: 2184</Badge>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Riders</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{overviewStats.totalRiders.toLocaleString()}</div>
                        <div className="flex items-center gap-2 mt-2">
                            <Badge className="bg-blue-500">Active: 234</Badge>
                            <Badge variant="outline">Inactive: 12846</Badge>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{overviewStats.avgRating}/5.0</div>
                        <p className="text-xs text-muted-foreground">Platform satisfaction score</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{overviewStats.responseTime}</div>
                        <p className="text-xs text-muted-foreground">Driver pickup time</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Platform Activity</CardTitle>
                    <CardDescription>Latest system events and notifications</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                            <div className="flex-1">
                                <p className="text-sm font-medium">New driver registration approved</p>
                                <p className="text-xs text-muted-foreground">John Smith - License verified</p>
                            </div>
                            <span className="text-xs text-muted-foreground">2 min ago</span>
                        </div>
                        <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                            <div className="flex-1">
                                <p className="text-sm font-medium">High demand area detected</p>
                                <p className="text-xs text-muted-foreground">Downtown - 15 pending requests</p>
                            </div>
                            <span className="text-xs text-muted-foreground">5 min ago</span>
                        </div>
                        <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                            <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                            <div className="flex-1">
                                <p className="text-sm font-medium">Payment processing delay</p>
                                <p className="text-xs text-muted-foreground">Ride #12345 - Manual review required</p>
                            </div>
                            <span className="text-xs text-muted-foreground">12 min ago</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Overview;