
import { useState } from "react";
import { FaUser, FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

interface Review {
    id: number;
    riderName: string;
    pickup: string;
    destination: string;
    date: string;
    rating: number; // 1-5
    comment: string;
}

export default function Rating() {
    const [reviews] = useState<Review[]>([
        {
            id: 401,
            riderName: "John Doe",
            pickup: "Dhanmondi 27, Dhaka",
            destination: "Uttara Sector 10, Dhaka",
            date: "2025-11-07",
            rating: 5,
            comment: "Great ride, very punctual driver!",
        },
        {
            id: 402,
            riderName: "Sara Rahman",
            pickup: "Banani 11, Dhaka",
            destination: "Gulshan 2, Dhaka",
            date: "2025-11-07",
            rating: 4,
            comment: "Good ride, car was clean and comfortable.",
        },
        {
            id: 403,
            riderName: "Ali Hasan",
            pickup: "Mirpur 10, Dhaka",
            destination: "Mohammadpur, Dhaka",
            date: "2025-11-06",
            rating: 3,
            comment: "Driver was late, but ride was okay.",
        },
    ]);

    // Calculate summary
    const totalReviews = reviews.length;
    const averageRating =
        totalReviews > 0
            ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
            : 0;
    const ratingDistribution = [5, 4, 3, 2, 1].map((star) => ({
        star,
        count: reviews.filter((r) => r.rating === star).length,
    }));

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold mb-6">Ratings & Reviews</h1>

            {/* Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-white shadow rounded-xl p-4 flex flex-col items-start">
                    <span className="text-gray-500 text-sm">Average Rating</span>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-2xl font-bold text-yellow-500">{averageRating}</span>
                        <FaStar className="text-yellow-400" />
                    </div>
                </div>
                <div className="bg-white shadow rounded-xl p-4 flex flex-col items-start">
                    <span className="text-gray-500 text-sm">Total Reviews</span>
                    <span className="text-2xl font-bold text-blue-600">{totalReviews}</span>
                </div>
                <div className="bg-white shadow rounded-xl p-4 flex flex-col items-start">
                    <span className="text-gray-500 text-sm">Rating Distribution</span>
                    <div className="mt-2 w-full">
                        {ratingDistribution.map((r) => (
                            <div key={r.star} className="flex items-center gap-2 mb-1">
                                <span className="text-xs">{r.star}★</span>
                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-2 bg-yellow-400"
                                        style={{ width: `${(r.count / totalReviews) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="text-xs w-5 text-right">{r.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Reviews Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow">
                <table className="min-w-full text-left text-sm border-collapse">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3 border-b">Ride ID</th>
                            <th className="px-6 py-3 border-b">Rider</th>
                            <th className="px-6 py-3 border-b">Pickup</th>
                            <th className="px-6 py-3 border-b">Destination</th>
                            <th className="px-6 py-3 border-b">Date</th>
                            <th className="px-6 py-3 border-b">Rating</th>
                            <th className="px-6 py-3 border-b">Comment</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-800">
                        {reviews.map((review) => (
                            <tr key={review.id} className="hover:bg-gray-50 transition align-top">
                                <td className="px-6 py-4 border-b font-medium text-gray-700">#{review.id}</td>

                                <td className="px-6 py-4 border-b flex items-center gap-2 whitespace-nowrap">
                                    <FaUser className="text-indigo-500" /> {review.riderName}
                                </td>

                                <td className="px-6 py-4 border-b whitespace-normal">
                                    <MdLocationOn className="text-lime-600 inline mr-1" />
                                    {review.pickup}
                                </td>

                                <td className="px-6 py-4 border-b whitespace-normal">
                                    <MdLocationOn className="text-red-500 inline mr-1" />
                                    {review.destination}
                                </td>

                                <td className="px-6 py-4 border-b whitespace-nowrap">{review.date}</td>

                                <td className="px-6 py-4 border-b">
                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400" />
                                        ))}
                                    </div>
                                </td>

                                <td className="px-6 py-4 border-b">{review.comment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
