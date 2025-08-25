/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Search, MapPin, Navigation, DollarSign, Star, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import { type Ride, RideStatus } from "@/types/ride.type"
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
      await cancelRide({ rideId: selectedRideId, reason: cancelReason }).unwrap()
      toast.success("Ride cancelled successfully ✅")
      setCancelOpen(false)
      setSelectedRideId(null)
      setCancelReason("")
      setRides((prev) =>
        prev.map((r) => {
          return r._id === selectedRideId ? { ...r, status: RideStatus.CANCELED } : r
        }),
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

  const paginatedRides = filteredRides.slice((currentPage - 1) * ridesPerPage, currentPage * ridesPerPage)
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header - Improved responsive design */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Your Ride History
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">Track, manage, cancel, or rate your rides</p>
        </div>

        {/* Filters - Mobile-first responsive design */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-4 sm:p-6">
            {/* Mobile Filter Toggle */}
            <div className="block sm:hidden mb-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters & Search
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filter Rides</SheetTitle>
                    <SheetDescription>Search and filter your ride history</SheetDescription>
                  </SheetHeader>
                  <div className="space-y-4 mt-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Search by location or ride ID..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
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
                      <SelectTrigger>
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
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Filters */}
            <div className="hidden sm:flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search by location or ride ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-slate-200 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full lg:w-40 border-slate-200">
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
                <SelectTrigger className="w-full lg:w-40 border-slate-200">
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
          </CardContent>
        </Card>

        {/* Ride List - Improved mobile layout */}
        <div className="space-y-4">
          {paginatedRides.length === 0 ? (
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="text-center py-16">
                <MapPin className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-600 mb-2">No rides found</h3>
                <p className="text-slate-500">Try adjusting your filters to see more results</p>
              </CardContent>
            </Card>
          ) : (
            paginatedRides.map((ride) => (
              <Card
                key={ride._id}
                className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-l-4 border-l-amber-500"
              >
                <CardContent className="p-4 sm:p-6">
                  {/* Mobile Layout */}
                  <div className="block sm:hidden space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <span className="text-xs text-slate-500 font-medium">
                          {format(new Date(ride.createdAt), "MMM dd, h:mm a")}
                        </span>
                        {getStatusBadge(ride.status)}
                      </div>
                      <div className="flex flex-col gap-2">
                        {ride.status === RideStatus.REQUESTED && (
                          <Button variant="destructive" size="sm" onClick={() => openCancelModal(ride._id)}>
                            Cancel
                          </Button>
                        )}
                        {ride.status === RideStatus.COMPLETED && !ride.rating && (
                          <Button variant="secondary" size="sm" onClick={() => openRateModal(ride._id)}>
                            Rate
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700 leading-tight">{ride.pickupLocation.address}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Navigation className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700 leading-tight">{ride.destinationLocation.address}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1 font-semibold">
                          <DollarSign className="h-3 w-3" />${ride.fare.toFixed(2)}
                        </span>
                        <span className="capitalize text-xs bg-slate-100 px-2 py-1 rounded-full">
                          {ride.paymentMethod}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden sm:flex justify-between items-center">
                    <div className="space-y-3 flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500 font-medium">
                          {format(new Date(ride.createdAt), "MMM dd, yyyy h:mm a")}
                        </span>
                        {getStatusBadge(ride.status)}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-slate-700">{ride.pickupLocation.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Navigation className="h-4 w-4 text-red-500" />
                          <span className="text-sm text-slate-700">{ride.destinationLocation.address}</span>
                        </div>
                      </div>
                      <div className="flex gap-6 text-sm text-slate-600">
                        <span className="flex items-center gap-1 font-semibold">
                          <DollarSign className="h-3 w-3" />${ride.fare.toFixed(2)}
                        </span>
                        <span className="capitalize bg-slate-100 px-3 py-1 rounded-full text-xs">
                          {ride.paymentMethod}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {ride.status === RideStatus.REQUESTED && (
                        <Button variant="destructive" size="sm" onClick={() => openCancelModal(ride._id)}>
                          Cancel
                        </Button>
                      )}
                      {ride.status === RideStatus.COMPLETED && !ride.rating && (
                        <Button variant="secondary" size="sm" onClick={() => openRateModal(ride._id)}>
                          Rate Ride
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Pagination - Improved mobile design */}
        {totalPages > 1 && (
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-slate-600 text-center sm:text-left">
                  Showing {(currentPage - 1) * ridesPerPage + 1} to{" "}
                  {Math.min(currentPage * ridesPerPage, filteredRides.length)} of {filteredRides.length} rides
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="border-slate-200"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="border-slate-200"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
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
              <Button variant="outline" onClick={() => setCancelOpen(false)}>
                Close
              </Button>
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
              <Button variant="outline" onClick={() => setRateOpen(false)}>
                Close
              </Button>
              <Button variant="secondary" onClick={confirmRate} disabled={isRating}>
                {isRating ? "Submitting..." : "Submit Rating"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default RideHistory
