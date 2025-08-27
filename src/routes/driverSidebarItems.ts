import { ISidebarItem } from "@/types";
import { lazy } from "react";
const Earnings =  lazy(() => import("@/pages/Driver/EarningsDashboard"));
const Dashboard =  lazy(() => import("@/pages/Driver/Dashboard"));
const ActiveRideManager = lazy(() => import("@/components/modules/driver/ActiveRideManager"));
const IncomingRide = lazy(() => import("@/pages/Driver/IncomingRide"));
const DriverProfile = lazy(() => import("@/components/modules/driver/DriverProfile"));
const DriverRideHistoryPage = lazy(() => import("@/pages/Driver/DriverRideHistoryPage"));

export const driverSidebarItems: ISidebarItem[] = [
  {
    title: "Driver Dashboard",
    items: [
      {
        title: "Dashboard",
        url: "/driver/driver-dashboard",
        component: Dashboard,
      },
      {
        title: "My Profile",
        url: "/driver/my-profile",
        component: DriverProfile,
      },
      {
        title: "Earnings",
        url: "/driver/earnings",
        component: Earnings,
      },
    ],
  },
  {
    title: "Ride Management",
    items: [
      {
        title: "Incoming Ride Requests",
        url: "/driver/incoming-ride-requests",
        component: IncomingRide,
      },
      {
        title: "Active Rides",
        url: "/driver/active-rides",
        component: ActiveRideManager
      },
      {
        title: "Rides History",
        url: "/driver/rides-history",
        component: DriverRideHistoryPage
      },
      
    ],
  }
];
