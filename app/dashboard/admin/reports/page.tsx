import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Download, FileText, MoreHorizontal, Printer, Search } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function ReportsPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search reports..." className="w-full pl-8" />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Select defaultValue="current">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Select term" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Current Term</SelectItem>
                <SelectItem value="previous">Previous Term</SelectItem>
                <SelectItem value="all">All Terms</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Select section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sections</SelectItem>
                <SelectItem value="primary">Primary</SelectItem>
                <SelectItem value="secondary">Secondary</SelectItem>
                <SelectItem value="islamiyya">Islamiyya</SelectItem>
                <SelectItem value="tahfeez">Tahfeez</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="academic" className="space-y-4">
          <TabsList>
            <TabsTrigger value="academic">Academic Reports</TabsTrigger>
            <TabsTrigger value="financial">Financial Reports</TabsTrigger>
            <TabsTrigger value="attendance">Attendance Reports</TabsTrigger>
            <TabsTrigger value="custom">Custom Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="academic" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Result Sheets</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">Generated this term</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Class Performance</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78%</div>
                  <p className="text-xs text-muted-foreground">Average score</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Subject Analysis</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Reports available</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Qur'an Progress</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">Reports available</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Academic Reports</CardTitle>
                <CardDescription>Reports generated in the current term</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Report Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Section</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Generated By</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "Primary 3 Mid-Term Results",
                        type: "Result Sheet",
                        section: "Primary",
                        class: "Primary 3",
                        generatedBy: "Fatima Usman",
                        date: "2025-04-02",
                      },
                      {
                        name: "JSS 1 Subject Performance Analysis",
                        type: "Performance Analysis",
                        section: "Secondary",
                        class: "JSS 1",
                        generatedBy: "Musa Abdullahi",
                        date: "2025-04-01",
                      },
                      {
                        name: "Primary Section Comparative Analysis",
                        type: "Comparative Report",
                        section: "Primary",
                        class: "All Classes",
                        generatedBy: "Ahmad Ibrahim",
                        date: "2025-03-28",
                      },
                      {
                        name: "Tahfeez Memorization Progress",
                        type: "Qur'an Progress",
                        section: "Tahfeez",
                        class: "All Classes",
                        generatedBy: "Aisha Mohammed",
                        date: "2025-03-25",
                      },
                      {
                        name: "Secondary Section Subject Analysis",
                        type: "Subject Analysis",
                        section: "Secondary",
                        class: "All Classes",
                        generatedBy: "Musa Abdullahi",
                        date: "2025-03-20",
                      },
                    ].map((report, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{report.name}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`${
                              report.type === "Result Sheet"
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                : report.type === "Performance Analysis"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : report.type === "Comparative Report"
                                    ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                                    : report.type === "Qur'an Progress"
                                      ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                                      : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                            }`}
                          >
                            {report.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{report.section}</TableCell>
                        <TableCell>{report.class}</TableCell>
                        <TableCell>{report.generatedBy}</TableCell>
                        <TableCell>{report.date}</TableCell>
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
                                <FileText className="mr-2 h-4 w-4" />
                                View Report
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" />
                                Download PDF
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Printer className="mr-2 h-4 w-4" />
                                Print
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

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                  <CardDescription>Academic performance trends over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border rounded-md">
                    <div className="text-center">
                      <BarChart className="h-16 w-16 mx-auto text-muted-foreground" />
                      <p className="mt-2 text-muted-foreground">Performance trend chart will be displayed here</p>
                      <Button variant="outline" size="sm" className="mt-4">
                        Generate Chart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Subject Performance</CardTitle>
                  <CardDescription>Performance analysis by subject</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border rounded-md">
                    <div className="text-center">
                      <BarChart className="h-16 w-16 mx-auto text-muted-foreground" />
                      <p className="mt-2 text-muted-foreground">Subject performance chart will be displayed here</p>
                      <Button variant="outline" size="sm" className="mt-4">
                        Generate Chart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="financial" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Financial Reports</CardTitle>
                <CardDescription>Financial summaries and analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Fee Collection Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Primary Section</span>
                          <span className="text-sm font-medium">₦10,250,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Secondary Section</span>
                          <span className="text-sm font-medium">₦8,750,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Islamiyya Section</span>
                          <span className="text-sm font-medium">₦3,200,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Tahfeez Section</span>
                          <span className="text-sm font-medium">₦2,150,000</span>
                        </div>
                        <div className="pt-2 mt-2 border-t flex justify-between">
                          <span className="text-sm font-medium">Total Collection</span>
                          <span className="text-sm font-bold">₦24,350,000</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Outstanding Fees Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Primary Section</span>
                          <span className="text-sm font-medium">₦2,850,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Secondary Section</span>
                          <span className="text-sm font-medium">₦2,450,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Islamiyya Section</span>
                          <span className="text-sm font-medium">₦950,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Tahfeez Section</span>
                          <span className="text-sm font-medium">₦600,000</span>
                        </div>
                        <div className="pt-2 mt-2 border-t flex justify-between">
                          <span className="text-sm font-medium">Total Outstanding</span>
                          <span className="text-sm font-bold">₦6,850,000</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Payment Method Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Bank Transfer</span>
                          <span className="text-sm font-medium">₦12,500,000 (51%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Cash</span>
                          <span className="text-sm font-medium">₦5,800,000 (24%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Online Payment</span>
                          <span className="text-sm font-medium">₦4,250,000 (17%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">POS</span>
                          <span className="text-sm font-medium">₦1,800,000 (8%)</span>
                        </div>
                        <div className="pt-2 mt-2 border-t flex justify-between">
                          <span className="text-sm font-medium">Total Collection</span>
                          <span className="text-sm font-bold">₦24,350,000</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Monthly Collection Trend</CardTitle>
                      <CardDescription>Fee collection trend for the current term</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center border rounded-md">
                        <div className="text-center">
                          <BarChart className="h-16 w-16 mx-auto text-muted-foreground" />
                          <p className="mt-2 text-muted-foreground">Monthly collection chart will be displayed here</p>
                          <Button variant="outline" size="sm" className="mt-4">
                            Generate Chart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="attendance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Reports</CardTitle>
                <CardDescription>Student and staff attendance analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Student Attendance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">92%</div>
                      <p className="text-xs text-muted-foreground">Average attendance rate</p>
                      <div className="mt-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Primary</span>
                            <span>94%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Secondary</span>
                            <span>90%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Islamiyya</span>
                            <span>93%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Tahfeez</span>
                            <span>91%</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Staff Attendance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">96%</div>
                      <p className="text-xs text-muted-foreground">Average attendance rate</p>
                      <div className="mt-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Teaching Staff</span>
                            <span>97%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Admin Staff</span>
                            <span>98%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Support Staff</span>
                            <span>93%</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Absence Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">8%</div>
                      <p className="text-xs text-muted-foreground">Overall absence rate</p>
                      <div className="mt-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Excused</span>
                            <span>5%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Unexcused</span>
                            <span>3%</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Attendance Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[150px] flex items-center justify-center border rounded-md">
                        <div className="text-center">
                          <BarChart className="h-10 w-10 mx-auto text-muted-foreground" />
                          <p className="mt-2 text-xs text-muted-foreground">Trend chart</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Daily Attendance Log</CardTitle>
                      <CardDescription>Recent attendance records</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Section</TableHead>
                            <TableHead>Class</TableHead>
                            <TableHead>Present</TableHead>
                            <TableHead>Absent</TableHead>
                            <TableHead>Attendance Rate</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {[
                            {
                              date: "2025-04-08",
                              section: "Primary",
                              class: "Primary 3",
                              present: 38,
                              absent: 2,
                              rate: "95%",
                            },
                            {
                              date: "2025-04-08",
                              section: "Secondary",
                              class: "JSS 1",
                              present: 42,
                              absent: 3,
                              rate: "93%",
                            },
                            {
                              date: "2025-04-08",
                              section: "Islamiyya",
                              class: "Level 2",
                              present: 25,
                              absent: 1,
                              rate: "96%",
                            },
                            {
                              date: "2025-04-07",
                              section: "Primary",
                              class: "Primary 3",
                              present: 37,
                              absent: 3,
                              rate: "93%",
                            },
                            {
                              date: "2025-04-07",
                              section: "Secondary",
                              class: "JSS 1",
                              present: 40,
                              absent: 5,
                              rate: "89%",
                            },
                          ].map((record, index) => (
                            <TableRow key={index}>
                              <TableCell>{record.date}</TableCell>
                              <TableCell>{record.section}</TableCell>
                              <TableCell>{record.class}</TableCell>
                              <TableCell>{record.present}</TableCell>
                              <TableCell>{record.absent}</TableCell>
                              <TableCell>{record.rate}</TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm">
                                  View Details
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="custom" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Custom Reports</CardTitle>
                <CardDescription>Generate custom reports based on specific criteria</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Report Builder</CardTitle>
                      <CardDescription>Create a custom report</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Report Type</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select report type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="academic">Academic Report</SelectItem>
                            <SelectItem value="financial">Financial Report</SelectItem>
                            <SelectItem value="attendance">Attendance Report</SelectItem>
                            <SelectItem value="student">Student Report</SelectItem>
                            <SelectItem value="staff">Staff Report</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Section</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select section" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Sections</SelectItem>
                            <SelectItem value="primary">Primary</SelectItem>
                            <SelectItem value="secondary">Secondary</SelectItem>
                            <SelectItem value="islamiyya">Islamiyya</SelectItem>
                            <SelectItem value="tahfeez">Tahfeez</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Class/Grade</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Classes</SelectItem>
                            <SelectItem value="primary1">Primary 1</SelectItem>
                            <SelectItem value="primary2">Primary 2</SelectItem>
                            <SelectItem value="primary3">Primary 3</SelectItem>
                            <SelectItem value="jss1">JSS 1</SelectItem>
                            <SelectItem value="jss2">JSS 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Date Range</label>
                        <div className="flex gap-2">
                          <Input type="date" className="flex-1" />
                          <span className="flex items-center">to</span>
                          <Input type="date" className="flex-1" />
                        </div>
                      </div>
                      <div className="pt-2">
                        <Button className="w-full bg-green-600 hover:bg-green-700">Generate Report</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Saved Custom Reports</CardTitle>
                      <CardDescription>Your previously saved custom reports</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            name: "Term Performance by Subject",
                            type: "Academic",
                            created: "2025-03-15",
                            lastRun: "2025-04-01",
                          },
                          {
                            name: "Fee Collection Analysis",
                            type: "Financial",
                            created: "2025-03-10",
                            lastRun: "2025-03-28",
                          },
                          {
                            name: "Student Attendance Trend",
                            type: "Attendance",
                            created: "2025-02-20",
                            lastRun: "2025-04-05",
                          },
                          {
                            name: "Staff Performance Review",
                            type: "Staff",
                            created: "2025-02-15",
                            lastRun: "2025-03-30",
                          },
                        ].map((report, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">{report.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {report.type} • Created: {report.created} • Last run: {report.lastRun}
                              </p>
                            </div>
                            <Button variant="outline" size="sm">
                              Run
                            </Button>
                          </div>
                        ))}
                      </div>
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
