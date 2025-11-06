// src/routes/sidebarMenu.ts
import { LayoutDashboard, Car, History, DollarSign, Users } from "lucide-react";

export const DashboardSidebarMenu = {
    rider: [
        { name: "Dashboard", path: "/rider/dashboard", icon: LayoutDashboard },
        { name: "Book Ride", path: "/rider/book", icon: Car },
        { name: "Ride History", path: "/rider/history", icon: History },
    ],
    driver: [
        { name: "Dashboard", path: "/driver/dashboard", icon: LayoutDashboard },
        { name: "My Rides", path: "/driver/rides", icon: Car },
        { name: "Earnings", path: "/driver/earnings", icon: DollarSign },
    ],
    admin: [
        { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
        { name: "Manage Users", path: "/admin/users", icon: Users },
        { name: "All Rides", path: "/admin/rides", icon: Car },
    ],
};


// home page profile dropdown 

import { FaRegUserCircle } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";
import { MdDashboard, MdCreditCard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

export const dashboardMenu = {
    admin: [
        { label: "Dashboard", path: "/dashboard/admin", icon: MdDashboard },
        { label: "Manage Users", path: "/dashboard/manage-users", icon: IoMdSettings },
        { label: "Billing & Plans", path: "/dashboard/billing", icon: MdCreditCard },
    ],

    driver: [
        { label: "Dashboard", path: "/dashboard/driver", icon: MdDashboard },
        { label: "Post a Ride", path: "/dashboard/create-ride", icon: BsRocketTakeoff },
        { label: "Billing & Plans", path: "/dashboard/billing", icon: MdCreditCard },
    ],

    rider: [
        { label: "Dashboard", path: "/dashboard/rider", icon: MdDashboard },
        { label: "Find a Ride", path: "/dashboard/find-ride", icon: BsRocketTakeoff },
    ],

    // 👇 common items for everyone
    common: [
        { label: "Your Profile", path: "/dashboard/profile", icon: FaRegUserCircle },
        { label: "Sign Out", path: "/logout", icon: FiLogOut },
    ],
};
