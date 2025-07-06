"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { X } from "lucide-react"

import { SubjectManagement } from "@/components/subject-management"

import { RolesPermissionsManagement } from "@/components/roles-permissions-management"
import { SectionManagement } from "@/components/section-management"

export default function SettingsPage() {
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null)

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedLogo(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">System Settings</h1>
          <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="users">Roles & Permissions</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="sections">Sections</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>School Information</CardTitle>
                <CardDescription>Basic information about your school</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="school-name">School Name</Label>
                    <Input id="school-name" defaultValue="Marzook Model School" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="school-motto">School Motto</Label>
                    <Input id="school-motto" defaultValue="Excellence and Virtue" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="school-email">Email Address</Label>
                    <Input id="school-email" type="email" defaultValue="info@marzook.edu.ng" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="school-phone">Phone Number</Label>
                    <Input id="school-phone" defaultValue="+234 8012345678" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="school-address">Address</Label>
                    <Textarea id="school-address" defaultValue="123 School Road, Kano, Nigeria" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>School Logo & Branding</CardTitle>
                <CardDescription>Customize your school's visual identity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label>School Logo</Label>
                    <div className="flex items-center justify-center h-40 border-2 border-dashed rounded-md">
                      <div className="text-center">
                        {selectedLogo ? (
                          <div className="relative w-20 h-20 mx-auto">
                            <img
                              src={selectedLogo || "/placeholder.svg"}
                              alt="School Logo"
                              className="w-full h-full object-cover rounded-full"
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              className="absolute -bottom-2 -right-2 h-6 w-6 p-0 rounded-full"
                              onClick={() => setSelectedLogo(null)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ) : (
                          <div className="w-20 h-20 mx-auto rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold">
                            EIA
                          </div>
                        )}
                        <div className="mt-4">
                          <label htmlFor="logo-upload">
                            <Button variant="outline" size="sm" className="cursor-pointer" asChild>
                              <span>
                                {selectedLogo ? "Change Logo" : "Upload Logo"}
                                <input
                                  id="logo-upload"
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={handleLogoChange}
                                />
                              </span>
                            </Button>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label>School Colors</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="primary-color">Primary Color</Label>
                        <div className="flex gap-2">
                          <div className="w-10 h-10 rounded-md bg-green-600"></div>
                          <Input id="primary-color" defaultValue="#16a34a" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="secondary-color">Secondary Color</Label>
                        <div className="flex gap-2">
                          <div className="w-10 h-10 rounded-md bg-gray-800"></div>
                          <Input id="secondary-color" defaultValue="#1f2937" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <Label htmlFor="accent-color">Accent Color</Label>
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-md bg-amber-500"></div>
                        <Input id="accent-color" defaultValue="#f59e0b" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>School contact details for communications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="principal-name">Principal's Name</Label>
                    <Input id="principal-name" defaultValue="Dr. Ahmad Ibrahim" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="principal-email">Principal's Email</Label>
                    <Input id="principal-email" type="email" defaultValue="principal@marzook.edu.ng" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <Input id="admin-email" type="email" defaultValue="admin@marzook.edu.ng" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-phone">Admin Phone</Label>
                    <Input id="admin-phone" defaultValue="+234 8023456789" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">School Website</Label>
                    <Input id="website" defaultValue="https://www.marzook.edu.ng" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="social-media">Social Media Handles</Label>
                    <Input id="social-media" defaultValue="@marzook" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="academic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Academic Session Settings</CardTitle>
                <CardDescription>Configure academic sessions and terms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-session">Current Academic Session</Label>
                    <Select defaultValue="2024-2025">
                      <SelectTrigger id="current-session">
                        <SelectValue placeholder="Select session" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2023-2024">2023/2024</SelectItem>
                        <SelectItem value="2024-2025">2024/2025</SelectItem>
                        <SelectItem value="2025-2026">2025/2026</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="current-term">Current Term</Label>
                    <Select defaultValue="second">
                      <SelectTrigger id="current-term">
                        <SelectValue placeholder="Select term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first">First Term</SelectItem>
                        <SelectItem value="second">Second Term</SelectItem>
                        <SelectItem value="third">Third Term</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-medium mb-3">Term Dates</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">First Term</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                              <Label htmlFor="first-term-start" className="text-xs">
                                Start Date
                              </Label>
                              <Input id="first-term-start" type="date" defaultValue="2024-09-10" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="first-term-end" className="text-xs">
                                End Date
                              </Label>
                              <Input id="first-term-end" type="date" defaultValue="2024-12-10" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Second Term</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                              <Label htmlFor="second-term-start" className="text-xs">
                                Start Date
                              </Label>
                              <Input id="second-term-start" type="date" defaultValue="2025-01-10" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="second-term-end" className="text-xs">
                                End Date
                              </Label>
                              <Input id="second-term-end" type="date" defaultValue="2025-04-30" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Third Term</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                              <Label htmlFor="third-term-start" className="text-xs">
                                Start Date
                              </Label>
                              <Input id="third-term-start" type="date" defaultValue="2025-05-10" />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="third-term-end" className="text-xs">
                                End Date
                              </Label>
                              <Input id="third-term-end" type="date" defaultValue="2025-07-30" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Grading System</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Primary Section</h4>
                      <div className="space-y-2">
                        <div className="grid grid-cols-4 gap-2">
                          <div className="col-span-1 font-medium text-sm">Grade</div>
                          <div className="col-span-1 font-medium text-sm">Range</div>
                          <div className="col-span-2 font-medium text-sm">Remark</div>
                        </div>
                        {[
                          { grade: "A", range: "80-100", remark: "Excellent" },
                          { grade: "B", range: "70-79", remark: "Very Good" },
                          { grade: "C", range: "60-69", remark: "Good" },
                          { grade: "D", range: "50-59", remark: "Fair" },
                          { grade: "E", range: "40-49", remark: "Pass" },
                          { grade: "F", range: "0-39", remark: "Fail" },
                        ].map((item, index) => (
                          <div key={index} className="grid grid-cols-4 gap-2">
                            <Input defaultValue={item.grade} className="col-span-1" />
                            <Input defaultValue={item.range} className="col-span-1" />
                            <Input defaultValue={item.remark} className="col-span-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Secondary Section</h4>
                      <div className="space-y-2">
                        <div className="grid grid-cols-4 gap-2">
                          <div className="col-span-1 font-medium text-sm">Grade</div>
                          <div className="col-span-1 font-medium text-sm">Range</div>
                          <div className="col-span-2 font-medium text-sm">Remark</div>
                        </div>
                        {[
                          { grade: "A1", range: "80-100", remark: "Excellent" },
                          { grade: "B2", range: "70-79", remark: "Very Good" },
                          { grade: "B3", range: "65-69", remark: "Good" },
                          { grade: "C4", range: "60-64", remark: "Credit" },
                          { grade: "C5", range: "55-59", remark: "Credit" },
                          { grade: "C6", range: "50-54", remark: "Credit" },
                          { grade: "D7", range: "45-49", remark: "Pass" },
                          { grade: "E8", range: "40-44", remark: "Pass" },
                          { grade: "F9", range: "0-39", remark: "Fail" },
                        ].map((item, index) => (
                          <div key={index} className="grid grid-cols-4 gap-2">
                            <Input defaultValue={item.grade} className="col-span-1" />
                            <Input defaultValue={item.range} className="col-span-1" />
                            <Input defaultValue={item.remark} className="col-span-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assessment Configuration</CardTitle>
                <CardDescription>Configure assessment components and weights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium mb-3">Primary Section</h3>
                    <div className="space-y-2">
                      {[
                        { name: "First Test", weight: 20 },
                        { name: "Second Test", weight: 20 },
                        { name: "Examination", weight: 60 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Input defaultValue={item.name} className="flex-1" />
                          <Input type="number" defaultValue={item.weight} className="w-20" min="0" max="100" />
                          <span className="text-sm">%</span>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="mt-2">
                        Add Component
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-3">Secondary Section</h3>
                    <div className="space-y-2">
                      {[
                        { name: "First Test", weight: 15 },
                        { name: "Second Test", weight: 15 },
                        { name: "Assignment", weight: 10 },
                        { name: "Examination", weight: 60 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Input defaultValue={item.name} className="flex-1" />
                          <Input type="number" defaultValue={item.weight} className="w-20" min="0" max="100" />
                          <span className="text-sm">%</span>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="mt-2">
                        Add Component
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Promotion Criteria</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pass-all-subjects" />
                      <Label htmlFor="pass-all-subjects">Must pass all subjects</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pass-core-subjects" defaultChecked />
                      <Label htmlFor="pass-core-subjects">Must pass all core subjects</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="min-average" className="min-w-40">
                        Minimum average score:
                      </Label>
                      <Input id="min-average" type="number" defaultValue="45" className="w-20" />
                      <span className="text-sm">%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="min-subjects" className="min-w-40">
                        Minimum subjects to pass:
                      </Label>
                      <Input id="min-subjects" type="number" defaultValue="6" className="w-20" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="users" className="space-y-4">
            <RolesPermissionsManagement />
          </TabsContent>
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Configure system notifications and alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-results">Result Publication</Label>
                        <p className="text-sm text-muted-foreground">Notify when results are published</p>
                      </div>
                      <Switch id="email-results" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-fees">Fee Reminders</Label>
                        <p className="text-sm text-muted-foreground">Send fee payment reminders</p>
                      </div>
                      <Switch id="email-fees" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-attendance">Attendance Alerts</Label>
                        <p className="text-sm text-muted-foreground">Notify about student absences</p>
                      </div>
                      <Switch id="email-attendance" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-events">School Events</Label>
                        <p className="text-sm text-muted-foreground">Notify about upcoming school events</p>
                      </div>
                      <Switch id="email-events" defaultChecked />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">SMS Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="sms-results">Result Publication</Label>
                        <p className="text-sm text-muted-foreground">Notify when results are published</p>
                      </div>
                      <Switch id="sms-results" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="sms-fees">Fee Reminders</Label>
                        <p className="text-sm text-muted-foreground">Send fee payment reminders</p>
                      </div>
                      <Switch id="sms-fees" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="sms-attendance">Attendance Alerts</Label>
                        <p className="text-sm text-muted-foreground">Notify about student absences</p>
                      </div>
                      <Switch id="sms-attendance" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="sms-events">School Events</Label>
                        <p className="text-sm text-muted-foreground">Notify about upcoming school events</p>
                      </div>
                      <Switch id="sms-events" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">In-App Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="app-results">Result Publication</Label>
                        <p className="text-sm text-muted-foreground">Notify when results are published</p>
                      </div>
                      <Switch id="app-results" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="app-fees">Fee Reminders</Label>
                        <p className="text-sm text-muted-foreground">Send fee payment reminders</p>
                      </div>
                      <Switch id="app-fees" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="app-attendance">Attendance Alerts</Label>
                        <p className="text-sm text-muted-foreground">Notify about student absences</p>
                      </div>
                      <Switch id="app-attendance" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="app-events">School Events</Label>
                        <p className="text-sm text-muted-foreground">Notify about upcoming school events</p>
                      </div>
                      <Switch id="app-events" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="app-messages">New Messages</Label>
                        <p className="text-sm text-muted-foreground">Notify about new messages</p>
                      </div>
                      <Switch id="app-messages" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Templates</CardTitle>
                <CardDescription>Customize notification message templates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="template-result">Result Publication Template</Label>
                    <Textarea
                      id="template-result"
                      defaultValue="Dear [PARENT_NAME], the [TERM] results for [STUDENT_NAME] are now available. Please log in to the portal to view them. Thank you."
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground">
                      Available variables: [PARENT_NAME], [STUDENT_NAME], [TERM], [CLASS], [SECTION], [SCHOOL_NAME]
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="template-fee">Fee Reminder Template</Label>
                    <Textarea
                      id="template-fee"
                      defaultValue="Dear [PARENT_NAME], this is a reminder that [STUDENT_NAME]'s fees for [TERM] (₦[AMOUNT]) are due on [DUE_DATE]. Please make payment to avoid late charges. Thank you."
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground">
                      Available variables: [PARENT_NAME], [STUDENT_NAME], [TERM], [AMOUNT], [DUE_DATE], [SCHOOL_NAME]
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="template-attendance">Attendance Alert Template</Label>
                    <Textarea
                      id="template-attendance"
                      defaultValue="Dear [PARENT_NAME], please note that [STUDENT_NAME] was absent from school today ([DATE]). If this was not authorized, please contact the school administration. Thank you."
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground">
                      Available variables: [PARENT_NAME], [STUDENT_NAME], [DATE], [CLASS], [SECTION], [SCHOOL_NAME]
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="subjects" className="space-y-4">
            <SubjectManagement />
          </TabsContent>
          <TabsContent value="sections" className="space-y-4">
            <SectionManagement />
          </TabsContent>
          <TabsContent value="system" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>Configure system-wide settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Date & Time Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="africa-lagos">
                        <SelectTrigger id="timezone">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="africa-lagos">Africa/Lagos (GMT+1)</SelectItem>
                          <SelectItem value="africa-cairo">Africa/Cairo (GMT+2)</SelectItem>
                          <SelectItem value="europe-london">Europe/London (GMT+0)</SelectItem>
                          <SelectItem value="america-new_york">America/New_York (GMT-5)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date-format">Date Format</Label>
                      <Select defaultValue="dd-mm-yyyy">
                        <SelectTrigger id="date-format">
                          <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                          <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                          <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time-format">Time Format</Label>
                      <Select defaultValue="24h">
                        <SelectTrigger id="time-format">
                          <SelectValue placeholder="Select time format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                          <SelectItem value="24h">24-hour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="first-day">First Day of Week</Label>
                      <Select defaultValue="monday">
                        <SelectTrigger id="first-day">
                          <SelectValue placeholder="Select first day" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sunday">Sunday</SelectItem>
                          <SelectItem value="monday">Monday</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Database & Backup</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="auto-backup">Automatic Backups</Label>
                        <p className="text-sm text-muted-foreground">Schedule regular database backups</p>
                      </div>
                      <Switch id="auto-backup" defaultChecked />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="backup-frequency" className="min-w-40">
                        Backup Frequency:
                      </Label>
                      <Select defaultValue="daily">
                        <SelectTrigger id="backup-frequency" className="w-40">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="backup-time" className="min-w-40">
                        Backup Time:
                      </Label>
                      <Input id="backup-time" type="time" defaultValue="02:00" className="w-40" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="backup-retention" className="min-w-40">
                        Retention Period:
                      </Label>
                      <Input id="backup-retention" type="number" defaultValue="30" className="w-20" />
                      <span className="text-sm">days</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline">Create Manual Backup</Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">System Maintenance</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                        <p className="text-sm text-muted-foreground">Put the system in maintenance mode</p>
                      </div>
                      <Switch id="maintenance-mode" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maintenance-message">Maintenance Message</Label>
                      <Textarea
                        id="maintenance-message"
                        defaultValue="The system is currently undergoing scheduled maintenance. Please check back later."
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="pt-2 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button variant="outline">Clear Cache</Button>
                        <Button variant="outline">Optimize Database</Button>
                        <Button variant="outline">Check for Updates</Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">System Logs</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="enable-logs">Enable System Logs</Label>
                        <p className="text-sm text-muted-foreground">Record system activities and errors</p>
                      </div>
                      <Switch id="enable-logs" defaultChecked />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="log-level" className="min-w-40">
                        Log Level:
                      </Label>
                      <Select defaultValue="info">
                        <SelectTrigger id="log-level" className="w-40">
                          <SelectValue placeholder="Select log level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="error">Error</SelectItem>
                          <SelectItem value="warning">Warning</SelectItem>
                          <SelectItem value="info">Info</SelectItem>
                          <SelectItem value="debug">Debug</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="log-retention" className="min-w-40">
                        Log Retention:
                      </Label>
                      <Input id="log-retention" type="number" defaultValue="90" className="w-20" />
                      <span className="text-sm">days</span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline">View System Logs</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>License & Registration</CardTitle>
                <CardDescription>Manage your system license and registration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">License Information</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">License Type:</span>
                          <span className="text-sm font-medium">Enterprise</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">License Key:</span>
                          <span className="text-sm font-medium">XXXX-XXXX-XXXX-XXXX</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Registered To:</span>
                          <span className="text-sm font-medium">Marzook Model School</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Expiration Date:</span>
                          <span className="text-sm font-medium">December 31, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Support Status:</span>
                          <span className="text-sm font-medium text-green-600">Active</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">Update License</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="license-key">License Key</Label>
                          <Input id="license-key" placeholder="Enter your license key" />
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700">Activate License</Button>
                        <div className="pt-2">
                          <Button variant="outline" className="w-full">
                            Contact Support
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
