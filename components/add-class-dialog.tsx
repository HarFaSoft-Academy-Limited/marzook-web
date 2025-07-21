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
import { Plus } from "lucide-react"

interface AddClassDialogProps {
  onClassAdded: () => void;
}

export function AddClassDialog({ onClassAdded }: AddClassDialogProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    section_id: "",
    class_teacher_id: "",
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

  const handleCreateClass = async () => {
    try {
      const res = await axios.post(`${customBaseUrl.baseUrl}/api/v1/classes`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })

      if (res.status === 201) {
        alert("Class created successfully!")
        setOpen(false)
        onClassAdded(); // Call the callback to refresh the class list
      } else {
        console.error("Error creating class:", res.data)
        alert("Failed to create class. Please try again.")
      }
    } catch (error) {
      console.error("Error creating class:", error)
      alert("Failed to create class. Please try again.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" />
          Add New Class
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Class</DialogTitle>
          <DialogDescription>Create a new class in the system.</DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Class Name</Label>
            <Input id="name" placeholder="e.g., Primary 1A" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          {/* <div className="space-y-2">
            <Label htmlFor="level">Level</Label>
            <Input id="level" placeholder="e.g., 1" type="number" onChange={(e) => setFormData({ ...formData, level: e.target.value })} />
          </div> */}
          <div className="space-y-2">
            <Label htmlFor="section">Section</Label>
            <Select onValueChange={(value) => setFormData({ ...formData, section_id: value })}>
              <SelectTrigger id="section">
                <SelectValue placeholder="Select a section" />
              </SelectTrigger>
              <SelectContent>
                {sections.map((section) => (
                  <SelectItem key={section.id} value={section.id}>
                    {section.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="class_teacher">Class Teacher</Label>
            <Select onValueChange={(value) => setFormData({ ...formData, class_teacher_id: value })}>
              <SelectTrigger id="class_teacher">
                <SelectValue placeholder="Select a teacher" />
              </SelectTrigger>
              <SelectContent>
                {staff.map((teacher) => (
                  <SelectItem key={teacher.id} value={teacher.id.toString()}>
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
          <Button className="bg-green-600 hover:bg-green-700" onClick={handleCreateClass}>
            Create Class
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
