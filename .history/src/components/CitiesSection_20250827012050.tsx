

const cities = [
    { name: 'London', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1659353741069-eff5564dc07e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Berlin', country: 'Germany', image: 'https://images.unsplash.com/photo-1659353741250-cbd3b81e40ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8' },
    { name: 'Amsterdam', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { name: 'Stockholm', country: 'Sweden', image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { name: 'Prague', country: 'Czech Republic', image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
];

export function CitiesSection() {
    return (
        <section className="box-border rounded-3xl mt-30">
            <div className="">
                <div className="text-center mb-16">
                    <h2 className="text-neutral-900 text-4xl font-bold box-border inline-block leading-9 text-center w-full z-0 font-agrandir md:text-[64px] md:leading-[64px]">
                        Our {' '}
                        <mark className="relative text-black text-4xl items-center bg-transparent box-border inline-flex justify-center leading-9 md:text-[64px] md:leading-[64px]">
                            <span className="relative text-4xl box-border block leading-9 z-[1] md:text-[64px] md:leading-[64px]">services</span>
                            <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-16.svg" alt="Icon" className="absolute text-4xl box-border h-[74px] leading-9 w-[229px] z-0 md:text-[64px] md:leading-[64px]" />
                        </mark>
                    </h2>
                </div>

                <div className="grid grid-cols-1 bg-white p-10 rounded-3xl md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cities.map((city, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                                <img
                                    src={city.image}
                                    alt={city.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-2xl font-bold">{city.name}</h3>
                                    <p className="text-sm opacity-90">{city.country}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
