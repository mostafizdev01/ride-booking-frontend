

export default function StatisticsView() {
    return (
        <div>
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
    )
}
