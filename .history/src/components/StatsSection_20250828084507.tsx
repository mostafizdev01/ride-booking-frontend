
const stats = [
    { number: '100M+', label: 'Customers globally' },
    { number: '45+', label: 'Countries' },
    { number: '500+', label: 'Cities' },
    { number: '1M+', label: 'Drivers and couriers' }
];

export function StatsSection() {
    return (
        <section className="py-20 bg-white rounded-3xl mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-neutral-900 text-4xl font-bold box-border inline-block leading-9 text-center w-full z-0 font-agrandir md:text-[64px] md:leading-[64px]">
                        Millions use {' '}
                        <mark className="relative text-black text-4xl items-center bg-transparent box-border inline-flex justify-center leading-9 md:text-[64px] md:leading-[64px]">
                            <span className="relative text-4xl box-border block leading-9 z-[1] md:text-[64px] md:leading-[64px]">safety</span>
                            <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-14.svg" alt="Icon" className="absolute text-4xl box-border h-[68px] leading-9 w-[218px] z-0 md:text-[64px] md:leading-[64px]" />
                        </mark>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Join the millions who rely on ZoomRide for their daily transportation needs
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
