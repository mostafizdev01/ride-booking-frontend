/* eslint-disable @typescript-eslint/no-explicit-any */


import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { MapPin, Navigation, XCircle, CreditCard, CalendarClock } from "lucide-react"
import { MapContainer, TileLayer, Marker, useMap, Polyline, useMapEvents } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import icons1 from "../../../assets/images/locationIcon.png"
import icons2 from "../../../assets/images/locationIcon2.png"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { useRequestRideMutation } from "@/redux/features/ride/ride.api"

// Ride Types
const rideTypes = [
  { id: "economy", name: "Economy", description: "Affordable rides", eta: "5 min", icon: "🚗" },
  { id: "comfort", name: "Comfort", description: "Spacious rides", eta: "7 min", icon: "🚙" },
  { id: "premium", name: "Premium", description: "Luxury rides", eta: "10 min", icon: "🚘" },
]

const defaultCenter = {
  lat: 23.8103,
  lng: 90.4125,
}

// Leaflet custom icons
const pickupIcon = new L.Icon({
  iconUrl: icons1,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
})

const destinationIcon = new L.Icon({
  iconUrl: icons2,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
})

// Distance Calculator
const haversineDistance = (coords1: { lat: number; lng: number }, coords2: { lat: number; lng: number }) => {
  const R = 6371
  const dLat = (coords2.lat - coords1.lat) * (Math.PI / 180)
  const dLon = (coords2.lng - coords1.lng) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(coords1.lat * (Math.PI / 180)) * Math.cos(coords2.lat * (Math.PI / 180)) *
    Math.sin(dLon / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

// Map click handler
function MapEvents({ setCoords, setAddress }: { setCoords: (coords: { lat: number; lng: number }) => void; setAddress: (address: string) => void; }) {
  useMapEvents({
    async click(e: any) {
      const { lat, lng } = e.latlng
      setCoords({ lat, lng })
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
        const data = await res.json()
        setAddress(data.display_name || `Lat: ${lat}, Lng: ${lng}`)
      } catch {
        setAddress(`Lat: ${lat}, Lng: ${lng}`)
      }
    },
  })
  return null
}

// Fit map to markers
function AutoFitBounds({ pickup, destination }: { pickup: any; destination: any }) {
  const map = useMap()
  useEffect(() => {
    if (pickup && destination) {
      map.fitBounds([pickup, destination], { padding: [50, 50] })
    }
  }, [pickup, destination, map])
  return null
}

type FareEstimate = {
  economy: number
  comfort: number
  premium: number
} | null

export default function RideBookingForm() {
  const [requestRide] = useRequestRideMutation()
  const [fareEstimate, setFareEstimate] = useState<FareEstimate>(null)
  const [isEstimating, setIsEstimating] = useState(false)
  const [editingLocation, setEditingLocation] = useState("pickup")

  const [pickupCoords, setPickupCoords] = useState<{ lat: number; lng: number } | null>(null)
  const [destinationCoords, setDestinationCoords] = useState<{ lat: number; lng: number } | null>(null)

  const form = useForm({
    defaultValues: {
      pickupAddress: "",
      destinationAddress: "",
      rideType: "",
      paymentMethod: "card",
      scheduledTime: "",
    },
  })

  // Reset all
  const clearRoute = () => {
    setPickupCoords(null)
    setDestinationCoords(null)
    form.reset()
    setFareEstimate(null)
    setEditingLocation("pickup")
    toast.info("Route cleared.")
  }

  // Fare Calculation
  const estimateFare = async () => {
    if (!pickupCoords || !destinationCoords) return
    setIsEstimating(true)
    await new Promise((r) => setTimeout(r, 1000)) // fake API delay

    const distance = haversineDistance(pickupCoords, destinationCoords)
    const baseFare = distance * 25 + 50

    setFareEstimate({
      economy: Math.round(baseFare),
      comfort: Math.round(baseFare * 1.3),
      premium: Math.round(baseFare * 1.6),
    })
    setIsEstimating(false)
    toast.success(`Fare calculated for ${distance.toFixed(2)} km`)
  }

  const onSubmit = async (data: any) => {
    if (!pickupCoords || !destinationCoords) {
      toast.error("Select pickup & destination first.")
      return
    }
    if (!fareEstimate) {
      toast.warning("Get fare estimate before booking.")
      return
    }
    if (!data.rideType) {
      toast.warning("Please select a ride type.")
      return
    }

    const ridePayload = {
      pickupLocation: {
        address: form.getValues("pickupAddress"),
        coordinates: [pickupCoords!.lng, pickupCoords!.lat],
      },
      destinationLocation: {
        address: form.getValues("destinationAddress"),
        coordinates: [destinationCoords!.lng, destinationCoords!.lat],
      },
      fare: fareEstimate[form.getValues("rideType") as keyof FareEstimate]!,
      rideType: form.getValues("rideType"),
      paymentMethod: form.getValues("paymentMethod"),
      timestamps: {
        createdAt: data?.scheduledTime || new Date().toISOString(),
      }
    }

    console.log(ridePayload);

    try {
      const rideData = await requestRide(ridePayload).unwrap()
      toast.success("Ride booked! Searching for driver...")
      console.log("Booking:", rideData)
      clearRoute() // reset map & form
    } catch (error: any) {
      toast.error(error?.data?.message || "Ride booking failed.")
    }
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Location Controls */}
          <div className="flex gap-2">
            <Button
              type="button"
              variant={editingLocation === "pickup" ? "default" : "outline"}
              onClick={() => setEditingLocation("pickup")}
              className="flex-1"
            >
              Set Pickup
            </Button>
            <Button
              type="button"
              variant={editingLocation === "destination" ? "default" : "outline"}
              onClick={() => setEditingLocation("destination")}
              className="flex-1"
            >
              Set Destination
            </Button>
          </div>

          {/* Pickup Input */}
          <FormField
            control={form.control}
            name="pickupAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-2"><MapPin className="h-4 w-4 text-green-600" /> Pickup</FormLabel>
                <FormControl><Input readOnly {...field} placeholder="Click map to set pickup" /></FormControl>
              </FormItem>
            )}
          />

          {/* Destination Input */}
          <FormField
            control={form.control}
            name="destinationAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex gap-2"><Navigation className="h-4 w-4 text-red-600" /> Destination</FormLabel>
                <FormControl><Input readOnly {...field} placeholder="Click map to set destination" /></FormControl>
              </FormItem>
            )}
          />

          {/* Fare Buttons */}
          <div className="flex gap-2">
            <Button onClick={estimateFare} type="button" className="flex-1" disabled={!pickupCoords || !destinationCoords}>
              {isEstimating ? "Estimating..." : "Get Fare Estimate"}
            </Button>
            <Button onClick={clearRoute} type="button" variant="ghost" size="icon">
              <XCircle className="h-5 w-5" />
            </Button>
          </div>

          {/* Ride Types */}
          {fareEstimate && (
            <div className="space-y-4">
              <Separator />
              <h3 className="font-semibold">Choose Ride</h3>
              <div className="grid grid-cols-3 gap-3">
                {rideTypes.map((r) => (
                  <Card
                    key={r.id}
                    onClick={() => form.setValue("rideType", r.id)}
                    className={`cursor-pointer transition ${form.watch("rideType") === r.id ? "border-2 border-blue-500" : ""}`}
                  >
                    <CardContent className="p-3 text-center">
                      <div className="text-2xl">{r.icon}</div>
                      <div className="font-semibold">{r.name}</div>
                      <div className="text-sm">{r.eta}</div>
                      <div className="font-bold">৳{fareEstimate[r.id as keyof FareEstimate]}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Payment & Schedule */}
          {fareEstimate && (
            <div className="space-y-4">
              <Separator />
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-2"><CreditCard className="h-4 w-4" /> Payment</FormLabel>
                    <FormControl>
                      <select {...field} className="w-full border rounded p-2">
                        <option value="card">Card</option>
                        <option value="cash">Cash</option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="scheduledTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-2"><CalendarClock className="h-4 w-4" /> Schedule (Optional)</FormLabel>
                    <FormControl><Input type="datetime-local" {...field} /></FormControl>
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Submit */}
          <Button type="submit" className="w-full" size="lg"  disabled={!fareEstimate || !form.getValues("rideType")}>
            Book Ride
          </Button>
        </form>
      </Form>

      {/* Map */}
      <div className="mt-8 rounded-lg overflow-hidden border">
        <MapContainer center={defaultCenter} zoom={12} style={{ height: "400px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapEvents
            setCoords={(coords) => editingLocation === "pickup" ? setPickupCoords(coords) : setDestinationCoords(coords)}
            setAddress={(addr) => form.setValue(editingLocation === "pickup" ? "pickupAddress" : "destinationAddress", addr)}
          />
          {pickupCoords && <Marker position={pickupCoords} icon={pickupIcon} />}
          {destinationCoords && <Marker position={destinationCoords} icon={destinationIcon} />}
          {pickupCoords && destinationCoords && (
            <>
              <Polyline positions={[pickupCoords, destinationCoords]} color="blue" />
              <AutoFitBounds pickup={pickupCoords} destination={destinationCoords} />
            </>
          )}
        </MapContainer>
      </div>
    </div>
  )
}
