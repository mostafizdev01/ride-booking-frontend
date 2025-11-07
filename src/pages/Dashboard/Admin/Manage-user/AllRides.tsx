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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const dummyRides = [
  {
    id: 1,
    driver: "John Doe",
    rider: "Alice Smith",
    pickup: "Banani, Dhaka",
    destination: "Dhanmondi, Dhaka",
    fare: 350,
    vehicle: "Sedan",
    status: "Active",
    date: "2025-11-06",
  },
  {
    id: 2,
    driver: "Jane Smith",
    rider: "Michael Brown",
    pickup: "Uttara, Dhaka",
    destination: "Mirpur, Dhaka",
    fare: 480,
    vehicle: "SUV",
    status: "Completed",
    date: "2025-11-05",
  },
  {
    id: 3,
    driver: "Sam Wilson",
    rider: "Laura Khan",
    pickup: "Gulshan 1",
    destination: "Gulshan 2",
    fare: 120,
    vehicle: "Bike",
    status: "Cancelled",
    date: "2025-11-04",
  },
];

const statusStyles: Record<string, string> = {
  Active: "bg-blue-100 text-blue-700 border border-blue-200",
  Completed: "bg-green-100 text-green-700 border border-green-200",
  Cancelled: "bg-red-100 text-red-700 border border-red-200",
};

export default function AdminRideManagement() {
  const [rides] = useState(dummyRides);
  const [statusFilter, setStatusFilter] = useState("");
  const [driverFilter, setDriverFilter] = useState("");
  const [riderFilter, setRiderFilter] = useState("");
  const [dateFilter, setDateFilter] = useState<Date | undefined>(undefined);
  const [selectedRide, setSelectedRide] = useState<typeof dummyRides[0] | null>(
    null
  );

  const filteredRides = rides.filter((r) => {
    const matchStatus = statusFilter ? r.status === statusFilter : true;
    const matchDriver = driverFilter
      ? r.driver.toLowerCase().includes(driverFilter.toLowerCase())
      : true;
    const matchRider = riderFilter
      ? r.rider.toLowerCase().includes(riderFilter.toLowerCase())
      : true;
    const matchDate = dateFilter
      ? r.date === format(dateFilter, "yyyy-MM-dd")
      : true;
    return matchStatus && matchDriver && matchRider && matchDate;
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Ride Management</h2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Input
          placeholder="Filter by Driver"
          value={driverFilter}
          onChange={(e) => setDriverFilter(e.target.value)}
          className="w-56"
        />
        <Input
          placeholder="Filter by Rider"
          value={riderFilter}
          onChange={(e) => setRiderFilter(e.target.value)}
          className="w-56"
        />
        <Select onValueChange={setStatusFilter}>
          <SelectTrigger className="w-44">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>

        {/* Date Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-[200px] justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateFilter ? format(dateFilter, "PPP") : "Filter by Date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="p-0">
            <Calendar
              mode="single"
              selected={dateFilter}
              onSelect={setDateFilter}
            />
          </PopoverContent>
        </Popover>

        <Button
          variant="secondary"
          onClick={() => {
            setStatusFilter("");
            setDriverFilter("");
            setRiderFilter("");
            setDateFilter(undefined);
          }}
        >
          Reset Filters
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <Table className="min-w-full bg-white">
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Ride ID</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Rider</TableHead>
              <TableHead>Pickup</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead className="text-center">Fare (৳)</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredRides.map((ride) => (
              <TableRow key={ride.id} className="hover:bg-gray-50">
                <TableCell>{ride.id}</TableCell>
                <TableCell>{ride.driver}</TableCell>
                <TableCell>{ride.rider}</TableCell>
                <TableCell>{ride.pickup}</TableCell>
                <TableCell>{ride.destination}</TableCell>
                <TableCell className="text-center">{ride.fare}</TableCell>
                <TableCell>{ride.vehicle}</TableCell>
                <TableCell>
                  <span
                    className={`px-3 py-1 text-sm rounded-full font-medium ${statusStyles[ride.status]}`}
                  >
                    {ride.status}
                  </span>
                </TableCell>
                <TableCell>{ride.date}</TableCell>
                <TableCell className="text-center">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedRide(ride)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {filteredRides.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={10}
                  className="text-center py-4 text-gray-500"
                >
                  No rides found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* View Ride Details Modal */}
      <Dialog open={!!selectedRide} onOpenChange={() => setSelectedRide(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Ride Details</DialogTitle>
          </DialogHeader>
          {selectedRide && (
            <div className="space-y-2 text-sm">
              <p><strong>Ride ID:</strong> {selectedRide.id}</p>
              <p><strong>Driver:</strong> {selectedRide.driver}</p>
              <p><strong>Rider:</strong> {selectedRide.rider}</p>
              <p><strong>Pickup:</strong> {selectedRide.pickup}</p>
              <p><strong>Destination:</strong> {selectedRide.destination}</p>
              <p><strong>Fare:</strong> ৳{selectedRide.fare}</p>
              <p><strong>Vehicle:</strong> {selectedRide.vehicle}</p>
              <p><strong>Status:</strong> {selectedRide.status}</p>
              <p><strong>Date:</strong> {selectedRide.date}</p>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setSelectedRide(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
