/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";
import { MapPin, Flag, Clock } from "lucide-react";
import { useGetAllRidesQuery } from "@/redux/features/rides/ride.api";
import { useTimeAgo } from "@/hook/timeCalculation";
// import { useTimeAgo } from "@/hook/timeCalculation";

// const socket = io("http://localhost:5000");

const RideTime = ({ride}: any)=>{
  const timeAgo = useTimeAgo(ride?.createdAt)
  console.log(timeAgo)
  return timeAgo;
}


export default function Rides() {

    const {data} = useGetAllRidesQuery(undefined)

    const rideData = data?.data ?? [];

    console.log(data, rideData);
    

  // const [rides, setRides] = useState<any[]>([]);

  // useEffect(() => {
  //   socket.on("newRide", (ride) => {
  //     setRides((prev) => [...prev, ride]);
  //   });
  //   return () => {
  //     socket.off("newRide");
  //   };
  // }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">🚖 Driver Dashboard</h1>

      {rideData.length === 0 && (
        <p className="text-gray-600">No new rides yet...</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rideData.map((ride:any) => (
          <div
            key={ride._id}
            className="bg-white shadow-md rounded-xl p-5 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <MapPin className="text-green-600" />
              <p>
                <b>Pickup:</b> {ride.pickup.lat}, {ride.pickup.lng}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Flag className="text-red-500" />
              <p>
                <b>Destination:</b> {ride.destination.lat}, {ride.destination.lng}
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <Clock /> Requested {<RideTime ride={ride} />}
            </div>

            <div className="flex gap-3 mt-3 w-xs">
              <button className="flex-1 bg-green-500  cursor-pointer hover:bg-green-600 text-white py-2 rounded-xl font-semibold shadow">
                Accept
              </button>
              <button className="flex-1 bg-red-500 cursor-pointer hover:bg-red-600 text-white py-2 rounded-xl font-semibold shadow">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
