"use client"

import type React from "react"

import { useState } from "react"
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

export default function CalendarPage() {
  // Current month for the calendar display
  const currentMonth = "April 2025"
  const [addEventOpen, setAddEventOpen] = useState(false)
  const [exportDialogOpen, setExportDialogOpen] = useState(false)
  const { toast } = useToast()

  // Days of the week
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // Calendar days for April 2025 (example data)
  const calendarDays = [
    { day: null, events: [] }, // Empty cell for previous month
    { day: null, events: [] }, // Empty cell for previous month
    { day: 1, events: [] },
    { day: 2, events: [] },
    { day: 3, events: [] },
    { day: 4, events: [] },
    { day: 5, events: [] },
    { day: 6, events: [] },
    { day: 7, events: [{ title: "Assembly", type: "school" }] },
    { day: 8, events: [{ title: "PTA Meeting", type: "meeting" }] },
    { day: 9, events: [] },
    { day: 10, events: [] },
    { day: 11, events: [] },
    { day: 12, events: [] },
    { day: 13, events: [] },
    { day: 14, events: [{ title: "Assembly", type: "school" }] },
    { day: 15, events: [{ title: "Mid-Term Test", type: "academic" }] },
    { day: 16, events: [{ title: "Mid-Term Test", type: "academic" }] },
    { day: 17, events: [{ title: "Mid-Term Test", type: "academic" }] },
    { day: 18, events: [] },
    { day: 19, events: [] },
    { day: 20, events: [] },
    { day: 21, events: [{ title: "Assembly", type: "school" }] },
    { day: 22, events: [] },
    { day: 23, events: [] },
    { day: 24, events: [] },
    { day: 25, events: [{ title: "Cultural Day", type: "event" }] },
    { day: 26, events: [] },
    { day: 27, events: [] },
    { day: 28, events: [{ title: "Assembly", type: "school" }] },
    { day: 29, events: [] },
    { day: 30, events: [] },
  ]

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would save the event data to your backend
    toast({
      title: "Event Added",
      description: "The event has been successfully added to the calendar.",
    })
    setAddEventOpen(false)
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
                  <CardTitle>{currentMonth}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      Today
                    </Button>
                    <Button variant="outline" size="icon">
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
                  {calendarDays.map((day, index) => (
                    <div
                      key={index}
                      className={`min-h-[100px] border rounded-md p-1 ${
                        day.day === 8 ? "bg-green-50 border-green-200" : ""
                      } ${!day.day ? "bg-gray-50 text-gray-400" : ""}`}
                    >
                      {day.day && (
                        <>
                          <div className="text-right text-sm font-medium">{day.day}</div>
                          <div className="mt-1 space-y-1">
                            {day.events.map((event, eventIndex) => (
                              <div
                                key={eventIndex}
                                className={`text-xs p-1 rounded truncate ${
                                  event.type === "academic"
                                    ? "bg-blue-100 text-blue-800"
                                    : event.type === "meeting"
                                      ? "bg-purple-100 text-purple-800"
                                      : event.type === "event"
                                        ? "bg-amber-100 text-amber-800"
                                        : "bg-green-100 text-green-800"
                                }`}
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
                <CardDescription>April 6 - April 12, 2025</CardDescription>
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
                      <TableHead>Type</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Participants</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        date: "2025-04-08",
                        event: "PTA Meeting",
                        type: "Meeting",
                        time: "10:00 AM - 12:00 PM",
                        location: "School Hall",
                        participants: "Parents, Teachers",
                      },
                      {
                        date: "2025-04-15",
                        event: "Mid-Term Test",
                        type: "Academic",
                        time: "8:00 AM - 2:00 PM",
                        location: "Classrooms",
                        participants: "All Students",
                      },
                      {
                        date: "2025-04-16",
                        event: "Mid-Term Test",
                        type: "Academic",
                        time: "8:00 AM - 2:00 PM",
                        location: "Classrooms",
                        participants: "All Students",
                      },
                      {
                        date: "2025-04-17",
                        event: "Mid-Term Test",
                        type: "Academic",
                        time: "8:00 AM - 2:00 PM",
                        location: "Classrooms",
                        participants: "All Students",
                      },
                      {
                        date: "2025-04-25",
                        event: "Cultural Day",
                        type: "Event",
                        time: "9:00 AM - 3:00 PM",
                        location: "School Grounds",
                        participants: "All Students, Staff, Parents",
                      },
                    ].map((event, index) => (
                      <TableRow key={index}>
                        <TableCell>{event.date}</TableCell>
                        <TableCell className="font-medium">{event.event}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`${
                              event.type === "Academic"
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                : event.type === "Meeting"
                                  ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                                  : event.type === "Event"
                                    ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                                    : "bg-green-100 text-green-800 hover:bg-green-100"
                            }`}
                          >
                            {event.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{event.time}</TableCell>
                        <TableCell>{event.location}</TableCell>
                        <TableCell>{event.participants}</TableCell>
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
                <CardDescription>Key academic dates for the 2024/2025 session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">First Term (September - December 2024)</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Event</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            date: "2024-09-10",
                            event: "Term Begins",
                            description: "First day of school for all students",
                          },
                          {
                            date: "2024-10-01",
                            event: "Independence Day",
                            description: "Public holiday - No school",
                          },
                          {
                            date: "2024-10-15 - 2024-10-17",
                            event: "Mid-Term Tests",
                            description: "Mid-term assessments for all classes",
                          },
                          {
                            date: "2024-11-25 - 2024-12-05",
                            event: "End of Term Exams",
                            description: "Final examinations for the term",
                          },
                          {
                            date: "2024-12-10",
                            event: "Term Ends",
                            description: "Last day of school for the term",
                          },
                        ].map((event, index) => (
                          <TableRow key={index}>
                            <TableCell>{event.date}</TableCell>
                            <TableCell className="font-medium">{event.event}</TableCell>
                            <TableCell>{event.description}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Second Term (January - April 2025)</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Event</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            date: "2025-01-10",
                            event: "Term Begins",
                            description: "First day of school for the term",
                          },
                          {
                            date: "2025-02-15 - 2025-02-17",
                            event: "Mid-Term Tests",
                            description: "Mid-term assessments for all classes",
                          },
                          {
                            date: "2025-04-15 - 2025-04-17",
                            event: "Mid-Term Tests",
                            description: "Mid-term assessments for all classes",
                          },
                          {
                            date: "2025-04-25",
                            event: "Cultural Day",
                            description: "Annual cultural celebration",
                          },
                          {
                            date: "2025-04-30",
                            event: "Term Ends",
                            description: "Last day of school for the term",
                          },
                        ].map((event, index) => (
                          <TableRow key={index}>
                            <TableCell>{event.date}</TableCell>
                            <TableCell className="font-medium">{event.event}</TableCell>
                            <TableCell>{event.description}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Third Term (May - July 2025)</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Event</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            date: "2025-05-10",
                            event: "Term Begins",
                            description: "First day of school for the term",
                          },
                          {
                            date: "2025-06-12",
                            event: "Democracy Day",
                            description: "Public holiday - No school",
                          },
                          {
                            date: "2025-06-15 - 2025-06-17",
                            event: "Mid-Term Tests",
                            description: "Mid-term assessments for all classes",
                          },
                          {
                            date: "2025-07-15 - 2025-07-25",
                            event: "Final Exams",
                            description: "End of session examinations",
                          },
                          {
                            date: "2025-07-30",
                            event: "Graduation Day",
                            description: "Graduation ceremony for final year students",
                          },
                        ].map((event, index) => (
                          <TableRow key={index}>
                            <TableCell>{event.date}</TableCell>
                            <TableCell className="font-medium">{event.event}</TableCell>
                            <TableCell>{event.description}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
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
                <Input id="event-title" placeholder="Enter event title" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="event-type" className="text-right">
                  Event Type
                </Label>
                <Select required>
                  <SelectTrigger id="event-type" className="col-span-3">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="meeting">Meeting</SelectItem>
                    <SelectItem value="holiday">Holiday</SelectItem>
                    <SelectItem value="event">School Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="event-date" className="text-right">
                  Date
                </Label>
                <Input id="event-date" type="date" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Time</Label>
                <div className="col-span-3 flex gap-2 items-center">
                  <Input type="time" placeholder="Start time" required />
                  <span>to</span>
                  <Input type="time" placeholder="End time" required />
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="event-location" className="text-right">
                  Location
                </Label>
                <Input id="event-location" placeholder="Event location" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="event-participants" className="text-right">
                  Participants
                </Label>
                <Input id="event-participants" placeholder="Who should attend" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="event-description" className="text-right pt-2">
                  Description
                </Label>
                <Textarea id="event-description" placeholder="Event details" className="col-span-3 min-h-[80px]" />
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
