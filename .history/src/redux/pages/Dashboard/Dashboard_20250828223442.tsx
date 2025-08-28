import { Link } from "react-router";
import View from "./View";
import RoleView from "./RoleView";
import StatisticsView from "./StatisticsView";

export default function Dashboard() {
    return (
        <div>
            <div className="bg-gray-100 font-sans text-gray-800">
                <div className="flex min-h-screen">
                    {/* <!-- Sidebar --> */}
                    <div className="sidebar fixed left-0 top-0 w-64 h-full bg-secondary p-4 z-50">
                        <Link to={""} className="flex items-center pb-4 border-b border-gray-300">
                            <h2 className="font-bold text-2xl">Zoom <span className="bg-primary text-white px-2 rounded-md">Ride</span></h2>
                        </Link>
                        <ul className="mt-4">
                            <span className="text-gray-500 font-bold text-xs uppercase">ADMIN</span>
                            <li className="mb-1 group">
                                <a href="#" className="flex font-semibold items-center py-2 px-4 text-gray-700 hover:bg-gray-800 hover:text-white rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white">
                                    <i className="ri-home-2-line mr-3 text-lg"></i>
                                    <span className="text-sm">Dashboard</span>
                                </a>
                            </li>
                            <li className="mb-1 group">
                                <a href="#" className="flex font-semibold items-center py-2 px-4 text-gray-700 hover:bg-gray-800 hover:text-white rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white">
                                    <i className='bx bx-user mr-3 text-lg'></i>
                                    <span className="text-sm">Users</span>
                                    <i className="ri-arrow-right-s-line ml-auto"></i>
                                </a>
                            </li>
                            <li className="mb-1 group">
                                <a href="#" className="flex font-semibold items-center py-2 px-4 text-gray-700 hover:bg-gray-800 hover:text-white rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white">
                                    <i className='bx bx-list-ul mr-3 text-lg'></i>
                                    <span className="text-sm">Activities</span>
                                </a>
                            </li>
                            <span className="text-gray-500 font-bold text-xs uppercase mt-4 block">BLOG</span>
                            <li className="mb-1 group">
                                <a href="#" className="flex font-semibold items-center py-2 px-4 text-gray-700 hover:bg-gray-800 hover:text-white rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white">
                                    <i className='bx bxl-blogger mr-3 text-lg' ></i>
                                    <span className="text-sm">Posts</span>
                                    <i className="ri-arrow-right-s-line ml-auto"></i>
                                </a>
                            </li>
                            <li className="mb-1 group">
                                <a href="#" className="flex font-semibold items-center py-2 px-4 text-gray-700 hover:bg-gray-800 hover:text-white rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white">
                                    <i className='bx bx-archive mr-3 text-lg'></i>
                                    <span className="text-sm">Archive</span>
                                </a>
                            </li>
                            <span className="text-gray-500 font-bold text-xs uppercase mt-4 block">PERSONAL</span>
                            <li className="mb-1 group">
                                <a href="#" className="flex font-semibold items-center py-2 px-4 text-gray-700 hover:bg-gray-800 hover:text-white rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white">
                                    <i className='bx bx-bell mr-3 text-lg' ></i>
                                    <span className="text-sm">Notifications</span>
                                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full">5</span>
                                </a>
                            </li>
                            <li className="mb-1 group">
                                <a href="#" className="flex font-semibold items-center py-2 px-4 text-gray-700 hover:bg-gray-800 hover:text-white rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white">
                                    <i className='bx bx-envelope mr-3 text-lg' ></i>
                                    <span className="text-sm">Messages</span>
                                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">2 New</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Main Content --> */}
                    <div className="main-content flex-1 ml-0 md:ml-64 transition-all duration-300">
                        {/* <!-- Navbar --> */}
                        <div className="py-2 px-6 bg-secondary flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
                            <button type="button" className="text-lg text-gray-600 font-semibold md:hidden" id="sidebar-toggle">
                                <i className="ri-menu-line"></i>
                            </button>

                            <ul className="ml-auto flex items-center">
                                <li className="dropdown mr-4">
                                    <button type="button" className="dropdown-toggle text-gray-500 hover:text-gray-700">
                                        <i className="ri-search-line text-lg"></i>
                                    </button>
                                </li>
                                <li className="dropdown mr-4">
                                    <button type="button" className="dropdown-toggle text-gray-500 hover:text-gray-700">
                                        <i className="ri-notification-3-line text-lg"></i>
                                    </button>
                                </li>
                                <li className="dropdown ml-3">
                                    <button type="button" className="dropdown-toggle flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10 relative">
                                            <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                                                <img className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                                                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                                                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="p-2 md:block text-left">
                                            <h2 className="text-sm font-semibold text-gray-800">John Doe</h2>
                                            <p className="text-xs text-gray-500">Administrator</p>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
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
