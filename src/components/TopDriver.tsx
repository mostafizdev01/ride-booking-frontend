
import { Star, MapPin, Award, Car, UserStar } from 'lucide-react'
import { Button } from './ui/button'
const drivers = [
    {
        name: "John Miller",
        vehicle: "Toyota Corolla",
        experience: "7 years",
        rating: 4.9,
        completedRides: 1280,
        location: "New York, NY",
        image:
            "https://media.istockphoto.com/id/150005689/photo/young-chauffeur-in-limousine-smiling.jpg?s=612x612&w=0&k=20&c=035pXfjSdyky6kQ9uRbSKgFhwDAAT0cQggjfs7UuS0M=",
    },
    {
        name: "Aisha Rahman",
        vehicle: "Honda Civic",
        experience: "5 years",
        rating: 4.8,
        completedRides: 980,
        location: "Los Angeles, CA",
        image:
            "https://simonswhiteweddingcars.co.uk/wp-content/uploads/2020/07/Black-standard.jpg",
    },
    {
        name: "Emma Watson",
        vehicle: "Nissan Altima",
        experience: "6 years",
        rating: 5.0,
        completedRides: 1450,
        location: "Chicago, IL",
        image:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop",
    },
    {
        name: "Carlos Rodriguez",
        vehicle: "Tesla Model 3",
        experience: "4 years",
        rating: 4.9,
        completedRides: 1120,
        location: "Houston, TX",
        image:
            "https://img.freepik.com/free-photo/close-up-young-man-with-glasses-sitting-car_1140-333.jpg?semt=ais_hybrid&w=740&q=80",
    },
];
export function TopDrivers() {
    return (
        <section id="doctors" className="w-full bg-white py-16 md:py-24 mt-40 rounded-3xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-neutral-900 text-4xl font-bold box-border inline-block leading-9 text-center w-full z-0 font-agrandir md:text-[64px] md:leading-[64px]">
                        Our Top {' '}
                        <mark className="relative text-black text-4xl items-center bg-transparent box-border inline-flex justify-center leading-9 md:text-[64px] md:leading-[64px]">
                            <span className="relative text-4xl box-border block leading-9 z-[1] md:text-[64px] md:leading-[64px]">Drivers</span>
                            <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-16.svg" alt="Icon" className="absolute text-4xl box-border h-[74px] leading-9 w-[229px] z-0 md:text-[64px] md:leading-[64px]" />
                        </mark>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mt-5 mx-auto">
                        Professional and reliable drivers ensuring your rides are always
                        safe, smooth, and on time 🚗
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {drivers.map((driver, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative">
                                <img
                                    src={driver.image}
                                    alt={driver.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                                    <Star className="text-yellow-400 fill-current" size={16} />
                                    <span className="text-sm font-semibold">{driver.rating}</span>
                                </div>
                            </div>
                            <div className="p-6 space-y-3">
                                <h3 className="text-xl font-bold text-gray-900">
                                    {driver.name}
                                </h3>
                                <p className="text-lime-500 font-semibold flex items-center gap-1">
                                    <Car /> {driver.vehicle}
                                </p>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Award size={16} />
                                    <span>{driver.experience} experience</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <MapPin size={16} />
                                    <span>{driver.location}</span>
                                </div>
                                <div className="text-sm flex items-center gap-2 text-gray-600">
                                    <UserStar size={16} />  {driver.completedRides} riders reviews
                                </div>
                                <div className=' flex gap-3 '>
                                    <Button className=" w-full flex-1 border-2 bg-white border-lime-500 text-lime-600 py-3 rounded-lg hover:bg-lime-50 cursor-pointer transition font-semibold">
                                        View Profile
                                    </Button>
                                    <Button className=" w-full flex-1 md:mt-0 bg-lime-500 text-white py-3 cursor-pointer rounded-lg hover:bg-lime-600 transition font-semibold">
                                        Book Ride
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}