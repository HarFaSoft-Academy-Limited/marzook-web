"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Edit, MoreHorizontal, Plus, Trash2 } from "lucide-react"
import axios from "axios"
import { customBaseUrl } from "@/services/http"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Role {
  id: number;
  name: string;
  guard_name: string;
}

interface Permission {
  id: number;
  name: string;
  guard_name: string;
}

export function RolesPermissionsManagement() {
  const [roles, setRoles] = useState<Role[]>([])
  const [permissions, setPermissions] = useState<Permission[]>([])
  const [newRole, setNewRole] = useState({ name: "", guard_name: "web" })
  const [newPermission, setNewPermission] = useState({ name: "", guard_name: "web" })
  const [isAddRoleDialogOpen, setIsAddRoleDialogOpen] = useState(false)
  const [isAddPermissionDialogOpen, setIsAddPermissionDialogOpen] = useState(false)

  const fetchRoles = async () => {
    try {
      const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/roles-permissions/roles`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          'ngrok-skip-browser-warning': 'true'
        },
      })
      setRoles(res.data.roles)
    } catch (error) {
      console.error("Error fetching roles:", error)
    }
  }

  const fetchPermissions = async () => {
    try {
      const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/roles-permissions/permissions`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          'ngrok-skip-browser-warning': 'true'
        },
      })
      setPermissions(res.data.permissions)
    } catch (error) {
      console.error("Error fetching permissions:", error)
    }
  }

  useEffect(() => {
    fetchRoles()
    fetchPermissions()
  }, [])

  const handleAddRole = async () => {
    try {
      const res = await axios.post(`${customBaseUrl.baseUrl}/api/v1/roles-permissions/roles`, newRole, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      if (res.status === 201) {
        alert("Role added successfully!")
        setNewRole({ name: "", guard_name: "web" })
        setIsAddRoleDialogOpen(false)
        fetchRoles()
      } else {
        console.error("Error adding role:", res.data)
        alert("Failed to add role. Please try again.")
      }
    } catch (error) {
      console.error("Error adding role:", error)
      alert("Failed to add role. Please try again.")
    }
  }

  const handleAddPermission = async () => {
    try {
      const res = await axios.post(`${customBaseUrl.baseUrl}/api/v1/roles-permissions/permissions`, newPermission, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      if (res.status === 201) {
        alert("Permission added successfully!")
        setNewPermission({ name: "", guard_name: "web" })
        setIsAddPermissionDialogOpen(false)
        fetchPermissions()
      } else {
        console.error("Error adding permission:", res.data)
        alert("Failed to add permission. Please try again.")
      }
    } catch (error) {
      console.error("Error adding permission:", error)
      alert("Failed to add permission. Please try again.")
    }
  }

  return (
    <Tabs defaultValue="roles">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="roles">Roles</TabsTrigger>
        <TabsTrigger value="permissions">Permissions</TabsTrigger>
      </TabsList>
      <TabsContent value="roles" className="space-y-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base">Roles</CardTitle>
            <Dialog open={isAddRoleDialogOpen} onOpenChange={setIsAddRoleDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                  <Plus className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Role</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Role</DialogTitle>
                  <DialogDescription>Enter the details for the new role.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="role-name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="role-name"
                      value={newRole.name}
                      onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="guard-name" className="text-right">
                      Guard Name
                    </Label>
                    <Input
                      id="guard-name"
                      value={newRole.guard_name}
                      onChange={(e) => setNewRole({ ...newRole, guard_name: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddRoleDialogOpen(false)}>Cancel</Button>
                  <Button onClick={handleAddRole}>Add Role</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Guard Name</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roles.length > 0 &&roles.map((role) => (
                  <TableRow key={role.id}>
                    <TableCell className="font-medium">{role.name}</TableCell>
                    <TableCell>{role.guard_name}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="permissions" className="space-y-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base">Permissions</CardTitle>
            <Dialog open={isAddPermissionDialogOpen} onOpenChange={setIsAddPermissionDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                  <Plus className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Permission</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Permission</DialogTitle>
                  <DialogDescription>Enter the details for the new permission.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="permission-name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="permission-name"
                      value={newPermission.name}
                      onChange={(e) => setNewPermission({ ...newPermission, name: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="permission-guard-name" className="text-right">
                      Guard Name
                    </Label>
                    <Input
                      id="permission-guard-name"
                      value={newPermission.guard_name}
                      onChange={(e) => setNewPermission({ ...newPermission, guard_name: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddPermissionDialogOpen(false)}>Cancel</Button>
                  <Button onClick={handleAddPermission}>Add Permission</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Guard Name</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {permissions.length > 0 && permissions.map((permission) => (
                  <TableRow key={permission.id}>
                    <TableCell className="font-medium">{permission.name}</TableCell>
                    <TableCell>{permission.guard_name}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
