import App from "@/App";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { TRole } from "@/types";
import Fail from "@/pages/Payment/Fail";
import Success from "@/pages/Payment/Success";
import Homepage from "@/pages/Homepage";
import { role } from "@/constants/role";
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { adminSidebarItems } from "./adminSidebarItems";
import { riderSidebarItems } from "./riderSidebarItems";
import DashboardLayout from "@/components/layout/DeshboardLayout";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Homepage,
        index: true,
      },
      {
        Component: About,
        path: "about",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.SUPER_ADMIN as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/analytics" /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.RIDER as TRole),
    path: "/rider",
    children: [
      { index: true, element: <Navigate to="/rider/me" /> },
      ...generateRoutes(riderSidebarItems),
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
  {
    Component: Success,
    path: "/payment/success",
  },
  {
    Component: Fail,
    path: "/payment/fail",
  },
]);
