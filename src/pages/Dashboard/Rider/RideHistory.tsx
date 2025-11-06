import { useState } from "react";
import { FaCarSide, FaRoute, FaRegClock, FaUserTie } from "react-icons/fa";
import { MdLocationOn, MdAttachMoney, MdDirectionsCar } from "react-icons/md";

interface Ride {
    id: number;
    pickup: string;
    destination: string;
    date: string;
    time: string;
    fare: number;
    status: "Completed" | "Cancelled" | "Ongoing";
    driver: {
        name: string;
        phone: string;
    };
    vehicle: {
        model: string;
        plate: string;
    };
}

export default function RideHistory() {
    const [rides] = useState<Ride[]>([
        {
            id: 1,
            pickup: "Dhanmondi 27, Dhaka",
            destination: "Uttara Sector 10, Dhaka",
            date: "2025-11-01",
            time: "10:30 AM",
            fare: 450,
            status: "Completed",
            driver: { name: "Rakib Hasan", phone: "+8801712345678" },
            vehicle: { model: "Toyota Axio", plate: "DHAKA METRO-GA 25-3345" },
        },
        {
            id: 2,
            pickup: "Banani 11, Dhaka",
            destination: "Gulshan 2, Dhaka",
            date: "2025-10-30",
            time: "8:15 PM",
            fare: 200,
            status: "Cancelled",
            driver: { name: "Sabbir Ahmed", phone: "+8801999887766" },
            vehicle: { model: "Honda Grace", plate: "DHAKA METRO-BA 19-8876" },
        },
        {
            id: 3,
            pickup: "Mirpur DOHS, Dhaka",
            destination: "Bashundhara R/A, Dhaka",
            date: "2025-10-28",
            time: "6:00 PM",
            fare: 380,
            status: "Completed",
            driver: { name: "Tanvir Alam", phone: "+8801777332211" },
            vehicle: { model: "Nissan Sunny", plate: "DHAKA METRO-GA 16-9987" },
        },
    ]);

    return (
        <div className="p-6 bg-white rounded-2xl shadow-md">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    <FaCarSide className="text-lime-600" />
                    Ride History
                </h1>
                <button className="px-4 py-2 bg-lime-500 hover:bg-lime-600 text-white rounded-lg text-sm font-medium transition">
                    Export as CSV
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full border-collapse text-sm text-left">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3">Ride ID</th>
                            <th className="px-6 py-3">Pickup</th>
                            <th className="px-6 py-3">Destination</th>
                            <th className="px-6 py-3">Date & Time</th>
                            <th className="px-6 py-3">Driver</th>
                            <th className="px-6 py-3">Vehicle</th>
                            <th className="px-6 py-3">Fare</th>
                            <th className="px-6 py-3">Status</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 text-gray-800">
                        {rides.map((ride) => (
                            <tr
                                key={ride.id}
                                className="hover:bg-gray-50 transition cursor-pointer align-top"
                            >
                                <td className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
                                    #{ride.id}
                                </td>

                                <td className="px-6 py-4 whitespace-normal">
                                    <div className="flex items-start gap-2">
                                        <MdLocationOn className="text-lime-600 mt-1" />
                                        <span>{ride.pickup}</span>
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-normal">
                                    <div className="flex items-start gap-2">
                                        <FaRoute className="text-blue-500 mt-1" />
                                        <span>{ride.destination}</span>
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <FaRegClock className="text-gray-400" />
                                        {ride.date} <span className="text-gray-400">|</span> {ride.time}
                                    </div>
                                </td>

                                {/* ✅ Driver Info */}
                                <td className="px-6 py-4 whitespace-normal">
                                    <div className="flex flex-col text-sm">
                                        <div className="flex items-center gap-2 font-medium text-gray-700">
                                            <FaUserTie className="text-indigo-500" />
                                            {ride.driver.name}
                                        </div>
                                        <span className="text-gray-500 text-xs">
                                            {ride.driver.phone}
                                        </span>
                                    </div>
                                </td>

                                {/* ✅ Vehicle Info */}
                                <td className="px-6 py-4 whitespace-normal">
                                    <div className="flex flex-col text-sm">
                                        <div className="flex items-center gap-2 font-medium text-gray-700">
                                            <MdDirectionsCar className="text-orange-500" />
                                            {ride.vehicle.model}
                                        </div>
                                        <span className="text-gray-500 text-xs">
                                            {ride.vehicle.plate}
                                        </span>
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-1">
                                        <MdAttachMoney className="text-green-500" />
                                        {ride.fare} BDT
                                    </div>
                                </td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`px-3 py-1 text-xs font-semibold rounded-full ${ride.status === "Completed"
                                                ? "bg-green-100 text-green-700"
                                                : ride.status === "Cancelled"
                                                    ? "bg-red-100 text-red-700"
                                                    : "bg-yellow-100 text-yellow-700"
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

            {/* Footer */}
            <div className="mt-6 flex justify-between items-center text-gray-600 text-sm">
                <p>
                    Total Rides: <span className="font-semibold">{rides.length}</span>
                </p>
                <p>
                    Last updated: <span className="text-gray-500">2 minutes ago</span>
                </p>
            </div>
        </div>
    );
}
