import CommonLayout from "@/components/layout/CommoLayOut";
import React, { useState } from "react";

// --- Types ---
interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionIconProps {
    isOpen: boolean;
}

interface AccordionItemProps {
    item: AccordionItem;
    isOpen: boolean;
    onClick: () => void;
}

const accordionData: AccordionItem[] = [
    {
        question: "How do I book a ride on ZoomRide?",
        answer: "Simply open the ZoomRide app, enter your pickup and drop-off location, choose your ride type, and confirm the booking. A nearby driver will accept and come to pick you up.",
    },
    {
        question: "What payment methods does ZoomRide support?",
        answer: "ZoomRide accepts multiple payment options, including cash, debit/credit cards, mobile wallets, and in-app payments for your convenience.",
    },
    {
        question: "Is ZoomRide safe to use?",
        answer: "Yes! All our drivers are verified, and every ride is GPS-tracked. You can also share your trip details in real-time with family and friends.",
    },
    {
        question: "Can I schedule a ride in advance?",
        answer: "Yes. ZoomRide allows you to schedule rides ahead of time so you can plan your travel without last-minute stress.",
    },
    {
        question: "What if I leave something in the car?",
        answer: "No worries! You can report a lost item directly through the app, and we’ll connect you with the driver to recover it.",
    },
];

const AccordionIcon: React.FC<AccordionIconProps> = ({ isOpen }) => (
    <svg
        className={`w-6 h-6 text-zinc-500 dark:text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
        />
    </svg>
);

const AccordionItem: React.FC<AccordionItemProps> = ({
    item,
    isOpen,
    onClick,
}) => {
    return (
        <div className="border-b border-zinc-200 dark:border-zinc-700 last:border-b-0">
            {/* Header part of the accordion item (Question and Icon) */}
            <button
                className="w-full flex justify-between items-center text-left py-4 px-5 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-opacity-75 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    {item.question}
                </span>
                <AccordionIcon isOpen={isOpen} />
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"
                    }`}
            >
                <div className="p-5 pt-0 text-zinc-600 dark:text-zinc-300">
                    <p>{item.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FaqPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <CommonLayout>
            <div className="flex w-full items-center min-h-screen justify-center bg-zinc-50 dark:bg-zinc-950 ">
                <div className="w-full max-w-2xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-lg dark:shadow-zinc-900/20 border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-1">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-center text-zinc-500 dark:text-zinc-400 mb-6">
                            Got questions about ZoomRide? We’ve collected the most common queries to make your ride experience smoother, safer, and more convenient. Check out the answers below before you book your next trip. 🚖✨
                        </p>
                    </div>
                    {accordionData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </div>
            </div>
        </CommonLayout>
    );
};

export default FaqPage;
