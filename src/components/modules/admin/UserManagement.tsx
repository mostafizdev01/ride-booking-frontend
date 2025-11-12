"use client"

import { useState } from "react"
import { Search, MoreHorizontal, Shield, ShieldOff, Eye, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { useAllUsersQuery, useUpdateUserMutation } from "@/redux/features/auth/auth.api"
import { IUser, Role } from "@/types/user.type"

type FrontendUser = {
  id: string
  name: string
  email: string
  phone: string
  role: Role
  isBlocked: boolean
  isActive: boolean
  joinDate: string
  totalRides: number
  rating: number
}

function normalizeUser(user: IUser): FrontendUser {
  return {
    id: user._id?.toString() || "",
    name: user.name,
    email: user.email,
    phone: user.phone || "-",
    role: user.role,
    isBlocked: user.isBlocked ?? false,
    isActive: user.isActive ?? false,
    joinDate: user.createdAt || new Date().toISOString(),
    totalRides: user.rides?.length || 0,
    rating: user.averageRating || 0,
  }
}

const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)

  // console.log(searchQuery, roleFilter, statusFilter);
  // ---- API call with query params ----
  const { data, isLoading } = useAllUsersQuery({
    search: searchQuery || undefined,
    role: roleFilter !== "all" ? roleFilter : undefined,
    status: statusFilter !== "all" ? statusFilter : undefined,
    page: currentPage,
    limit: 5,
  })

  const [updateUser] = useUpdateUserMutation()

  const users: FrontendUser[] = data?.data?.map((u: IUser) => normalizeUser(u)) || []
  const meta = data?.meta || { total: 0, page: 1, limit: 10 }
  const totalPages = Math.ceil(meta.total / meta.limit)

const handleRoleChange = async (id: string, newRole: Role) => {
    try {
      await updateUser({ id, data: { role: newRole } }).unwrap()
      toast.success(`User role has been changed to ${newRole}.`)
    } catch {
      toast.error("Role change failed.")
    }
  }

  // ---- Action handler ----
  const handleUserAction = async (id: string, data: { isBlocked: boolean; isActive: boolean }) => {
    try {
      // console.log(data, id);
      await updateUser({
        id, data: {
          isBlocked: data.isBlocked,
          isActive: data.isActive
        }
      }).unwrap()
      toast.success(`User has been ${data.isActive ? "unblocked" : "blocked"} successfully.`)
    } catch {
      toast.error("Action Failed")
    }
  }

  // ---- Badge helpers ----
  const getStatusBadge = (user: { isBlocked: boolean; isActive: boolean }) => {
    if (user.isBlocked) return <Badge variant="destructive">Blocked</Badge>
    if (user.isActive) return <Badge className="bg-green-500">Active</Badge>
  }

  const getRoleBadge = (role: FrontendUser["role"]) => {
    const roleMap: Record<string, { label: string; color: string }> = {
      DRIVER: { label: "Driver", color: "border-blue-500 text-blue-500" },
      RIDER: { label: "Rider", color: "border-purple-500 text-purple-500" },
      ADMIN: { label: "Admin", color: "border-red-500 text-red-500" },
      SUPER_ADMIN: { label: "Super Admin", color: "border-orange-500 text-orange-500" },
    }
    return <Badge variant="outline" className={roleMap[role].color}>{roleMap[role].label}</Badge>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Management</CardTitle>
        <CardDescription>Manage riders, drivers, and admins on the platform</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
              }}
              className="pl-10"
            />
          </div>
          <Select value={roleFilter} onValueChange={(val) => { setRoleFilter(val); setCurrentPage(1) }}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="RIDER">Riders</SelectItem>
              <SelectItem value="DRIVER">Drivers</SelectItem>
              <SelectItem value="ADMIN">Admins</SelectItem>
              <SelectItem value="SUPER_ADMIN">Super Admins</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={(val) => { setStatusFilter(val); setCurrentPage(1) }}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="ACTIVE">Active</SelectItem>
              <SelectItem value="BLOCKED">Blocked</SelectItem>
              <SelectItem value="SUSPENDED">Suspended</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Users Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total Rides</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    No users found
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                        <div className="text-sm text-muted-foreground">{user.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>{getRoleBadge(user.role)}</TableCell>
                    <TableCell>{getStatusBadge({ isBlocked: user.isBlocked, isActive: user.isActive })}</TableCell>
                    <TableCell>{user.totalRides}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <span>{user.rating.toFixed(1)}</span>
                        <span className="text-yellow-500">★</span>
                      </div>
                    </TableCell>
                    <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <Dialog>
                            <DialogTrigger asChild>
                              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>User Details</DialogTitle>
                                <DialogDescription>Detailed information for {user.name}</DialogDescription>
                                {/* Update User Role Here*/}
                                <form>
                                  <div className="grid grid-cols-1 gap-4">
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="w-full">
                                          {user.role}
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => handleRoleChange(user.id, Role.ADMIN)}>
                                          Admin
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleRoleChange(user.id, Role.RIDER)}>
                                          Rider
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleRoleChange(user.id, Role.DRIVER)}>
                                          Driver
                                        </DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  </div>
                                </form>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                          <DropdownMenuItem onClick={() => window.open(`mailto:${user.email}`)}>
                            <Mail className="mr-2 h-4 w-4" />
                            Send Email
                          </DropdownMenuItem>

                          {/* --- Action buttons --- */}
                          {user.isBlocked ? (
                            <DropdownMenuItem onClick={() => handleUserAction(user.id, { isBlocked: false, isActive: true })}>
                              <Shield className="mr-2 h-4 w-4" />
                              Unblock User
                            </DropdownMenuItem>
                          ) : (
                            <>
                              <DropdownMenuItem onClick={() => handleUserAction(user.id, { isBlocked: true, isActive: false })}>
                                <ShieldOff className="mr-2 h-4 w-4" />
                                Block User
                              </DropdownMenuItem>
                            </>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-muted-foreground">
              Showing {(meta.page - 1) * meta.limit + 1} to{" "}
              {Math.min(meta.page * meta.limit, meta.total)} of {meta.total} users
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => p - 1)}
                disabled={meta.page === 1}
              >
                Previous
              </Button>
              <span className="text-sm">
                Page {meta.page} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={meta.page === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default UserManagement
