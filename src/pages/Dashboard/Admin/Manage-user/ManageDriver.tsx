import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaEye, FaToggleOn, FaToggleOff, FaSearch } from "react-icons/fa";

export default function DriverManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "+8801711223344",
      email: "john@zoomride.com",
      vehicle: "Toyota Prius - Dhaka Metro 23-4567",
      rating: 4.8,
      status: true,
      joined: "2025-03-14",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Aminul Islam",
      phone: "+8801811556677",
      email: "aminul@zoomride.com",
      vehicle: "Honda Civic - Dhaka Metro 24-3345",
      rating: 4.6,
      status: false,
      joined: "2025-01-10",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 3,
      name: "Sarah Khan",
      phone: "+8801999887766",
      email: "sarah@zoomride.com",
      vehicle: "Nissan Sunny - Dhaka Metro 21-1122",
      rating: 4.9,
      status: true,
      joined: "2024-12-20",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ]);

  // Handle toggle active/deactive
  const toggleStatus = (id: number) => {
    setDrivers((prev) =>
      prev.map((driver) =>
        driver.id === id ? { ...driver, status: !driver.status } : driver
      )
    );
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this driver?")) {
      setDrivers(drivers.filter((driver) => driver.id !== id));
    }
  };

  const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* ===== Header Section ===== */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Driver Management</h1>
          <p className="text-gray-500 text-sm mt-1">Manage, edit, and monitor all drivers</p>
        </div>

        <button className="mt-4 sm:mt-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md transition-all">
          <FaPlus /> Add New Driver
        </button>
      </div>

      {/* ===== Search Bar ===== */}
      <div className="relative mb-6 max-w-sm">
        <input
          type="text"
          placeholder="Search driver..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
      </div>

      {/* ===== Table ===== */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-md border border-gray-100">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-3 text-left">Driver</th>
              <th className="px-6 py-3 text-left">Contact</th>
              <th className="px-6 py-3 text-left">Vehicle</th>
              <th className="px-6 py-3 text-center">Rating</th>
              <th className="px-6 py-3 text-center">Status</th>
              <th className="px-6 py-3 text-center">Joined</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredDrivers.map((driver) => (
              <tr key={driver.id} className="border-t hover:bg-gray-50">
                {/* Driver Info */}
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={driver.img}
                    alt={driver.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <p className="font-semibold">{driver.name}</p>
                    <p className="text-xs text-gray-500">{driver.email}</p>
                  </div>
                </td>

                {/* Contact */}
                <td className="px-6 py-4">{driver.phone}</td>

                {/* Vehicle */}
                <td className="px-6 py-4">{driver.vehicle}</td>

                {/* Rating */}
                <td className="px-6 py-4 text-center font-semibold text-yellow-500">
                  ⭐ {driver.rating}
                </td>

                {/* Status */}
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => toggleStatus(driver.id)}
                    className="flex justify-center mx-auto"
                  >
                    {driver.status ? (
                      <FaToggleOn className="text-green-500 text-2xl" />
                    ) : (
                      <FaToggleOff className="text-gray-400 text-2xl" />
                    )}
                  </button>
                  <p className="text-xs text-gray-500 mt-1">
                    {driver.status ? "Active" : "Inactive"}
                  </p>
                </td>

                {/* Joined */}
                <td className="px-6 py-4 text-center">{driver.joined}</td>

                {/* Actions */}
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-3 text-lg">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEye title="View Profile" />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <FaEdit title="Edit" />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(driver.id)}
                    >
                      <FaTrash title="Delete" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredDrivers.length === 0 && (
          <p className="text-center py-6 text-gray-500">No drivers found...</p>
        )}
      </div>
    </div>
  );
}
