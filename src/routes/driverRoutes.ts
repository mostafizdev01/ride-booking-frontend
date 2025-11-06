import DashboardLayout from "@/pages/Dashboard/DashboardLayout";
import DriverDashboard from "@/pages/Dashboard/Driver/DriverDashboard";


export const driverRoutes = [
    {
        path: "/dashboard/driver",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component: DriverDashboard
            }
        ]
    }
]