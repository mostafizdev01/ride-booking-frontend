import React, { useState } from 'react';

export function BookingForm() {
    const [rideType, setRideType] = useState<'private' | 'shared'>('private');
    const [passengers, setPassengers] = useState(1);
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [fare, setFare] = useState('');
    const [when, setWhen] = useState('');

    const handlePassengerChange = (increment: boolean) => {
        setPassengers(prev => Math.max(1, increment ? prev + 1 : prev - 1));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ rideType, passengers, fromCity, toCity, fare, when });
        alert('Searching for drivers...');
    };

    const inputClasses =
        'w-full bg-neutral-100 border-2 border-solid border-neutral-100 rounded-lg px-3 py-2 text-sm md:text-base focus:outline-none focus:border-black';

    const buttonClasses = (active: boolean) =>
        `flex-1 py-2 rounded-2xl text-sm md:text-base font-medium text-center ${active ? 'bg-black text-white' : 'bg-neutral-100 text-gray-700'
        }`;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
            {/* Ride Type Toggle */}
            <div className="flex mb-6 border border-gray-300 rounded-xl overflow-hidden">
                <button type="button" className={buttonClasses(rideType === 'private')} onClick={() => setRideType('private')}>
                    Private Ride
                </button>
                <button type="button" className={buttonClasses(rideType === 'shared')} onClick={() => setRideType('shared')}>
                    Shared Ride
                </button>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* From City */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">From City</label>
                    <input
                        type="text"
                        placeholder="Enter starting city"
                        value={fromCity}
                        onChange={e => setFromCity(e.target.value)}
                        className={inputClasses}
                        required
                    />
                </div>

                {/* To City */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">To City</label>
                    <input
                        type="text"
                        placeholder="Enter destination city"
                        value={toCity}
                        onChange={e => setToCity(e.target.value)}
                        className={inputClasses}
                        required
                    />
                </div>

                {/* Date / When */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">When</label>
                    <input
                        type="datetime-local"
                        value={when}
                        onChange={e => setWhen(e.target.value)}
                        className={inputClasses}
                        required
                    />
                </div>

                {/* Passengers */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Passengers</label>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="w-8 h-8 rounded-full bg-gray-200 text-lg font-bold"
                            onClick={() => handlePassengerChange(false)}
                            disabled={passengers <= 1}
                        >
                            -
                        </button>
                        <span className="text-sm md:text-base">{passengers}</span>
                        <button
                            type="button"
                            className="w-8 h-8 rounded-full bg-lime-400 text-lg font-bold"
                            onClick={() => handlePassengerChange(true)}
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Fare */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Fare (Optional)</label>
                    <input
                        type="number"
                        placeholder="Enter your fare"
                        value={fare}
                        onChange={e => setFare(e.target.value)}
                        className={inputClasses}
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full py-3 bg-lime-400 text-white text-lg font-medium rounded-lg hover:bg-lime-500 transition-colors"
                >
                    Find a Driver
                </button>
            </form>
        </div>
    );
}
