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
import axios from "axios"
import { customBaseUrl } from "@/services/http"
import { Edit } from "lucide-react"
import { DropdownMenuItem } from "./ui/dropdown-menu"
import Swal from "sweetalert2"

interface EditClassDialogProps {
  classData: any;
  onClassUpdated: () => void;
}

export function EditClassDialog({ classData, onClassUpdated }: EditClassDialogProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: classData.name,
    level: classData.level,
    section_ids: [classData.section_id],
    class_teacher_id: classData.class_teacher_id,
  })
  const [staff, setStaff] = useState<any[]>([])
  const [sections, setSections] = useState<any[]>([])

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/staff`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            'ngrok-skip-browser-warning': 'true'
          },
        })
        setStaff(res.data.data)
      } catch (error) {
        console.error("Error fetching staff:", error)
      }
    }

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

    fetchStaff()
    fetchSections()
  }, [])

  const handleUpdateClass = async () => {
    try {
      const res = await axios.put(`${customBaseUrl.baseUrl}/api/v1/classes/${classData.id}`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })

      if (res.status === 200) {
        // alert("Class updated successfully!")
        Swal.fire('Done', res.data.message, 'success')
          
        setOpen(false)
        onClassUpdated(); // Call the callback to refresh the class list
      } else {
        console.error("Error updating class:", res.data)
        alert("Failed to update class. Please try again.")
      }
    } catch (error) {
      console.error("Error updating class:", error)
      alert("Failed to update class. Please try again.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Edit className="mr-2 h-4 w-4" />
            Edit
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Class</DialogTitle>
          <DialogDescription>Update the details for the class.</DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Class Name</Label>
            <Input id="name" value={formData.name} placeholder="e.g., Primary 1A" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          {/* <div className="space-y-2">
            <Label htmlFor="level">Level</Label>
            <Input id="level" value={formData.level} placeholder="e.g., 1" type="number" onChange={(e) => setFormData({ ...formData, level: e.target.value })} />
          </div> */}
          <div className="space-y-2">
            <Label htmlFor="section">Section</Label>
            <Select value={formData?.section_ids[0]} onValueChange={(value) => setFormData({ ...formData, section_ids: [value] })}>
              <SelectTrigger id="section">
                <SelectValue placeholder="Select a section" />
              </SelectTrigger>
              <SelectContent>
                {sections?.length > 0 && sections.map((section) => (
                  <SelectItem key={section.id} value={section.id}>
                    {section.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="class_teacher">Class Teacher</Label>
            <Select value={formData.class_teacher_id.toString()} onValueChange={(value) => setFormData({ ...formData, class_teacher_id: value })}>
              <SelectTrigger id="class_teacher">
                <SelectValue placeholder="Select a teacher" />
              </SelectTrigger>
              <SelectContent>
                {staff?.length > 0 && staff.map((teacher) => (
                  <SelectItem key={teacher.id} value={teacher.user.id.toString()}>
                    {teacher.user.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className="bg-green-600 hover:bg-green-700" onClick={handleUpdateClass}>
            Update Class
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
