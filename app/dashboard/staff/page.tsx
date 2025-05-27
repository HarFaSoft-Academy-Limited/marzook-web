import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { BookOpen, Calendar, CheckCircle2, Clock, FileText, MessageSquare, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StaffDashboard() {
  return (
    <DashboardLayout userType="staff">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Staff Dashboard</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Current Term: 2nd Term 2024/2025</span>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schedule">My Schedule</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">My Classes</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">Across 2 sections</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142</div>
                  <p className="text-xs text-muted-foreground">In your classes</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Due this week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Messages</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">Unread messages</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Today's Classes</CardTitle>
                  <CardDescription>Monday, April 8, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { time: "8:00 AM - 9:30 AM", class: "Primary 3", subject: "Mathematics", section: "Primary" },
                      { time: "10:00 AM - 11:30 AM", class: "Primary 5", subject: "Science", section: "Primary" },
                      { time: "12:00 PM - 1:30 PM", class: "JSS 1", subject: "English", section: "Secondary" },
                      { time: "2:00 PM - 3:30 PM", class: "Islamiyya Level 2", subject: "Fiqh", section: "Islamiyya" },
                    ].map((session, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-4 mt-0.5">
                          <Calendar className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {session.class} - {session.subject}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {session.time} | {session.section} Section
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Pending Tasks</CardTitle>
                  <CardDescription>Tasks that need your attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        icon: FileText,
                        title: "Submit Test Scores",
                        description: "Primary 3 Mathematics",
                        deadline: "Due tomorrow",
                      },
                      {
                        icon: BookOpen,
                        title: "Update Qur'an Progress",
                        description: "Tahfeez students",
                        deadline: "Due in 2 days",
                      },
                      {
                        icon: CheckCircle2,
                        title: "Mark Attendance",
                        description: "All assigned classes",
                        deadline: "Due today",
                      },
                    ].map((task, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-4 mt-0.5">
                          <task.icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium leading-none">{task.title}</p>
                            <Button variant="ghost" size="sm" className="h-6 text-xs">
                              Complete
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground">{task.description}</p>
                          <p className="text-xs text-red-500 font-medium">{task.deadline}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="schedule" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Schedule</CardTitle>
                <CardDescription>Your teaching schedule for the current week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Weekly schedule calendar will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tasks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Tasks</CardTitle>
                <CardDescription>Manage your pending and completed tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Task management interface will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
