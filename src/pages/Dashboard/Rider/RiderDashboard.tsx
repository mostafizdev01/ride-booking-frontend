
import {
    IconCar,
    IconUser,
    IconStar,
    IconClock,
} from "@tabler/icons-react";

export default function RiderDashboard() {
    const stats = [
        { title: "Total Rides", count: 12, icon: IconCar, color: "text-blue-500" },
        { title: "Total Spent", count: "$250", icon: IconUser, color: "text-green-500" },
        { title: "Average Rating", count: "4.8", icon: IconStar, color: "text-yellow-500" },
        { title: "Upcoming Ride", count: "2", icon: IconClock, color: "text-purple-500" },
    ];

    const recentRides = [
        { id: "R001", date: "2025-11-03", driver: "John Doe", status: "Completed", amount: "$25" },
        { id: "R002", date: "2025-11-04", driver: "Jane Smith", status: "Cancelled", amount: "$0" },
        { id: "R003", date: "2025-11-05", driver: "Mike Johnson", status: "Pending", amount: "$30" },
    ];

    const suggestedDrivers = [
        { name: "Alex Rider", rating: 4.9, distance: "2 km" },
        { name: "Sophie Lane", rating: 4.8, distance: "3 km" },
        { name: "Tom Hardy", rating: 4.7, distance: "4 km" },
    ];


    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}

            {/* Main Content */}
            <main className="flex-1 p-6">

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {stats.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-md shadow-md flex justify-between items-center">
                            <div>
                                <div className="text-xl font-semibold">{item.count}</div>
                                <div className="text-gray-400 text-sm">{item.title}</div>
                            </div>
                            <item.icon className={`${item.color} text-3xl`} />
                        </div>
                    ))}
                </div>

                {/* Recent Rides Table */}
                <div className="bg-white rounded-md shadow-md p-4 mb-6">
                    <h2 className="font-semibold mb-4 text-lg">Recent Rides</h2>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-500 text-sm border-b">
                                <th className="p-2">Ride ID</th>
                                <th className="p-2">Date</th>
                                <th className="p-2">Driver</th>
                                <th className="p-2">Status</th>
                                <th className="p-2">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentRides.map((ride, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="p-2">{ride.id}</td>
                                    <td className="p-2">{ride.date}</td>
                                    <td className="p-2">{ride.driver}</td>
                                    <td className="p-2">{ride.status}</td>
                                    <td className="p-2">{ride.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Suggested Drivers */}
                <div className="bg-white rounded-md shadow-md p-4">
                    <h2 className="font-semibold mb-4 text-lg">Suggested Drivers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {suggestedDrivers.map((driver, index) => (
                            <div key={index} className="p-4 border rounded-md flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-gray-300 rounded-full mb-2" /> {/* driver avatar */}
                                <div className="font-semibold">{driver.name}</div>
                                <div className="text-gray-500 text-sm">{driver.rating} ⭐</div>
                                <div className="text-gray-400 text-sm">{driver.distance}</div>
                                <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-medium">Book Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
