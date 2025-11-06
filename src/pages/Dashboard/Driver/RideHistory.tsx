
import { useState } from "react";
import { FaUser, FaRegClock } from "react-icons/fa";
import { MdLocationOn, MdAttachMoney } from "react-icons/md";

interface RideEarning {
  id: number;
  riderName: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  fare: number;
  status: "Completed" | "Cancelled";
}

export default function RideHistory() {
  const [rides] = useState<RideEarning[]>([
    {
      id: 301,
      riderName: "John Doe",
      pickup: "Dhanmondi 27, Dhaka",
      destination: "Uttara Sector 10, Dhaka",
      date: "2025-11-07",
      time: "10:30 AM",
      fare: 450,
      status: "Completed",
    },
    {
      id: 302,
      riderName: "Sara Rahman",
      pickup: "Banani 11, Dhaka",
      destination: "Gulshan 2, Dhaka",
      date: "2025-11-07",
      time: "11:00 AM",
      fare: 380,
      status: "Completed",
    },
    {
      id: 303,
      riderName: "Ali Hasan",
      pickup: "Mirpur 10, Dhaka",
      destination: "Mohammadpur, Dhaka",
      date: "2025-11-06",
      time: "04:15 PM",
      fare: 320,
      status: "Cancelled",
    },
  ]);

  // Summary calculations
  const totalEarnings = rides.reduce(
    (sum, r) => sum + (r.status === "Completed" ? r.fare : 0),
    0
  );
  const completedRides = rides.filter((r) => r.status === "Completed").length;
  const cancelledRides = rides.filter((r) => r.status === "Cancelled").length;
  const averageFare = completedRides ? Math.round(totalEarnings / completedRides) : 0;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Earnings Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-start">
          <span className="text-gray-500 text-sm">Total Earnings</span>
          <span className="text-2xl font-bold text-green-600">{totalEarnings} BDT</span>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-start">
          <span className="text-gray-500 text-sm">Completed Rides</span>
          <span className="text-2xl font-bold text-blue-600">{completedRides}</span>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-start">
          <span className="text-gray-500 text-sm">Cancelled Rides</span>
          <span className="text-2xl font-bold text-red-600">{cancelledRides}</span>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-start">
          <span className="text-gray-500 text-sm">Average Fare</span>
          <span className="text-2xl font-bold text-purple-600">{averageFare} BDT</span>
        </div>
      </div>

      {/* Earnings Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow">
        <table className="min-w-full text-left text-sm border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 border-b">Ride ID</th>
              <th className="px-6 py-3 border-b">Rider</th>
              <th className="px-6 py-3 border-b">Pickup</th>
              <th className="px-6 py-3 border-b">Destination</th>
              <th className="px-6 py-3 border-b">Date & Time</th>
              <th className="px-6 py-3 border-b">Fare</th>
              <th className="px-6 py-3 border-b">Status</th>
            </tr>
          </thead>

          <tbody className="text-gray-800">
            {rides.map((ride) => (
              <tr key={ride.id} className="hover:bg-gray-50 transition align-top">
                <td className="px-6 py-4 border-b font-medium text-gray-700">#{ride.id}</td>
                
                {/* Rider */}
                <td className="px-6 py-4 border-b">
                  <span className="inline-flex items-center gap-1 whitespace-nowrap">
                    <FaUser className="text-indigo-500" />
                    {ride.riderName}
                  </span>
                </td>

                {/* Pickup */}
                <td className="px-6 py-4 border-b">
                  <span className="inline-flex items-center gap-1 whitespace-normal">
                    <MdLocationOn className="text-lime-600" />
                    {ride.pickup}
                  </span>
                </td>

                {/* Destination */}
                <td className="px-6 py-4 border-b">
                  <span className="inline-flex items-center gap-1 whitespace-normal">
                    <MdLocationOn className="text-red-500" />
                    {ride.destination}
                  </span>
                </td>

                {/* Date & Time */}
                <td className="px-6 py-4 border-b">
                  <span className="inline-flex items-center gap-1 whitespace-nowrap">
                    <FaRegClock className="text-gray-400" />
                    {ride.date} | {ride.time}
                  </span>
                </td>

                {/* Fare */}
                <td className="px-6 py-4 border-b">
                  <span className="inline-flex items-center gap-1 whitespace-nowrap">
                    <MdAttachMoney className="text-green-500" />
                    {ride.fare} BDT
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-4 border-b">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      ride.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {ride.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
