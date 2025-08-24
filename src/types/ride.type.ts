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

export enum RideStatus {
  REQUESTED = "requested",
  ACCEPTED = "accepted",
  PICKED_UP = "picked_up",
  IN_TRANSIT = "in_transit",
  COMPLETED = "completed",
  CANCELED = "canceled",
}

export interface Ride {
  _id: string
  pickupLocation: RideLocation
  destinationLocation: RideLocation
  fare: number
  paymentMethod: "cash" | "card"
  rider: Rider
  status: RideStatus
  createdAt: string
  timestamps: {
    requestedAt: string,
    acceptedAt: string,
    pickedUpAt: string,
    completedAt: string,
    canceledAt: string,
  },
  driver: {
    _id: string,
    name: string,
    email: string,
    phone: string,
    vehicleDetails: {
      make: string,
      model: string,
      color: string,
      licensePlate: string,
    },
  },
  rating: {
    score: number,
    feedback: string,
  },
}



