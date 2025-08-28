
export default function Dashboard() {
    return (
        <div>
            <div className="bg-gray-100 font-sans text-gray-800">
                <div className="flex min-h-screen">
                    {/* <!-- Sidebar --> */}
                    <div className="sidebar fixed left-0 top-0 w-64 h-full bg-secondary p-4 z-50">
                        <a href="#" className="flex items-center pb-4 border-b border-gray-300">
                            <h2 className="font-bold text-2xl">LOREM <span className="bg-primary text-white px-2 rounded-md">IPSUM</span></h2>
                        </a>
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
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                                {/* <!-- Stats Cards --> */}
                                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                                    <div className="flex justify-between mb-6">
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <div className="text-2xl font-semibold">2</div>
                                            </div>
                                            <div className="text-sm font-medium text-gray-400">Users</div>
                                        </div>
                                        <div className="text-primary">
                                            <i className="ri-user-line text-2xl"></i>
                                        </div>
                                    </div>
                                    <a href="/gebruikers" className="text-primary font-medium text-sm hover:text-red-800">View</a>
                                </div>
                                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                                    <div className="flex justify-between mb-4">
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <div className="text-2xl font-semibold">100</div>
                                                <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">+30%</div>
                                            </div>
                                            <div className="text-sm font-medium text-gray-400">Companies</div>
                                        </div>
                                        <div className="text-primary">
                                            <i className="ri-building-line text-2xl"></i>
                                        </div>
                                    </div>
                                    <a href="/dierenartsen" className="text-primary font-medium text-sm hover:text-red-800">View</a>
                                </div>
                                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                                    <div className="flex justify-between mb-6">
                                        <div>
                                            <div className="text-2xl font-semibold mb-1">100</div>
                                            <div className="text-sm font-medium text-gray-400">Blogs</div>
                                        </div>
                                        <div className="text-primary">
                                            <i className="ri-article-line text-2xl"></i>
                                        </div>
                                    </div>
                                    <a href="" className="text-primary font-medium text-sm hover:text-red-800">View</a>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                {/* <!-- Users Table --> */}
                                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                                    <div className="flex justify-between mb-4 items-start">
                                        <div className="font-medium">Users by Role</div>
                                        <button type="button" className="text-gray-400 hover:text-gray-600">
                                            <i className="ri-more-fill"></i>
                                        </button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full min-w-[540px]">
                                            <thead>
                                                <tr>
                                                    <th className="text-left text-xs uppercase text-gray-500 font-medium py-2 px-4 bg-gray-50 rounded-tl-md rounded-bl-md">Role</th>
                                                    <th className="text-left text-xs uppercase text-gray-500 font-medium py-2 px-4 bg-gray-50">Amount</th>
                                                    <th className="text-left text-xs uppercase text-gray-500 font-medium py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md">Percentage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <span className="text-sm font-medium text-gray-800">Administrator</span>
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <span className="text-sm text-gray-800">1</span>
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <div className="flex items-center">
                                                            <span className="text-xs text-gray-800 mr-2">70%</span>
                                                            <div className="w-full bg-gray-100 rounded-full h-2">
                                                                <div className="bg-blue-600 h-2 rounded-full"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <span className="text-sm font-medium text-gray-800">User</span>
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <span className="text-sm text-gray-800">6</span>
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <div className="flex items-center">
                                                            <span className="text-xs text-gray-800 mr-2">40%</span>
                                                            <div className="w-full bg-gray-100 rounded-full h-2">
                                                                <div className="bg-blue-500 h-2 rounded-full"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* <!-- Activities --> */}
                                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                                    <div className="flex justify-between mb-4 items-start">
                                        <div className="font-medium">Recent Activities</div>
                                        <button type="button" className="text-gray-400 hover:text-gray-600">
                                            <i className="ri-more-fill"></i>
                                        </button>
                                    </div>
                                    <div className="overflow-hidden">
                                        <table className="w-full min-w-[540px]">
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <div className="flex items-center">
                                                            <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">User Login</a>
                                                        </div>
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <span className="text-[13px] font-medium text-gray-400">02-02-2024</span>
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <span className="text-[13px] font-medium text-gray-400">17.45</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <div className="flex items-center">
                                                            <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">New Post Created</a>
                                                        </div>
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <span className="text-[13px] font-medium text-gray-400">01-02-2024</span>
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <span className="text-[13px] font-medium text-gray-400">14.32</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <div className="flex items-center">
                                                            <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">Settings Updated</a>
                                                        </div>
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <span className="text-[13px] font-medium text-gray-400">01-02-2024</span>
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <span className="text-[13px] font-medium text-gray-400">12.45</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                                {/* <!-- Order Statistics --> */}
                                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5 lg:col-span-2">
                                    <div className="flex justify-between mb-4 items-start">
                                        <div className="font-medium">Order Statistics</div>
                                        <button type="button" className="text-gray-400 hover:text-gray-600">
                                            <i className="ri-more-fill"></i>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                                        <div className="rounded-md border border-dashed border-gray-200 p-4">
                                            <div className="flex items-center mb-0.5">
                                                <div className="text-xl font-semibold">10</div>
                                                <span className="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">$80</span>
                                            </div>
                                            <span className="text-gray-400 text-sm">Active</span>
                                        </div>
                                        <div className="rounded-md border border-dashed border-gray-200 p-4">
                                            <div className="flex items-center mb-0.5">
                                                <div className="text-xl font-semibold">50</div>
                                                <span className="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">+$469</span>
                                            </div>
                                            <span className="text-gray-400 text-sm">Completed</span>
                                        </div>
                                        <div className="rounded-md border border-dashed border-gray-200 p-4">
                                            <div className="flex items-center mb-0.5">
                                                <div className="text-xl font-semibold">4</div>
                                                <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1">-$130</span>
                                            </div>
                                            <span className="text-gray-400 text-sm">Canceled</span>
                                        </div>
                                    </div>
                                    <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md">
                                        <p className="text-gray-400">Chart would be displayed here</p>
                                    </div>
                                </div>

                                {/* <!-- Earnings --> */}
                                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                                    <div className="flex justify-between mb-4 items-start">
                                        <div className="font-medium">Earnings</div>
                                        <button type="button" className="text-gray-400 hover:text-gray-600">
                                            <i className="ri-more-fill"></i>
                                        </button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full min-w-[460px]">
                                            <thead>
                                                <tr>
                                                    <th className="text-left text-xs uppercase text-gray-500 font-medium py-2 px-4 bg-gray-50 rounded-tl-md rounded-bl-md">Service</th>
                                                    <th className="text-left text-xs uppercase text-gray-500 font-medium py-2 px-4 bg-gray-50">Earning</th>
                                                    <th className="text-left text-xs uppercase text-gray-500 font-medium py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <div className="flex items-center">
                                                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center mr-2">
                                                                <i className="ri-computer-line text-gray-500"></i>
                                                            </div>
                                                            <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 truncate">Web Design</a>
                                                        </div>
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <span className="text-[13px] font-medium text-emerald-500">+$235</span>
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">Pending</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <div className="flex items-center">
                                                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center mr-2">
                                                                <i className="ri-smartphone-line text-gray-500"></i>
                                                            </div>
                                                            <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 truncate">App Development</a>
                                                        </div>
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <span className="text-[13px] font-medium text-rose-500">-$235</span>
                                                    </td>
                                                    <td className="py-2 px-4 border-b border-b-gray-50">
                                                        <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">Withdrawn</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Content --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
