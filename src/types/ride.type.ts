export interface Ride {
  id: string
  riderId: string
  driverId?: string
  pickupLocation: {
    address: string
    lat: number
    lng: number
  }
  destination: {
    address: string
    lat: number
    lng: number
  }
  status: "requested" | "accepted" | "picked_up" | "in_transit" | "completed" | "cancelled"
  fare: number
  paymentMethod: "cash" | "card" | "wallet"
  createdAt?: string
  updatedAt?: string
  driver?: {
    id: string
    name: string
    phone: string
    rating: number
    vehicleDetails: {
      make: string
      model: string
      licensePlate: string
      color: string
    }
  }
}

export interface RideState {
  currentRide: Ride | null
  rideHistory: Ride[]
  incomingRequests: Ride[] // For drivers
  loading: boolean
  error: string | null
}