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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Role {
  id: number;
  name: string;
  guard_name: string;
  permissions: Permission[];
}

interface Permission {
  id: number;
  name: string;
  guard_name: string;
}

const AddRoleDialog = ({ onRoleAdded }: { onRoleAdded: () => void }) => {
  const [newRole, setNewRole] = useState({ name: "", guard_name: "web" })
  const [isOpen, setIsOpen] = useState(false)

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
        setIsOpen(false)
        onRoleAdded()
      } else {
        console.error("Error adding role:", res.data)
        alert("Failed to add role. Please try again.")
      }
    } catch (error) {
      console.error("Error adding role:", error)
      alert("Failed to add role. Please try again.")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={handleAddRole}>Add Role</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const ViewRoleDialog = ({ role, isOpen, onOpenChange, onRoleUpdated }: { role: Role | null, isOpen: boolean, onOpenChange: (isOpen: boolean) => void, onRoleUpdated: () => void }) => {
  const [allPermissions, setAllPermissions] = useState<Permission[]>([])
  const [selectedPermission, setSelectedPermission] = useState<string | null>(null)

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/roles-permissions/permissions`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            'ngrok-skip-browser-warning': 'true'
          },
        })
        setAllPermissions(res.data.permissions)
      } catch (error) {
        console.error("Error fetching permissions:", error)
      }
    }
    if (isOpen) {
      fetchPermissions()
    }
  }, [isOpen])

  const handleAddPermissionToRole = async (permissionName: string) => {
    if (!role) return

    try {
      const res = await axios.post(`${customBaseUrl.baseUrl}/api/v1/roles-permissions/roles/${role.id}/permissions`, {
        permissions: [permissionName]
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })

      if (res.status === 200) {
        alert("Permission added successfully!")
        setSelectedPermission(null)
        onRoleUpdated()
      } else {
        console.error("Error adding permission to role:", res.data)
        alert("Failed to add permission. Please try again.")
      }
    } catch (error) {
      console.error("Error adding permission to role:", error)
      alert("Failed to add permission. Please try again.")
    }
  }

  if (!role) return null

  const assignedPermissions = role.permissions.map(p => p.name)
  const unassignedPermissions = allPermissions.filter(p => !assignedPermissions.includes(p.name))

  return (
    <><Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Role Details: {role.name}</DialogTitle>
          <DialogDescription>Manage permissions for the role.</DialogDescription>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="font-semibold mb-2">Assigned Permissions</h3>
            <ScrollArea className="h-64 pr-4">
              <div className="space-y-2">
                {role.permissions.length > 0 ? (
                  role.permissions.map((permission) => (
                    <div key={permission.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                      <span className="truncate">{permission.name}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground">No permissions assigned.</p>
                )}
              </div>
            </ScrollArea>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Available Permissions</h3>
            <ScrollArea className="h-64 pr-4">
              <div className="space-y-2">
                {unassignedPermissions.length > 0 ? (
                  unassignedPermissions.map((permission) => (
                    <div key={permission.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                      <span className="truncate">{permission.name}</span>,
                      <Button size="sm" onClick={() => handleAddPermissionToRole(permission.name)}>+</Button>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground">No available permissions.</p>
                )}
              </div>
            </ScrollArea>
          </div>
        </div><div className="mt-6">
        <Label>Add Permission from List</Label>
        <div className="flex items-center space-x-2 mt-2">
          <Select onValueChange={setSelectedPermission} value={selectedPermission || ''}>
            <SelectTrigger>
              <SelectValue placeholder="Select a permission" />
            </SelectTrigger>
            <SelectContent>
              {unassignedPermissions.map(p => (
                <SelectItem key={p.id} value={p.name}>{p.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={() => selectedPermission && handleAddPermissionToRole(selectedPermission)} disabled={!selectedPermission}>Add to Role</Button>
        </div>
      </div><DialogFooter className="mt-6">
        <Button onClick={() => onOpenChange(false)}>Close</Button>
      </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  )
}

const RolesTab = () => {
  const [roles, setRoles] = useState<Role[]>([])
  const [isViewRoleModalOpen, setIsViewRoleModalOpen] = useState(false)
  const [roleToView, setRoleToView] = useState<Role | null>(null)

  const fetchRoles = async () => {
    try {
      const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/roles-permissions/roles?with_permissions=true`, {
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

  useEffect(() => {
    fetchRoles()
  }, [])

  const handleRoleUpdated = () => {
    fetchRoles()
    // Keep the modal open to see the changes
    if (roleToView) {
      const updatedRole = roles.find(r => r.id === roleToView.id)
      if (updatedRole) {
        setRoleToView(updatedRole)
      }
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">Roles</CardTitle>
        <AddRoleDialog onRoleAdded={fetchRoles} />
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
            {roles.length > 0 && roles.map((role) => (
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
                      <DropdownMenuItem
                        onClick={() => {
                          setRoleToView(role)
                          setIsViewRoleModalOpen(true)
                        }}
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        View
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
      <ViewRoleDialog role={roleToView} isOpen={isViewRoleModalOpen} onOpenChange={setIsViewRoleModalOpen} onRoleUpdated={handleRoleUpdated} />
    </Card>
  )
}

const AddPermissionDialog = ({ onPermissionAdded }: { onPermissionAdded: () => void }) => {
  const [newPermission, setNewPermission] = useState({ name: "", guard_name: "web" })
  const [isOpen, setIsOpen] = useState(false)

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
        setIsOpen(false)
        onPermissionAdded()
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={handleAddPermission}>Add Permission</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const PermissionsTab = () => {
  const [permissions, setPermissions] = useState<Permission[]>([])

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
    fetchPermissions()
  }, [])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">Permissions</CardTitle>
        <AddPermissionDialog onPermissionAdded={fetchPermissions} />
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
  )
}

export function RolesPermissionsManagement() {
  return (
    <Tabs defaultValue="roles">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="roles">Roles</TabsTrigger>
        <TabsTrigger value="permissions">Permissions</TabsTrigger>
      </TabsList>
      <TabsContent value="roles" className="space-y-4">
        <RolesTab />
      </TabsContent>
      <TabsContent value="permissions" className="space-y-4">
        <PermissionsTab />
      </TabsContent>
    </Tabs>
  )
}
