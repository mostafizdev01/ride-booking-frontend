
function Testimonial2() {
    const testimonials = [
        {
            name: "Amina Rahman",
            title: "University Student",
            text: "ZoomRide has completely changed how I travel around the city. It's affordable, safe, and always reliable. I no longer worry about missing classes or being late.",
            image: "https://i.pinimg.com/736x/12/ec/d9/12ecd918607b1ccb9d46772435bb592f.jpg",
        },
        {
            name: "David Chukwu",
            title: "Software Engineer",
            text: "What I love about ZoomRide is the transparency. The fare system is clear, drivers are professional, and the app is really easy to use.",
            image: "https://i.pinimg.com/736x/b0/c4/21/b0c421e77cf563962026ade82c90dd5b.jpg",
        },
        {
            name: "Sara Ahmed",
            title: "Freelancer",
            text: "ZoomRide delivery service is a lifesaver! I use it almost every week for sending packages to my clients, and it's always on time.",
            image: "https://i.pinimg.com/736x/79/63/a5/7963a5246188d408b8f28961a0cf2b90.jpg",
        },
        {
            name: "Michael Brown",
            title: "Business Owner",
            text: "With ZoomRide, my employees reach the office on time without hassle. The corporate ride option is just perfect for teams.",
            image: "https://i.pinimg.com/736x/8c/6d/db/8c6ddb5fe6600fcc4b183cb2ee228eb7.jpg",
        },
        {
            name: "Fatima Noor",
            title: "Teacher",
            text: "Safety was always my biggest concern when booking rides. With ZoomRide, I finally feel secure thanks to verified drivers and live tracking.",
            image: "https://i.pinimg.com/736x/81/d6/b1/81d6b158728f5fc97ca6e0a025fefee0.jpg",
        },
        {
            name: "John Smith",
            title: "Delivery Rider",
            text: "As a ZoomRide partner, I can say the platform really cares about its drivers. Flexible timings and fair earnings make it my favorite gig.",
            image: "https://i.pinimg.com/736x/57/3c/80/573c80967c9429d0ed0ce32701f85b70.jpg",
        },
    ];


    // Fallback for any images not explicitly mapped or if array runs out
    const anonymousFallbackImage = "https://placehold.co/48x48/6B7280/FFFFFF?text=AA";

    return (
        <div className="font-sans flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
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
