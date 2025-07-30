"use client"

import { useEffect, useState } from "react"
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
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus } from "lucide-react"

import { createStudent } from "@/services/student";
import { getParents } from "@/services/parent";

type Parent = {
  id: number;
  user: {
    name: string;
    email: string;
  }
};
export function RegisterStudentDialog() {
  const [open, setOpen] = useState(false)
  const [parents, setParents] = useState<Parent[]>([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    other_name: "",
    gender: "",
    date_of_birth: "",
    nationality: "",
    religion: "",
    email: "",
    phone: "",
    address: "",
    admission_no: "",
    admission_date: "",
    parent_id: 1,
    relationship: "",
  });

  useEffect(() => {
    const fetchParents = async () => {
      const parentsData = await getParents();
      setParents(parentsData);
    };
    fetchParents();
  }, []);

  const handleRegisterStudent = async () => {
    const res = await createStudent(formData);
    if (res) {
      setOpen(false);
    } else {
      alert("Failed to register student");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700">
          <UserPlus className="mr-2 h-4 w-4" />
          Register New Student
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Register New Student</DialogTitle>
          <DialogDescription>Enter student information to register in the system.</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="basic" className="mt-5">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            {/* <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="parent">Parent/Guardian</TabsTrigger>
            <TabsTrigger value="additional">Additional</TabsTrigger> */}
          </TabsList>

          <TabsContent value="basic" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="admission-number">Admission Number</Label>
                <Input id="admission-number" placeholder="" value={formData.admission_no} onChange={(e) => setFormData({ ...formData, admission_no: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="First name" value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Last name" value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="other-names">Other Names</Label>
                <Input id="other-names" placeholder="Other names (if any)" value={formData.other_name} onChange={(e) => setFormData({ ...formData, other_name: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" value={formData.date_of_birth} onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="place-of-birth">Place of Birth</Label>
                <Input id="place-of-birth" placeholder="City, State" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Input id="nationality" defaultValue="Nigerian" value={formData.nationality} onChange={(e) => setFormData({ ...formData, nationality: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state-of-origin">State of Origin</Label>
                <Input id="state-of-origin" placeholder="State of origin" />
              </div>
              {/* <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="student email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div> */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="student phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="parent">Parent</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, parent_id: Number(value) })}>
                  <SelectTrigger id="parent">
                    <SelectValue placeholder="Select parent" />
                  </SelectTrigger>
                  <SelectContent>
                    {parents.length > 0 && parents.map((parent) => (
                      <SelectItem key={parent.id} value={parent.id.toString()}>
                        {parent.user.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="relationship">Relationship</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, relationship: value })}>
                  <SelectTrigger id="relationship">
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* <SelectItem value="Father">Father</SelectItem> */}
                    <SelectItem value="parent">Parent</SelectItem>
                    <SelectItem value="guardian">Guardian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="religion">Religion</Label>
                <Input id="religion" placeholder="student religion" value={formData.religion} onChange={(e) => setFormData({ ...formData, religion: e.target.value })} />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="address">Home Address</Label>
                <Textarea id="address" placeholder="Full residential address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="academic" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="admission-date">Admission Date</Label>
                <Input id="admission-date" type="date" defaultValue={new Date().toISOString().split("T")[0]} value={formData.admission_date} onChange={(e) => setFormData({ ...formData, admission_date: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admission-number">Admission Number</Label>
                <Input id="admission-number" placeholder="Will be auto-generated" value={formData.admission_no} onChange={(e) => setFormData({ ...formData, admission_no: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="primary-section">Primary Section</Label>
                <Select>
                  <SelectTrigger id="primary-section">
                    <SelectValue placeholder="Select section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nursery">Nursery</SelectItem>
                    <SelectItem value="primary">Primary</SelectItem>
                    <SelectItem value="secondary">Secondary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="class">Class</Label>
                <Select>
                  <SelectTrigger id="class">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nursery1">Nursery 1</SelectItem>
                    <SelectItem value="nursery2">Nursery 2</SelectItem>
                    <SelectItem value="primary1">Primary 1</SelectItem>
                    <SelectItem value="primary2">Primary 2</SelectItem>
                    <SelectItem value="primary3">Primary 3</SelectItem>
                    <SelectItem value="primary4">Primary 4</SelectItem>
                    <SelectItem value="primary5">Primary 5</SelectItem>
                    <SelectItem value="primary6">Primary 6</SelectItem>
                    <SelectItem value="jss1">JSS 1</SelectItem>
                    <SelectItem value="jss2">JSS 2</SelectItem>
                    <SelectItem value="jss3">JSS 3</SelectItem>
                    <SelectItem value="ss1">SS 1</SelectItem>
                    <SelectItem value="ss2">SS 2</SelectItem>
                    <SelectItem value="ss3">SS 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2 space-y-2">
                <Label>Additional Sections</Label>
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="islamiyya" />
                    <label htmlFor="islamiyya" className="text-sm">
                      Islamiyya Section
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="tahfeez" />
                    <label htmlFor="tahfeez" className="text-sm">
                      Tahfeez Section
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="islamiyya-level">Islamiyya Level</Label>
                <Select disabled>
                  <SelectTrigger id="islamiyya-level">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="level1">Level 1</SelectItem>
                    <SelectItem value="level2">Level 2</SelectItem>
                    <SelectItem value="level3">Level 3</SelectItem>
                    <SelectItem value="level4">Level 4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tahfeez-level">Tahfeez Level</Label>
                <Select disabled>
                  <SelectTrigger id="tahfeez-level">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="level1">Level 1</SelectItem>
                    <SelectItem value="level2">Level 2</SelectItem>
                    <SelectItem value="level3">Level 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="previous-school">Previous School</Label>
                <Input id="previous-school" placeholder="If transferring from another school" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="previous-class">Previous Class</Label>
                <Input id="previous-class" placeholder="Class in previous school" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="parent" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="parent">Parent</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, parent_id: Number(value) })}>
                  <SelectTrigger id="parent">
                    <SelectValue placeholder="Select parent" />
                  </SelectTrigger>
                  <SelectContent>
                    {parents.length > 0 && parents.map((parent) => (
                      <SelectItem key={parent.id} value={parent.id.toString()}>
                        {parent.user.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="relationship">Relationship</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, relationship: value })}>
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
            </div>
          </TabsContent>

          <TabsContent value="additional" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="blood-group">Blood Group</Label>
                <Select>
                  <SelectTrigger id="blood-group">
                    <SelectValue placeholder="Select blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a+">A+</SelectItem>
                    <SelectItem value="a-">A-</SelectItem>
                    <SelectItem value="b+">B+</SelectItem>
                    <SelectItem value="b-">B-</SelectItem>
                    <SelectItem value="ab+">AB+</SelectItem>
                    <SelectItem value="ab-">AB-</SelectItem>
                    <SelectItem value="o+">O+</SelectItem>
                    <SelectItem value="o-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="genotype">Genotype</Label>
                <Select>
                  <SelectTrigger id="genotype">
                    <SelectValue placeholder="Select genotype" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aa">AA</SelectItem>
                    <SelectItem value="as">AS</SelectItem>
                    <SelectItem value="ss">SS</SelectItem>
                    <SelectItem value="ac">AC</SelectItem>
                    <SelectItem value="cc">CC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="allergies">Known Allergies</Label>
                <Textarea id="allergies" placeholder="List any allergies (if applicable)" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="medical-conditions">Medical Conditions</Label>
                <Textarea id="medical-conditions" placeholder="List any medical conditions (if applicable)" />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="emergency-contact">Emergency Contact</Label>
                <Input id="emergency-contact" placeholder="Name and phone number" />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="additional-notes">Additional Notes</Label>
                <Textarea id="additional-notes" placeholder="Any additional information about the student" />
              </div>
              <div className="space-y-2 col-span-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="create-parent-account" defaultChecked />
                  <label htmlFor="create-parent-account" className="text-sm">
                    Create parent portal account
                  </label>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className="bg-green-600 hover:bg-green-700" onClick={handleRegisterStudent}>
            Register Student
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
