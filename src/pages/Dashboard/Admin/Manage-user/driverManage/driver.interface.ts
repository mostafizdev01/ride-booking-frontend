// src/types/driver.ts
export type Role = "driver" | "rider" | "admin";

export interface Driver {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    vehicle?: {
        make?: string;
        model?: string;
        plate?: string;
    };
    rating?: number;
    completedRides?: number;
    isActive?: boolean; // active/deactivated
    isApproved?: boolean;
    createdAt?: string;
    updatedAt?: string;
}
