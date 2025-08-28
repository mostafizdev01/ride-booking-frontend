
export default function Navbar() {
    return (
        <div>
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
        </div>
    )
}
