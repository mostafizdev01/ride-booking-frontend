/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapPin, Power, } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ActiveRideTracker from "@/components/modules/rider/ActiveRideTracker"
import { useGetUserStatsQuery } from "@/redux/features/stats/stats.api"
import { Switch } from "@/components/ui/switch"
import { useUpdateUserMutation } from "@/redux/features/auth/auth.api"
import { role } from "@/constants/role"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { toast } from "sonner"
import { useState } from "react"




const RiderDashboard = () => {

    const { data: userStats } = useGetUserStatsQuery([])
    const [updateUser] = useUpdateUserMutation()
    const [isActive, setIsActive] = useState<boolean>()

    const user = userStats?.data


    if (!user || user.role !== role.RIDER) return null



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
                <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {user.name}!</h1>
                <p className="text-muted-foreground">Ready for your next ride?</p>
            </div>

            {/* Quick Stats */}
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

            <Card className="mb-8 border-primary bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Active Ride
                    </CardTitle>
                    <CardDescription>You have an ongoing ride</CardDescription>
                </CardHeader>
                <CardContent>
                    <ActiveRideTracker />
                </CardContent>
            </Card>




        </div>
    )
}

export default RiderDashboard
