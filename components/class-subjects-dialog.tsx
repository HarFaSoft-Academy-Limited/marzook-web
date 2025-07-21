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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import axios from "axios"
import { customBaseUrl } from "@/services/http"
import { Book, Plus, Trash2 } from "lucide-react"
import { DropdownMenuItem } from "./ui/dropdown-menu"

interface ClassSubjectsDialogProps {
  classData: any;
  onSubjectsUpdated: () => void;
}

export function ClassSubjectsDialog({ classData, onSubjectsUpdated }: ClassSubjectsDialogProps) {
  const [open, setOpen] = useState(false)
  const [assignedSubjects, setAssignedSubjects] = useState<any[]>([])
  const [allSubjects, setAllSubjects] = useState<any[]>([])
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)

  const fetchAssignedSubjects = async () => {
    try {
      const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/classes/${classData.id}/subjects`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          'ngrok-skip-browser-warning': 'true'
        },
      })
      setAssignedSubjects(res.data.data.subjects)
    } catch (error) {
      console.error("Error fetching assigned subjects:", error)
    }
  }

  const fetchAllSubjects = async () => {
    try {
      const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/subjects`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          'ngrok-skip-browser-warning': 'true'
        },
      })
      setAllSubjects(res.data.data.data)
    } catch (error) {
      console.error("Error fetching all subjects:", error)
    }
  }

  useEffect(() => {
    if (open) {
      fetchAssignedSubjects()
      fetchAllSubjects()
    }
  }, [open])

  const handleAddSubject = async () => {
    if (!selectedSubject) return

    try {
      const res = await axios.post(`${customBaseUrl.baseUrl}/api/v1/classes/${classData.id}/subjects`, 
        { 
          subjects: [...assignedSubjects.map(s => s.id), parseInt(selectedSubject)],
          user_id: JSON.parse(localStorage.getItem("user") ?? '{id:1}').id
        }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })

      if (res.status === 200) {
        alert("Subject added successfully!")
        setSelectedSubject(null)
        fetchAssignedSubjects()
        onSubjectsUpdated()
      } else {
        console.error("Error adding subject:", res.data)
        alert("Failed to add subject. Please try again.")
      }
    } catch (error) {
      console.error("Error adding subject:", error)
      alert("Failed to add subject. Please try again.")
    }
  }

  const handleRemoveSubject = async (subjectId: number) => {
    try {
      const res = await axios.delete(`${customBaseUrl.baseUrl}/api/v1/classes/${classData.id}/subjects/${subjectId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })

      if (res.status === 200) {
        alert("Subject removed successfully!")
        fetchAssignedSubjects()
        onSubjectsUpdated()
      } else {
        console.error("Error removing subject:", res.data)
        alert("Failed to remove subject. Please try again.")
      }
    } catch (error) {
      console.error("Error removing subject:", error)
      alert("Failed to remove subject. Please try again.")
    }
  }

  const availableSubjects = allSubjects.filter(subject => !assignedSubjects.some(assigned => assigned.id === subject.id))

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Book className="mr-2 h-4 w-4" />
            View Subjects
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Subjects for {classData.name}</DialogTitle>
          <DialogDescription>Manage the subjects assigned to this class.</DialogDescription>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
                <h3 className="font-semibold mb-2">Assigned Subjects</h3>
                <ScrollArea className="h-64 pr-4">
                    <div className="space-y-2">
                        {assignedSubjects.length > 0 ? (
                            assignedSubjects.map((subject) => (
                                <div key={subject.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                                    <span className="truncate">{subject.name}</span>
                                    <Button size="sm" variant="destructive" onClick={() => handleRemoveSubject(subject.id)}><Trash2 className="h-4 w-4" /></Button>
                                </div>
                            ))
                        ) : (
                            <p className="text-muted-foreground">No subjects assigned.</p>
                        )}
                    </div>
                </ScrollArea>
            </div>
            <div>
                <h3 className="font-semibold mb-2">Available Subjects</h3>
                <div className="flex items-center space-x-2">
                    <Select onValueChange={setSelectedSubject} value={selectedSubject || ''}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a subject to add" />
                        </SelectTrigger>
                        <SelectContent>
                            {availableSubjects.map(subject => (
                                <SelectItem key={subject.id} value={subject.id.toString()}>{subject.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button onClick={handleAddSubject} disabled={!selectedSubject}><Plus className="h-4 w-4" /></Button>
                </div>
            </div>
        </div>
        <DialogFooter className="mt-6">
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
