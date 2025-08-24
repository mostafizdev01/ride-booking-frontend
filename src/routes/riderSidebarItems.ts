import Profile from "@/pages/Profile";
import RideHistoryPage from "@/pages/Rider/RideHistoryPage";
import RiderDashboard from "@/pages/Rider/RiderDashboard";
import RideRequest from "@/pages/Rider/RideRequest";
import { ISidebarItem } from "@/types";

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
    ],
  },
];
