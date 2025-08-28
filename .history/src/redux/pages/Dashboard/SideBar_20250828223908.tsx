import { Link } from "react-router";

export default function SideBar() {
    return (
        <div>
            <div className="sidebar fixed left-0 top-0 w-64 h-full bg-secondary p-4 z-50">
                <Link to={"/"} className="flex items-center pb-4 border-b border-gray-300">
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
        </div>
    )
}
