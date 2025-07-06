"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
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

interface Section {
  id: number;
  name: string;
}

const AddSectionDialog = ({ onSectionAdded }: { onSectionAdded: () => void }) => {
  const [newSection, setNewSection] = useState({ name: "" })
  const [isOpen, setIsOpen] = useState(false)

  const handleAddSection = async () => {
    try {
      const res = await axios.post(`${customBaseUrl.baseUrl}/api/v1/sections`, newSection, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      if (res.status === 201) {
        alert("Section added successfully!")
        setNewSection({ name: "" })
        setIsOpen(false)
        onSectionAdded()
      } else {
        console.error("Error adding section:", res.data)
        alert("Failed to add section. Please try again.")
      }
    } catch (error) {
      console.error("Error adding section:", error)
      alert("Failed to add section. Please try again.")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="h-8 gap-1">
          <Plus className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Section</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Section</DialogTitle>
          <DialogDescription>Enter the details for the new section.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="section-name" className="text-right">
              Name
            </Label>
            <Input
              id="section-name"
              value={newSection.name}
              onChange={(e) => setNewSection({ ...newSection, name: e.target.value })}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={handleAddSection}>Add Section</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const EditSectionDialog = ({ section, onSectionUpdated }: { section: Section, onSectionUpdated: () => void }) => {
    const [editedSection, setEditedSection] = useState({ name: section.name })
    const [isOpen, setIsOpen] = useState(false)
  
    const handleUpdateSection = async () => {
      try {
        const res = await axios.put(`${customBaseUrl.baseUrl}/api/v1/sections/${section.id}`, editedSection, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        if (res.status === 200) {
          alert("Section updated successfully!")
          setIsOpen(false)
          onSectionUpdated()
        } else {
          console.error("Error updating section:", res.data)
          alert("Failed to update section. Please try again.")
        }
      } catch (error) {
        console.error("Error updating section:", error)
        alert("Failed to update section. Please try again.")
      }
    }
  
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}> 
                <Edit className="mr-2 h-4 w-4" />
                Edit
            </DropdownMenuItem>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Section</DialogTitle>
            <DialogDescription>Update the details for the section.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="section-name" className="text-right">
                Name
              </Label>
              <Input
                id="section-name"
                value={editedSection.name}
                onChange={(e) => setEditedSection({ ...editedSection, name: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={handleUpdateSection}>Update Section</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
}

export function SectionManagement() {
  const [sections, setSections] = useState<Section[]>([])

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

  useEffect(() => {
    fetchSections()
  }, [])

  const handleDeleteSection = async (id: number) => {
    try {
      const res = await axios.delete(`${customBaseUrl.baseUrl}/api/v1/sections/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      if (res.status === 200) {
        alert("Section deleted successfully!")
        fetchSections()
      } else {
        console.error("Error deleting section:", res.data)
        alert("Failed to delete section. Please try again.")
      }
    } catch (error) {
      console.error("Error deleting section:", error)
      alert("Failed to delete section. Please try again.")
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">Sections</CardTitle>
        <AddSectionDialog onSectionAdded={fetchSections} />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sections.length > 0 && sections.map((section) => (
              <TableRow key={section.id}>
                <TableCell className="font-medium">{section.name}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <EditSectionDialog section={section} onSectionUpdated={fetchSections} />
                      <DropdownMenuItem onClick={() => handleDeleteSection(section.id)}>
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
