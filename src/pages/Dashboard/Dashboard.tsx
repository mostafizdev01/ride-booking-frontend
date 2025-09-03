import View from "./View";
import RoleView from "./RoleView";
import StatisticsView from "./StatisticsView";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function Dashboard() {
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
                            <View />
                            <RoleView />
                            <StatisticsView />
                        </div>
                        {/* <!-- End Content --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
