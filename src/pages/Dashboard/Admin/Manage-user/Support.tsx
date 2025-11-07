import { useState } from "react";
import { Button } from "@/components/ui/button";
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
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const dummyTickets = [
  {
    id: 1,
    user: "John Doe",
    email: "john@example.com",
    subject: "Payment not processed",
    message: "I completed a ride but payment didn’t go through.",
    status: "Open",
    assignedTo: "Unassigned",
    date: "2024-11-01",
  },
  {
    id: 2,
    user: "Sarah Lee",
    email: "sarah@example.com",
    subject: "Driver was rude",
    message: "The driver was impolite during the ride.",
    status: "Pending",
    assignedTo: "Support Agent A",
    date: "2024-10-30",
  },
  {
    id: 3,
    user: "Michael Smith",
    email: "michael@example.com",
    subject: "Refund request",
    message: "Requesting refund for cancelled ride.",
    status: "Resolved",
    assignedTo: "Support Agent B",
    date: "2024-10-25",
  },
];

const statusStyles: Record<string, string> = {
  Open: "bg-red-100 text-red-700",
  Pending: "bg-yellow-100 text-yellow-800",
  Resolved: "bg-green-100 text-green-800",
};

export default function AdminSupportManagement() {
  const [tickets, setTickets] = useState(dummyTickets);
  const [filters, setFilters] = useState({ search: "", status: "All" });
  const [selectedTicket, setSelectedTicket] = useState<typeof dummyTickets[0] | null>(null);
  const [response, setResponse] = useState("");

  const filteredTickets = tickets.filter((t) => {
    const matchSearch =
      t.user.toLowerCase().includes(filters.search.toLowerCase()) ||
      t.email.toLowerCase().includes(filters.search.toLowerCase()) ||
      t.subject.toLowerCase().includes(filters.search.toLowerCase());
    const matchStatus =
      filters.status === "All" || t.status === filters.status;
    return matchSearch && matchStatus;
  });

  const handleStatusChange = (id: number, newStatus: string) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  const handleAssign = (id: number, staff: string) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, assignedTo: staff } : t))
    );
  };

  const handleRespond = () => {
    if (selectedTicket) {
      alert(`Response sent to ${selectedTicket.email}:\n\n${response}`);
      setResponse("");
      setSelectedTicket(null);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Support Management</h2>

      {/* Filter Section */}
      <div className="bg-white shadow-sm p-4 mb-6 rounded-lg flex flex-wrap gap-3 items-center">
        <Input
          placeholder="Search by user, email, or subject"
          className="w-60"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
        <Select
          value={filters.status}
          onValueChange={(val) => setFilters({ ...filters, status: val })}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Open">Open</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Resolved">Resolved</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          onClick={() => setFilters({ search: "", status: "All" })}
        >
          Reset
        </Button>
      </div>

      {/* Tickets Table */}
      <Table className="bg-white shadow rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Assigned To</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell>{ticket.user}</TableCell>
                <TableCell>{ticket.email}</TableCell>
                <TableCell>{ticket.subject}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${statusStyles[ticket.status]}`}
                  >
                    {ticket.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Select
                    value={ticket.assignedTo}
                    onValueChange={(val) => handleAssign(ticket.id, val)}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Assign Staff" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Unassigned">Unassigned</SelectItem>
                      <SelectItem value="Support Agent A">Support Agent A</SelectItem>
                      <SelectItem value="Support Agent B">Support Agent B</SelectItem>
                      <SelectItem value="Support Agent C">Support Agent C</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>{ticket.date}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Select
                    onValueChange={(val) => handleStatusChange(ticket.id, val)}
                    value={ticket.status}
                  >
                    <SelectTrigger className="w-28">
                      <SelectValue placeholder="Change Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Open">Open</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedTicket(ticket)}
                  >
                    Respond
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={7}
                className="text-center py-4 text-gray-500"
              >
                No tickets found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Respond Dialog */}
      <Dialog open={!!selectedTicket} onOpenChange={() => setSelectedTicket(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Respond to Ticket</DialogTitle>
          </DialogHeader>
          {selectedTicket && (
            <div className="space-y-3">
              <p><strong>User:</strong> {selectedTicket.user}</p>
              <p><strong>Email:</strong> {selectedTicket.email}</p>
              <p><strong>Subject:</strong> {selectedTicket.subject}</p>
              <p><strong>Message:</strong> {selectedTicket.message}</p>
              <Textarea
                placeholder="Write your response..."
                value={response}
                onChange={(e) => setResponse(e.target.value)}
              />
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedTicket(null)}>
              Cancel
            </Button>
            <Button onClick={handleRespond}>Send Response</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
