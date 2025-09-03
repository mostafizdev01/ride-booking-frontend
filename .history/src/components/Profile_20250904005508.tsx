"use client";
import { useState, useEffect, useRef, type ReactNode } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

// ===== Icons =====
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-3 h-4 w-4 text-zinc-500"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-3 h-4 w-4 text-zinc-500"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6" />
    <path d="M1 12h6m6 0h6" />
  </svg>
);

const BillingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-3 h-4 w-4 text-zinc-500"
  >
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const HelpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-3 h-4 w-4 text-zinc-500"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
);

const LogoutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-3 h-4 w-4 text-zinc-500"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);

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

const DropdownMenuSeparator = () => (
  <div className="my-2 h-px bg-zinc-200 dark:bg-zinc-700" />
);

// ===== Main Component =====
export default function UserProfileDropdown() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center font-sans">
      <DropdownMenu
        trigger={
          <div className="p-3 bg-white text-xl cursor-pointer shadow-sm rounded-full hover:ring-2 hover:ring-zinc-300 transition">
            <FaRegUserCircle />
          </div>
        }
      >
        {/* User Info */}
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
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Pro Plan
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-1">
          <DropdownMenuItem onClick={() => navigate("/dashboard/profile")}>
            <UserIcon /> Your Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/dashboard")}>
            <DashboardIcon /> Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/dashboard/billing")}>
            <BillingIcon /> Billing & Plans
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator />

        <div className="py-1">
          <DropdownMenuItem onClick={() => navigate("/dashboard/help")}>
            <HelpIcon /> Help & Support
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/Sign Out")}>
            <LogoutIcon /> Sign Out
          </DropdownMenuItem>
        </div>
      </DropdownMenu>
    </div>
  );
}
