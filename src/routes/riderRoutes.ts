import DashboardLayout from "@/pages/Dashboard/DashboardLayout";
import RideHistory from "@/pages/Dashboard/Rider/RideHistory";
import RiderDashboard from "@/pages/Dashboard/Rider/RiderDashboard";
import RideRequest from "@/pages/Dashboard/Rider/RideRequest";

export const riderRoutes = [
    {
        path: "/dashboard/rider",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component: RiderDashboard
            },
            {
                path: "/dashboard/rider/ride-request",
                Component: RideRequest
            },
            {
                path: "/dashboard/rider/ride-history",
                Component: RideHistory
            }
        ]
    },
]