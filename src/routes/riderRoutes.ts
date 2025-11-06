import DashboardLayout from "@/pages/Dashboard/DashboardLayout";
import RiderDashboard from "@/pages/Dashboard/Rider/RiderDashboard";

export const riderRoutes = [
    {
        path: "/dashboard/rider",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component: RiderDashboard
            }
        ]
    },
]