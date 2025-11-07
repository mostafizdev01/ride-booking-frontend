import { FaUserTie, FaUsers, FaCarAlt, FaMoneyBillWave, FaBell, FaChartLine } from "react-icons/fa";
import { MdTimeline, MdSecurity } from "react-icons/md";
import type { JSX } from "react/jsx-runtime";

export default function AdminDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* ===== Dashboard Header ===== */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Overview of platform performance and insights</p>
      </div>

      {/* ===== Summary Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SummaryCard icon={<FaUserTie />} title="Total Drivers" value="128" color="from-blue-500 to-blue-700" />
        <SummaryCard icon={<FaUsers />} title="Total Riders" value="540" color="from-purple-500 to-indigo-600" />
        <SummaryCard icon={<FaCarAlt />} title="Total Rides" value="2,348" color="from-green-500 to-teal-600" />
        <SummaryCard icon={<FaMoneyBillWave />} title="Total Earnings" value="৳ 1,24,500" color="from-yellow-400 to-orange-500" />
      </div>

      {/* ===== Active Rides & Quick Stats ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Active Rides Overview */}
        <div className="col-span-2 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
            <MdTimeline className="text-blue-500" /> Active Rides Overview
          </h2>
          <div className="space-y-3">
            <OverviewRow label="Pickup" percent={40} color="bg-yellow-400" />
            <OverviewRow label="In Transit" percent={35} color="bg-blue-500" />
            <OverviewRow label="Completed" percent={20} color="bg-green-500" />
            <OverviewRow label="Cancelled" percent={5} color="bg-red-500" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
            <FaChartLine className="text-green-500" /> Quick Stats
          </h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex justify-between"><span>Ride Success Rate:</span> <strong>92%</strong></li>
            <li className="flex justify-between"><span>Average Rating:</span> <strong>4.8 / 5</strong></li>
            <li className="flex justify-between"><span>Active Drivers:</span> <strong>115</strong></li>
            <li className="flex justify-between"><span>New Signups (Today):</span> <strong>23</strong></li>
          </ul>
        </div>
      </div>

      {/* ===== Recent Activities & Alerts ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
            <MdTimeline className="text-purple-500" /> Recent Activities
          </h2>
          <ul className="divide-y divide-gray-100">
            {[
              { action: "New driver registered", time: "2 mins ago" },
              { action: "Ride #2345 marked as Completed", time: "10 mins ago" },
              { action: "Rider reported an issue", time: "1 hour ago" },
              { action: "Payment processed successfully", time: "2 hours ago" },
              { action: "Driver John updated vehicle info", time: "5 hours ago" },
            ].map((item, i) => (
              <li key={i} className="py-3 flex justify-between text-sm text-gray-700">
                <span>{item.action}</span>
                <span className="text-gray-400">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* System Alerts */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
            <FaBell className="text-red-500" /> System Alerts
          </h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <AlertItem type="warning" message="Server load higher than usual" />
            <AlertItem type="info" message="Scheduled maintenance at 12:00 AM" />
            <AlertItem type="success" message="All payment gateways running smoothly" />
            <AlertItem type="error" message="3 ride cancellation reports pending review" />
            <AlertItem type="info" message="Driver verification updates required" />
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ================== Sub Components ================== */

const SummaryCard = ({ icon, title, value, color }: { icon: JSX.Element; title: string; value: string; color: string }) => (
  <div className={`flex items-center gap-4 bg-gradient-to-br ${color} text-white rounded-2xl shadow-md p-6`}>
    <div className="text-3xl">{icon}</div>
    <div>
      <p className="text-sm opacity-90">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  </div>
);

const OverviewRow = ({ label, percent, color }: { label: string; percent: number; color: string }) => (
  <div>
    <div className="flex justify-between text-sm text-gray-600 mb-1">
      <span>{label}</span>
      <span>{percent}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div className={`${color} h-3 rounded-full`} style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);

const AlertItem = ({ type, message }: { type: "info" | "warning" | "success" | "error"; message: string }) => {
  const colors: Record<string, string> = {
    info: "bg-blue-100 text-blue-700 border-blue-300",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-300",
    success: "bg-green-100 text-green-700 border-green-300",
    error: "bg-red-100 text-red-700 border-red-300",
  };

  return (
    <li className={`p-3 rounded-lg border ${colors[type]} shadow-sm flex items-center gap-2`}>
      <MdSecurity className="text-lg" /> {message}
    </li>
  );
};
