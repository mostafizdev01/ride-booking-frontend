import DashboardLayout from "@/pages/Dashboard/DashboardLayout";
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
            }
        ]
    },
]