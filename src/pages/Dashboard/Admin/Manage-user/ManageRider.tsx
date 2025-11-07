import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Edit, Trash2, UserPlus, UserRoundPen } from "lucide-react";

const ManageRider = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const riders = [
    {
      id: 1,
      name: "Shahriar Rahman",
      email: "shahriar@email.com",
      phone: "01711122334",
      totalRides: 123,
      rating: 4.8,
      status: "Active",
      joined: "2025-06-15",
    },
    {
      id: 2,
      name: "Anika Hasan",
      email: "anika@email.com",
      phone: "01899911122",
      totalRides: 84,
      rating: 4.6,
      status: "Inactive",
      joined: "2024-12-20",
    },
  ];


  return (
    <div className="p-4 sm:p-6">
      <Card className="shadow-md">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-center">
          <CardTitle className="text-xl font-semibold text-gray-800">
            Rider Management
          </CardTitle>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 mt-3 sm:mt-0">
            <UserPlus className="w-4 h-4" /> Add Rider
          </Button>
        </CardHeader>

        <CardContent>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Input
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="sm:w-1/3"
            />

          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 border-b">Name</th>
                  <th className="px-4 py-3 border-b">Email</th>
                  <th className="px-4 py-3 border-b">Phone</th>
                  <th className="px-4 py-3 border-b text-center">Total Rides</th>
                  <th className="px-4 py-3 border-b text-center">Rating</th>
                  <th className="px-4 py-3 border-b text-center">Status</th>
                  <th className="px-4 py-3 border-b text-center">Joined</th>
                  <th className="px-4 py-3 border-b text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {riders.map((rider) => (
                  <tr
                    key={rider.id}
                    className="hover:bg-gray-50 transition border-b"
                  >
                    <td className="px-4 py-3">{rider.name}</td>
                    <td className="px-4 py-3">{rider.email}</td>
                    <td className="px-4 py-3">{rider.phone}</td>
                    <td className="px-4 py-3 text-center">{rider.totalRides}</td>
                    <td className="px-4 py-3 text-center">{rider.rating}</td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          rider.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {rider.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">{rider.joined}</td>
                    <td className="px-4 py-3 text-center flex justify-center gap-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        <UserRoundPen size={18} />
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-800">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageRider;
