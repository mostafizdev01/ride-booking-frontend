import React from 'react'

export default function View() {
    return (
        <div>
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
        </div>
    )
}
