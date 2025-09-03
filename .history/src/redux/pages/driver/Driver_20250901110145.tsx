import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface Ride {
  id: number;
  user: {
    name: string;
    phone: string;
  };
  pickup: { lat: number; lng: number };
  destination: { lat: number; lng: number };
  status: string;
}

let socket: Socket;

export default function Driver() {
  const [rides, setRides] = useState<Ride[]>([]);

  useEffect(() => {
    // Connect to backend socket
    socket = io("http://localhost:5000");

    socket.on("connect", () => {
      console.log("✅ Connected to server:", socket.id);
    });

    // Listen for new rides
    socket.on("newRide", (ride: Ride) => {
      console.log("🚖 New ride received:", ride);
      setRides((prev) => [ride, ...prev]); // add ride to list
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Driver Dashboard</h1>

      {rides.length === 0 ? (
        <p>No rides available</p>
      ) : (
        <ul>
          {rides.map((ride) => (
            <li key={ride.id} className="border p-2 mb-2 rounded">
              <p>
                <strong>User:</strong> {ride.user.name} ({ride.user.phone})
              </p>
              <p>
                <strong>Pickup:</strong> {ride.pickup.lat}, {ride.pickup.lng}
              </p>
              <p>
                <strong>Destination:</strong> {ride.destination.lat},{" "}
                {ride.destination.lng}
              </p>
              <p>
                <strong>Status:</strong> {ride.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
