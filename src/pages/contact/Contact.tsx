import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CommonLayout from "@/components/layout/CommoLayOut";

export default function ContactPage() {
    return (
        <CommonLayout>
            <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-white text-gray-800 flex flex-col items-center p-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 mt-8"
                >
                    <h1 className="text-4xl font-bold text-blue-600 mb-2">
                        Get in Touch with ZoomRide
                    </h1>
                    <p className="text-lg text-gray-600">
                        We’re here to help you ride smarter and smoother.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Card className="shadow-lg rounded-2xl">
                            <CardContent className="p-6 space-y-4">
                                <Input placeholder="Full Name" className="rounded-xl" />
                                <Input placeholder="Email Address" type="email" className="rounded-xl" />

                                <select className="w-full border border-gray-300 rounded-xl p-2 text-gray-700 focus:ring-2 focus:ring-blue-400">
                                    <option>Ride Issue</option>
                                    <option>Driver Support</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>

                                <Textarea
                                    placeholder="Your Message"
                                    className="rounded-xl min-h-[120px]"
                                />
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                                    Send Message
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Info + Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <Card className="shadow-lg rounded-2xl">
                            <CardContent className="p-6 space-y-3">
                                <p><strong>📍 Office Address:</strong> Dhaka, Bangladesh</p>
                                <p><strong>☎️ Phone Support:</strong> +880-1234-567890</p>
                                <p><strong>📧 Email:</strong> support@zoomride.com</p>
                                <p><strong>🕒 Support Hours:</strong> Everyday 9 AM – 10 PM</p>
                            </CardContent>
                        </Card>

                        <div className="rounded-2xl overflow-hidden shadow-md h-64">
                            <iframe
                                title="ZoomRide Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902991190568!2d90.3910453154321!3d23.75086748458892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a65d8a5f47%3A0x5f879b0a7b6f5a67!2sDhaka!5e0!3m2!1sen!2sbd!4v1697034285956!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </CommonLayout>
    );
}