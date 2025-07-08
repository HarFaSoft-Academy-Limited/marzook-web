
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Plus, Trash2, Edit } from "lucide-react"
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

interface AcademicSession {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  current: boolean;
}

export function SessionManagement() {
  const [sessions, setSessions] = useState<AcademicSession[]>([])
  const [newSession, setNewSession] = useState({
    name: "",
    start_date: "",
    end_date: "",
    current: false,
  })
  const [editingSession, setEditingSession] = useState<AcademicSession | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const fetchSessions = async () => {
    try {
      const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/sessions`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          'ngrok-skip-browser-warning': 'true'
        },
      })
      setSessions(res.data.data)
    } catch (error) {
      console.error("Error fetching sessions:", error)
    }
  }

  useEffect(() => {
    fetchSessions()
  }, [])

  const handleAddSession = async () => {
    try {
      const res = await axios.post(`${customBaseUrl.baseUrl}/api/v1/sessions`, newSession, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      if (res.status === 201) {
        alert("Session added successfully!")
        setNewSession({ name: "", start_date: "", end_date: "", current: false })
        fetchSessions()
        setIsDialogOpen(false)
      } else {
        console.error("Error adding session:", res.data)
        alert("Failed to add session. Please try again.")
      }
    } catch (error) {
      console.error("Error adding session:", error)
      alert("Failed to add session. Please try again.")
    }
  }

  const handleUpdateSession = async () => {
    if (!editingSession) return;
    try {
      const res = await axios.put(`${customBaseUrl.baseUrl}/api/v1/sessions/${editingSession.id}`, editingSession, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      if (res.status === 200) {
        alert("Session updated successfully!")
        setEditingSession(null)
        fetchSessions()
        setIsDialogOpen(false)
      } else {
        console.error("Error updating session:", res.data)
        alert("Failed to update session. Please try again.")
      }
    } catch (error) {
      console.error("Error updating session:", error)
      alert("Failed to update session. Please try again.")
    }
  }

  const handleDeleteSession = async (id: number) => {
    if (!confirm("Are you sure you want to delete this session?")) return;
    try {
      const res = await axios.delete(`${customBaseUrl.baseUrl}/api/v1/sessions/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      if (res.status === 200) {
        alert("Session deleted successfully!")
        fetchSessions()
      } else {
        console.error("Error deleting session:", res.data)
        alert("Failed to delete session. Please try again.")
      }
    } catch (error) {
      console.error("Error deleting session:", error)
      alert("Failed to delete session. Please try again.")
    }
  }

  const openEditDialog = (session: AcademicSession) => {
    setEditingSession(session)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setEditingSession(null)
    setNewSession({ name: "", start_date: "", end_date: "", current: false })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Academic Sessions</CardTitle>
        <CardDescription>Manage academic sessions for your school.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-end mb-4">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => {
                setEditingSession(null);
                setNewSession({ name: "", start_date: "", end_date: "", current: false });
                setIsDialogOpen(true);
              }}>
                <Plus className="mr-2 h-4 w-4" /> Add Session
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{editingSession ? "Edit Session" : "Add New Session"}</DialogTitle>
                <DialogDescription>
                  {editingSession ? "Edit the academic session details." : "Add a new academic session."}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Session Name</Label>
                  <Input
                    id="name"
                    value={editingSession ? editingSession.name : newSession.name}
                    onChange={(e) =>
                      editingSession
                        ? setEditingSession({ ...editingSession, name: e.target.value })
                        : setNewSession({ ...newSession, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start_date">Start Date</Label>
                  <Input
                    id="start_date"
                    type="date"
                    value={editingSession ? editingSession.start_date : newSession.start_date}
                    onChange={(e) =>
                      editingSession
                        ? setEditingSession({ ...editingSession, start_date: e.target.value })
                        : setNewSession({ ...newSession, start_date: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end_date">End Date</Label>
                  <Input
                    id="end_date"
                    type="date"
                    value={editingSession ? editingSession.end_date : newSession.end_date}
                    onChange={(e) =>
                      editingSession
                        ? setEditingSession({ ...editingSession, end_date: e.target.value })
                        : setNewSession({ ...newSession, end_date: e.target.value })
                    }
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="current"
                    checked={editingSession ? editingSession.current : newSession.current}
                    onCheckedChange={(checked) =>
                      editingSession
                        ? setEditingSession({ ...editingSession, current: checked })
                        : setNewSession({ ...newSession, current: checked })
                    }
                  />
                  <Label htmlFor="current">Set as Current Session</Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={closeDialog}>
                  Cancel
                </Button>
                <Button onClick={editingSession ? handleUpdateSession : handleAddSession}>
                  {editingSession ? "Save Changes" : "Add Session"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Session Name</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Current</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sessions.length > 0 ? (
              sessions.map((session) => (
                <TableRow key={session.id}>
                  <TableCell>{session.name}</TableCell>
                  <TableCell>{session.start_date}</TableCell>
                  <TableCell>{session.end_date}</TableCell>
                  <TableCell>{session.current ? "Yes" : "No"}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      className="mr-2"
                      onClick={() => openEditDialog(session)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteSession(session.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  No academic sessions found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
