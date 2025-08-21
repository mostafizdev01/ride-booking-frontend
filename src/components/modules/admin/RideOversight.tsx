import { useState, useEffect } from "react"
import { Search, MapPin, Navigation, Clock, DollarSign, MoreHorizontal, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { format } from "date-fns"

import type { Ride } from "../../store/slices/rideSlice"

const RideOversight = () => {
  const [rides, setRides] = useState<Ride[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const ridesPerPage = 10

  useEffect(() => {
    // Mock ride data
    const mockRides= [
      {
        id: "ride-001",
        riderId: "rider-001",
        driverId: "driver-001",
        pickupLocation: { address: "123 Main St, San Francisco, CA", lat: 37.7749, lng: -122.4194 },
        destination: { address: "456 Market St, San Francisco, CA", lat: 37.7849, lng: -122.4094 },
        status: "in_transit",
        fare: 18.5,
        paymentMethod: "card",
        createdAt: "2024-01-21T10:30:00Z",
        updatedAt: "2024-01-21T10:45:00Z",
      },
      {
        id: "ride-002",
        riderId: "rider-002",
        driverId: "driver-002",
        pickupLocation: { address: "789 Pine St, San Francisco, CA", lat: 37.7649, lng: -122.4294 },
        destination: { address: "321 Oak St, San Francisco, CA", lat: 37.7549, lng: -122.4394 },
        status: "completed",
        fare: 12.75,
        paymentMethod: "cash",
        createdAt: "2024-01-21T09:15:00Z",
        updatedAt: "2024-01-21T09:45:00Z",
      },
      {
        id: "ride-003",
        riderId: "rider-003",
        driverId: "driver-003",
        pickupLocation: { address: "555 Broadway, San Francisco, CA", lat: 37.7949, lng: -122.3994 },
        destination: { address: "777 Mission St, San Francisco, CA", lat: 37.7449, lng: -122.4494 },
        status: "cancelled",
        fare: 0,
        paymentMethod: "card",
        createdAt: "2024-01-21T08:20:00Z",
        updatedAt: "2024-01-21T08:25:00Z",
      },
    ]
    setRides(mockRides)
  }, [])

  const filteredRides = rides.filter((ride) => {
    const matchesSearch =
      ride.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.pickupLocation.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.destination.address.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || ride.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const paginatedRides = filteredRides.slice((currentPage - 1) * ridesPerPage, currentPage * ridesPerPage)
  const totalPages = Math.ceil(filteredRides.length / ridesPerPage)

  const getStatusBadge = (status: Ride["status"]) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-500">Pending</Badge>
      case "accepted":
        return <Badge className="bg-blue-500">Accepted</Badge>
      case "in_transit":
        return <Badge className="bg-purple-500">In Transit</Badge>
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const calculateDuration = (createdAt: string, updatedAt: string) => {
    const start = new Date(createdAt)
    const end = new Date(updatedAt)
    const diffMinutes = Math.round((end.getTime() - start.getTime()) / (1000 * 60))
    return `${diffMinutes} min`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ride Oversight</CardTitle>
        <CardDescription>Monitor all rides and track real-time status</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search rides by ID or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="in_transit">In Transit</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Rides Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ride ID</TableHead>
                <TableHead>Route</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Fare</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedRides.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    No rides found matching your criteria
                  </TableCell>
                </TableRow>
              ) : (
                paginatedRides.map((ride) => (
                  <TableRow key={ride.id}>
                    <TableCell className="font-medium">{ride.id}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-3 w-3 text-green-500" />
                          <span className="truncate max-w-48">{ride.pickupLocation.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Navigation className="h-3 w-3 text-red-500" />
                          <span className="truncate max-w-48">{ride.destination.address}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(ride.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {ride.fare.toFixed(2)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {calculateDuration(ride.createdAt, ride.updatedAt)}
                      </div>
                    </TableCell>
                    <TableCell>{format(new Date(ride.createdAt), "MMM dd, HH:mm")}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <Dialog>
                            <DialogTrigger asChild>
                              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                              <DialogHeader>
                                <DialogTitle>Ride Details</DialogTitle>
                                <DialogDescription>Complete information for ride {ride.id}</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <h4 className="font-medium">Route Information</h4>
                                  <div className="space-y-1 text-sm">
                                    <div className="flex items-center gap-2">
                                      <MapPin className="h-4 w-4 text-green-500" />
                                      <span>From: {ride.pickupLocation.address}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Navigation className="h-4 w-4 text-red-500" />
                                      <span>To: {ride.destination.address}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="text-muted-foreground">Rider ID:</span>
                                    <p className="font-medium">{ride.riderId}</p>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Driver ID:</span>
                                    <p className="font-medium">{ride.driverId}</p>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Status:</span>
                                    <div className="mt-1">{getStatusBadge(ride.status)}</div>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Fare:</span>
                                    <p className="font-medium">${ride.fare.toFixed(2)}</p>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Payment:</span>
                                    <p className="capitalize">{ride.paymentMethod}</p>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Duration:</span>
                                    <p>{calculateDuration(ride.createdAt, ride.updatedAt)}</p>
                                  </div>
                                </div>
                                <div className="text-sm">
                                  <span className="text-muted-foreground">Created:</span>
                                  <p>{format(new Date(ride.createdAt), "MMMM dd, yyyy 'at' h:mm a")}</p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-muted-foreground">
              Showing {(currentPage - 1) * ridesPerPage + 1} to{" "}
              {Math.min(currentPage * ridesPerPage, filteredRides.length)} of {filteredRides.length} rides
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default RideOversight
