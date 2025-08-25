import { ISidebarItem } from "@/types";
import Earnings from "@/pages/Driver/EarningsDashboard";
import Dashboard from "@/pages/Driver/Dashboard";
import ActiveRideManager from "@/components/modules/driver/ActiveRideManager";
import IncomingRide from "@/pages/Driver/IncomingRide";
import DriverProfile from "@/components/modules/driver/DriverProfile";
import DriverRideHistoryPage from "@/pages/Driver/DriverRideHistoryPage";

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
