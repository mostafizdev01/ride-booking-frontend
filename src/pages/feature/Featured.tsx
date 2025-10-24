
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import CommonLayout from "@/components/layout/CommoLayOut";

const features = [
  {
    icon: "🚀",
    title: "Fast Ride Booking",
    desc: "Book your ride in just seconds with one-tap booking and smart defaults.",
  },
  {
    icon: "🧭",
    title: "Real-Time Tracking",
    desc: "Track your driver live on a map and get accurate ETAs.",
  },
  {
    icon: "🔒",
    title: "Safe & Secure Rides",
    desc: "Verified drivers, SOS features, and 24/7 support.",
  },
  {
    icon: "💸",
    title: "Transparent Pricing",
    desc: "Clear fares with no hidden fees — fare breakdown before you ride.",
  },
  {
    icon: "🌐",
    title: "Wide Coverage",
    desc: "Available across major cities with a growing driver network.",
  },
  {
    icon: "💬",
    title: "In-App Chat",
    desc: "Message your driver directly inside the app for smooth coordination.",
  },
];

const highlights = [
  {
    title: "Smart Matching Algorithm",
    text: "Our algorithm matches riders with the best nearby driver based on route, rating, and availability — minimizing wait and detours.",
  },
  {
    title: "Driver Ratings & Reviews",
    text: "Transparent driver profiles and rider feedback keep the community safe and high-quality.",
  },
  {
    title: "Instant Support Chatbot",
    text: "Fast answers for common issues plus human support for sensitive problems.",
  },
];

const testimonials = [
  {
    name: "Aisha Rahman",
    role: "Designer",
    msg: "ZoomRide gets me to meetings on time — booking is instant and drivers are friendly.",
    rating: 5,
  },
  {
    name: "Rafi Ahmed",
    role: "Delivery Manager",
    msg: "Reliable service and the tracking feature is a life-saver for tight schedules.",
    rating: 4.8,
  },
  {
    name: "Sadia Khan",
    role: "Student",
    msg: "Affordable rides and great safety features — I trust ZoomRide for late-night trips.",
    rating: 5,
  },
];

