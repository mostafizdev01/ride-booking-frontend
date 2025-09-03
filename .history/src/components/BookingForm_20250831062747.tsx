import React, { useState } from 'react';

export function BookingForm() {
    const [rideType, setRideType] = useState('private');
    const [passengers, setPassengers] = useState(1);
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [fare, setFare] = useState('');

    const handlePassengerChange = (increment: boolean) => {
        if (increment) setPassengers(prev => prev + 1);
        else if (passengers > 1) setPassengers(prev => prev - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ rideType, passengers, fromCity, toCity, fare });
    };

    return (
        <div className="flex justify-center px-4 md:px-8">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-3xl p-6 md:p-10 w-full max-w-[1400px] space-y-6"
            >
                {/* Ride Type */}
                <div className="flex gap-3 w-lg">
                    {['private', 'shared'].map(type => (
                        <button
                            key={type}
                            type="button"
                            className={`flex-1 py-3 rounded-full text-md md:text-base font-medium ${rideType === type
                                    ? 'bg-neutral-800 text-white'
                                    : 'bg-neutral-100 text-neutral-900'
                                } flex justify-center items-center gap-2`}
                            onClick={() => setRideType(type)}
                        >
                            {type === 'private' ? 'Private ride' : 'Shared ride'}
                            {rideType === type && (
                                <img
                                    src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-5.svg"
                                    alt="selected"
                                    className="w-5 h-5"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* From & To City */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <label className="block text-md font-medium text-neutral-500 mb-1">
                            From city
                        </label>
                        <input
                            type="text"
                            placeholder="Address"
                            value={fromCity}
                            onChange={e => setFromCity(e.target.value)}
                            className="w-full rounded-lg border-2 border-neutral-200 p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-md font-medium text-neutral-500 mb-1">
                            To city
                        </label>
                        <input
                            type="text"
                            placeholder="Address"
                            value={toCity}
                            onChange={e => setToCity(e.target.value)}
                            className="w-full rounded-lg border-2 border-neutral-200 p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
                            required
                        />
                    </div>
                </div>

                {/* When, Passengers, Fare, Find Driver */}
                <div className="flex flex-col w-full md:flex-row md:gap-4 items-end">
                    {/* When */}
                    <div className="flex-3">
                        <label className="block text-md font-medium text-neutral-500 mb-1">
                            When
                        </label>
                        <input
                            type="datetime-local"
                            className="w-full rounded-lg border-2 border-neutral-200 p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
                        />
                    </div>

                    {/* Passengers */}
                    <div className="flex-2">
                        <label className="block text-md font-medium text-neutral-500 mb-1">
                            Passengers
                        </label>
                        <div className="flex items-center gap-2 border-2 border-neutral-200 rounded-lg overflow-hidden">
                            <button
                                type="button"
                                onClick={() => handlePassengerChange(false)}
                                disabled={passengers <= 1}
                                className="px-3 py-3 bg-neutral-100 disabled:opacity-50"
                            >
                                -
                            </button>
                            <span className="px-4">{passengers}</span>
                            <button
                                type="button"
                                onClick={() => handlePassengerChange(true)}
                                className="px-3 py-2 bg-lime-400 rounded-sm"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Fare */}
                    <div className="flex-3">
                        <label className="block text-md font-medium text-neutral-500 mb-1">
                            Fare (optional)
                        </label>
                        <input
                            type="text"
                            value={fare}
                            onChange={e => setFare(e.target.value)}
                            placeholder="Enter your fare"
                            className="w-full rounded-lg border-2 border-neutral-200 p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
                        />
                    </div>

                    {/* Find a driver */}
                    <div className="mt-4 md:mt-0 flex-2">
                        <button
                            type="submit"
                            className="bg-lime-400 w-full cursor-pointer text-black rounded-lg px-6 py-[15px] font-medium hover:bg-lime-500 transition"
                        >
                            Find a driver
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
