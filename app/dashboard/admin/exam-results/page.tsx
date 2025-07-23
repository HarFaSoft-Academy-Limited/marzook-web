'use client'

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { Download, Eye, FileText, MoreHorizontal, Search } from "lucide-react"
import { CreateExamDialog } from "@/components/create-exam-dialog";
import { ViewExamDetailsDialog } from "@/components/view-exam-details-dialog";
import { ViewExamResultDetailsDialog } from "@/components/view-exam-result-details-dialog";
import { getExams, getExamResults } from "@/services/exam";
import { getClasses } from "@/services/class";
import { getStudents } from "@/services/student";
import { getSubjects } from "@/services/subject";
import { getAcademicSessions } from "@/services/fees";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sub } from "date-fns";

export default function ExamResultsPage() {
  const [exams, setExams] = useState([]);
  const [examResults, setExamResults] = useState([]);
  const [reload, setReload] = useState(false);
  const [academicSessions, setAcademicSessions] = useState([]);
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedExam, setSelectedExam] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      const examsData = await getExams();
      const examResultsData = await getExamResults();
      const academicSessionsData = await getAcademicSessions();
      const classesData = await getClasses();
      const studentsData = await getStudents();
      const subjectsData = await getSubjects();

      setExams(examsData);
      setExamResults(examResultsData);
      setAcademicSessions(academicSessionsData);
      setClasses(classesData);
      setStudents(studentsData);
      setSubjects(subjectsData);
    };
    fetchData();
  }, [reload]);

  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Exam Results</h1>
          <CreateExamDialog setReload={setReload} reload={reload} />
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex gap-2 w-full md:w-auto">
            <Select onValueChange={setSelectedSession} value={selectedSession}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by Session" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sessions</SelectItem>
                {academicSessions.map((session: any) => (
                  <SelectItem key={session.id} value={String(session.id)}>
                    {session.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedClass} value={selectedClass}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                {classes.map((cls: any) => (
                  <SelectItem key={cls.id} value={String(cls.id)}>
                    {cls.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedStudent} value={selectedStudent}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by Student" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Students</SelectItem>
                {students.length > 0 && students.map((student: any) => (
                  <SelectItem key={student.id} value={String(student.id)}>
                    {student.first_name} {student.last_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedSubject} value={selectedSubject}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                {subjects.length > 0 && subjects.map((subject: any) => (
                  <SelectItem key={subject.id} value={String(subject.id)}>
                    {subject.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedExam} value={selectedExam}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by Exam" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Exams</SelectItem>
                {exams.length > 0 && exams.map((exam: any) => (
                  <SelectItem key={exam.id} value={String(exam.id)}>
                    {exam.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="all-exams" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all-exams">All Exams</TabsTrigger>
            <TabsTrigger value="exam-results">Exam Results</TabsTrigger>
          </TabsList>
          <TabsContent value="all-exams" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Exams</CardTitle>
                <CardDescription>View and manage all exams.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Exam Name</TableHead>
                      <TableHead>Term</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {exams.length > 0 && exams.map((exam: any) => (
                      <TableRow key={exam.id}>
                        <TableCell>{exam.name}</TableCell>
                        <TableCell>{exam.term?.name}</TableCell>
                        <TableCell>{new Date(exam.start_date).toLocaleDateString()}</TableCell>
                        <TableCell>{new Date(exam.end_date).toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                          <ViewExamDetailsDialog exam={exam} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="exam-results" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Exam Results</CardTitle>
                <CardDescription>View and manage all exam results.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Exam</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Total Score</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {examResults.length > 0 &&
                      examResults
                      .filter((result: any) => {
                        if (selectedSession && String(result.exam?.academic_session_id) !== selectedSession) return false;
                        if (selectedClass && String(result.student?.school_class_id) !== selectedClass) return false;
                        if (selectedStudent && String(result.student_id) !== selectedStudent) return false;
                        if (selectedSubject && String(result.subject_id) !== selectedSubject) return false;
                        if (selectedExam && String(result.exam_id) !== selectedExam) return false;
                        return true;
                      })
                      .map((result: any) => (
                      <TableRow key={result.id}>
                        <TableCell>{result.student?.first_name} {result.student?.last_name}</TableCell>
                        <TableCell>{result.exam?.name}</TableCell>
                        <TableCell>{result.subject?.name}</TableCell>
                        <TableCell>{result.total_score}</TableCell>
                        <TableCell>{result.grade}</TableCell>
                        <TableCell className="text-right">
                          <ViewExamResultDetailsDialog result={result} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
