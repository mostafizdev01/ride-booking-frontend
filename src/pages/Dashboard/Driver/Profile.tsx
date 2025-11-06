import { useState } from "react";
import {FaPhone, FaEnvelope, FaMapMarkerAlt, FaCar, FaStar } from "react-icons/fa";

interface Vehicle {
    model: string;
    plate: string;
    type: string;
    seats: number;
    status: "Active" | "Inactive" | "Maintenance";
}

export default function Profile() {
    const [driverStatus, setDriverStatus] = useState<"Online" | "Offline">("Offline");

    const driverInfo = {
        name: "John Doe",
        email: "john@example.com",
        phone: "+880 123 456 789",
        address: "Banani 11, Dhaka, Bangladesh",
        joinedDate: "2024-01-15",
        totalRides: 120,
        rating: 4.8,
        vehicle: {
            model: "Toyota Axio",
            plate: "DHAKA-METRO GA 25-3345",
            type: "Car",
            seats: 4,
            status: "Active" as Vehicle["status"],
        },
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold mb-6">Driver Profile</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-bold text-white mb-4">
                        JD
                    </div>
                    <h2 className="text-xl font-semibold mb-1">{driverInfo.name}</h2>
                    <p className="text-gray-500 text-sm mb-4">Joined: {driverInfo.joinedDate}</p>

                    {/* Online / Offline Toggle */}
                    <button
                        onClick={() =>
                            setDriverStatus(driverStatus === "Online" ? "Offline" : "Online")
                        }
                        className={`px-6 py-2 rounded-lg font-semibold text-white transition ${driverStatus === "Online"
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-red-600 hover:bg-red-700"
                            }`}
                    >
                        {driverStatus}
                    </button>
                </div>

                {/* Info Cards */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Contact Info */}
                    <div className="bg-white shadow rounded-xl p-6">
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <p className="flex items-center gap-2 mb-2">
                            <FaEnvelope className="text-blue-500" /> {driverInfo.email}
                        </p>
                        <p className="flex items-center gap-2 mb-2">
                            <FaPhone className="text-green-500" /> {driverInfo.phone}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-red-500" /> {driverInfo.address}
                        </p>
                    </div>

                    {/* Vehicle Info */}
                    <div className="bg-white shadow rounded-xl p-6">
                        <h3 className="text-lg font-semibold mb-4">Vehicle Info</h3>
                        <p className="flex items-center gap-2 mb-2">
                            <FaCar className="text-indigo-500" /> {driverInfo.vehicle.model} ({driverInfo.vehicle.type})
                        </p>
                        <p className="mb-2">Plate: {driverInfo.vehicle.plate}</p>
                        <p>
                            Status:{" "}
                            <span
                                className={`px-2 py-1 rounded-full text-xs font-semibold ${driverInfo.vehicle.status === "Active"
                                        ? "bg-green-100 text-green-700"
                                        : driverInfo.vehicle.status === "Inactive"
                                            ? "bg-red-100 text-red-700"
                                            : "bg-yellow-100 text-yellow-700"
                                    }`}
                            >
                                {driverInfo.vehicle.status}
                            </span>
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="bg-white shadow rounded-xl p-6">
                        <h3 className="text-lg font-semibold mb-4">Stats</h3>
                        <p>Total Rides: <span className="font-semibold">{driverInfo.totalRides}</span></p>
                        <p className="flex items-center gap-2">
                            Rating: <FaStar className="text-yellow-400" /> {driverInfo.rating}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="bg-white shadow rounded-xl p-6 flex flex-col justify-center">
                        <h3 className="text-lg font-semibold mb-4">Actions</h3>
                        <button className="px-6 py-2 mb-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                            Edit Profile
                        </button>
                        <button className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition">
                            Change Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
