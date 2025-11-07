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
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const dummyReviews = [
  {
    id: 1,
    rideId: "RIDE-1023",
    driver: "John Doe",
    rider: "Jane Smith",
    rating: 5,
    feedback: "Excellent ride experience!",
    date: "2024-11-02",
  },
  {
    id: 2,
    rideId: "RIDE-1089",
    driver: "Ali Khan",
    rider: "Sarah Lee",
    rating: 2,
    feedback: "Driver arrived late and car was dirty.",
    date: "2024-10-29",
  },
  {
    id: 3,
    rideId: "RIDE-1101",
    driver: "David Kim",
    rider: "Emily Zhang",
    rating: 4,
    feedback: "Smooth trip, very polite driver.",
    date: "2024-11-01",
  },
  {
    id: 4,
    rideId: "RIDE-1122",
    driver: "Mohammad Rahim",
    rider: "Robert Green",
    rating: 1,
    feedback: "Rude behavior, will not ride again.",
    date: "2024-10-25",
  },
];

export default function AdminReviewManagement() {
  const [reviews] = useState(dummyReviews);
  const [selectedReview, setSelectedReview] = useState<typeof dummyReviews[0] | null>(null);
  const [filters, setFilters] = useState({
    search: "",
    rating: "All",
    date: "",
  });

  const filteredReviews = reviews.filter((r) => {
    const matchSearch =
      r.driver.toLowerCase().includes(filters.search.toLowerCase()) ||
      r.rider.toLowerCase().includes(filters.search.toLowerCase()) ||
      r.rideId.toLowerCase().includes(filters.search.toLowerCase());
    const matchRating =
      filters.rating === "All" || r.rating === Number(filters.rating);
    const matchDate =
      !filters.date || r.date === filters.date;
    return matchSearch && matchRating && matchDate;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Review Management</h2>

      {/* Filter Section */}
      <div className="bg-white shadow-sm p-4 mb-6 rounded-lg flex flex-wrap gap-3 items-center">
        <Input
          placeholder="Search by Ride ID, Driver, or Rider"
          className="w-60"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
        <Select
          value={filters.rating}
          onValueChange={(val) => setFilters({ ...filters, rating: val })}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Ratings</SelectItem>
            <SelectItem value="5">5 Stars</SelectItem>
            <SelectItem value="4">4 Stars</SelectItem>
            <SelectItem value="3">3 Stars</SelectItem>
            <SelectItem value="2">2 Stars</SelectItem>
            <SelectItem value="1">1 Star</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="date"
          className="w-44"
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
        />
        <Button
          variant="outline"
          onClick={() =>
            setFilters({ search: "", rating: "All", date: "" })
          }
        >
          Reset Filters
        </Button>
      </div>

      {/* Table Section */}
      <Table className="bg-white shadow rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Ride ID</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Rider</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Feedback</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <TableRow
                key={review.id}
                className={
                  review.rating <= 2
                    ? "bg-red-50 hover:bg-red-100 transition-all"
                    : "hover:bg-gray-50"
                }
              >
                <TableCell>{review.rideId}</TableCell>
                <TableCell>{review.driver}</TableCell>
                <TableCell>{review.rider}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-semibold ${review.rating >= 4
                        ? "bg-green-100 text-green-800"
                        : review.rating === 3
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                  >
                    ⭐ {review.rating}
                  </span>
                </TableCell>
                <TableCell className="max-w-[300px] truncate">
                  {review.feedback}
                </TableCell>
                <TableCell>{review.date}</TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedReview(review)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-4 text-gray-500">
                No reviews found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* View Review Modal */}
      <Dialog open={!!selectedReview} onOpenChange={() => setSelectedReview(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Review Details</DialogTitle>
          </DialogHeader>
          {selectedReview && (
            <div className="space-y-2">
              <p><strong>Ride ID:</strong> {selectedReview.rideId}</p>
              <p><strong>Driver:</strong> {selectedReview.driver}</p>
              <p><strong>Rider:</strong> {selectedReview.rider}</p>
              <p>
                <strong>Rating:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded-full text-sm font-semibold ${selectedReview.rating >= 4
                      ? "bg-green-100 text-green-800"
                      : selectedReview.rating === 3
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                >
                  ⭐ {selectedReview.rating}
                </span>
              </p>
              <p><strong>Feedback:</strong> {selectedReview.feedback}</p>
              <p><strong>Date:</strong> {selectedReview.date}</p>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setSelectedReview(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
