import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, FileText, MoreHorizontal, PlusCircle, Search, Upload } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AcademicRecordsPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Academic Records</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Import Results
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Result Template
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search records..." className="w-full pl-8" />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sections</SelectItem>
                <SelectItem value="primary">Primary</SelectItem>
                <SelectItem value="secondary">Secondary</SelectItem>
                <SelectItem value="islamiyya">Islamiyya</SelectItem>
                <SelectItem value="tahfeez">Tahfeez</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="current">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by term" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Current Term</SelectItem>
                <SelectItem value="previous">Previous Term</SelectItem>
                <SelectItem value="all">All Terms</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="results" className="space-y-4">
          <TabsList>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="assessments">Assessments</TabsTrigger>
            <TabsTrigger value="quran">Qur'an Progress</TabsTrigger>
            <TabsTrigger value="templates">Result Templates</TabsTrigger>
          </TabsList>
          <TabsContent value="results" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Results</CardTitle>
                <CardDescription>Results uploaded in the current term</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Class</TableHead>
                      <TableHead>Section</TableHead>
                      <TableHead>Term</TableHead>
                      <TableHead>Session</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Uploaded By</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        class: "Primary 3",
                        section: "Primary",
                        term: "2nd Term",
                        session: "2024/2025",
                        status: "Published",
                        uploadedBy: "Fatima Usman",
                        date: "2025-04-01",
                      },
                      {
                        class: "Primary 5",
                        section: "Primary",
                        term: "2nd Term",
                        session: "2024/2025",
                        status: "Published",
                        uploadedBy: "Fatima Usman",
                        date: "2025-04-01",
                      },
                      {
                        class: "JSS 1",
                        section: "Secondary",
                        term: "2nd Term",
                        session: "2024/2025",
                        status: "Draft",
                        uploadedBy: "Musa Abdullahi",
                        date: "2025-03-28",
                      },
                      {
                        class: "JSS 2",
                        section: "Secondary",
                        term: "2nd Term",
                        session: "2024/2025",
                        status: "Published",
                        uploadedBy: "Musa Abdullahi",
                        date: "2025-03-25",
                      },
                      {
                        class: "Islamiyya Level 2",
                        section: "Islamiyya",
                        term: "3rd Term",
                        session: "2024/2025",
                        status: "Published",
                        uploadedBy: "Aisha Mohammed",
                        date: "2025-03-20",
                      },
                    ].map((result, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{result.class}</TableCell>
                        <TableCell>{result.section}</TableCell>
                        <TableCell>{result.term}</TableCell>
                        <TableCell>{result.session}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`${
                              result.status === "Published"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                            }`}
                          >
                            {result.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{result.uploadedBy}</TableCell>
                        <TableCell>{result.date}</TableCell>
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
                                View Results
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <FileText className="mr-2 h-4 w-4" />
                                Download PDF
                              </DropdownMenuItem>
                              {result.status === "Draft" && (
                                <DropdownMenuItem>
                                  <PlusCircle className="mr-2 h-4 w-4" />
                                  Publish
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Analysis</CardTitle>
                <CardDescription>Overall academic performance by section</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    { section: "Primary", average: 78, passing: 92, improved: 65 },
                    { section: "Secondary", average: 72, passing: 88, improved: 58 },
                    { section: "Islamiyya", average: 81, passing: 95, improved: 70 },
                    { section: "Tahfeez", average: 85, passing: 97, improved: 75 },
                  ].map((data, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{data.section} Section</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Average Score</span>
                            <span className="font-medium">{data.average}%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                            <div
                              className="h-full bg-green-500"
                              style={{
                                width: `${data.average}%`,
                              }}
                            />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Passing Rate</span>
                            <span className="font-medium">{data.passing}%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                            <div
                              className="h-full bg-blue-500"
                              style={{
                                width: `${data.passing}%`,
                              }}
                            />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Improved from Last Term</span>
                            <span className="font-medium">{data.improved}%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                            <div
                              className="h-full bg-purple-500"
                              style={{
                                width: `${data.improved}%`,
                              }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="assessments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Assessment Records</CardTitle>
                <CardDescription>Continuous assessment records for all classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {[
                    { class: "Primary 3", section: "Primary", assessments: ["Test 1", "Test 2", "Exam"] },
                    { class: "JSS 1", section: "Secondary", assessments: ["Test 1", "Test 2", "Exam"] },
                    {
                      class: "Islamiyya Level 2",
                      section: "Islamiyya",
                      assessments: ["Test 1", "Test 2", "Test 3", "Exam"],
                    },
                    {
                      class: "Tahfeez Level 1",
                      section: "Tahfeez",
                      assessments: ["Oral Test", "Written Test", "Exam"],
                    },
                  ].map((classData, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">
                            {classData.class} ({classData.section})
                          </CardTitle>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {classData.assessments.map((assessment, i) => (
                            <Badge key={i} variant="outline">
                              {assessment}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="quran" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Qur'an Progress Tracking</CardTitle>
                <CardDescription>Memorization and recitation progress for Tahfeez students</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead>Juz Completed</TableHead>
                      <TableHead>Current Surah</TableHead>
                      <TableHead>Tajweed Rating</TableHead>
                      <TableHead>Retention</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        student: "Ahmad Ibrahim",
                        level: "Tahfeez 1",
                        juz: 5,
                        surah: "Al-Ma'idah",
                        tajweed: "Excellent",
                        retention: "Good",
                        updated: "2025-04-02",
                      },
                      {
                        student: "Yusuf Mohammed",
                        level: "Tahfeez 2",
                        juz: 12,
                        surah: "Yusuf",
                        tajweed: "Very Good",
                        retention: "Excellent",
                        updated: "2025-04-01",
                      },
                      {
                        student: "Aisha Sani",
                        level: "Tahfeez 1",
                        juz: 3,
                        surah: "Al-Imran",
                        tajweed: "Good",
                        retention: "Good",
                        updated: "2025-03-30",
                      },
                      {
                        student: "Fatima Umar",
                        level: "Tahfeez 3",
                        juz: 20,
                        surah: "An-Naml",
                        tajweed: "Excellent",
                        retention: "Very Good",
                        updated: "2025-03-28",
                      },
                    ].map((record, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{record.student}</TableCell>
                        <TableCell>{record.level}</TableCell>
                        <TableCell>{record.juz}</TableCell>
                        <TableCell>{record.surah}</TableCell>
                        <TableCell>{record.tajweed}</TableCell>
                        <TableCell>{record.retention}</TableCell>
                        <TableCell>{record.updated}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Update
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="templates" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Result Templates</CardTitle>
                <CardDescription>Manage result templates for different sections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Primary Result Template",
                      section: "Primary",
                      components: ["Test 1 (20%)", "Test 2 (20%)", "Exam (60%)"],
                      subjects: 9,
                    },
                    {
                      name: "Secondary Result Template",
                      section: "Secondary",
                      components: ["Test 1 (15%)", "Test 2 (15%)", "Project (10%)", "Exam (60%)"],
                      subjects: 12,
                    },
                    {
                      name: "Islamiyya Result Template",
                      section: "Islamiyya",
                      components: ["Test 1 (20%)", "Test 2 (20%)", "Test 3 (20%)", "Exam (40%)"],
                      subjects: 6,
                    },
                    {
                      name: "Tahfeez Assessment Template",
                      section: "Tahfeez",
                      components: ["Memorization (40%)", "Tajweed (30%)", "Retention (30%)"],
                      subjects: 1,
                    },
                  ].map((template, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{template.name}</CardTitle>
                        <CardDescription>{template.section} Section</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-sm">
                          <span className="font-medium">Assessment Components:</span>
                          <ul className="mt-1 space-y-1">
                            {template.components.map((component, i) => (
                              <li key={i}>{component}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Number of Subjects: </span>
                          {template.subjects}
                        </div>
                        <div className="pt-2 flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Duplicate
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
