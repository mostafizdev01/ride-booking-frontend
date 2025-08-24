import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from '@/components/ui/badge';

import { useUpdateUserMutation, useUserInfoQuery } from '@/redux/features/auth/auth.api';
import { toast } from 'sonner';
import Loading from '@/components/layout/Loading';

const RiderProfile = () => {
    const { data, isLoading, refetch } = useUserInfoQuery(undefined);
    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

    const user = data?.data;

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                phone: user.phone || "",
                address: user.address || "",
            });
        }
    }, [user]);

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    // Handle profile update
    const handleUpdate = async () => {
        try {
            await updateUser({ id: user._id, data: formData }).unwrap();
            setOpen(false);
            toast.success("Profile updated successfully!");
            refetch();
        } catch (err) {
            toast.error("Update failed");
        }
    };

    if (isLoading) return <Loading />;
    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen text-xl font-semibold text-red-500">
                User data not found.
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center p-8 min-h-screen">
            <Card className="w-full max-w-3xl shadow-lg rounded-2xl">
                {/* --- Header Section --- */}
                <CardHeader className="flex flex-col md:flex-row items-center justify-between p-6">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <Avatar className="w-24 h-24 border-2">
                            <AvatarImage src={user.picture} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="text-center md:text-left">
                            <CardTitle className="text-3xl font-bold">{user.name}</CardTitle>
                            <CardDescription className="text-lg mt-1">{user.email}</CardDescription>
                            <div className="mt-2 flex items-center justify-center md:justify-start gap-2 flex-wrap">
                                <Badge variant="secondary">{user.role}</Badge>
                                <Badge variant={user.isActive ? "default" : "destructive"}>
                                    {user.isActive ? "Active" : "Inactive"}
                                </Badge>
                                {user.isApproved && <Badge variant="default">Approved</Badge>}
                            </div>
                        </div>
                    </div>

                    {/* Update Dialog */}
                    <div className="mt-4 md:mt-0">
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <Button>Update Profile</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Update Profile</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here. Click save when done.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">Name</Label>
                                        <Input id="name" value={formData.name} onChange={handleInputChange} className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="phone" className="text-right">Phone</Label>
                                        <Input id="phone" value={formData.phone} onChange={handleInputChange} className="col-span-3" />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2">
                                    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                                    <Button onClick={handleUpdate} disabled={isUpdating}>
                                        {isUpdating ? "Saving..." : "Save changes"}
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </CardHeader>

                <div className="border-t"></div>

                {/* --- Info Section --- */}
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Label className="text-sm font-medium mb-1">Phone</Label>
                            <p className="text-lg">{user.phone || "Not provided"}</p>
                        </div>
                        {
                            user.role === "DRIVER" && <>
                                <div>
                                    <Label className="text-sm font-medium mb-1">Total Earnings</Label>
                                    <p className="text-lg">{user.totalEarnings ? `$${user.totalEarnings}` : "N/A"}</p>
                                </div>
                                <div>
                                    <Label className="text-sm font-medium mb-1">Average Rating</Label>
                                    <p className="text-lg">
                                        {user.averageRating ? `${user.averageRating} ⭐ (${user.totalRatings} reviews)` : "Not rated yet"}
                                    </p>
                                </div>
                            </>
                        }

                    </div>

                    {/* Vehicle Info for Drivers */}
                    {user.role === "DRIVER" && user.vehicleInfo && (
                        <div className="mt-8">
                            <h2 className="text-xl font-semibold mb-4">🚘 Vehicle Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <Label className="text-sm font-medium mb-1">Model</Label>
                                    <p className="text-lg">{user.vehicleInfo.model}</p>
                                </div>
                                <div>
                                    <Label className="text-sm font-medium mb-1">Plate Number</Label>
                                    <p className="text-lg">{user.vehicleInfo.plateNumber}</p>
                                </div>
                                <div>
                                    <Label className="text-sm font-medium mb-1">Color</Label>
                                    <p className="text-lg">{user.vehicleInfo.color}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default RiderProfile;