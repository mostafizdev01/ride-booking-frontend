import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Camera } from "lucide-react";

export default function AdminProfilePage() {
  const [editMode, setEditMode] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [admin, setAdmin] = useState({
    name: "Super Admin",
    email: "admin@zoomride.com",
    phone: "+880 1777-123456",
    role: "Administrator",
    bio: "Managing ZoomRide operations, overseeing users and rides, and ensuring smooth system performance.",
    image: "https://i.pravatar.cc/150?img=11",
  });

  const [formData, setFormData] = useState(admin);
  const [stats] = useState([
    { label: "Total Drivers", value: 256 },
    { label: "Total Riders", value: 1380 },
    { label: "Active Rides", value: 42 },
    { label: "Support Tickets", value: 17 },
  ]);

  const handleSave = () => {
    setAdmin(formData);
    setEditMode(false);
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-2xl font-bold">Admin Profile</h2>
        <Button variant="secondary" onClick={() => setEditMode(!editMode)}>
          {editMode ? "Cancel" : "Edit Profile"}
        </Button>
      </div>

      {/* Profile Info */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>View or update your account details.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6 items-start">
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <Avatar className="h-28 w-28">
                <AvatarImage src={admin.image} alt={admin.name} />
                <AvatarFallback>{admin.name.charAt(0)}</AvatarFallback>
              </Avatar>
              {editMode && (
                <label className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-primary/90">
                  <Camera size={18} />
                  <input type="file" accept="image/*" className="hidden" />
                </label>
              )}
            </div>
            <p className="text-lg font-semibold">{admin.name}</p>
            <p className="text-sm text-gray-500">{admin.role}</p>
          </div>

          {/* Info Form */}
          <div className="space-y-3">
            <div>
              <Label>Name</Label>
              <Input
                value={formData.name}
                disabled={!editMode}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                value={formData.email}
                disabled
                className="bg-gray-100"
              />
            </div>
            <div>
              <Label>Phone</Label>
              <Input
                value={formData.phone}
                disabled={!editMode}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <Label>Bio</Label>
              <Textarea
                value={formData.bio}
                disabled={!editMode}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              />
            </div>

            <div className="flex gap-3 pt-3">
              {editMode && (
                <Button onClick={handleSave}>Save Changes</Button>
              )}
              <Button variant="outline" onClick={() => setPasswordModal(true)}>
                Change Password
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Account Overview</CardTitle>
          <CardDescription>System insights and performance summary.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-lg bg-gray-50 border text-center hover:bg-gray-100 transition"
              >
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Change Password Modal */}
      <Dialog open={passwordModal} onOpenChange={() => setPasswordModal(false)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div>
              <Label>Current Password</Label>
              <Input type="password" placeholder="Enter current password" />
            </div>
            <div>
              <Label>New Password</Label>
              <Input type="password" placeholder="Enter new password" />
            </div>
            <div>
              <Label>Confirm Password</Label>
              <Input type="password" placeholder="Re-enter new password" />
            </div>
          </div>
          <DialogFooter className="pt-4">
            <Button variant="outline" onClick={() => setPasswordModal(false)}>
              Cancel
            </Button>
            <Button>Update Password</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
