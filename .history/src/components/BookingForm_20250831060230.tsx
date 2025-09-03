import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

export default function FindDriverForm() {
    const [activeRide, setActiveRide] = useState<"private" | "shared">("private");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert("Searching for drivers...");
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md">
            {/* Navigation Menu */}
            <div className="flex mb-6 rounded-xl overflow-hidden border border-gray-300">
                <button
                    type="button"
                    className={`flex-1 py-3 text-center font-medium transition-colors ${activeRide === "private" ? "bg-black text-white" : "bg-white text-gray-700"
                        }`}
                    onClick={() => setActiveRide("private")}
                >
                    Private Ride
                </button>
                <button
                    type="button"
                    className={`flex-1 py-3 text-center font-medium transition-colors ${activeRide === "shared" ? "bg-black text-white" : "bg-white text-gray-700"
                        }`}
                    onClick={() => setActiveRide("shared")}
                >
                    Shared Ride
                </button>
            </div>

            {/* Form */}
            <Form onSubmit={handleSubmit}>
                <form className="space-y-4">
                    {/* From City */}
                    <FormField
                        control={{} as any} // Placeholder, add react-hook-form control if needed
                        name="fromCity"
                        render={() => (
                            <FormItem>
                                <FormLabel>From City</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter starting city" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* To City */}
                    <FormField
                        control={{} as any}
                        name="toCity"
                        render={() => (
                            <FormItem>
                                <FormLabel>To City</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter destination city" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* When / Date */}
                    <FormField
                        control={{} as any}
                        name="when"
                        render={() => (
                            <FormItem>
                                <FormLabel>When</FormLabel>
                                <FormControl>
                                    <Input type="date" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Passengers */}
                    <FormField
                        control={{} as any}
                        name="passengers"
                        render={() => (
                            <FormItem>
                                <FormLabel>Passengers</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Number of passengers" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Fare (Optional) */}
                    <FormField
                        control={{} as any}
                        name="fare"
                        render={() => (
                            <FormItem>
                                <FormLabel>Fare (Optional)</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Enter your fare (optional)" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button type="submit" className="w-full mt-2">
                        Find a Driver
                    </Button>
                </form>
            </Form>
        </div>
    );
}
