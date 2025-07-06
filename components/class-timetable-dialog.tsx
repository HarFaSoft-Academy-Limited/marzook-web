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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import axios from "axios"
import { customBaseUrl } from "@/services/http"
import { CalendarDays, Plus, Trash2 } from "lucide-react"
import { DropdownMenuItem } from "./ui/dropdown-menu"

interface TimetableEntry {
  id?: number;
  day: string;
  period: number;
  start_time: string;
  end_time: string;
  subject_id: number;
  user_id: number;
  class_id: number;
}

interface ClassTimetableDialogProps {
  classData: any;
}

export function ClassTimetableDialog({ classData }: ClassTimetableDialogProps) {
  const [open, setOpen] = useState(false)
  const [timetable, setTimetable] = useState<TimetableEntry[]>([])
  const [subjects, setSubjects] = useState<any[]>([])
  const [staff, setStaff] = useState<any[]>([])
  const [newEntry, setNewEntry] = useState<Omit<TimetableEntry, 'id' | 'class_id'>>({
    day: "Monday",
    period: 0,
    start_time: "08:00",
    end_time: "09:00",
    subject_id: 0,
    user_id: 0,
  })

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const fetchTimetable = async () => {
    try {
      const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/classes/${classData.id}/timetable`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          'ngrok-skip-browser-warning': 'true'
        },
      })
      const fetchedTimetable = res.data.data.timetable;
      const flattenedTimetable: TimetableEntry[] = [];
      for (const day in fetchedTimetable) {
        if (Object.prototype.hasOwnProperty.call(fetchedTimetable, day)) {
          flattenedTimetable.push(...fetchedTimetable[day]);
        }
      }
      setTimetable(flattenedTimetable);
    } catch (error) {
      console.error("Error fetching timetable:", error);
    }
  }

  const fetchSubjects = async () => {
    try {
      const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/classes/${classData.id}/subjects`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          'ngrok-skip-browser-warning': 'true'
        },
      })
      setSubjects(res.data.data.subjects)
    } catch (error) {
      console.error("Error fetching subjects:", error)
    }
  }

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

  useEffect(() => {
    if (open) {
      fetchTimetable()
      fetchSubjects()
      fetchStaff()
    }
  }, [open])

  const handleAddEntry = async () => {
    try {
      const res = await axios.post(`${customBaseUrl.baseUrl}/api/v1/classes/${classData.id}/timetable`, {
        timetable: [
          ...timetable,
          newEntry
        ]
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })

      if (res.status === 200) {
        alert("Timetable entry added successfully!")
        setNewEntry({
          day: "Monday",
          period: 0,
          start_time: "08:00",
          end_time: "09:00",
          subject_id: 0,
          user_id: 0,
        })
        fetchTimetable()
      } else {
        console.error("Error adding timetable entry:", res.data)
        alert("Failed to add timetable entry. Please try again.")
      }
    } catch (error) {
      console.error("Error adding timetable entry:", error)
      alert("Failed to add timetable entry. Please try again.")
    }
  }

  const handleDeleteEntry = async (entryId: number) => {
    try {
      const res = await axios.delete(`${customBaseUrl.baseUrl}/api/v1/classes/${classData.id}/timetables/${entryId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })

      if (res.status === 200) {
        alert("Timetable entry deleted successfully!")
        fetchTimetable()
      } else {
        console.error("Error deleting timetable entry:", res.data)
        alert("Failed to delete timetable entry. Please try again.")
      }
    } catch (error) {
      console.error("Error deleting timetable entry:", error)
      alert("Failed to delete timetable entry. Please try again.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <CalendarDays className="mr-2 h-4 w-4" />
            View Timetable
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Timetable for {classData.name}</DialogTitle>
          <DialogDescription>Create and manage timetable entries for this class.</DialogDescription>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="font-semibold mb-2">Add New Entry</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="day">Day of Week</Label>
                <Select onValueChange={(value) => setNewEntry({ ...newEntry, day: value })} value={newEntry.day}>
                  <SelectTrigger id="day">
                    <SelectValue placeholder="Select day" />
                  </SelectTrigger>
                  <SelectContent>
                    {daysOfWeek.map((day) => (
                      <SelectItem key={day} value={day}>{day}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="period">Period</Label>
                <Input type="number" id="period" value={newEntry.period} onChange={(e) => setNewEntry({ ...newEntry, period: parseInt(e.target.value) })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start_time">Start Time</Label>
                  <Input type="time" id="start_time" value={newEntry.start_time} onChange={(e) => setNewEntry({ ...newEntry, start_time: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end_time">End Time</Label>
                  <Input type="time" id="end_time" value={newEntry.end_time} onChange={(e) => setNewEntry({ ...newEntry, end_time: e.target.value })} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select onValueChange={(value) => setNewEntry({ ...newEntry, subject_id: parseInt(value) })} value={newEntry.subject_id.toString()}>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject.id} value={subject.id.toString()}>{subject.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="teacher">Teacher</Label>
                <Select onValueChange={(value) => setNewEntry({ ...newEntry, user_id: parseInt(value) })} value={newEntry.user_id.toString()}>
                  <SelectTrigger id="teacher">
                    <SelectValue placeholder="Select teacher" />
                  </SelectTrigger>
                  <SelectContent>
                    {staff.map((teacher) => (
                      <SelectItem key={teacher.id} value={teacher.id.toString()}>{teacher.user.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleAddEntry} className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Entry
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Current Timetable</h3>
            <ScrollArea className="h-96 pr-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Day</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Teacher</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {timetable.length > 0 ? (
                    timetable.map((entry) => (
                      <TableRow key={entry.id}>
                        <TableCell>{entry.day}</TableCell>
                        <TableCell>{entry.period}</TableCell>
                        <TableCell>{entry.start_time} - {entry.end_time}</TableCell>
                        <TableCell>{subjects.find((s:any) => s.id === entry.subject_id)?.name || 'N/A'}</TableCell>
                        <TableCell>{staff.find((t:any) => t.id === entry.user_id)?.user?.name || 'N/A'}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="destructive" size="sm" onClick={() => handleDeleteEntry(entry.id!)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-muted-foreground">
                        No timetable entries yet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </ScrollArea>
          </div>
        </div>
        <DialogFooter className="mt-6">
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
