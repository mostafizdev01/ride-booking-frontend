// src/routes/sidebarMenu.ts
import { LayoutDashboard, Car, History, Users, Truck, LifeBuoy, List, Star, Activity, Home, UserCheck, UserPen, UsersRound, MessageCircleCodeIcon, MessageSquare } from "lucide-react";
import { FaRegUserCircle } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";
import { MdDashboard, MdCreditCard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { IconMoneybag } from "@tabler/icons-react";

export const DashboardSidebarMenu = {
    rider: [
        { name: "Dashboard", path: "/dashboard/rider", icon: LayoutDashboard },
        { name: "Book Ride", path: "/dashboard/rider/ride-request", icon: Car },
        { name: "Ride History", path: "/dashboard/rider/ride-history", icon: History },
    ],
    driver: [
        {
            name: "Dashboard",
            path: "/dashboard/driver",
            icon: Home,
        },
        {
            name: "My Profile",
            path: "/dashboard/driver/Profile",
            icon: UserCheck,
        },
        {
            name: "Active Rides",
            path: "/dashboard/driver/active-rides",
            icon: Activity,
        },
        {
            name: "Earning Ride History",
            path: "/dashboard/driver/ride-history",
            icon: List,
        },
        {
            name: "Rating",
            path: "/dashboard/driver/rating",
            icon: Star,
        },
        {
            name: "Support",
            path: "/dashboard/driver/support",
            icon: LifeBuoy,
        },
        {
            name: "Vehicle",
            path: "/dashboard/driver/vehicle",
            icon: Truck,
        },
    ],
    admin: [
        { name: "Dashboard", path: "/dashboard/admin", icon: LayoutDashboard },
        { name: "Admin Profile", path: "/dashboard/admin/profile", icon: UserPen },
        { name: "Manage Rider", path: "/dashboard/admin/manage-rider", icon: Users },
        { name: "Manage Driver", path: "/dashboard/admin/manage-driver", icon: UsersRound },
        { name: "All Rides", path: "/dashboard/admin/all-rides", icon: Car },
        { name: "Earning", path: "/dashboard/admin/earning", icon: IconMoneybag },
        { name: "Reviews", path: "/dashboard/admin/review", icon: MessageCircleCodeIcon },
        { name: "Support", path: "/dashboard/admin/support", icon: MessageSquare },
    ],
};


// home page profile dropdown 

export const dashboardMenu = {
    admin: [
        { label: "Dashboard", path: "/dashboard/admin", icon: MdDashboard },
        { label: "Manage Users", path: "/dashboard/manage-users", icon: IoMdSettings },
        { label: "Billing & Plans", path: "/dashboard/billing", icon: MdCreditCard },
    ],

    driver: [
        { label: "Dashboard", path: "/dashboard/driver", icon: MdDashboard },
        { label: "Find a Ride", path: "/dashboard/find-ride", icon: BsRocketTakeoff },
        { label: "Billing & Plans", path: "/dashboard/billing", icon: MdCreditCard },
    ],

    rider: [
        { label: "Dashboard", path: "/dashboard/rider", icon: MdDashboard },
        { label: "Find a Ride", path: "/dashboard/rider/ride-request", icon: BsRocketTakeoff },
    ],

    // 👇 common items for everyone
    common: [
        { label: "Your Profile", path: "/dashboard/profile", icon: FaRegUserCircle },
        { label: "Sign Out", path: "/logout", icon: FiLogOut },
    ],
};
