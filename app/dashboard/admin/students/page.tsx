"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { Download, Edit, Eye, MoreHorizontal, Search, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { RegisterStudentDialog } from "@/components/register-student-dialog"
import { useEffect, useState } from "react"
import { getStudents, getStudentsByClass, deleteStudent, searchStudents } from "@/services/student";
import { EditStudentDialog } from "@/components/edit-student-dialog"

import { getClasses } from "@/services/class";
import { getSections } from "@/services/section";

type Sections = {
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

type Student = {
  id: number;
  first_name: string;
  last_name: string;
  other_name: string;
  full_name: string;
  admission_no: string;
  gender: string;
  date_of_birth: string;
  nationality: string;
  religion: string;
  address: string;
  photo: string | null;
  previous_school_attended: string;
  relationship: string;
  status: string;
  created_at: string;
  updated_at: string;
  parent: {
    id: number;
    name: string;
    phone: string;
    email: string;
    address: string;
    occupation: string;
    gender: string;
  };
  classes: {
    id: number;
    student_id: number;
    school_class_id: number;
    section_id: number;
    academic_session_id: number;
    created_by: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    assignment_status: string;
    class_section_display: string;
    student_class_info: {
      student_name: string;
      admission_no: string;
      class: string;
      section: string;
      session: string;
    };
  }[];
};

import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [meta, setMeta] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [classes, setClasses] = useState<Classes[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [selectedClass, setSelectedClass] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchStudents = async (page: number) => {
    const studentsData = await getStudents(page);
    setStudents(studentsData.data);
    setMeta(studentsData.meta);
  };

  const fetchStudentsByClass = async (classId: any, page: number) => {
    if (classId === "all") {
      fetchStudents(page);
    } else {
      const studentsData = await getStudentsByClass(classId, page);
      setStudents(studentsData.data);
      setMeta(studentsData.meta);
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
    fetchStudents(currentPage);
    fetchClasses();
    fetchSections();
  }, [currentPage]);

  useEffect(() => {
    if (searchTerm) {
      searchStudentsByTerm(searchTerm);
    } else {
      fetchStudents(currentPage);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchStudentsByClass(selectedClass, currentPage);
  }, [selectedClass]);

  const handleDelete = async (studentId: any) => {
    const success = await deleteStudent(studentId);
    if (success) {
      fetchStudents(currentPage);
      alert("Student deleted successfully!");
    } else {
      alert("Failed to delete student.");
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
                      <TableHead>Full Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Section(s)</TableHead>
                      <TableHead>Parent</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.length > 0 && students.map((student: Student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.admission_no}</TableCell>
                        <TableCell className="font-medium">{student.full_name}</TableCell>
                        <TableCell>
                          {student.classes.length > 0 ? student.classes[0].student_class_info.class : 'N/A'}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {student.classes.map((c: any) => (
                              <Badge key={c.id} variant="outline" className="text-xs">
                                {c.student_class_info.section}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>{student.parent ? student.parent.name : 'N/A'}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {student.status || 'Inactive'}
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
                              <DropdownMenuItem onSelect={() => window.location.href = `/dashboard/admin/students/${student.id}`}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Profile
                              </DropdownMenuItem>
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
              <div className="flex justify-center py-4">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" onClick={() => handlePageChange(currentPage - 1)} />
                    </PaginationItem>
                    {meta && Array.from({ length: meta.last_page }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink href="#" onClick={() => handlePageChange(page)} isActive={currentPage === page}>
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext href="#" onClick={() => handlePageChange(currentPage + 1)} />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
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