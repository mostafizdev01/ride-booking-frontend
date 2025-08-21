export interface RideLocation {
  address: string
  coordinates: [number, number]
  type: "Point"
}

export interface Rider {
  _id: string
  name: string
  email: string
  phone: string
}

export interface RideTimestamps {
  requestedAt: string
}

export interface Ride {
  _id: string
  pickupLocation: RideLocation
  destinationLocation: RideLocation
  fare: number
  paymentMethod: "cash" | "card"
  rider: Rider
  status: "requested" | "accepted" | "completed" | "cancelled"
  createdAt: string
  updatedAt: string
  timestamps: RideTimestamps
}
