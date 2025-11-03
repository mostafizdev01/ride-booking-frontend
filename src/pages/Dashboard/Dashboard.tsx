import View from "./View";
import RoleView from "./RoleView";
import StatisticsView from "./StatisticsView";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { useGetMeQuery } from "@/redux/features/users/user.api";
import RiderDashboard from "./Rider/RiderDashboard";

export default function Dashboard() {
    const { data, isLoading } = useGetMeQuery(undefined)
    const {role} = data.data;
    console.log(data, isLoading,);

    return (
        <div>
            <div className="bg-gray-100 font-sans text-gray-800">
                <div className="flex min-h-screen">
                    {/* <!-- Sidebar --> */}
                    <SideBar />

                    {/* <!-- Main Content --> */}
                    <div className="main-content flex-1 ml-0 md:ml-64 transition-all duration-300">
                        {/* <!-- Navbar --> */}
                        <Navbar />
                        {/* <!-- End Navbar --> */}

                        {/* <!-- Content --> */}
                        <div className="p-6">
                            {role && role === "admin" && <View />}
                            {role && role === "admin" && <RoleView />}
                            {role && role === "admin" && <StatisticsView />}
                            {role && role === "rider" && <RiderDashboard />}
                        </div>
                        {/* <!-- End Content --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
