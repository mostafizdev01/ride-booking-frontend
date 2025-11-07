// src/data/fakeDrivers.ts

import type { Driver } from "./driver.interface";


export const fakeDrivers: Driver[] = [
    {
        _id: "d1",
        name: "John Miller",
        email: "john.miller@example.com",
        phone: "+1 555-1234",
        vehicle: { make: "Toyota", model: "Corolla", plate: "NYC-1234" },
        rating: 4.9,
        completedRides: 1240,
        isActive: true,
        isApproved: true,
        createdAt: "2024-09-10T12:00:00Z",
    },
    {
        _id: "d2",
        name: "Aisha Rahman",
        email: "aisha.rahman@example.com",
        phone: "+1 555-2345",
        vehicle: { make: "Honda", model: "Civic", plate: "LA-2345" },
        rating: 4.7,
        completedRides: 980,
        isActive: false,
        isApproved: true,
        createdAt: "2024-10-02T09:30:00Z",
    },
    {
        _id: "d3",
        name: "Carlos Rodriguez",
        email: "carlos.r@example.com",
        phone: "+1 555-3456",
        vehicle: { make: "Nissan", model: "Altima", plate: "CHI-7890" },
        rating: 5.0,
        completedRides: 1450,
        isActive: true,
        isApproved: true,
        createdAt: "2023-12-12T07:20:00Z",
    },
];
