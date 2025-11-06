import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

interface Vehicle {
  id: number;
  model: string;
  plate: string;
  type: string;
  seats: number;
  status: "Active" | "Inactive" | "Maintenance";
  registrationExpiry: string;
}

export default function Vehicle() {
  const [vehicles] = useState<Vehicle[]>([
    {
      id: 1,
      model: "Toyota Axio",
      plate: "DHAKA-METRO GA 25-3345",
      type: "Car",
      seats: 4,
      status: "Active",
      registrationExpiry: "2026-12-31",
    },
    {
      id: 2,
      model: "Honda City",
      plate: "DHAKA-METRO BA 19-8876",
      type: "Car",
      seats: 4,
      status: "Maintenance",
      registrationExpiry: "2025-08-15",
    },
    {
      id: 3,
      model: "Suzuki Carry",
      plate: "DHAKA-METRO CA 10-9987",
      type: "Van",
      seats: 6,
      status: "Inactive",
      registrationExpiry: "2026-03-20",
    },
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">My Vehicles</h1>

      {/* Vehicles Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow mb-6">
        <table className="min-w-full text-left text-sm border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 border-b">Vehicle Model</th>
              <th className="px-6 py-3 border-b">Plate Number</th>
              <th className="px-6 py-3 border-b">Type</th>
              <th className="px-6 py-3 border-b">Seats</th>
              <th className="px-6 py-3 border-b">Status</th>
              <th className="px-6 py-3 border-b">Registration Expiry</th>
              <th className="px-6 py-3 border-b">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-800">
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="hover:bg-gray-50 transition align-top">
                <td className="px-6 py-4 border-b font-medium">{vehicle.model}</td>
                <td className="px-6 py-4 border-b">{vehicle.plate}</td>
                <td className="px-6 py-4 border-b">{vehicle.type}</td>
                <td className="px-6 py-4 border-b">{vehicle.seats}</td>
                <td className="px-6 py-4 border-b">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      vehicle.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : vehicle.status === "Inactive"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {vehicle.status}
                  </span>
                </td>
                <td className="px-6 py-4 border-b">{vehicle.registrationExpiry}</td>
                <td className="px-6 py-4 border-b flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <MdEdit size={20} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Vehicle Form */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Vehicle</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Vehicle Model"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Plate Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Vehicle Type (Car, Bike, Van)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              placeholder="Seats / Capacity"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <input
            type="date"
            placeholder="Registration Expiry"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Add Vehicle
          </button>
        </form>
      </div>
    </div>
  );
}
