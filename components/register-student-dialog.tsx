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
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus } from "lucide-react"

export function RegisterStudentDialog() {
  const [open, setOpen] = useState(false)

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
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="parent">Parent/Guardian</TabsTrigger>
            <TabsTrigger value="additional">Additional</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4 mt-4">
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
                <Label htmlFor="other-names">Other Names</Label>
                <Input id="other-names" placeholder="Other names (if any)" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select>
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
                <Input id="dob" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="place-of-birth">Place of Birth</Label>
                <Input id="place-of-birth" placeholder="City, State" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Input id="nationality" defaultValue="Nigerian" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state-of-origin">State of Origin</Label>
                <Input id="state-of-origin" placeholder="State of origin" />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="address">Home Address</Label>
                <Textarea id="address" placeholder="Full residential address" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="academic" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="admission-date">Admission Date</Label>
                <Input id="admission-date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admission-number">Admission Number</Label>
                <Input id="admission-number" placeholder="Will be auto-generated" disabled />
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
                <Label htmlFor="father-name">Father's Name</Label>
                <Input id="father-name" placeholder="Full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="father-phone">Father's Phone</Label>
                <Input id="father-phone" placeholder="Phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="father-email">Father's Email</Label>
                <Input id="father-email" type="email" placeholder="Email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="father-occupation">Father's Occupation</Label>
                <Input id="father-occupation" placeholder="Occupation" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mother-name">Mother's Name</Label>
                <Input id="mother-name" placeholder="Full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mother-phone">Mother's Phone</Label>
                <Input id="mother-phone" placeholder="Phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mother-email">Mother's Email</Label>
                <Input id="mother-email" type="email" placeholder="Email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mother-occupation">Mother's Occupation</Label>
                <Input id="mother-occupation" placeholder="Occupation" />
              </div>

              <div className="col-span-2 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="guardian" />
                  <label htmlFor="guardian" className="text-sm">
                    Register a Guardian (if different from parents)
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guardian-name">Guardian's Name</Label>
                <Input id="guardian-name" placeholder="Full name" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guardian-phone">Guardian's Phone</Label>
                <Input id="guardian-phone" placeholder="Phone number" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guardian-email">Guardian's Email</Label>
                <Input id="guardian-email" type="email" placeholder="Email address" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guardian-relationship">Relationship</Label>
                <Input id="guardian-relationship" placeholder="Relationship to student" disabled />
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
          <Button className="bg-green-600 hover:bg-green-700" onClick={() => setOpen(false)}>
            Register Student
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
