// src/components/admin/DriverProfileModal.tsx
import React from "react";
import { X } from "lucide-react";
import type { Driver } from "./driver.interface";

export const DriverProfileModal: React.FC<{ open: boolean; onClose: () => void; driver?: Driver | null }> = ({ open, onClose, driver }) => {
    if (!open) return null;
    if (!driver) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h3 className="text-lg font-semibold">{driver.name}</h3>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X /></button>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1 flex flex-col items-center">
                        <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-bold text-gray-700">
                            {driver.name.split(" ").map(s => s[0]).slice(0, 2).join("")}
                        </div>
                        <div className="mt-3 text-sm text-gray-500">Joined: {new Date(driver.createdAt || "").toLocaleDateString()}</div>
                        <div className="mt-1 text-sm text-gray-500">Status: {driver.isActive ? "Active" : "Deactivated"}</div>
                        <div className="mt-2 text-sm text-gray-500">Approved: {driver.isApproved ? "Yes" : "No"}</div>
                    </div>

                    <div className="col-span-2 space-y-3">
                        <div>
                            <div className="text-xs text-gray-500">Contact</div>
                            <div className="text-sm font-medium">{driver.email} • {driver.phone}</div>
                        </div>

                        <div>
                            <div className="text-xs text-gray-500">Vehicle</div>
                            <div className="text-sm font-medium">{driver.vehicle?.make || "-"} {driver.vehicle?.model || ""} • {driver.vehicle?.plate || "-"}</div>
                        </div>

                        <div>
                            <div className="text-xs text-gray-500">Stats</div>
                            <div className="text-sm font-medium">Rating: {driver.rating ?? "-"} • Completed rides: {driver.completedRides ?? 0}</div>
                        </div>

                        <div>
                            <div className="text-xs text-gray-500">Raw Data</div>
                            <pre className="text-xs bg-gray-50 p-2 rounded">{JSON.stringify(driver, null, 2)}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
