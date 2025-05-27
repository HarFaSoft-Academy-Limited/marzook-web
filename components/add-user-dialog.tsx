"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { UserPlus } from "lucide-react"

export function AddUserDialog() {
  const [open, setOpen] = useState(false)
  const [userType, setUserType] = useState("staff")

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700">
          <UserPlus className="mr-2 h-4 w-4" />
          Add New User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>Create a new user account in the system.</DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="user-type">User Type</Label>
            <Select defaultValue="staff" onValueChange={(value) => setUserType(value)}>
              <SelectTrigger id="user-type">
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
                <SelectItem value="parent">Parent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="First name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Last name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Phone number" />
              </div>
            </div>

            {userType === "admin" && (
              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="admin-role">Admin Role</Label>
                  <Select defaultValue="admin">
                    <SelectTrigger id="admin-role">
                      <SelectValue placeholder="Select admin role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="super-admin">Super Admin</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="section-head">Section Head</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section-access">Section Access</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="section-access">
                      <SelectValue placeholder="Select section access" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sections</SelectItem>
                      <SelectItem value="primary">Primary Only</SelectItem>
                      <SelectItem value="secondary">Secondary Only</SelectItem>
                      <SelectItem value="islamiyya">Islamiyya Only</SelectItem>
                      <SelectItem value="tahfeez">Tahfeez Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1 pt-2">
                  <Label className="mb-2 block">Admin Permissions</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-users" defaultChecked />
                      <label htmlFor="perm-users" className="text-sm">
                        Manage Users
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-students" defaultChecked />
                      <label htmlFor="perm-students" className="text-sm">
                        Manage Students
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-finances" defaultChecked />
                      <label htmlFor="perm-finances" className="text-sm">
                        Financial Management
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-academic" defaultChecked />
                      <label htmlFor="perm-academic" className="text-sm">
                        Academic Records
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-settings" />
                      <label htmlFor="perm-settings" className="text-sm">
                        System Settings
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-reports" defaultChecked />
                      <label htmlFor="perm-reports" className="text-sm">
                        Generate Reports
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {userType === "staff" && (
              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="staff-role">Staff Role</Label>
                  <Select defaultValue="teacher">
                    <SelectTrigger id="staff-role">
                      <SelectValue placeholder="Select staff role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="teacher">Teacher</SelectItem>
                      <SelectItem value="form-teacher">Form Teacher</SelectItem>
                      <SelectItem value="bursar">Bursar</SelectItem>
                      <SelectItem value="librarian">Librarian</SelectItem>
                      <SelectItem value="admin-staff">Administrative Staff</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject(s) Taught</Label>
                  <Input id="subject" placeholder="e.g. Mathematics, English, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section">Section(s)</Label>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="section-primary" defaultChecked />
                      <label htmlFor="section-primary" className="text-sm">
                        Primary
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="section-secondary" />
                      <label htmlFor="section-secondary" className="text-sm">
                        Secondary
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="section-islamiyya" />
                      <label htmlFor="section-islamiyya" className="text-sm">
                        Islamiyya
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="section-tahfeez" />
                      <label htmlFor="section-tahfeez" className="text-sm">
                        Tahfeez
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="form-class">Form Class (if Form Teacher)</Label>
                  <Select disabled>
                    <SelectTrigger id="form-class">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="primary1">Primary 1</SelectItem>
                      <SelectItem value="primary2">Primary 2</SelectItem>
                      <SelectItem value="primary3">Primary 3</SelectItem>
                      <SelectItem value="jss1">JSS 1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {userType === "parent" && (
              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="relationship">Relationship to Student</Label>
                  <Select defaultValue="father">
                    <SelectTrigger id="relationship">
                      <SelectValue placeholder="Select relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="father">Father</SelectItem>
                      <SelectItem value="mother">Mother</SelectItem>
                      <SelectItem value="guardian">Guardian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-link">Link to Student(s)</Label>
                  <Select>
                    <SelectTrigger id="student-link">
                      <SelectValue placeholder="Select student" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="amina">Amina Ibrahim</SelectItem>
                      <SelectItem value="yusuf">Yusuf Mohammed</SelectItem>
                      <SelectItem value="fatima">Fatima Abubakar</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground mt-1">
                    You can link more students after creating the account
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input id="occupation" placeholder="Occupation" />
                </div>
              </div>
            )}

            <div className="pt-4 border-t">
              <h3 className="text-sm font-medium mb-2">Account Setup</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Username" />
                  <p className="text-xs text-muted-foreground mt-1">Will be auto-generated if left blank</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      Generate Password
                    </Button>
                  </div>
                  <Input id="password" type="password" placeholder="Password" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="email-credentials" defaultChecked />
                  <label htmlFor="email-credentials" className="text-sm">
                    Email login credentials to user
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="reset-password" defaultChecked />
                  <label htmlFor="reset-password" className="text-sm">
                    Require password reset on first login
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className="bg-green-600 hover:bg-green-700" onClick={() => setOpen(false)}>
            Create User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
