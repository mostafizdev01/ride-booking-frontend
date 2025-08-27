import { ISidebarItem } from "@/types";
import { lazy } from "react";

const RideRequest = lazy(() => import("@/pages/Rider/RideRequest"));
const Profile = lazy(() => import("@/pages/Profile"));
const ActiveRideTrackerPage = lazy(() => import("@/pages/Rider/ActiveRideTrackerPage"));
const RideHistoryPage = lazy(() => import("@/pages/Rider/RideHistoryPage"));
const RiderDashboard = lazy(() => import("@/pages/Rider/RiderDashboard"));

export const riderSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "Dashboard",
        url: "/rider/dashboard",
        component: RiderDashboard,
      },
      {
        title: "My Profile",
        url: "/rider/me",
        component: Profile,
      },
      {
        title: "Ride Requests",
        url: "/rider/requests",
        component: RideRequest,
      },
      {
        title: "Ride History",
        url: "/rider/history",
        component: RideHistoryPage,
      },
      {
        title: "Active Ride",
        url: "/rider/active-ride",
        component: ActiveRideTrackerPage,
      }
    ],
  },
];
