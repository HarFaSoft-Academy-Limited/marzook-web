import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { Download, Edit, Eye, FileText, MoreHorizontal, Search } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { RegisterStudentDialog } from "@/components/register-student-dialog"

export default function StudentsPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Student Management</h1>
          <RegisterStudentDialog />
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search students..." className="w-full pl-8" />
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
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="primary1">Primary 1</SelectItem>
                <SelectItem value="primary2">Primary 2</SelectItem>
                <SelectItem value="primary3">Primary 3</SelectItem>
                <SelectItem value="jss1">JSS 1</SelectItem>
                <SelectItem value="jss2">JSS 2</SelectItem>
                <SelectItem value="jss3">JSS 3</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Students</TabsTrigger>
            <TabsTrigger value="primary">Primary</TabsTrigger>
            <TabsTrigger value="secondary">Secondary</TabsTrigger>
            <TabsTrigger value="islamiyya">Islamiyya</TabsTrigger>
            <TabsTrigger value="tahfeez">Tahfeez</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Section(s)</TableHead>
                      <TableHead>Parent</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "STD-001",
                        name: "Amina Ibrahim",
                        class: "Primary 3",
                        sections: ["Primary", "Islamiyya"],
                        parent: "Ibrahim Suleiman",
                        status: "Active",
                      },
                      {
                        id: "STD-002",
                        name: "Yusuf Mohammed",
                        class: "JSS 1",
                        sections: ["Secondary", "Tahfeez"],
                        parent: "Mohammed Yusuf",
                        status: "Active",
                      },
                      {
                        id: "STD-003",
                        name: "Fatima Abubakar",
                        class: "Primary 5",
                        sections: ["Primary"],
                        parent: "Abubakar Usman",
                        status: "Active",
                      },
                      {
                        id: "STD-004",
                        name: "Umar Abdullahi",
                        class: "JSS 2",
                        sections: ["Secondary"],
                        parent: "Abdullahi Umar",
                        status: "Active",
                      },
                      {
                        id: "STD-005",
                        name: "Aisha Sani",
                        class: "Primary 2",
                        sections: ["Primary", "Islamiyya", "Tahfeez"],
                        parent: "Sani Abubakar",
                        status: "Active",
                      },
                    ].map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.id}</TableCell>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell>{student.class}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {student.sections.map((section) => (
                              <Badge key={section} variant="outline" className="text-xs">
                                {section}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>{student.parent}</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                            {student.status}
                          </span>
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
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <FileText className="mr-2 h-4 w-4" />
                                View Results
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
          <TabsContent value="primary" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Primary Section Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Primary section students will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="secondary" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Secondary Section Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Secondary section students will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="islamiyya" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Islamiyya Section Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Islamiyya section students will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tahfeez" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Tahfeez Section Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Tahfeez section students will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
