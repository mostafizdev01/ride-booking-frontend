import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

type FormValues = {
    fromCity: string;
    toCity: string;
    when: string;
    passengers: number;
    fare?: number;
};

export default function FindDriverForm() {
    const [activeRide, setActiveRide] = useState<"private" | "shared">("private");

    // React Hook Form
    const form = useForm<FormValues>({
        defaultValues: {
            fromCity: "",
            toCity: "",
            when: "",
            passengers: 1,
            fare: undefined,
        },
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("Form submitted:", { ...data, rideType: activeRide });
        alert(`Searching for ${activeRide} drivers...`);
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
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {/* From City */}
                    <FormField
                        control={form.control}
                        name="fromCity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>From City</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter starting city" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* To City */}
                    <FormField
                        control={form.control}
                        name="toCity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>To City</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter destination city" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* When / Date */}
                    <FormField
                        control={form.control}
                        name="when"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>When</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Passengers */}
                    <FormField
                        control={form.control}
                        name="passengers"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Passengers</FormLabel>
                                <FormControl>
                                    <Input type="number" min={1} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Fare (Optional) */}
                    <FormField
                        control={form.control}
                        name="fare"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fare (Optional)</FormLabel>
                                <FormControl>
                                    <Input type="number" min={0} placeholder="Enter fare (optional)" {...field} />
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
