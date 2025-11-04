export default function View() {
    const stats = [
        {
            title: "Users",
            count: 2,
            icon: "ri-user-line",
            color: "text-blue-500",
            link: "/gebruikers",
            growth: null,
        },
        {
            title: "Companies",
            count: 100,
            icon: "ri-building-line",
            color: "text-emerald-500",
            link: "/dierenartsen",
            growth: "+30%",
        },
        {
            title: "Blogs",
            count: 100,
            icon: "ri-article-line",
            color: "text-yellow-500",
            link: "/blogs",
            growth: null,
        },
    ];

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5"
                    >
                        <div className="flex justify-between mb-6">
                            <div>
                                <div className="flex items-center mb-1">
                                    <div className="text-2xl font-semibold">{item.count}</div>

                                    {/* Optional growth badge */}
                                    {item.growth && (
                                        <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                                            {item.growth}
                                        </div>
                                    )}
                                </div>
                                <div className="text-sm font-medium text-gray-400">
                                    {item.title}
                                </div>
                            </div>

                            <div className={`text-primary ${item.color}`}>
                                <i className={`${item.icon} text-2xl`}></i>
                            </div>
                        </div>

                        <a
                            href={item.link}
                            className="text-primary font-medium text-sm hover:text-green-600"
                        >
                            View
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
