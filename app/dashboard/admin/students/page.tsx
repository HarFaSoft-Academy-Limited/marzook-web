"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { Download, Edit, Eye, FileText, MoreHorizontal, Search, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { RegisterStudentDialog } from "@/components/register-student-dialog"
import { useEffect, useState } from "react"
import { getStudents, getStudentsByClass, deleteStudent, searchStudents } from "@/services/student";
import { EditStudentDialog } from "@/components/edit-student-dialog"

import { getClasses } from "@/services/class";
import { getSections } from "@/services/section";

type Sections ={
  id: number;
  name: string;
  description: string;
} 
type Classes = {
  id: number;
  name: string;
  description: string;
}
type Section = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  pivot: {
    staff_id: number;
    section_id: number;
  };
}
export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [classes, setClasses] = useState<Classes[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [selectedClass, setSelectedClass] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchStudents = async () => {
    const studentsData = await getStudents();
    setStudents(studentsData);
  };

  const fetchStudentsByClass = async (classId: any) => {
    if (classId === "all") {
      fetchStudents();
    } else {
      const studentsData = await getStudentsByClass(classId);
      setStudents(studentsData);
    }
  };

  const searchStudentsByTerm = async (term: any) => {
    const studentsData = await searchStudents(term);
    setStudents(studentsData);
  };

  const fetchClasses = async () => {
    const classesData = await getClasses();
    setClasses(classesData);
  };

  const fetchSections = async () => {
    const sectionsData = await getSections();
    setSections(sectionsData);
  };

  useEffect(() => {
    fetchStudents();
    fetchClasses();
    fetchSections();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      searchStudentsByTerm(searchTerm);
    } else {
      fetchStudents();
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchStudentsByClass(selectedClass);
  }, [selectedClass]);

  const handleDelete = async (studentId: any) => {
    const success = await deleteStudent(studentId);
    if (success) {
      fetchStudents();
      alert("Student deleted successfully!");
    } else {
      alert("Failed to delete student.");
    }
  };

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
            <Input type="search" placeholder="Search students..." className="w-full pl-8" onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sections</SelectItem>
                {sections.map((section) => (
                  <SelectItem key={section.id} value={section.id.toString()}>
                    {section.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select defaultValue="all" onValueChange={setSelectedClass}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                {classes.map((classItem) => (
                  <SelectItem key={classItem.id} value={classItem.id.toString()}>
                    {classItem.name}
                  </SelectItem>
                ))}
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
                      <TableHead>Admission No</TableHead>
                      <TableHead>First Name</TableHead>
                      <TableHead>First Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Section(s)</TableHead>
                      <TableHead>Parent</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.length > 0 && students.map((student:  any) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.admission_no}</TableCell>
                        <TableCell className="font-medium">{student.first_name}</TableCell>
                        <TableCell className="font-medium">{student.last_name}</TableCell>

                        <TableCell>
                          {`${student?.class?.level ?? ''} ${student?.class?.name ?? ''}`}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                              <Badge variant="outline" className="text-xs">
                                {student?.section?.name ?? 'N/A'}
                              </Badge>
                          </div>
                        </TableCell>
                        <TableCell>{"N/A"}</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                            {"Active"}
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
                              <DropdownMenuItem onSelect={() => {
                                setSelectedStudent(student);
                                setEditDialogOpen(true);
                              }}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem onSelect={() => handleDelete(student.id)}>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
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
      {selectedStudent && (
        <EditStudentDialog
          student={selectedStudent}
          showModal={editDialogOpen}
          hideModal={setEditDialogOpen}
        />
      )}
    </DashboardLayout>
  )
}
