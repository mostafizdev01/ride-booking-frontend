

const cities = [
    { name: 'Rides', country: 'Request in seconds, ride in minutes.', image: 'https://images.unsplash.com/photo-1600266604078-5a9067f9d8e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBtYXB8ZW58MHx8MHx8fDI%3D' },
    { name: 'Delivery', country: 'Your favourite food, delivered fast.', image: 'https://images.unsplash.com/photo-1659353741250-cbd3b81e40ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8' },
    { name: 'Car-sharing', country: 'GeHigh-quality car rental made easy.', image: 'https://img.freepik.com/free-photo/young-handsome-man-choosing-car-car-showroom_1303-20413.jpg?semt=ais_hybrid&w=740' },
    { name: 'Groceries', country: 'All the essentials whenever you need them.', image: 'https://bestcaremn.com/wp-content/uploads/2024/01/Buying-Groceries.jpg' },
    { name: 'Business', country: 'Manage business travel for your team and clients.', image: 'https://media.istockphoto.com/id/907996004/photo/discussing-business-details.jpg?s=612x612&w=0&k=20&c=KW-GuBW2PvSyb29Uo9QFLnP1gCyjfjQsEdwTkWtLCGU=' },
    { name: 'Micromobility', country: '2-wheel ride rental at your fingertips', image: 'https://images.unsplash.com/photo-1576659698370-5bb6e1055990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWljcm9tb2JpbGl0eXxlbnwwfHwwfHx8Mg%3D%3D' }
];

export function CitiesSection() {
    return (
        <section className="box-border rounded-3xl mt-30">
            <div className="">
                <div className="text-center mb-16 bg-red-200">
                    <h2 className="text-neutral-900 text-4xl font-bold box-border inline-block leading-9 text-center w-full z-0 font-agrandir md:text-[64px] md:leading-[64px]">
                        Our {' '}
                        <mark className="relative text-black text-4xl items-center bg-transparent box-border inline-flex justify-center leading-9 md:text-[64px] md:leading-[64px]">
                            <span className="relative text-4xl box-border block leading-9 z-[1] md:text-[64px] md:leading-[64px]">Services</span>
                            <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-16.svg" alt="Icon" className="absolute text-4xl box-border h-[74px] leading-9 w-[229px] z-0 md:text-[64px] md:leading-[64px]" />
                        </mark>
                    </h2>
                </div>

                <div className="grid grid-cols-1 bg-white p-10 rounded-3xl md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cities.map((city, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
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
