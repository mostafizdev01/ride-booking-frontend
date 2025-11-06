import { useState } from "react";

export default function Support() {
    const [ticket, setTicket] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        priority: "Medium",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Ticket submitted successfully!");
        setTicket({ name: "", email: "", subject: "", message: "", priority: "Medium" });
    };

    const faqs = [
        { q: "How to book a ride?", a: "Go to the dashboard and click on 'Create Ride' to book a ride." },
        { q: "How to cancel a ride?", a: "Open your active rides and click 'Cancel' on the ride you want to cancel." },
        { q: "How to update profile?", a: "Go to your profile page and update your information." },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold mb-6">Support Center</h1>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-white shadow rounded-xl p-4 flex flex-col items-start">
                    <span className="text-gray-500 text-sm">Email Support</span>
                    <span className="text-lg font-bold text-lime-600 mt-1">support@example.com</span>
                </div>
                <div className="bg-white shadow rounded-xl p-4 flex flex-col items-start">
                    <span className="text-gray-500 text-sm">Hotline</span>
                    <span className="text-lg font-bold text-green-600 mt-1">+880 123 456 789</span>
                </div>
                <div className="bg-white shadow rounded-xl p-4 flex flex-col items-start">
                    <span className="text-gray-500 text-sm">Working Hours</span>
                    <span className="text-lg font-bold text-purple-600 mt-1">Mon - Fri, 9:00 AM - 6:00 PM</span>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Frequently Asked Questions</h2>
                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <details key={i} className="bg-white shadow rounded-xl p-4 cursor-pointer">
                            <summary className="font-semibold">{faq.q}</summary>
                            <p className="mt-2 text-gray-700">{faq.a}</p>
                        </details>
                    ))}
                </div>
            </div>

            {/* Support Ticket Form */}
            <div className="bg-white shadow rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Submit a Ticket</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={ticket.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={ticket.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={ticket.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={ticket.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                        rows={4}
                        required
                    />
                    <select
                        name="priority"
                        value={ticket.priority}
                        onChange={handleChange}
                        className="w-full sm:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-lime-600 text-white font-semibold rounded-lg ml-3 hover:bg-lime-700 transition"
                    >
                        Submit Ticket
                    </button>
                </form>
            </div>
        </div>
    );
}
