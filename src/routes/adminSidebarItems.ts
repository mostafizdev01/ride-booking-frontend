
import { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));
const Overview = lazy(() => import("@/pages/Admin/Overview"));
const AllUsers = lazy(() => import("@/pages/Admin/AllUsers"));
const AllRide = lazy(() => import("@/pages/Admin/AllRide"));
const AddRide = lazy(() => import("@/pages/Admin/AddRide"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
      {
        title: "Overview",
        url: "/admin/overview",
        component: Overview,
      },
      {
        title: "All Users",
        url: "/admin/all-users",
        component: AllUsers
      },
      {
        title: "All Rides",
        url: "/admin/all-rides",
        component: AllRide
      },
    ],
  },
  {
    title: "Ride Management",
    items: [
      {
        title: "Add Ride",
        url: "/admin/add-ride",
        component: AddRide,
      },
    ],
  },
];
