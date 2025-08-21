"use client"

import type React from "react"

import { useState } from "react"
import { User, Car, Lock, Save } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useUpdateUserMutation } from "@/redux/features/auth/auth.api"

const DriverProfile = () => {
const [updateUser] = useUpdateUserMutation()



  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    email: user?.email || "",
    vehicleMake: "Toyota",
    vehicleModel: "Camry",
    vehicleYear: "2020",
    licensePlate: "ABC123",
    licenseNumber: "DL123456789",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [isUpdating, setIsUpdating] = useState(false)

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)

    try {
      await updateProfile({
        id: user?.id,
        name: profileData.name,
        phone: profileData.phone,
      }).unwrap()

      toast.success("Profile Updated")
    } catch (error) {
      toast.error("Update Failed")
    } finally {
      setIsUpdating(false)
    }
  }

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("Password Mismatch")
      return
    }

    if (passwordData.newPassword.length < 6) {
      toast.error("Password Too Short")
      return
    }

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })

      toast.success("Password Changed")
    } catch (error) {
      toast.error("Password Change Failed")
    }
  }

  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Personal Information
          </CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleProfileUpdate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" value={profileData.email} disabled className="bg-muted" />
              <p className="text-xs text-muted-foreground">Email cannot be changed</p>
            </div>
            <Button type="submit" disabled={isUpdating} className="w-full md:w-auto">
              <Save className="h-4 w-4 mr-2" />
              {isUpdating ? "Updating..." : "Update Profile"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Vehicle Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5" />
            Vehicle Information
          </CardTitle>
          <CardDescription>Manage your vehicle details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vehicleMake">Vehicle Make</Label>
              <Input
                id="vehicleMake"
                value={profileData.vehicleMake}
                onChange={(e) => setProfileData({ ...profileData, vehicleMake: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicleModel">Vehicle Model</Label>
              <Input
                id="vehicleModel"
                value={profileData.vehicleModel}
                onChange={(e) => setProfileData({ ...profileData, vehicleModel: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicleYear">Year</Label>
              <Input
                id="vehicleYear"
                value={profileData.vehicleYear}
                onChange={(e) => setProfileData({ ...profileData, vehicleYear: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="licensePlate">License Plate</Label>
              <Input
                id="licensePlate"
                value={profileData.licensePlate}
                onChange={(e) => setProfileData({ ...profileData, licensePlate: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="licenseNumber">Driver License Number</Label>
              <Input
                id="licenseNumber"
                value={profileData.licenseNumber}
                onChange={(e) => setProfileData({ ...profileData, licenseNumber: e.target.value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Change Password */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Change Password
          </CardTitle>
          <CardDescription>Update your account password</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input
                id="currentPassword"
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                required
              />
            </div>
            <Button type="submit" className="w-full md:w-auto">
              <Lock className="h-4 w-4 mr-2" />
              Change Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default DriverProfile
