import AdminDashboard from "@/pages/Dashboard/Admin/AdminDashboard";
import AdminProfile from "@/pages/Dashboard/Admin/Manage-user/AdminProfile";
import AllRides from "@/pages/Dashboard/Admin/Manage-user/AllRides";
import Earnings from "@/pages/Dashboard/Admin/Manage-user/Earnings";
import ManageDriver from "@/pages/Dashboard/Admin/Manage-user/driverManage/ManageDriver";
import ManageRider from "@/pages/Dashboard/Admin/Manage-user/ManageRider";
import Review from "@/pages/Dashboard/Admin/Manage-user/Review";
import Support from "@/pages/Dashboard/Admin/Manage-user/Support";
import DashboardLayout from "@/pages/Dashboard/DashboardLayout";


export const adminRoutes = [
    {
        path: "/dashboard/admin",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component: AdminDashboard
            },
            {
                path: "/dashboard/admin/profile",
                Component: AdminProfile
            },
            {
                path: "/dashboard/admin/manage-rider",
                Component: ManageRider
            },
            {
                path: "/dashboard/admin/manage-driver",
                Component: ManageDriver
            },
            {
                path: "/dashboard/admin/all-rides",
                Component: AllRides
            },
            {
                path: "/dashboard/admin/earning",
                Component: Earnings
            },
            {
                path: "/dashboard/admin/review",
                Component: Review
            },
            {
                path: "/dashboard/admin/support",
                Component: Support
            },
        ]
    }
]