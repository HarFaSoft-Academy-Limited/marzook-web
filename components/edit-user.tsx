"use client"

import { useState, useEffect } from "react"
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
import { customBaseUrl } from "@/services/http"
import axios from "axios"



export function EditDialog({user, hideModal,  showModal}) {


  const [open, setOpen] = useState(false)
  const [userType, setUserType] = useState("staff")
  const [sections, setSections] = useState([])
  const [formData, setFormData] = useState({
    name: user?.user?.name,
    email: user?.user?.email,
    phone: user?.user?.phone,
    username: user?.username,
    password: "",
    sections: user?.sections.map((s) => s.id),
    address: user?.address,
    gender: user?.gender,
    date_of_birth: user?.date_of_birth,
    nationality: user?.nationality,
    religion: user?.religion,
    marital_status: user?.marital_status,
    photo: "",
    designation: user?.designation,
  })

  useEffect(() => {
    const fetchSections = async () => {
        try {
          const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/sections`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              'ngrok-skip-browser-warning': 'true'
            },
          })
          setSections(res.data.data.data)
        } catch (error) {
          console.error("Error fetching sections:", error)
        }
      }

    fetchSections()
  }, [])

useEffect(() => {
  const section  = []
  user?.sections.map((s) => section.push(s.id))
  

setFormData({
  name: user?.user?.name,
  email: user?.user?.email,
  phone: user?.user?.phone,
  username: user?.username,
  password: "",
  sections: section,
  address: user?.address,
  gender: user?.gender,
  date_of_birth: user?.date_of_birth,
  nationality: user?.nationality,
  religion: user?.religion,
  marital_status: user?.marital_status,
  photo: "",
  designation: user?.designation,
})
},  [user])
console.log({user})
  const handleUpdateUser = async  () => {
    // Handle user creation logic here
    console.log("Creating user with type:", formData)
    const res = await axios.put(`${customBaseUrl.baseUrl}/api/v1/staff/${user.id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    )

    if (res.status !== 200) {
      console.error("Error creating user:", res.data)
      alert("Failed to create user. Please try again.")
      return
    }
    alert("User created successfully!")
    setOpen(false) // Close dialog after creation
  }
  return (
    <Dialog open={showModal} onOpenChange={hideModal}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700">
          <UserPlus className="mr-2 h-4 w-4" />
          Edit User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>Update user account in the system.</DialogDescription>
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
                {/* <SelectItem value="parent">Parent</SelectItem> */}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">name</Label>
                <Input id="name" value={formData.name} placeholder="Full name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              {/* <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Last name" />
              </div> */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" value={formData.email} type="email" placeholder="Email address" onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value={formData.phone} placeholder="Phone number" onChange={(e) => setFormData({...formData, phone: e.target.value})}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" value={formData.address} placeholder="12  St. Luis " onChange={(e) => setFormData({...formData, address: e.target.value})}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality"></Label>
                <Input id="nationality" value={formData.nationality} placeholder="nationality" onChange={(e) => setFormData({...formData, nationality: e.target.value})}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select value={formData.gender} defaultValue="male" onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date_of_birth">Date of Birth</Label>
                <Input
                  id="date_of_birth"
                  type="date"
                  value={formData.date_of_birth}
                  onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="religion">Religion</Label>
                <Input
                  id="religion"
                  placeholder="Religion"
                  value={formData.religion}
                  onChange={(e) => setFormData({ ...formData, religion: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="marital_status">Marital Status</Label>
                <Select value={formData.marital_status} defaultValue="single" onValueChange={(value) => setFormData({ ...formData, marital_status: value })}>
                  <SelectTrigger id="marital_status">
                    <SelectValue placeholder="Select marital status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* <div className="space-y-2">
                <Label htmlFor="photo">Photo</Label>
                <Input
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, photo: e.target.files })}
                />
              </div> */}
              <div className="space-y-2">
                <Label htmlFor="designation">Designation</Label>
                <Input id="designation" value={formData.designation} placeholder="" onChange={(e) => setFormData({...formData, designation: e.target.value})}/>
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
                {/* <div className="space-y-2">
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
                </div> */}
                {/* <div className="space-y-2">
                  <Label htmlFor="subject">Subject(s) Taught</Label>
                  <Input id="subject" placeholder="e.g. Mathematics, English, etc." />
                </div> */}
                      <div className="space-y-2">
                        <Label htmlFor="section">Section(s)</Label>
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          {sections?.length > 0 && sections.map((section) => (
                            <div key={section.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={section.name}
                                checked={formData?.sections?.includes(section.id)}
                                onCheckedChange={(checked) => {
                                  setFormData((prev) => ({
                                    ...prev,
                                    sections: checked
                                      ? [...prev.sections, section.id]
                                      : prev.sections.filter((id) => id !== section.id),
                                  }));
                                }}
                              />
                              <label htmlFor={section.name} className="text-sm">
                                {section.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                {/* <div className="space-y-2">
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
                </div> */}
              </div>
            )}

            {userType === "parent" && (
              <div className="space-y-4 pt-2" hidden>
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

            <div className="pt-4 border-t" hidden>
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
          <Button className="bg-green-600 hover:bg-green-700" onClick={handleUpdateUser}>
            Update User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}