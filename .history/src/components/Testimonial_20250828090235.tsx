
function Testimonial2() {
    const testimonials = [
        {
            name: "Arif Khan",
            title: "Frequent Rider",
            text: "ZoomRide has made my daily commute completely hassle-free. Booking a ride takes just seconds.",
            image: "https://i.postimg.cc/W1rCvYnT/nazmul-hossain.jpg",
        },
        {
            name: "Sarah Jahan",
            title: "University Student",
            text: "Whenever I’m late for class, ZoomRide is always my lifesaver. Riders are polite and the fares are affordable.",
            image: "https://i.pinimg.com/736x/8c/6d/db/8c6ddb5fe6600fcc4b183cb2ee228eb7.jpg",
        },
        {
            name: "Mehedi Hasan",
            title: "Software Engineer",
            text: "Commuting to the office without ZoomRide is unthinkable now. Reliable service and always on time.",
            image: "https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg",
        },
        {
            name: "Nusrat Jahan",
            title: "Entrepreneur",
            text: "The ZoomRide app is very easy to use. It has always helped me reach my meetings right on time.",
            image: "https://i.pinimg.com/1200x/c2/4e/27/c24e271f2f992fd7e62e8c1e8d9b3e2f.jpg",
        },
        {
            name: "Rajib Chowdhury",
            title: "Traveler",
            text: "Exploring the city is stress-free with ZoomRide. No hassles, just smooth rides and fun.",
            image: "https://i.pinimg.com/736x/81/d6/b1/81d6b158728f5fc97ca6e0a025fefee0.jpg",
        },
        {
            name: "Elina Akter",
            title: "Doctor",
            text: "After long night shifts, ZoomRide feels like the safest and most reliable way to get home.",
            image: "https://i.pinimg.com/736x/9f/46/74/9f4674ca9c17330ab419c1b2f5951d9a.jpg",
        },
        {
            name: "Daniel Smith",
            title: "Fullstack Developer",
            text: "Booking a ride during rush hours used to be a nightmare, but ZoomRide always finds me a driver quickly.",
            image: "https://i.pinimg.com/736x/57/3c/80/573c80967c9429d0ed0ce32701f85b70.jpg",
        },
        {
            name: "Sophia Lee",
            title: "Marketing Manager",
            text: "ZoomRide has completely changed how I move around the city. It’s fast, safe, and reliable every single time.",
            image: "https://i.pinimg.com/736x/b0/c4/21/b0c421e77cf563962026ade82c90dd5b.jpg",
        },
        {
            name: "Emma Wilson",
            title: "UX Designer",
            text: "The clean and simple app interface makes booking rides effortless. Highly recommend ZoomRide!",
            image: "https://i.pinimg.com/736x/79/63/a5/7963a5246188d408b8f28961a0cf2b90.jpg",
        },
        {
            name: "John Doe",
            title: "Frontend Developer",
            text: "I save so much time every day because ZoomRide is always available and super quick to arrive.",
            image: "https://i.pinimg.com/736x/12/ec/d9/12ecd918607b1ccb9d46772435bb592f.jpg",
        },
        {
            name: "Michael Brown",
            title: "Frequent Traveler",
            text: "Whether it’s to the airport or just across town, ZoomRide never disappoints. Always a smooth experience.",
            image: "https://i.pinimg.com/736x/ce/31/42/ce3142d7a968fff3aecd0100572a5e8b.jpg",
        },
        {
            name: "Alice Johnson",
            title: "Product Manager",
            text: "ZoomRide helps my team and me reach our destinations on time, making our workday much smoother.",
            image: "https://i.pinimg.com/1200x/e2/f5/bc/e2f5bc45bd9d07946c9453cfb48747ea.jpg",
        },
        {
            name: "Bob Williams",
            title: "Business Consultant",
            text: "Professional drivers and safe rides – ZoomRide is my first choice for client meetings across the city.",
            image: "https://i.pinimg.com/1200x/50/47/d2/5047d259f0d8b3d652b7d3dfa3479139.jpg",
        },
        {
            name: "Charlie Brown",
            title: "Mobile Developer",
            text: "Even late at night, I feel completely safe with ZoomRide. The drivers are trustworthy and polite.",
            image: "https://i.pinimg.com/736x/bb/87/18/bb87180897cb4cb694cd692966a0ab15.jpg",
        },
        {
            name: "Diana Prince",
            title: "DevOps Engineer",
            text: "ZoomRide is always reliable and the pricing is transparent. No hidden charges, just honest service.",
            image: "https://i.pinimg.com/1200x/fb/c3/03/fbc30308d8f36a5566cbf0a535c14322.jpg",
        },
        {
            name: "Eve Adams",
            title: "Data Scientist",
            text: "I can focus on my work while traveling because ZoomRide takes care of the driving with complete safety.",
            image: "https://i.pinimg.com/1200x/de/11/d2/de11d2f9df4295493625189e9cb829ce.jpg",
        },
        {
            name: "Joseph Kitheka",
            title: "Fullstack Developer",
            text: "ZoomRide is not just convenient, it’s a game-changer. I can move around the city without stress.",
            image: "https://i.pinimg.com/736x/8e/c1/f8/8ec1f80db272047cedf4c20263114387.jpg",
        },
        {
            name: "Roland Tubonge",
            title: "Software Engineer",
            text: "The rides are comfortable, drivers are respectful, and the app is super easy to use. ZoomRide nails it!",
            image: "https://i.pinimg.com/1200x/08/a2/41/08a2413b771b729a9f9df20fa97be52a.jpg",
        },
        {
            name: "Jane Smith",
            title: "Teacher",
            text: "As a woman, I always feel safe using ZoomRide. That peace of mind is priceless.",
            image: "https://i.pinimg.com/736x/b0/7b/cc/b07bcc19e5d06dfb888c3263724b8baa.jpg",
        },
    ];


    // Fallback for any images not explicitly mapped or if array runs out
    const anonymousFallbackImage = "https://placehold.co/48x48/6B7280/FFFFFF?text=AA";

    return (
        <div className="font-sans flex flex-col items-center py-16 bg-red-50">
            {/* Main Heading */}
            <h2 className="text-neutral-900 mb-20 text-4xl font-bold box-border inline-block leading-9 text-center w-full z-0 font-agrandir md:text-[64px] md:leading-[64px]">
                Riders Love Us
            </h2>

            {/* Testimonial Cards Container - Masonry-like layout */}
            <div className="w-full max-w-7xl columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">

                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white dark:bg-black p-6 rounded-xl shadow-md break-inside-avoid border border-gray-200 dark:border-gray-800">
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover mr-4"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = anonymousFallbackImage;
                                }}
                            />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                            </div>
                        </div>
                        <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed">
                            {testimonial.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonial2;
