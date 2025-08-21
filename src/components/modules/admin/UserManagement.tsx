"use client"

import { useState, useEffect } from "react"
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

interface User {
  id: string
  name: string
  email: string
  phone: string
  role: "rider" | "driver"
  status: "active" | "blocked" | "suspended"
  joinDate: string
  totalRides: number
  rating: number
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 10

  useEffect(() => {
    // Mock user data
    const mockUsers: User[] = [
      {
        id: "user-001",
        name: "John Smith",
        email: "john.smith@email.com",
        phone: "+1 (555) 123-4567",
        role: "driver",
        status: "active",
        joinDate: "2024-01-15",
        totalRides: 245,
        rating: 4.8,
      },
      {
        id: "user-002",
        name: "Sarah Johnson",
        email: "sarah.j@email.com",
        phone: "+1 (555) 234-5678",
        role: "rider",
        status: "active",
        joinDate: "2024-02-20",
        totalRides: 67,
        rating: 4.9,
      },
      {
        id: "user-003",
        name: "Mike Wilson",
        email: "mike.wilson@email.com",
        phone: "+1 (555) 345-6789",
        role: "driver",
        status: "blocked",
        joinDate: "2023-12-10",
        totalRides: 89,
        rating: 3.2,
      },
    ]
    setUsers(mockUsers)
  }, [])

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.includes(searchQuery)

    const matchesRole = roleFilter === "all" || user.role === roleFilter
    const matchesStatus = statusFilter === "all" || user.status === statusFilter

    return matchesSearch && matchesRole && matchesStatus
  })

  const paginatedUsers = filteredUsers.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage)

  const handleUserAction = async (userId: string, action: "block" | "unblock" | "suspend") => {
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setUsers((prev) =>
        prev.map((user) =>
          user.id === userId
            ? {
                ...user,
                status: action === "block" ? "blocked" : action === "suspend" ? "suspended" : "active",
              }
            : user,
        ),
      )

      toast.success(`User has been ${action}ed successfully.`)
    } catch (error) {
      toast.error("Action Failed")
    }
  }

  const getStatusBadge = (status: User["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "blocked":
        return <Badge variant="destructive">Blocked</Badge>
      case "suspended":
        return <Badge className="bg-yellow-500">Suspended</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getRoleBadge = (role: User["role"]) => {
    return (
      <Badge
        variant="outline"
        className={role === "driver" ? "border-blue-500 text-blue-500" : "border-purple-500 text-purple-500"}
      >
        {role === "driver" ? "Driver" : "Rider"}
      </Badge>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Management</CardTitle>
        <CardDescription>Manage riders and drivers on the platform</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users by name, email, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="rider">Riders</SelectItem>
              <SelectItem value="driver">Drivers</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="blocked">Blocked</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
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
              {paginatedUsers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    No users found matching your criteria
                  </TableCell>
                </TableRow>
              ) : (
                paginatedUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                        <div className="text-sm text-muted-foreground">{user.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>{getRoleBadge(user.role)}</TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
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
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <span className="text-sm font-medium">Name:</span>
                                    <p>{user.name}</p>
                                  </div>
                                  <div>
                                    <span className="text-sm font-medium">Role:</span>
                                    <p className="capitalize">{user.role}</p>
                                  </div>
                                  <div>
                                    <span className="text-sm font-medium">Email:</span>
                                    <p>{user.email}</p>
                                  </div>
                                  <div>
                                    <span className="text-sm font-medium">Phone:</span>
                                    <p>{user.phone}</p>
                                  </div>
                                  <div>
                                    <span className="text-sm font-medium">Status:</span>
                                    <div className="mt-1">{getStatusBadge(user.status)}</div>
                                  </div>
                                  <div>
                                    <span className="text-sm font-medium">Rating:</span>
                                    <p>{user.rating.toFixed(1)}/5.0</p>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <DropdownMenuItem onClick={() => window.open(`mailto:${user.email}`)}>
                            <Mail className="mr-2 h-4 w-4" />
                            Send Email
                          </DropdownMenuItem>
                          {user.status === "active" ? (
                            <>
                              <DropdownMenuItem onClick={() => handleUserAction(user.id, "block")}>
                                <ShieldOff className="mr-2 h-4 w-4" />
                                Block User
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleUserAction(user.id, "suspend")}>
                                <Shield className="mr-2 h-4 w-4" />
                                Suspend User
                              </DropdownMenuItem>
                            </>
                          ) : (
                            <DropdownMenuItem onClick={() => handleUserAction(user.id, "unblock")}>
                              <Shield className="mr-2 h-4 w-4" />
                              Unblock User
                            </DropdownMenuItem>
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
              Showing {(currentPage - 1) * usersPerPage + 1} to{" "}
              {Math.min(currentPage * usersPerPage, filteredUsers.length)} of {filteredUsers.length} users
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
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
