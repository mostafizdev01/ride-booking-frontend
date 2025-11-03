import { Link } from "react-router";
import {
  IconDashboard,
  IconUsers,
  IconCar,
  IconSettings,
  IconUser,
  IconListDetails,
  IconChartBar,
  IconLogout,
} from "@tabler/icons-react";

interface MenuItem {
  title: string;
  icon: React.ElementType;
  path: string;
}

// 🧠 Role-based menu configuration
const getMenuItemsByRole = (role: string): MenuItem[] => {
  const baseMenu: MenuItem[] = [
    { title: "Dashboard", icon: IconDashboard, path: "/dashboard" },
  ];

  if (role === "ADMIN") {
    baseMenu.push(
      { title: "Users", icon: IconUsers, path: "/dashboard/admin/users" },
      { title: "Rides", icon: IconCar, path: "/dashboard/admin/rides" },
      { title: "Reports", icon: IconChartBar, path: "/dashboard/admin/reports" },
      { title: "Settings", icon: IconSettings, path: "/dashboard/admin/settings" }
    );
  }

  if (role === "DRIVER") {
    baseMenu.push(
      { title: "My Rides", icon: IconCar, path: "/dashboard/driver/my-rides" },
      { title: "Earnings", icon: IconChartBar, path: "/dashboard/driver/earnings" },
      { title: "Profile", icon: IconUser, path: "/dashboard/driver/profile" },
      { title: "Settings", icon: IconSettings, path: "/dashboard/driver/settings" }
    );
  }

  if (role === "RIDER") {
    baseMenu.push(
      { title: "Total Ride", icon: IconListDetails, path: "/dashboard/rider/total-rides" },
      { title: "View Drivers", icon: IconCar, path: "/dashboard/rider/view-drivers" },
      { title: "My Profile", icon: IconUser, path: "/dashboard/rider/profile" },
      { title: "Settings", icon: IconSettings, path: "/dashboard/rider/settings" }
    );
  }

  return baseMenu;
};

export default function SideBar({ role = "ADMIN" }: { role?: string }) {
  const menuItems = getMenuItemsByRole(role);

  const handleLogout = () => {
    console.log("Logged out!");
    // Example:
    // localStorage.removeItem("accessToken");
    // navigate("/login");
  };

  return (
    <aside className="fixed left-0 top-0 w-64 h-full bg-secondary p-4 flex flex-col justify-between z-50">
      {/* ======= Top: Logo & Menu ======= */}
      <div>
        {/* Logo */}
        <Link to="/" className="flex items-center pb-4 border-b border-gray-300">
          <h2 className="font-bold text-2xl">
            Zoom{" "}
            <span className="bg-primary text-white px-2 rounded-md">Ride</span>
          </h2>
        </Link>

        {/* Menu */}
        <ul className="mt-4">
          <span className="text-black font-bold text-xs uppercase block mb-2">
            MAIN MENU
          </span>

          {menuItems.map((item, index) => (
            <li key={index} className="mb-1 group">
              <Link
                to={item.path}
                className="flex font-semibold items-center py-2 px-4 bg-gray-200 hover:bg-blue-200 text-black rounded-md transition-all duration-150"
              >
                <item.icon className="mr-3 text-lg" />
                <span className="text-sm">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ======= Bottom: Logout Button ======= */}
      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-2 py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition-all duration-150"
      >
        <IconLogout size={18} />
        <span>Logout</span>
      </button>
    </aside>
  );
}
