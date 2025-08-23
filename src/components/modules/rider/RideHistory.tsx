/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Search, MapPin, Navigation, DollarSign, Star, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

import { Ride, RideStatus } from "@/types/ride.type"
import { useCancelRideMutation, useRateRideMutation, useGetRideHistoryQuery } from "@/redux/features/ride/ride.api"
import { toast } from "sonner"

// ⭐ Star Rating Component
interface StarRatingProps {
  rating: number
  setRating: (value: number) => void
  max?: number
}
const StarRating = ({ rating, setRating, max = 5 }: StarRatingProps) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => i + 1).map((i) => (
        <Star
          key={i}
          className={`h-6 w-6 cursor-pointer transition ${
            i <= rating ? "fill-yellow-400 text-yellow-400" : "fill-none text-gray-400"
          }`}
          onClick={() => setRating(i)}
        />
      ))}
    </div>
  )
}

const RideHistory = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [dateFilter, setDateFilter] = useState<string>("all")
  const [rides, setRides] = useState<Ride[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const ridesPerPage = 8

  const { data, isLoading, isError } = useGetRideHistoryQuery([])
  const [cancelRide, { isLoading: isCancelling }] = useCancelRideMutation()
  const [rateRide, { isLoading: isRating }] = useRateRideMutation()

  // Cancel Modal States
  const [cancelOpen, setCancelOpen] = useState(false)
  const [selectedRideId, setSelectedRideId] = useState<string | null>(null)
  const [cancelReason, setCancelReason] = useState("")

  // Rate Modal States
  const [rateOpen, setRateOpen] = useState(false)
  const [ratingValue, setRatingValue] = useState<number>(5)
  const [ratingFeedback, setRatingFeedback] = useState("")

  // --- Handlers ---

  const openCancelModal = (rideId: string) => {
    setSelectedRideId(rideId)
    setCancelReason("")
    setCancelOpen(true)
  }

  const openRateModal = (rideId: string) => {
    setSelectedRideId(rideId)
    setRatingValue(5)
    setRatingFeedback("")
    setRateOpen(true)
  }

  const confirmCancel = async () => {
    if (!selectedRideId) return
    if (!cancelReason.trim()) {
      toast.error("Please provide a reason for cancellation")
      return
    }

    try {
      await cancelRide(selectedRideId).unwrap()
      toast.success("Ride cancelled successfully ✅")
      setCancelOpen(false)
      setSelectedRideId(null)
      setCancelReason("")
      // Update local ride list
      setRides((prev) =>
        prev.map((r) =>
          r._id === selectedRideId ? { ...r, status: RideStatus.CANCELED } : r
        )
      )
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to cancel ride ❌")
    }
  }

  const confirmRate = async () => {
    if (!selectedRideId) return
    if (!ratingFeedback.trim()) {
      toast.error("Please provide feedback for the driver")
      return
    }

    try {
      await rateRide({
        rideId: selectedRideId,
        score: ratingValue,
        feedback: ratingFeedback,
      }).unwrap()
      toast.success("Ride rated successfully ⭐")
      setRateOpen(false)
      setSelectedRideId(null)
      setRatingFeedback("")
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to rate ride ❌")
    }
  }

  // Load ride data
  useEffect(() => {
    if (data && data?.data) setRides(data.data)
  }, [data])

  // Filtered Rides
  const filteredRides = rides.filter((ride) => {
    const matchesSearch =
      ride.pickupLocation.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.destinationLocation.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride._id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || ride.status === statusFilter

    const matchesDate = (() => {
      if (dateFilter === "all") return true
      const rideDate = new Date(ride.createdAt)
      const now = new Date()

      switch (dateFilter) {
        case "today":
          return rideDate.toDateString() === now.toDateString()
        case "week": {
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
          return rideDate >= weekAgo
        }
        case "month": {
          const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
          return rideDate >= monthAgo
        }
        default:
          return true
      }
    })()

    return matchesSearch && matchesStatus && matchesDate
  })

  const paginatedRides = filteredRides.slice(
    (currentPage - 1) * ridesPerPage,
    currentPage * ridesPerPage
  )
  const totalPages = Math.ceil(filteredRides.length / ridesPerPage)

  const getStatusBadge = (status: Ride["status"]) => {
    switch (status) {
      case RideStatus.COMPLETED:
        return <Badge className="bg-green-500">Completed</Badge>
      case RideStatus.CANCELED:
        return <Badge variant="destructive">Cancelled</Badge>
      case RideStatus.IN_TRANSIT:
        return <Badge className="bg-blue-500">In Transit</Badge>
      case RideStatus.REQUESTED:
        return <Badge className="bg-yellow-500">Requested</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  if (isLoading) return <p className="text-center py-8">Loading ride history...</p>
  if (isError) return <p className="text-center py-8 text-red-500">Failed to load ride history.</p>

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">Your Ride History</h1>
        <p className="text-muted-foreground">Track, manage, cancel, or rate your rides</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by location or ride ID..."
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
              <SelectItem value={RideStatus.REQUESTED}>Requested</SelectItem>
              <SelectItem value={RideStatus.IN_TRANSIT}>In Transit</SelectItem>
              <SelectItem value={RideStatus.COMPLETED}>Completed</SelectItem>
              <SelectItem value={RideStatus.CANCELED}>Cancelled</SelectItem>
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
        </CardContent>
      </Card>

      {/* Ride List */}
      <div className="grid gap-4">
        {paginatedRides.length === 0 ? (
          <div className="text-center py-16">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No rides found matching your filters</p>
          </div>
        ) : (
          paginatedRides.map((ride) => (
            <Card key={ride._id} className="hover:shadow-lg transition cursor-pointer border-l-4 border-l-primary">
              <CardContent className="p-5 flex justify-between items-center">
                <div className="space-y-2 flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {format(new Date(ride.createdAt), "MMM dd, yyyy h:mm a")}
                    </span>
                    {getStatusBadge(ride.status)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-green-500" />
                      <span className="truncate">{ride.pickupLocation.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Navigation className="h-4 w-4 text-red-500" />
                      <span className="truncate">{ride.destinationLocation.address}</span>
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />${ride.fare.toFixed(2)}
                    </span>
                    <span className="capitalize">{ride.paymentMethod}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  {ride.status === RideStatus.REQUESTED && (
                    <Button variant="destructive" size="sm" onClick={() => openCancelModal(ride._id)}>
                      Cancel
                    </Button>
                  )}
                  {ride.status === RideStatus.COMPLETED && (
                    <Button variant="secondary" size="sm" onClick={() => openRateModal(ride._id)}>
                      Rate Ride
                    </Button>
                  )}
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground ml-2" />
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <p className="text-sm text-muted-foreground">
            Showing {(currentPage - 1) * ridesPerPage + 1} to{" "}
            {Math.min(currentPage * ridesPerPage, filteredRides.length)} of {filteredRides.length} rides
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </Button>
            <Button variant="outline" size="sm" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Cancel Ride Modal */}
      <Dialog open={cancelOpen} onOpenChange={setCancelOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Cancel Ride</DialogTitle>
            <DialogDescription>Please provide a reason for cancelling this ride.</DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder="Enter reason here..."
            value={cancelReason}
            onChange={(e) => setCancelReason(e.target.value)}
            className="mb-4"
          />
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setCancelOpen(false)}>Close</Button>
            <Button variant="destructive" onClick={confirmCancel} disabled={isCancelling}>
              {isCancelling ? "Cancelling..." : "Confirm Cancel"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Rate Ride Modal */}
      <Dialog open={rateOpen} onOpenChange={setRateOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Rate Ride</DialogTitle>
            <DialogDescription>Please provide a rating for your ride.</DialogDescription>
          </DialogHeader>
          <StarRating rating={ratingValue} setRating={setRatingValue} />
          <Textarea
            placeholder="Write feedback here..."
            value={ratingFeedback}
            onChange={(e) => setRatingFeedback(e.target.value)}
            className="mt-4 mb-4"
          />
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setRateOpen(false)}>Close</Button>
            <Button variant="secondary" onClick={confirmRate} disabled={isRating}>
              {isRating ? "Submitting..." : "Submit Rating"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default RideHistory
