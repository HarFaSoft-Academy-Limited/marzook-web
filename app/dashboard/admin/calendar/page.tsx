"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CalendarIcon, ChevronLeft, ChevronRight, Download, Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/toast"
import { getCalendarEvents, addCalendarEvent, getSessions } from "@/services/calendar"

export default function CalendarPage() {
  const [events, setEvents] = useState([])
  const [sessions, setSessions] = useState([])
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [addEventOpen, setAddEventOpen] = useState(false)
  const [exportDialogOpen, setExportDialogOpen] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const fetchEventsAndSessions = async () => {
      const eventResponse = await getCalendarEvents()
      if (eventResponse) {
        setEvents(eventResponse)
      }
      const sessionResponse = await getSessions()
      if (sessionResponse.data) {
        setSessions(sessionResponse.data)
      }
    }
    fetchEventsAndSessions()
  }, [])

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const generateCalendarDays = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const calendarDays = []

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push({ day: null, events: [] })
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayEvents = events.filter(event => {
        const eventDate = new Date(event.event_date)
        return eventDate.getFullYear() === year && eventDate.getMonth() === month && eventDate.getDate() === i
      })
      calendarDays.push({ day: i, events: dayEvents })
    }
    return calendarDays
  }

  const calendarDays = generateCalendarDays(currentMonth)

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const eventData = {
      title: formData.get("event-title") as string,
      event_date: formData.get("event-date") as string,
      description: formData.get("event-description") as string,
      academic_session_id: formData.get("session") as string,
    }
    const response = await addCalendarEvent(eventData)
    if (response) {
      toast({
        title: "Event Added",
        description: "The event has been successfully added to the calendar.",
      })
      setAddEventOpen(false)
      // Refetch events
      const updatedEvents = await getCalendarEvents()
      if (updatedEvents) {
        setEvents(updatedEvents)
      }
    } else {
      toast({
        title: "Error",
        description: "Failed to add event.",
        variant: "destructive",
      })
    }
  }

  const handleExportCalendar = (format: string) => {
    // In a real application, you would generate and download the calendar in the selected format
    toast({
      title: "Calendar Exported",
      description: `The calendar has been exported in ${format.toUpperCase()} format.`,
    })
    setExportDialogOpen(false)
  }

  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">School Calendar</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setExportDialogOpen(true)}>
              <Download className="mr-2 h-4 w-4" />
              Export Calendar
            </Button>
            <Button className="bg-green-600 hover:bg-green-700" onClick={() => setAddEventOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex gap-2 w-full md:w-auto">
            <Select defaultValue="current">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Select term" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Current Term</SelectItem>
                <SelectItem value="next">Next Term</SelectItem>
                <SelectItem value="previous">Previous Term</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Events</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="meeting">Meetings</SelectItem>
                <SelectItem value="holiday">Holidays</SelectItem>
                <SelectItem value="event">School Events</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="month" className="space-y-4">
          <TabsList>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="academic">Academic Calendar</TabsTrigger>
          </TabsList>
          <TabsContent value="month" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setCurrentMonth(new Date())}>
                      Today
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1">
                  {/* Days of the week */}
                  {daysOfWeek.map((day) => (
                    <div key={day} className="text-center font-medium py-2 text-sm">
                      {day}
                    </div>
                  ))}

                  {/* Calendar days */}
                  {calendarDays.length > 0 && calendarDays.map((day, index) => (
                    <div
                      key={index}
                      className={`min-h-[100px] border rounded-md p-1 ${
                        !day.day ? "bg-gray-50 text-gray-400" : ""
                      }`}
                    >
                      {day.day && (
                        <>
                          <div className="text-right text-sm font-medium">{day.day}</div>
                          <div className="mt-1 space-y-1">
                            {day.events.map((event, eventIndex) => (
                              <div
                                key={eventIndex}
                                className={`text-xs p-1 rounded truncate bg-blue-100 text-blue-800`}
                              >
                                {event.title}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="week" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Week View</CardTitle>
                <CardDescription>Week view of the calendar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px] flex items-center justify-center border rounded-md">
                  <div className="text-center">
                    <CalendarIcon className="h-16 w-16 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">Week view calendar will be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="list" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>List of all upcoming events</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.length > 0 && events.map((event, index) => (
                      <TableRow key={index}>
                        <TableCell>{event.event_date}</TableCell>
                        <TableCell className="font-medium">{event.title}</TableCell>
                        <TableCell>{event.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="academic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Academic Calendar</CardTitle>
                <CardDescription>Key academic dates for the current session</CardDescription>
              </CardHeader>
              <CardContent>
              <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event, index) => (
                      <TableRow key={index}>
                        <TableCell>{event.event_date}</TableCell>
                        <TableCell className="font-medium">{event.title}</TableCell>
                        <TableCell>{event.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Add Event Dialog */}
      <Dialog open={addEventOpen} onOpenChange={setAddEventOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
            <DialogDescription>Create a new event in the school calendar.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddEvent}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="event-title" className="text-right">
                  Event Title
                </Label>
                <Input id="event-title" name="event-title" placeholder="Enter event title" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="event-date" className="text-right">
                  Date
                </Label>
                <Input id="event-date" name="event-date" type="date" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="session" className="text-right">
                  Session
                </Label>
                <Select name="session">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a session" />
                  </SelectTrigger>
                  <SelectContent>
                    {sessions.length > 0 && sessions.map((session) => (
                      <SelectItem key={session.id} value={session.id}>
                        {session.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="event-description" className="text-right pt-2">
                  Description
                </Label>
                <Textarea id="event-description" name="event-description" placeholder="Event details" className="col-span-3 min-h-[80px]" />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setAddEventOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Add Event
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Export Calendar Dialog */}
      <Dialog open={exportDialogOpen} onOpenChange={setExportDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Export Calendar</DialogTitle>
            <DialogDescription>Choose a format to export your calendar.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label>Export Format</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start" onClick={() => handleExportCalendar("ical")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  iCalendar (.ics)
                </Button>
                <Button variant="outline" className="justify-start" onClick={() => handleExportCalendar("csv")}>
                  <Download className="mr-2 h-4 w-4" />
                  CSV File (.csv)
                </Button>
                <Button variant="outline" className="justify-start" onClick={() => handleExportCalendar("pdf")}>
                  <Download className="mr-2 h-4 w-4" />
                  PDF Document (.pdf)
                </Button>
                <Button variant="outline" className="justify-start" onClick={() => handleExportCalendar("excel")}>
                  <Download className="mr-2 h-4 w-4" />
                  Excel (.xlsx)
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-range">Date Range</Label>
              <Select defaultValue="current-month">
                <SelectTrigger id="date-range">
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current-month">Current Month</SelectItem>
                  <SelectItem value="current-term">Current Term</SelectItem>
                  <SelectItem value="academic-year">Full Academic Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-types">Include Event Types</Label>
              <Select defaultValue="all">
                <SelectTrigger id="event-types">
                  <SelectValue placeholder="Select event types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="academic">Academic Only</SelectItem>
                  <SelectItem value="non-academic">Non-Academic Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setExportDialogOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}
