import AdminDashboard from "@/pages/Dashboard/Admin/AdminDashboard";
import DashboardLayout from "@/pages/Dashboard/DashboardLayout";


export const adminRoutes = [
    {
        path: "/dashboard/admin",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component: AdminDashboard
            }
        ]
    }
]