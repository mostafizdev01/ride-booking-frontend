import { useState } from "react";
import { FaUser, FaRegClock } from "react-icons/fa";
import { MdLocationOn, MdAttachMoney } from "react-icons/md";

interface ActiveRide {
    id: number;
    riderName: string;
    pickup: string;
    destination: string;
    date: string;
    time: string;
    fare: number;
    status: "Pickup" | "In Transit" | "Completed" | "Cancelled";
    vehicle: { model: string; plate: string };
}

export default function ActiveRides() {
    const [rides, setRides] = useState<ActiveRide[]>([
        {
            id: 201,
            riderName: "John Doe",
            pickup: "Dhanmondi 27, Dhaka",
            destination: "Uttara Sector 10, Dhaka",
            date: "2025-11-07",
            time: "10:30 AM",
            fare: 450,
            status: "Pickup",
            vehicle: { model: "Toyota Axio", plate: "DHAKA-METRO GA 25-3345" },
        },
        {
            id: 202,
            riderName: "Sara Rahman",
            pickup: "Banani 11, Dhaka",
            destination: "Gulshan 2, Dhaka",
            date: "2025-11-07",
            time: "11:00 AM",
            fare: 380,
            status: "In Transit",
            vehicle: { model: "Honda City", plate: "DHAKA-METRO BA 19-8876" },
        },
    ]);

    const handleStatusChange = (rideId: number, newStatus: ActiveRide["status"]) => {
        setRides((prev) =>
            prev.map((ride) =>
                ride.id === rideId ? { ...ride, status: newStatus } : ride
            )
        );
    };

    return (
        <div className="p-6 bg-white rounded-2xl shadow-md">
            <h1 className="text-2xl font-semibold mb-6">Active Rides</h1>

            <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full text-sm text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3 border-b">Ride ID</th>
                            <th className="px-6 py-3 border-b">Rider</th>
                            <th className="px-6 py-3 border-b">Pickup</th>
                            <th className="px-6 py-3 border-b">Destination</th>
                            <th className="px-6 py-3 border-b">Date & Time</th>
                            <th className="px-6 py-3 border-b">Vehicle</th>
                            <th className="px-6 py-3 border-b">Fare</th>
                            <th className="px-6 py-3 border-b">Status</th>
                            <th className="px-6 py-3 border-b">Action</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-800">
                        {rides.map((ride) => (
                            <tr key={ride.id} className="hover:bg-gray-50 transition align-top">
                                {/* Ride ID */}
                                <td className="px-6 py-4 border-b font-medium text-gray-700">#{ride.id}</td>

                                {/* Rider */}
                                <td className="px-6 py-4 border-b">
                                    <span className="inline-flex items-center gap-1">
                                        <FaUser className="text-indigo-500" />
                                        {ride.riderName}
                                    </span>
                                </td>

                                {/* Pickup */}
                                <td className="px-6 py-4 border-b">
                                    <span className="inline-flex items-center gap-1">
                                        <MdLocationOn className="text-lime-600" />
                                        {ride.pickup}
                                    </span>
                                </td>

                                {/* Destination */}
                                <td className="px-6 py-4 border-b">
                                    <span className="inline-flex items-center gap-1">
                                        <MdLocationOn className="text-red-500" />
                                        {ride.destination}
                                    </span>
                                </td>

                                {/* Date & Time */}
                                <td className="px-6 py-4 border-b">
                                    <span className="inline-flex items-center gap-1">
                                        <FaRegClock className="text-gray-400" />
                                        {ride.date} | {ride.time}
                                    </span>
                                </td>

                                {/* Vehicle */}
                                <td className="px-6 py-4 border-b">
                                    <div>{ride.vehicle.model}</div>
                                </td>

                                {/* Fare */}
                                <td className="px-6 py-4 border-b">
                                    <span className="inline-flex items-center gap-1">
                                        <MdAttachMoney className="text-green-500" />
                                        {ride.fare} BDT
                                    </span>
                                </td>

                                {/* Status Badge */}
                                <td className="px-6 py-4 border-b">
                                    <span
                                        className={`px-3 py-1 text-xs font-semibold rounded-full ${ride.status === "Pickup"
                                                ? "bg-blue-100 text-blue-700"
                                                : ride.status === "In Transit"
                                                    ? "bg-fuchsia-100 text-fuchsia-700"
                                                    : ride.status === "Completed"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-lime-100 text-lime-700"
                                            }`}
                                    >
                                    {ride.status}
                                    </span>
                                </td>

                                {/* Action Select */}
                                <td className="px-6 py-4 border-b">
                                    <select
                                        value={ride.status}
                                        onChange={(e) =>
                                            handleStatusChange(ride.id, e.target.value as ActiveRide["status"])
                                        }
                                        className="w-full sm:w-auto px-3 py-1 rounded-lg bg-blue-100 font-semibold transition"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Pickup">Pickup</option>
                                        <option value="In Transit">In Transit</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-600 text-sm gap-2">
                <p>Total Active Rides: <span className="font-semibold">{rides.length}</span></p>
                <p>Last updated: <span className="text-gray-500">Just now</span></p>
            </div>
        </div>
    );
}
