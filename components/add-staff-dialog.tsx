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
import { createStaff } from "@/services/staff"
import { getSections } from "@/services/section"
import { getSubjects } from "@/services/subject"

export function AddStaffDialog({ onStaffAdded }) {
  const [open, setOpen] = useState(false)
  const [sections, setSections] = useState([])
  const [subjects, setSubjects] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "male",
    date_of_birth: "",
    nationality: "",
    religion: "",
    marital_status: "",
    designation: "",
    sections: [],
    subjects: [],
  })

  useEffect(() => {
    const fetchSectionsAndSubjects = async () => {
      const sectionsData = await getSections();
      const subjectsData = await getSubjects();
      setSections(sectionsData);
      setSubjects(subjectsData);
    };
    fetchSectionsAndSubjects();
  }, []);

  const handleCreateUser = async () => {
    await createStaff(formData);
    onStaffAdded();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700">
          <UserPlus className="mr-2 h-4 w-4" />
          Add New Staff
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Staff</DialogTitle>
          <DialogDescription>Create a new staff account in the system.</DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Full name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Email address" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Phone number" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="12 St. Luis" onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Input id="nationality" placeholder="Nationality" onChange={(e) => setFormData({ ...formData, nationality: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select defaultValue="male" onValueChange={(value) => setFormData({ ...formData, gender: value })}>
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
                <Input id="date_of_birth" type="date" onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="religion">Religion</Label>
                <Input id="religion" placeholder="Religion" onChange={(e) => setFormData({ ...formData, religion: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="marital_status">Marital Status</Label>
                <Select defaultValue="single" onValueChange={(value) => setFormData({ ...formData, marital_status: value })}>
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
              <div className="space-y-2">
                <Label htmlFor="designation">Designation</Label>
                <Input id="designation" placeholder="Designation" onChange={(e) => setFormData({ ...formData, designation: e.target.value })} />
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <Label htmlFor="section">Section(s)</Label>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {sections.map((section) => (
                    <div key={section.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={section.name}
                        checked={formData.sections.includes(section.id)}
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
              <div className="space-y-2">
                <Label htmlFor="section">Subjects</Label>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {subjects.map((sub) => (
                    <div key={sub.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={sub.name}
                        checked={formData.subjects.includes(sub.id)}
                        onCheckedChange={(checked) => {
                          setFormData((prev) => ({
                            ...prev,
                            subjects: checked
                              ? [...prev.subjects, sub.id]
                              : prev.subjects.filter((id) => id !== sub.id),
                          }));
                        }}
                      />
                      <label htmlFor={sub.name} className="text-sm">
                        {sub.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className="bg-green-600 hover:bg-green-700" onClick={handleCreateUser}>
            Create User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}