export default function FeaturePage() {
  return (
    <CommonLayout>
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 text-gray-900 font-sans">
        {/* HERO */}
        <section className="container mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4">New • Smart Rides</Badge>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-[#2563eb]">
                Experience the Future of Urban Mobility
              </h1>
              <p className="mt-6 text-gray-600 text-lg">
                ZoomRide connects you with drivers instantly — safe, smart, and
                affordable. Fast bookings, real-time tracking, and transparent
                fares make every trip smoother.
              </p>

              <div className="mt-8 flex gap-4">
                <Button className="bg-[#2563eb] hover:brightness-95">Book Your Ride Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center text-2xl">
                    🚗
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Average wait</p>
                    <p className="font-semibold text-lg">3–5 mins</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center text-2xl">
                    ⭐
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">App rating</p>
                    <p className="font-semibold text-lg">4.9/5</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-72 lg:h-96 rounded-3xl bg-gradient-to-tr from-[#e0edff] via-[#f8fbff] to-white shadow-xl overflow-hidden flex items-center justify-center">
                {/* Animated background gradient shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/10 via-transparent to-[#2563eb]/10 animate-[pulse_6s_infinite]" />

                {/* SVG Illustration */}
                <svg
                  className="w-[85%] h-[85%]"
                  viewBox="0 0 800 600"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="City and ride illustration"
                >
                  {/* Background buildings */}
                  <g opacity="0.3">
                    <rect x="80" y="200" width="60" height="250" rx="8" fill="#2563eb" />
                    <rect x="180" y="160" width="70" height="290" rx="8" fill="#3b82f6" />
                    <rect x="280" y="240" width="50" height="210" rx="8" fill="#60a5fa" />
                    <rect x="360" y="180" width="90" height="270" rx="8" fill="#93c5fd" />
                    <rect x="480" y="220" width="70" height="230" rx="8" fill="#bfdbfe" />
                    <rect x="580" y="260" width="60" height="190" rx="8" fill="#dbeafe" />
                  </g>

                  {/* Road */}
                  <rect x="0" y="470" width="800" height="40" fill="#1e3a8a" />
                  <line x1="0" y1="490" x2="800" y2="490" stroke="#93c5fd" strokeDasharray="40 20" strokeWidth="4" />

                  {/* Car body */}
                  <g id="car" transform="translate(100,440)">
                    <rect x="0" y="-20" width="120" height="30" rx="12" fill="#2563eb" />
                    <rect x="20" y="-40" width="80" height="25" rx="8" fill="#3b82f6" />
                    <circle cx="25" cy="10" r="10" fill="#1e3a8a" />
                    <circle cx="95" cy="10" r="10" fill="#1e3a8a" />
                  </g>

                  {/* Animated Car Motion */}
                  <animateTransform
                    xlinkHref="#car"
                    attributeName="transform"
                    type="translate"
                    from="100,440"
                    to="700,440"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </svg>

                {/* Decorative glow at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Why riders love ZoomRide
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f) => (
              <motion.div
                key={f.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="rounded-2xl p-4 shadow-md hover:shadow-xl">
                  <CardContent className="flex flex-col gap-4">
                    <div className="text-4xl">{f.icon}</div>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                    <p className="text-sm text-gray-600">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <h4 className="text-lg font-semibold text-[#2563eb] mb-2">{h.title}</h4>
                  <p className="text-gray-600">{h.text}</p>
                </div>
              </motion.div>
            ))}

            <div className="lg:col-span-1 lg:row-span-3">
              <div className="rounded-3xl bg-gradient-to-tr from-[#eef6ff] to-white p-8 shadow-xl h-full flex flex-col justify-center">
                <h3 className="text-2xl font-extrabold mb-4">Smart tech behind the ride</h3>
                <p className="text-gray-600 mb-6">
                  Machine learning and real-time signals power smarter routes,
                  efficient matching and safer rides. All built to keep your trip
                  smooth from pickup to drop-off.
                </p>
                <Button className="self-start">See How It Works</Button>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-center mb-6">Loved by Thousands of Riders</h2>
          <div className="max-w-full mx-auto grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div whileHover={{ y: -6 }} key={t.name} className="p-4">
                <Card className="rounded-2xl p-4 shadow-md">
                  <CardContent>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-[#2563eb] flex items-center justify-center text-white font-semibold">{t.name[0]}</div>
                      <div>
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                      <div className="ml-auto flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold">{t.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">"{t.msg}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DOWNLOAD CTA */}
        <section className="container mx-auto px-6 py-12">
          <div className="rounded-3xl bg-gradient-to-r from-[#e8f2ff] to-white p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg">
            <div>
              <h3 className="text-2xl font-extrabold">Ride Anytime, Anywhere.</h3>
              <p className="text-gray-600 mt-2">Download ZoomRide and get your next ride in minutes.</p>
              <div className="flex gap-4 mt-6">
                <Button className="flex items-center gap-3">Get it on Google Play</Button>
                <Button className="flex items-center gap-3" variant="outline">Download on the App Store</Button>
              </div>
            </div>

            <div className="w-md h-96 relative rounded-3xl bg-gradient-to-b from-[#2563eb]/10 via-white to-[#f1f5f9] shadow-xl flex items-center justify-center overflow-hidden">

              {/* Glowing outline effect */}
              <div className="absolute inset-0 rounded-3xl border border-[#2563eb]/20"></div>

              {/* Inner screen */}
              <div className="w-32 h-[340px] bg-white rounded-2xl shadow-inner flex flex-col items-center justify-between py-6 relative">
                {/* Top notch */}
                <div className="w-16 h-2 bg-gray-300 rounded-full absolute top-3"></div>

                {/* Screen content */}
                <div className="flex flex-col items-center gap-3 mt-8">
                  <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center text-white text-lg font-bold">
                    Z
                  </div>
                  <p className="text-sm text-gray-600 font-medium text-center px-2">
                    Ride booked successfully!
                  </p>
                  <div className="w-20 h-20 bg-[#2563eb]/10 rounded-full flex items-center justify-center text-3xl">
                    🚗
                  </div>
                </div>

                {/* Bottom home bar */}
                <div className="w-20 h-1 bg-gray-300 rounded-full mb-2"></div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </CommonLayout>
  );
}
