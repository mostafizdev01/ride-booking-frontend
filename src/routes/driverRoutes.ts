import DashboardLayout from "@/pages/Dashboard/DashboardLayout";
import ActiveRides from "@/pages/Dashboard/Driver/ActiveRides";
import DriverDashboard from "@/pages/Dashboard/Driver/DriverDashboard";
import Profile from "@/pages/Dashboard/Driver/Profile";
import Ratings from "@/pages/Dashboard/Driver/Ratings";
import RideHistory from "@/pages/Dashboard/Driver/RideHistory";
import Support from "@/pages/Dashboard/Driver/Support";
import Vehicle from "@/pages/Dashboard/Driver/Vehicle";


export const driverRoutes = [
    {
        path: "/dashboard/driver",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component: DriverDashboard
            },
            {
                path: "/dashboard/driver/active-rides",
                Component: ActiveRides
            },
            {
                path: "/dashboard/driver/Profile",
                Component: Profile
            },
            {
                path: "/dashboard/driver/rating",
                Component: Ratings
            },
            {
                path: "/dashboard/driver/ride-history",
                Component: RideHistory
            },
            {
                path: "/dashboard/driver/support",
                Component: Support
            },
            {
                path: "/dashboard/driver/vehicle",
                Component: Vehicle
            },
            
        ]
    }
]