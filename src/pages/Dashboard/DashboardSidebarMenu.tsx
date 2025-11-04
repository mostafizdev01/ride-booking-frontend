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
