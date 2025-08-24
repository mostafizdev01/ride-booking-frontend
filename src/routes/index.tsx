import App from "@/App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { TRole } from "@/types";
import Fail from "@/pages/Payment/Fail";
import Success from "@/pages/Payment/Success";
import { role } from "@/constants/role";
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { adminSidebarItems } from "./adminSidebarItems";
import { riderSidebarItems } from "./riderSidebarItems";
import DashboardLayout from "@/components/layout/DeshboardLayout";
import { driverSidebarItems } from "./driverSidebarItems";
import AboutPage from "@/pages/public/AboutPage";
import HomePage from "@/pages/public/HomePage";
import FeaturesPage from "@/pages/public/FeaturesPage";
import ContactPage from "@/pages/public/ContactPage";
import FAQPage from "@/pages/public/FAQPage";
import AccountStatusPage from "@/pages/status/AccountStatusPage";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: HomePage,
        index: true,
      },
      {
        Component: AboutPage,
        path: "about",
      },
      {
        Component: FeaturesPage,
        path: "features",
      },
      {
        Component: ContactPage,
        path: "contact",
      },
      {
        Component: FAQPage,
        path: "faq",
      },
      {
        Component: AccountStatusPage,
        path: "account-status",
      }
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
    Component: withAuth(DashboardLayout, role.DRIVER as TRole),
    path: "/driver",
    children: [
      { index: true, element: <Navigate to="/driver/driver-dashboard" /> },
      ...generateRoutes(driverSidebarItems),
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
