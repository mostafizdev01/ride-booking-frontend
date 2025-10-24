
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CommonLayout from "@/components/layout/CommoLayOut";

const coreValues = [
    { icon: "🚀", title: "Speed & Efficiency" },
    { icon: "🔒", title: "Safety & Trust" },
    { icon: "💸", title: "Transparent Pricing" },
    { icon: "🌐", title: "Wide Coverage" },
    { icon: "💬", title: "Customer Support" },
];

const team = [
    { name: "Aisha Rahman", role: "CEO", quote: "Passionate about urban mobility." },
    { name: "Rafi Ahmed", role: "CTO", quote: "Building smarter rides every day." },
    { name: "Sadia Khan", role: "Head of Design", quote: "Designing with the user in mind." },
];

export default function AboutPage() {
    return (
        <CommonLayout>
            <div className="min-h-screen w-full bg-gray-50 font-sans text-gray-900">
                {/* Hero Section */}
                <section className="container mx-auto px-6 py-16 text-center lg:text-left">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#2563eb]">Who We Are</h1>
                        <p className="mt-4 text-lg text-gray-600">Connecting cities and people with safe, fast, and reliable rides.</p>
                        <p className="mt-2 text-gray-500 max-w-2xl">ZoomRide’s mission is to make urban travel seamless, safe, and affordable. Our vision is to revolutionize urban mobility worldwide.</p>
                    </motion.div>
                    <motion.div
                        className="mt-8 h-64 rounded-3xl shadow-lg bg-gradient-to-r from-[#2563eb]/10 to-white flex flex-col items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex gap-3 text-5xl">
                            <span>🚗</span>
                            <span>🏙️</span>
                        </div>
                        <p className="text-[#2563eb] font-medium mt-3">Connecting Cities with Rides</p>
                    </motion.div>

                </section>

                {/* Mission & Vision */}
                <section className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <h2 className="text-3xl font-bold text-[#2563eb] mb-4">Our Mission</h2>
                        <p className="text-gray-600">Making urban travel seamless, safe, and affordable.</p>

                        <h2 className="text-3xl font-bold text-[#2563eb] mt-8 mb-4">Our Vision</h2>
                        <p className="text-gray-600">To revolutionize urban mobility worldwide.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="h-64 bg-gradient-to-br from-[#2563eb]/10 via-white to-[#f8faff] rounded-3xl shadow-lg flex flex-col items-center justify-center relative overflow-hidden">
                            {/* Background decorative circles */}
                            <div className="absolute top-4 right-6 w-24 h-24 bg-[#2563eb]/10 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-4 left-6 w-20 h-20 bg-[#2563eb]/20 rounded-full blur-xl"></div>

                            {/* Center Content */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="text-5xl mb-4">🌍🚗</div>
                                <h3 className="text-xl font-semibold text-[#2563eb] mb-1">Driven by Purpose</h3>
                                <p className="text-gray-600 max-w-sm">
                                    Empowering urban journeys with smart technology and human connection.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </section>

                {/* Core Values */}
                <section className="container mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold text-center text-[#2563eb] mb-10">Why Choose Us</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {coreValues.map((value) => (
                            <motion.div key={value.title} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="rounded-2xl p-6 shadow-md hover:shadow-xl text-center">
                                    <CardContent className="flex flex-col items-center gap-4">
                                        <div className="text-4xl">{value.icon}</div>
                                        <h3 className="font-semibold text-lg">{value.title}</h3>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Meet the Team */}
                <section className="container mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold text-center text-[#2563eb] mb-10">Meet the Team</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member) => (
                            <motion.div key={member.name} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="rounded-2xl p-6 shadow-md hover:shadow-xl text-center">
                                    <CardContent className="flex flex-col items-center gap-4">
                                        <div className="w-24 h-24 bg-[#2563eb] rounded-full flex items-center justify-center text-white text-2xl font-bold">{member.name[0]}</div>
                                        <h3 className="font-semibold text-lg">{member.name}</h3>
                                        <p className="text-gray-500 text-sm">{member.role}</p>
                                        <p className="text-gray-600 mt-2 italic">"{member.quote}"</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="container mx-auto px-6 py-16 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h2 className="text-3xl font-bold text-[#2563eb] mb-4">Join ZoomRide Today</h2>
                        <p className="text-gray-600 mb-6">Experience fast, safe, and reliable rides wherever you go.</p>
                        <div className="flex justify-center gap-4">
                            <Button className="bg-[#2563eb] hover:brightness-95">Book a Ride</Button>
                            <Button variant="outline">Download App</Button>
                        </div>
                    </motion.div>
                </section>
            </div>
        </CommonLayout>
    );
}
