import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const dummyEarnings = [
  {
    id: 1,
    driver: "John Doe",
    rider: "Alice Smith",
    rideType: "Standard",
    payment: "Card",
    fare: 350,
    date: "2025-11-06",
  },
  {
    id: 2,
    driver: "Jane Smith",
    rider: "Michael Brown",
    rideType: "Premium",
    payment: "Cash",
    fare: 480,
    date: "2025-11-05",
  },
  {
    id: 3,
    driver: "Sam Wilson",
    rider: "Laura Khan",
    rideType: "Bike",
    payment: "Mobile",
    fare: 120,
    date: "2025-11-04",
  },
];

export default function AdminEarningManagement() {
  const [earnings] = useState(dummyEarnings);
  const [driverFilter, setDriverFilter] = useState("");
  const [riderFilter, setRiderFilter] = useState("");
  const [rideTypeFilter, setRideTypeFilter] = useState("");

  // --- Filtered Data ---
  const filtered = earnings.filter((e) => {
    const matchDriver = driverFilter
      ? e.driver.toLowerCase().includes(driverFilter.toLowerCase())
      : true;
    const matchRider = riderFilter
      ? e.rider.toLowerCase().includes(riderFilter.toLowerCase())
      : true;
    const matchType = rideTypeFilter ? e.rideType === rideTypeFilter : true;
    return matchDriver && matchRider && matchType;
  });

  // --- Stats ---
  const totalRevenue = filtered.reduce((acc, cur) => acc + cur.fare, 0);
  const dailyRevenue = 350 + 480; // dummy
  const monthlyRevenue = 16000; // dummy

  const paymentSummary = {
    Cash: filtered.filter((f) => f.payment === "Cash").length,
    Card: filtered.filter((f) => f.payment === "Card").length,
    Mobile: filtered.filter((f) => f.payment === "Mobile").length,
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Earnings Management</h2>

      {/* ===== Summary Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="shadow-sm border">
          <CardHeader>
            <CardTitle className="text-lg">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">৳{totalRevenue}</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border">
          <CardHeader>
            <CardTitle className="text-lg">Daily Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-blue-600">৳{dailyRevenue}</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border">
          <CardHeader>
            <CardTitle className="text-lg">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-purple-600">
              ৳{monthlyRevenue}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* ===== Payment Summary ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-4 text-center">
            <p className="text-gray-600 text-sm">Cash Payments</p>
            <p className="text-xl font-semibold text-gray-800">
              {paymentSummary.Cash}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 text-center">
            <p className="text-gray-600 text-sm">Card Payments</p>
            <p className="text-xl font-semibold text-gray-800">
              {paymentSummary.Card}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 text-center">
            <p className="text-gray-600 text-sm">Mobile Payments</p>
            <p className="text-xl font-semibold text-gray-800">
              {paymentSummary.Mobile}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* ===== Filters ===== */}
      <div className="flex flex-wrap gap-4 items-center">
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
        <Select onValueChange={setRideTypeFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by Ride Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Standard">Standard</SelectItem>
            <SelectItem value="Premium">Premium</SelectItem>
            <SelectItem value="Bike">Bike</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="secondary"
          onClick={() => {
            setDriverFilter("");
            setRiderFilter("");
            setRideTypeFilter("");
          }}
        >
          Reset
        </Button>
      </div>

      {/* ===== Earnings Table ===== */}
      <div className="overflow-x-auto rounded-lg shadow border">
        <Table className="min-w-full bg-white">
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Ride ID</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Rider</TableHead>
              <TableHead>Ride Type</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead className="text-right">Fare (৳)</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filtered.map((row) => (
              <TableRow key={row.id} className="hover:bg-gray-50">
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.driver}</TableCell>
                <TableCell>{row.rider}</TableCell>
                <TableCell>{row.rideType}</TableCell>
                <TableCell>{row.payment}</TableCell>
                <TableCell className="text-right font-medium text-gray-800">
                  {row.fare}
                </TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4 text-gray-500">
                  No earnings data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* ===== Export Buttons ===== */}
      <div className="flex justify-end gap-3 mt-4">
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="w-4 h-4" /> Export CSV
        </Button>
        <Button variant="default" className="flex items-center gap-2">
          <FileText className="w-4 h-4" /> Export PDF
        </Button>
      </div>
    </div>
  );
}
