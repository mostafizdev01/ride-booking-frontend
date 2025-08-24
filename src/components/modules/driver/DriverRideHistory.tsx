

import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { format } from "date-fns"
import { Search, MapPin, Navigation, DollarSign, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import type { RootState } from "../../store/store"
import type { Ride } from "../../store/slices/rideSlice"

const DriverRideHistory = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [dateFilter, setDateFilter] = useState<string>("all")
  const [rides, setRides] = useState<Ride[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const ridesPerPage = 10

  const { user } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    // Mock driver ride history data
    const mockRides: Ride[] = [
      {
        id: "ride-d001",
        riderId: "rider-001",
        driverId: user?.id || "",
        pickupLocation: { address: "123 Main St, San Francisco, CA", lat: 37.7749, lng: -122.4194 },
        destination: { address: "456 Market St, San Francisco, CA", lat: 37.7849, lng: -122.4094 },
        status: "completed",
        fare: 18.5,
        paymentMethod: "card",
        createdAt: "2024-01-15T10:30:00Z",
        updatedAt: "2024-01-15T11:00:00Z",
      },
      {
        id: "ride-d002",
        riderId: "rider-002",
        driverId: user?.id || "",
        pickupLocation: { address: "789 Pine St, San Francisco, CA", lat: 37.7649, lng: -122.4294 },
        destination: { address: "321 Oak St, San Francisco, CA", lat: 37.7549, lng: -122.4394 },
        status: "completed",
        fare: 12.75,
        paymentMethod: "cash",
        createdAt: "2024-01-14T15:45:00Z",
        updatedAt: "2024-01-14T16:15:00Z",
      },
      {
        id: "ride-d003",
        riderId: "rider-003",
        driverId: user?.id || "",
        pickupLocation: { address: "555 Broadway, San Francisco, CA", lat: 37.7949, lng: -122.3994 },
        destination: { address: "777 Mission St, San Francisco, CA", lat: 37.7449, lng: -122.4494 },
        status: "cancelled",
        fare: 0,
        paymentMethod: "card",
        createdAt: "2024-01-13T09:20:00Z",
        updatedAt: "2024-01-13T09:25:00Z",
      },
    ]
    setRides(mockRides)
  }, [user?.id])

  const filteredRides = rides.filter((ride) => {
    const matchesSearch =
      ride.pickupLocation.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.destination.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || ride.status === statusFilter

    const matchesDate = (() => {
      if (dateFilter === "all") return true
      const rideDate = new Date(ride.createdAt)
      const now = new Date()

      switch (dateFilter) {
        case "today":
          return rideDate.toDateString() === now.toDateString()
        case "week":
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
          return rideDate >= weekAgo
        case "month":
          const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
          return rideDate >= monthAgo
        default:
          return true
      }
    })()

    return matchesSearch && matchesStatus && matchesDate
  })

  const paginatedRides = filteredRides.slice((currentPage - 1) * ridesPerPage, currentPage * ridesPerPage)
  const totalPages = Math.ceil(filteredRides.length / ridesPerPage)

  const getStatusBadge = (status: Ride["status"]) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>
      case "in_transit":
        return <Badge className="bg-blue-500">In Transit</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const calculateTripDuration = (createdAt: string, updatedAt: string) => {
    const start = new Date(createdAt)
    const end = new Date(updatedAt)
    const diffMinutes = Math.round((end.getTime() - start.getTime()) / (1000 * 60))
    return `${diffMinutes} min`
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Driver Ride History</CardTitle>
          <CardDescription>View and manage your completed rides</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search rides by location or ID..."
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
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Rides List */}
          <div className="space-y-4">
            {paginatedRides.length === 0 ? (
              <div className="text-center py-8">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No rides found matching your criteria</p>
              </div>
            ) : (
              paginatedRides.map((ride) => (
                <Dialog key={ride.id}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">
                                {format(new Date(ride.createdAt), "MMM dd, yyyy 'at' h:mm a")}
                              </span>
                              {getStatusBadge(ride.status)}
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-green-500" />
                                <span className="truncate">{ride.pickupLocation.address}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Navigation className="h-4 w-4 text-red-500" />
                                <span className="truncate">{ride.destination.address}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <DollarSign className="h-3 w-3" />${ride.fare.toFixed(2)}
                              </span>
                              <span className="capitalize">{ride.paymentMethod}</span>
                              <span>{calculateTripDuration(ride.createdAt, ride.updatedAt)}</span>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Ride Details</DialogTitle>
                      <DialogDescription>Ride ID: {ride.id}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Trip Information</h4>
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
                          <p>{calculateTripDuration(ride.createdAt, ride.updatedAt)}</p>
                        </div>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Trip Date:</span>
                        <p>{format(new Date(ride.createdAt), "MMMM dd, yyyy 'at' h:mm a")}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))
            )}
          </div>

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
    </div>
  )
}

export default DriverRideHistory
