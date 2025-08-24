import { useState } from "react"
import { MapPin, Clock, CreditCard, User, History, Plus, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EmergencySOSButton from "@/components/modules/emergency/EmergencySOSButton"
import ActiveRideTracker from "@/components/modules/rider/ActiveRideTracker"
import RideBookingForm from "@/components/modules/rider/RideBookingForm"
import RideHistoryPage from "./RideHistoryPage"
import RiderProfile from "@/components/modules/rider/RiderProfile"



const RiderDashboard = () => {
    const [isActive, setIsActive] = useState(false)
    const [user, setUser] = useState(null)
    const [currentRide, setCurrentRide] = useState(null)

    const [activeTab, setActiveTab] = useState("book")

    if (!user) return null

    const quickStats = [
        {
            icon: <MapPin className="h-5 w-5 text-primary" />,
            title: "Total Rides",
            value: "47",
            description: "This month",
        },
        {
            icon: <Clock className="h-5 w-5 text-primary" />,
            title: "Time Saved",
            value: "12.5h",
            description: "This month",
        },
        {
            icon: <CreditCard className="h-5 w-5 text-primary" />,
            title: "Total Spent",
            value: "$234.50",
            description: "This month",
        },
    ]

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            {/* Header */}
            <div className="mb-8">
                {/* <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {user.name}!</h1> */}
                <p className="text-muted-foreground">Ready for your next ride?</p>
            </div>

            <div className="mb-8">
                <EmergencySOSButton />
            </div>

            {/* Active Ride Alert */}
            {currentRide && (
                <Card className="mb-8 border-primary bg-primary/5">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            Active Ride
                        </CardTitle>
                        <CardDescription>You have an ongoing ride</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ActiveRideTracker ride={currentRide} />
                    </CardContent>
                </Card>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {quickStats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            {stat.icon}
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">{stat.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main Content Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="book" className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        Book Ride
                    </TabsTrigger>
                    <TabsTrigger value="history" className="flex items-center gap-2">
                        <History className="h-4 w-4" />
                        History
                    </TabsTrigger>
                    <TabsTrigger value="profile" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Profile
                    </TabsTrigger>
                    <TabsTrigger value="emergency" className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Emergency
                    </TabsTrigger>
                    <TabsTrigger value="settings" className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Payment
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="book" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Book a New Ride</CardTitle>
                            <CardDescription>Enter your pickup and destination to get started</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RideBookingForm />
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="history" className="space-y-6">
                    <RideHistoryPage />
                </TabsContent>

                <TabsContent value="profile" className="space-y-6">
                    <RiderProfile />
                </TabsContent>

                <TabsContent value="emergency" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-red-600" />
                                Emergency Safety Center
                            </CardTitle>
                            <CardDescription>Quick access to emergency services and safety features</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <EmergencySOSButton />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                <Card className="border-amber-200 bg-amber-50">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-sm text-amber-800">Safety Tips</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-amber-700 space-y-2">
                                        <p>• Always verify driver and vehicle details</p>
                                        <p>• Share your trip with trusted contacts</p>
                                        <p>• Stay alert during your ride</p>
                                        <p>• Trust your instincts</p>
                                    </CardContent>
                                </Card>

                                <Card className="border-blue-200 bg-blue-50">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-sm text-blue-800">Emergency Contacts</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-blue-700 space-y-2">
                                        <p>• Emergency Services: 911</p>
                                        <p>• Ride Support: 1-800-RIDE</p>
                                        <p>• Safety Hotline: 1-800-SAFE</p>
                                        <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                                            Manage Contacts
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="settings" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Payment Methods</CardTitle>
                            <CardDescription>Manage your payment options</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center py-8">
                                <CreditCard className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                <p className="text-muted-foreground mb-4">Payment management coming soon</p>
                                <Button variant="outline">Add Payment Method</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default RiderDashboard
