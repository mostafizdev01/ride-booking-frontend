
const stats = [
    { number: '100M+', label: 'Customers globally' },
    { number: '45+', label: 'Countries' },
    { number: '500+', label: 'Cities' },
    { number: '1M+', label: 'Drivers and couriers' }
];

export function StatsSection() {
    return (
        <section className="py-20 bg-white rounded-3xl mt-20 lg:mt-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Millions use ZoomRide
                    </h2>
                    <p className="text-xl text-gray-600">
                        Join the millions who rely on Bolt for their daily transportation needs
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl lg:text-6xl font-bold text-[#9AE600] mb-2">
                                {stat.number}
                            </div>
                            <div className="text-lg text-gray-800 font-semibold">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
