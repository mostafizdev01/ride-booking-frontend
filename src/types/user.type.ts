
export enum Role {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    RIDER = "RIDER",
    DRIVER = "DRIVER"
}

export interface IAuthProvider {
    provider: "google" | "credentials";
    providerId: string;
}

export interface IVehicleInfo {
    model: string;
    plateNumber: string;
    color: string;
}

export interface IUser {
    _id?: string;
    name: string;
    email: string;
    phone?: string;
    password?: string;
    role: Role;
    picture?: string;
    isBlocked?: boolean;
    isActive?: boolean;
    auths: IAuthProvider[];
    isApproved?: boolean;
    vehicleInfo?: IVehicleInfo;
    totalEarnings?: number;
    currentLocation?: {
        type: "Point";
        coordinates: [number, number];
    };
    rides?: object[];
    averageRating?: number;
    totalRatings?: number;
    address?: string;
    createdAt?: string;
    updatedAt?: Date;
}
