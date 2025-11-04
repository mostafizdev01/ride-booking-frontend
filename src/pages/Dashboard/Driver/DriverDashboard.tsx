
import {
    IconCar,
    IconChartBar,
    IconStar,
    IconClock,
} from "@tabler/icons-react";

export default function DriverDashboard() {
    const stats = [
        { title: "Total Rides", count: 28, icon: IconCar, color: "text-blue-500" },
        { title: "Earnings", count: "$450", icon: IconChartBar, color: "text-green-500" },
        { title: "Average Rating", count: "4.7", icon: IconStar, color: "text-yellow-500" },
        { title: "Pending Rides", count: 3, icon: IconClock, color: "text-purple-500" },
    ];

    const upcomingRides = [
        { id: "R101", date: "2025-11-03", rider: "Alice Brown", pickup: "Street 12", drop: "Street 45", status: "Scheduled" },
        { id: "R102", date: "2025-11-03", rider: "Bob Green", pickup: "Main St", drop: "Park Ave", status: "Scheduled" },
        { id: "R103", date: "2025-11-04", rider: "Charlie Black", pickup: "City Center", drop: "Airport", status: "Pending" },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Top Bar */}
                

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

                {/* Upcoming Rides Table */}
                <div className="bg-white rounded-md shadow-md p-4 mb-6">
                    <h2 className="font-semibold mb-4 text-lg">Upcoming Rides</h2>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-500 text-sm border-b">
                                <th className="p-2">Ride ID</th>
                                <th className="p-2">Date</th>
                                <th className="p-2">Rider</th>
                                <th className="p-2">Pickup</th>
                                <th className="p-2">Drop</th>
                                <th className="p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {upcomingRides.map((ride, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="p-2">{ride.id}</td>
                                    <td className="p-2">{ride.date}</td>
                                    <td className="p-2">{ride.rider}</td>
                                    <td className="p-2">{ride.pickup}</td>
                                    <td className="p-2">{ride.drop}</td>
                                    <td className="p-2">{ride.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Tips / Notifications Section */}
                <div className="bg-white rounded-md shadow-md p-4">
                    <h2 className="font-semibold mb-4 text-lg">Driver Tips & Notifications</h2>
                    <ul className="list-disc list-inside text-gray-500">
                        <li>Check your upcoming rides daily.</li>
                        <li>Maintain high rating for better visibility.</li>
                        <li>Ensure timely arrival for all rides.</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
