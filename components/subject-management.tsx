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

interface Subject {
  id: number;
  name: string;
  code: string;
  description: string;
}

export function SubjectManagement() {
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [newSubject, setNewSubject] = useState({ name: "", code: "", description: "" })
  const [editSubject, setEditSubject] = useState<Subject | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const fetchSubjects = async () => {
    try {
      const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/subjects`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          'ngrok-skip-browser-warning': 'true'
        },
      })
      setSubjects(res.data.data.data)
    } catch (error) {
      console.error("Error fetching subjects:", error)
    }
  }

  useEffect(() => {
    fetchSubjects()
  }, [])

  const handleAddSubject = async () => {
    try {
      const res = await axios.post(`${customBaseUrl.baseUrl}/api/v1/subjects`, newSubject, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      if (res.status === 201) {
        alert("Subject added successfully!")
        setNewSubject({ name: "", code: "", description: "" })
        setIsAddDialogOpen(false)
        fetchSubjects()
      } else {
        console.error("Error adding subject:", res.data)
        alert("Failed to add subject. Please try again.")
      }
    } catch (error) {
      console.error("Error adding subject:", error)
      alert("Failed to add subject. Please try again.")
    }
  }

  const handleUpdateSubject = async () => {
    if (!editSubject) return
    try {
      const res = await axios.put(`${customBaseUrl.baseUrl}/api/v1/subjects/${editSubject.id}`, editSubject, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      if (res.status === 200) {
        alert("Subject updated successfully!")
        setEditSubject(null)
        setIsEditDialogOpen(false)
        fetchSubjects()
      } else {
        console.error("Error updating subject:", res.data)
        alert("Failed to update subject. Please try again.")
      }
    } catch (error) {
      console.error("Error updating subject:", error)
      alert("Failed to update subject. Please try again.")
    }
  }

  const handleDeleteSubject = async (id: number) => {
    if (!confirm("Are you sure you want to delete this subject?")) return
    try {
      const res = await axios.delete(`${customBaseUrl.baseUrl}/api/v1/subjects/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          'ngrok-skip-browser-warning': 'true'
        },
      })
      if (res.status === 204) {
        alert("Subject deleted successfully!")
        fetchSubjects()
      } else {
        console.error("Error deleting subject:", res.data)
        alert("Failed to delete subject. Please try again.")
      }
    } catch (error) {
      console.error("Error deleting subject:", error)
      alert("Failed to delete subject. Please try again.")
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">Subjects</CardTitle>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="h-8 gap-1">
              <Plus className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Subject</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Subject</DialogTitle>
              <DialogDescription>Enter the details for the new subject.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newSubject.name}
                  onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="code" className="text-right">
                  Code
                </Label>
                <Input
                  id="code"
                  value={newSubject.code}
                  onChange={(e) => setNewSubject({ ...newSubject, code: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  value={newSubject.description}
                  onChange={(e) => setNewSubject({ ...newSubject, description: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleAddSubject}>Add Subject</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.length > 0 && subjects.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell className="font-medium">{subject.name}</TableCell>
                <TableCell>{subject.code}</TableCell>
                <TableCell>{subject.description}</TableCell>
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
                          setEditSubject(subject)
                          setIsEditDialogOpen(true)
                        }}
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDeleteSubject(subject.id)}>
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

      {editSubject && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Subject</DialogTitle>
              <DialogDescription>Edit the details of the subject.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  Name
                </Label>
                <Input
                  id="edit-name"
                  value={editSubject.name}
                  onChange={(e) => setEditSubject({ ...editSubject, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-code" className="text-right">
                  Code
                </Label>
                <Input
                  id="edit-code"
                  value={editSubject.code}
                  onChange={(e) => setEditSubject({ ...editSubject, code: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-description" className="text-right">
                  Description
                </Label>
                <Input
                  id="edit-description"
                  value={editSubject.description}
                  onChange={(e) => setEditSubject({ ...editSubject, description: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleUpdateSubject}>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </Card>
  )
}
