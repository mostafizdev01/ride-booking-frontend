
export default function RoleView() {
    return (
        <div>
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
        </div>
    )
}
