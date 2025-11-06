import { dashboardMenu } from "@/pages/Dashboard/DashboardSidebarMenu";
import { useState, useEffect, useRef, type ReactNode } from "react";
import { FaRegUserCircle } from "react-icons/fa";

import { useNavigate } from "react-router";

// ===== Dropdown Components =====
interface DropdownMenuProps {
  children: ReactNode;
  trigger: ReactNode;
}

const DropdownMenu = ({ children, trigger }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-xl shadow-xl bg-white dark:bg-zinc-900 ring-1 ring-black/10 z-50 animate-in fade-in-0 zoom-in-95">
          {children}
        </div>
      )}
    </div>
  );
};

interface DropdownMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
}

const DropdownMenuItem = ({ children, onClick }: DropdownMenuItemProps) => (
  <button
    onClick={onClick}
    className="w-full text-left text-zinc-700 dark:text-zinc-300 flex items-center px-4 py-2 text-sm rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
  >
    {children}
  </button>
);


// ===== Menu Config (Role-Based) =====


// ===== Main Component =====
export default function UserProfileDropdown() {
  // Normally ei role ta login theke asbe
  const role = "rider";

  const roleItems = dashboardMenu[role] || [];

  const allItems = [...roleItems, ...dashboardMenu.common];

  const navigate = useNavigate();


  const handleClick = (path: string) => {
    if (path === "/logout") {
      localStorage.clear();
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  return (
    <div className="flex items-center justify-center font-sans">
      <DropdownMenu
        trigger={
          <div className="p-3 bg-lime-300 text-xl cursor-pointer shadow-sm rounded-full hover:ring-2 hover:ring-lime-300 transition">
            <FaRegUserCircle />
          </div>
        }
      >
        {/* ===== User Info ===== */}
        <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                John Doe
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                john@example.com
              </div>
            </div>
          </div>
        </div>

        {/* ===== Dynamic Menu ===== */}
        <div className="py-1">
          {allItems.map(({ label, path, icon: Icon }) => (
            <DropdownMenuItem key={path} onClick={()=> handleClick(path)}>
              <Icon className="mr-3 h-4 w-4 text-zinc-500" /> {label}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenu>
    </div>
  );
}
