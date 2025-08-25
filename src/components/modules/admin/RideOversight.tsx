"use client"

import { useState } from "react"
import { Search, MapPin, Navigation, Clock, DollarSign, MoreHorizontal, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { format } from "date-fns"
import { Ride, RideStatus } from "@/types/ride.type"
import { useGetAllRidesQuery } from "@/redux/features/ride/ride.api"

const RideOversight = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)

  // ---- API Call ----
  const { data, isLoading } = useGetAllRidesQuery({
    search: searchQuery || undefined,
    status: statusFilter !== "all" ? statusFilter : undefined,
    page: currentPage,
    limit: 5,
  })
  
  const rides: Ride[] = data?.data || []
  const meta = data?.meta || { total: 0, page: 1, limit: 10 }
  const totalPages = Math.ceil(meta.total / meta.limit)

  const getStatusBadge = (status: Ride["status"]) => {
    switch (status) {
      case RideStatus.REQUESTED:
        return <Badge className="bg-yellow-500">Requested</Badge>
      case RideStatus.ACCEPTED:
        return <Badge className="bg-blue-500">Accepted</Badge>
      case RideStatus.IN_TRANSIT:
        return <Badge className="bg-purple-500">In Transit</Badge>
      case RideStatus.COMPLETED:
        return <Badge className="bg-green-500">Completed</Badge>
      case RideStatus.CANCELED:
        return <Badge variant="destructive">Cancelled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const calculateDuration = (createdAt: string, updatedAt: string) => {
    if (!createdAt || !updatedAt) return "-"
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
              onChange={(e) => {
                setSearchQuery(e.target.value)
              }}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={(val) => { setStatusFilter(val) }}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="requested">Requested</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="in_transit">In Transit</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="canceled">Cancelled</SelectItem>
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
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">Loading...</TableCell>
                </TableRow>
              ) : rides.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">No rides found</TableCell>
                </TableRow>
              ) : (
                rides.map((ride) => (
                  <TableRow key={ride._id}>
                    <TableCell className="font-medium">{ride._id}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-3 w-3 text-green-500" />
                          <span className="truncate max-w-48">{ride.pickupLocation.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Navigation className="h-3 w-3 text-red-500" />
                          <span className="truncate max-w-48">{ride.destinationLocation.address}</span>
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
                        {calculateDuration(ride.timestamps?.pickedUpAt, ride.timestamps?.completedAt)}
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
                                <Eye className="mr-2 h-4 w-4" /> View Details
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                              <DialogHeader>
                                <DialogTitle>Ride Details</DialogTitle>
                                <DialogDescription>Complete information for ride {ride._id}</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <h4 className="font-medium">Route</h4>
                                  <p>From: {ride.pickupLocation.address}</p>
                                  <p>To: {ride.destinationLocation.address}</p>
                                </div>
                                <p><strong>Status:</strong> {ride.status}</p>
                                <p><strong>Fare:</strong> ${ride.fare.toFixed(2)}</p>
                                <p><strong>Payment:</strong> {ride.paymentMethod}</p>
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
              Showing {(meta.page - 1) * meta.limit + 1} to {Math.min(meta.page * meta.limit, meta.total)} of {meta.total} rides
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setCurrentPage((p) => p - 1)} disabled={meta.page === 1}>Previous</Button>
              <span className="text-sm">Page {meta.page} of {totalPages}</span>
              <Button variant="outline" size="sm" onClick={() => setCurrentPage((p) => p + 1)} disabled={meta.page === totalPages}>Next</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default RideOversight
