/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/admin/DriverFormModal.tsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import type { Driver } from "./driver.interface";

type Props = {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: Partial<Driver>) => Promise<any> | void;
    initialData?: Partial<Driver>;
    title?: string;
};

export const DriverFormModal: React.FC<Props> = ({ open, onClose, onSubmit, initialData, title = "Add Driver" }) => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Partial<Driver>>({
        defaultValues: initialData || {},
    });

    useEffect(() => {
        reset(initialData || {});
    }, [initialData, reset]);

    const submit = async (data: Partial<Driver>) => {
        await onSubmit(data);
        reset();
        onClose();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X /></button>
                </div>

                <form onSubmit={handleSubmit(submit)} className="p-4 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full name</label>
                        <input {...register("name", { required: "Name is required" })} className="mt-1 block w-full border rounded px-3 py-2" />
                        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })} className="mt-1 block w-full border rounded px-3 py-2" />
                            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input {...register("phone")} className="mt-1 block w-full border rounded px-3 py-2" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <input {...register("vehicle.make")} placeholder="Vehicle make" className="border rounded px-3 py-2" />
                        <input {...register("vehicle.model")} placeholder="Vehicle model" className="border rounded px-3 py-2" />
                        <input {...register("vehicle.plate")} placeholder="Plate number" className="border rounded px-3 py-2" />
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-2">
                        <button type="button" onClick={() => { reset(); onClose(); }} className="px-4 py-2 rounded border">Cancel</button>
                        <button type="submit" disabled={isSubmitting} className="px-4 py-2 rounded bg-blue-600 text-white">{isSubmitting ? "Saving..." : "Save"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
