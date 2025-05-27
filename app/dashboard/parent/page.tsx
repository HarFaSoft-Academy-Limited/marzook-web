import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { BookOpen, CreditCard, Download, GraduationCap, MessageSquare, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function ParentDashboard() {
  return (
    <DashboardLayout userType="parent">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Parent Dashboard</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Current Term: 2nd Term 2024/2025</span>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="academic">Academic Progress</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">My Children</CardTitle>
                  <User className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Enrolled in the school</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Fees</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₦120,000</div>
                  <p className="text-xs text-muted-foreground">Due in 14 days</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Messages</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Unread messages</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Results</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">New result available</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>My Children</CardTitle>
                  <CardDescription>Academic overview of your children</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        name: "Amina Ibrahim",
                        class: "Primary 3",
                        sections: ["Primary", "Islamiyya"],
                        attendance: 95,
                        performance: 87,
                        quran: 12,
                      },
                      {
                        name: "Ahmad Ibrahim",
                        class: "Primary 1",
                        sections: ["Primary", "Tahfeez"],
                        attendance: 92,
                        performance: 78,
                        quran: 5,
                      },
                      {
                        name: "Aisha Ibrahim",
                        class: "Nursery 2",
                        sections: ["Primary"],
                        attendance: 90,
                        performance: 82,
                        quran: null,
                      },
                    ].map((child, index) => (
                      <div key={index} className="flex flex-col space-y-2">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage src={`/placeholder-user.jpg`} alt={child.name} />
                            <AvatarFallback>{child.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-0.5">
                            <p className="text-sm font-medium">{child.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {child.class} | {child.sections.join(", ")} Section
                            </p>
                          </div>
                          <Button variant="outline" size="sm" className="ml-auto">
                            <Download className="mr-2 h-3 w-3" />
                            Results
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span>Attendance</span>
                              <span className="font-medium">{child.attendance}%</span>
                            </div>
                            <Progress value={child.attendance} className="h-1.5" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span>Performance</span>
                              <span className="font-medium">{child.performance}%</span>
                            </div>
                            <Progress value={child.performance} className="h-1.5" />
                          </div>
                        </div>
                        {child.quran && (
                          <div className="pt-1">
                            <div className="flex items-center text-xs">
                              <BookOpen className="h-3 w-3 mr-1 text-muted-foreground" />
                              <span className="text-muted-foreground">Qur'an Progress: </span>
                              <span className="font-medium ml-1">Juz {child.quran} completed</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Notifications</CardTitle>
                  <CardDescription>Latest updates from the school</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        icon: MessageSquare,
                        title: "PTA Meeting",
                        description: "PTA meeting scheduled for April 15, 2025",
                        time: "2 days ago",
                      },
                      {
                        icon: GraduationCap,
                        title: "Result Published",
                        description: "Amina's Primary 3 results are now available",
                        time: "1 week ago",
                      },
                      {
                        icon: CreditCard,
                        title: "Fee Payment Reminder",
                        description: "Second term fees due by April 20, 2025",
                        time: "1 week ago",
                      },
                      {
                        icon: BookOpen,
                        title: "Qur'an Progress",
                        description: "Ahmad completed Juz 5 in Tahfeez class",
                        time: "2 weeks ago",
                      },
                    ].map((notification, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-4 mt-0.5">
                          <notification.icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{notification.title}</p>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="academic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Academic Progress</CardTitle>
                <CardDescription>Detailed academic records for your children</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Academic progress details will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="financial" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Financial Records</CardTitle>
                <CardDescription>Fee payments and financial history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Financial records and payment options will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
