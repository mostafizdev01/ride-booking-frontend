// src/pages/Dashboard/AdminDriverManagement.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const dummyDrivers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "0123456789",
    vehicle: "Sedan",
    totalRides: 120,
    rating: 4.9,
    status: "Active",
    joinDate: "2024-02-12",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "0987654321",
    vehicle: "SUV",
    totalRides: 95,
    rating: 4.7,
    status: "Inactive",
    joinDate: "2023-11-05",
  },
];

const statusStyles: Record<string, string> = {
  Active: "bg-green-100 text-green-700 border border-green-200",
  Inactive: "bg-gray-100 text-gray-700 border border-gray-200",
  Suspended: "bg-red-100 text-red-700 border border-red-200",
  Approved: "bg-blue-100 text-blue-700 border border-blue-200",
};

export default function AdminDriverManagement() {
  const [drivers, setDrivers] = useState(dummyDrivers);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewDriver, setViewDriver] = useState<typeof dummyDrivers[0] | null>(null);
  const [editDriver, setEditDriver] = useState<typeof dummyDrivers[0] | null>(null);
  const [addDriver, setAddDriver] = useState(false);
  const [newDriver, setNewDriver] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    totalRides: 0,
    rating: 0,
    status: "Active",
    joinDate: new Date().toISOString().split("T")[0],
  });

  const handleStatusChange = (id: number, status: string) => {
    setDrivers((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status } : d))
    );
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this driver?")) {
      setDrivers((prev) => prev.filter((d) => d.id !== id));
    }
  };

  const handleEditSave = () => {
    if (!editDriver) return;
    setDrivers((prev) =>
      prev.map((d) => (d.id === editDriver.id ? editDriver : d))
    );
    setEditDriver(null);
  };

  const handleAddDriver = () => {
    if (!newDriver.name || !newDriver.email || !newDriver.vehicle)
      return alert("Please fill all fields");
    setDrivers((prev) => [
      ...prev,
      { id: prev.length + 1, ...newDriver },
    ]);
    setAddDriver(false);
    setNewDriver({
      name: "",
      email: "",
      phone: "",
      vehicle: "",
      totalRides: 0,
      rating: 0,
      status: "Active",
      joinDate: new Date().toISOString().split("T")[0],
    });
  };

  const filteredDrivers = drivers.filter(
    (d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.phone.includes(searchTerm) ||
      d.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow-xl rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Driver Management</h2>
        <Button onClick={() => setAddDriver(true)}>+ Add Driver</Button>
      </div>

      <div className="mb-4">
        <Input
          placeholder="Search drivers by name, email, phone, or vehicle..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="overflow-x-auto rounded-lg shadow border">
        <Table className="min-w-full bg-white">
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="text-left font-semibold">Name</TableHead>
              <TableHead className="text-left font-semibold">Email</TableHead>
              <TableHead className="text-left font-semibold">Phone</TableHead>
              <TableHead className="text-left font-semibold">Vehicle</TableHead>
              <TableHead className="text-center font-semibold">Total Rides</TableHead>
              <TableHead className="text-center font-semibold">Rating</TableHead>
              <TableHead className="text-center font-semibold">Status</TableHead>
              <TableHead className="text-center font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDrivers.map((driver) => (
              <TableRow key={driver.id} className="hover:bg-gray-50">
                <TableCell>{driver.name}</TableCell>
                <TableCell>{driver.email}</TableCell>
                <TableCell>{driver.phone}</TableCell>
                <TableCell>{driver.vehicle}</TableCell>
                <TableCell className="text-center">{driver.totalRides}</TableCell>
                <TableCell className="text-center">{driver.rating}</TableCell>
                <TableCell className="text-center">
                  <span
                    className={`px-3 py-1 text-sm rounded-full font-medium ${statusStyles[driver.status]}`}
                  >
                    {driver.status}
                  </span>
                </TableCell>
                <TableCell className="flex justify-center items-center gap-2">
                  <Select
                    value={driver.status}
                    onValueChange={(val) => handleStatusChange(driver.id, val)}
                  >
                    <SelectTrigger className="w-28">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                      <SelectItem value="Suspended">Suspended</SelectItem>
                      <SelectItem value="Approved">Approved</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setViewDriver(driver)}
                  >
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setEditDriver(driver)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(driver.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {filteredDrivers.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-4 text-gray-500">
                  No drivers found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* View Modal */}
      <Dialog open={!!viewDriver} onOpenChange={() => setViewDriver(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Driver Profile</DialogTitle>
          </DialogHeader>
          {viewDriver && (
            <div className="space-y-2 text-sm">
              <p><strong>Name:</strong> {viewDriver.name}</p>
              <p><strong>Email:</strong> {viewDriver.email}</p>
              <p><strong>Phone:</strong> {viewDriver.phone}</p>
              <p><strong>Vehicle:</strong> {viewDriver.vehicle}</p>
              <p><strong>Total Rides:</strong> {viewDriver.totalRides}</p>
              <p><strong>Rating:</strong> {viewDriver.rating}</p>
              <p><strong>Status:</strong> {viewDriver.status}</p>
              <p><strong>Join Date:</strong> {viewDriver.joinDate}</p>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setViewDriver(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={!!editDriver} onOpenChange={() => setEditDriver(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Driver</DialogTitle>
          </DialogHeader>
          {editDriver && (
            <div className="space-y-3">
              <Input
                value={editDriver.name}
                onChange={(e) =>
                  setEditDriver({ ...editDriver, name: e.target.value })
                }
                placeholder="Name"
              />
              <Input
                value={editDriver.email}
                onChange={(e) =>
                  setEditDriver({ ...editDriver, email: e.target.value })
                }
                placeholder="Email"
              />
              <Input
                value={editDriver.phone}
                onChange={(e) =>
                  setEditDriver({ ...editDriver, phone: e.target.value })
                }
                placeholder="Phone"
              />
              <Input
                value={editDriver.vehicle}
                onChange={(e) =>
                  setEditDriver({ ...editDriver, vehicle: e.target.value })
                }
                placeholder="Vehicle"
              />
            </div>
          )}
          <DialogFooter>
            <Button variant="secondary" onClick={() => setEditDriver(null)}>
              Cancel
            </Button>
            <Button onClick={handleEditSave}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Driver Modal */}
      <Dialog open={addDriver} onOpenChange={setAddDriver}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Driver</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Input
              placeholder="Name"
              value={newDriver.name}
              onChange={(e) =>
                setNewDriver({ ...newDriver, name: e.target.value })
              }
            />
            <Input
              placeholder="Email"
              value={newDriver.email}
              onChange={(e) =>
                setNewDriver({ ...newDriver, email: e.target.value })
              }
            />
            <Input
              placeholder="Phone"
              value={newDriver.phone}
              onChange={(e) =>
                setNewDriver({ ...newDriver, phone: e.target.value })
              }
            />
            <Input
              placeholder="Vehicle Type"
              value={newDriver.vehicle}
              onChange={(e) =>
                setNewDriver({ ...newDriver, vehicle: e.target.value })
              }
            />
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setAddDriver(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddDriver}>Add Driver</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
