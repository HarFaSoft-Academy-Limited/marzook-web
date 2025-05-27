import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, Eye, MoreHorizontal, PenSquare, Search, Send } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function CommunicationPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Communication</h1>
          <Button className="bg-green-600 hover:bg-green-700">
            <PenSquare className="mr-2 h-4 w-4" />
            Compose New Message
          </Button>
        </div>

        <Tabs defaultValue="messages" className="space-y-4">
          <TabsList>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="bulk">Bulk Communication</TabsTrigger>
            <TabsTrigger value="templates">Message Templates</TabsTrigger>
            <TabsTrigger value="settings">Communication Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="messages" className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search messages..." className="w-full pl-8" />
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by recipient" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Recipients</SelectItem>
                    <SelectItem value="parents">Parents</SelectItem>
                    <SelectItem value="staff">Staff</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Recipients</TableHead>
                      <TableHead>Sent Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "MSG-001",
                        subject: "PTA Meeting Reminder",
                        type: "SMS",
                        recipients: "All Parents",
                        date: "2025-04-05",
                        status: "Delivered",
                      },
                      {
                        id: "MSG-002",
                        subject: "Term Calendar Update",
                        type: "Email",
                        recipients: "All Parents & Staff",
                        date: "2025-04-03",
                        status: "Delivered",
                      },
                      {
                        id: "MSG-003",
                        subject: "Fee Payment Reminder",
                        type: "WhatsApp",
                        recipients: "Selected Parents",
                        date: "2025-04-01",
                        status: "Delivered",
                      },
                      {
                        id: "MSG-004",
                        subject: "Staff Meeting",
                        type: "Email",
                        recipients: "All Staff",
                        date: "2025-03-28",
                        status: "Delivered",
                      },
                      {
                        id: "MSG-005",
                        subject: "Exam Schedule",
                        type: "SMS",
                        recipients: "All Parents",
                        date: "2025-03-25",
                        status: "Partial Delivery",
                      },
                    ].map((message) => (
                      <TableRow key={message.id}>
                        <TableCell>{message.id}</TableCell>
                        <TableCell className="font-medium">{message.subject}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`${
                              message.type === "SMS"
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                : message.type === "Email"
                                  ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                                  : "bg-green-100 text-green-800 hover:bg-green-100"
                            }`}
                          >
                            {message.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{message.recipients}</TableCell>
                        <TableCell>{message.date}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`${
                              message.status === "Delivered"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            }`}
                          >
                            {message.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Send className="mr-2 h-4 w-4" />
                                Resend
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
          </TabsContent>
          <TabsContent value="bulk" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Send Bulk Communication</CardTitle>
                <CardDescription>Send messages to multiple recipients at once</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message Type</label>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        SMS
                      </Button>
                      <Button variant="outline">Email</Button>
                      <Button variant="outline">WhatsApp</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Recipients</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="all-parents" />
                        <label
                          htmlFor="all-parents"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          All Parents
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="all-staff" />
                        <label
                          htmlFor="all-staff"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          All Staff
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="primary-section" />
                        <label
                          htmlFor="primary-section"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Primary Section
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="secondary-section" />
                        <label
                          htmlFor="secondary-section"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Secondary Section
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Enter message subject" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message Content</label>
                  <Textarea placeholder="Type your message here..." className="min-h-[150px]" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Save as Draft</Button>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="templates" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Message Templates</CardTitle>
                <CardDescription>Reusable message templates for common communications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Fee Payment Reminder",
                      type: "SMS",
                      content:
                        "Dear Parent, This is a reminder that the fee payment for [TERM] is due on [DATE]. Please make payment to avoid late charges. Thank you.",
                    },
                    {
                      title: "PTA Meeting Invitation",
                      type: "Email",
                      content:
                        "Dear Parent, You are invited to attend the PTA meeting scheduled for [DATE] at [TIME] in the school hall. Your presence is important.",
                    },
                    {
                      title: "Exam Schedule",
                      type: "WhatsApp",
                      content:
                        "Dear Parent, The examination for [TERM] will commence on [START_DATE] and end on [END_DATE]. Please ensure your child prepares adequately.",
                    },
                    {
                      title: "Result Release Notification",
                      type: "SMS",
                      content:
                        "Dear Parent, The results for [TERM] have been released. You can view and download them from the parent portal.",
                    },
                  ].map((template, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{template.title}</CardTitle>
                          <Badge
                            variant="outline"
                            className={`${
                              template.type === "SMS"
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                : template.type === "Email"
                                  ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                                  : "bg-green-100 text-green-800 hover:bg-green-100"
                            }`}
                          >
                            {template.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{template.content}</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Use Template
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Communication Settings</CardTitle>
                <CardDescription>Configure your communication channels and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">SMS Configuration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">SMS Provider</label>
                        <Select defaultValue="bulksms">
                          <SelectTrigger>
                            <SelectValue placeholder="Select SMS provider" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bulksms">BulkSMS Nigeria</SelectItem>
                            <SelectItem value="twilio">Twilio</SelectItem>
                            <SelectItem value="termii">Termii</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">API Key</label>
                        <Input type="password" defaultValue="●●●●●●●●●●●●●●●●" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Sender ID</label>
                        <Input defaultValue="Marzook" />
                      </div>
                      <Button variant="outline" size="sm">
                        Test Connection
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Email Configuration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">SMTP Server</label>
                        <Input defaultValue="smtp.elmiko.edu.ng" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">SMTP Port</label>
                        <Input defaultValue="587" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <Input defaultValue="info@elmiko.edu.ng" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>
                        <Input type="password" defaultValue="●●●●●●●●●●●●" />
                      </div>
                      <Button variant="outline" size="sm">
                        Test Email
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">WhatsApp Configuration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">WhatsApp Business API</label>
                        <Select defaultValue="meta">
                          <SelectTrigger>
                            <SelectValue placeholder="Select WhatsApp provider" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="meta">Meta WhatsApp Business</SelectItem>
                            <SelectItem value="twilio">Twilio WhatsApp</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">API Key</label>
                        <Input type="password" defaultValue="●●●●●●●●●●●●●●●●" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <Input defaultValue="+2348012345678" />
                      </div>
                      <Button variant="outline" size="sm">
                        Test Connection
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Notification Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Default Communication Channel</label>
                        <Select defaultValue="sms">
                          <SelectTrigger>
                            <SelectValue placeholder="Select default channel" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sms">SMS</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="fee-reminder" defaultChecked />
                          <label
                            htmlFor="fee-reminder"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Automatic Fee Payment Reminders
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="result-notification" defaultChecked />
                          <label
                            htmlFor="result-notification"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Result Release Notifications
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="attendance-alert" defaultChecked />
                          <label
                            htmlFor="attendance-alert"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Attendance Alerts
                          </label>
                        </div>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700" size="sm">
                        Save Preferences
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
