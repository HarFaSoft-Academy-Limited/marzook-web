'use client'

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { Download, Eye, FileText, MoreHorizontal, Search } from "lucide-react"
import { getExams, getExamResults } from "@/services/exam";

export default function ExamResultsPage() {
  const [exams, setExams] = useState([]);
  const [examResults, setExamResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const examsData = await getExams();
      const examResultsData = await getExamResults();
      setExams(examsData);
      setExamResults(examResultsData);
    };
    fetchData();
  }, []);

  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Exam Results</h1>
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
                    {exams.map((exam: any) => (
                      <TableRow key={exam.id}>
                        <TableCell>{exam.name}</TableCell>
                        <TableCell>{exam.term?.name}</TableCell>
                        <TableCell>{new Date(exam.start_date).toLocaleDateString()}</TableCell>
                        <TableCell>{new Date(exam.end_date).toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">View Details</Button>
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
                    {examResults.map((result: any) => (
                      <TableRow key={result.id}>
                        <TableCell>{result.student?.first_name} {result.student?.last_name}</TableCell>
                        <TableCell>{result.exam?.name}</TableCell>
                        <TableCell>{result.subject?.name}</TableCell>
                        <TableCell>{result.total_score}</TableCell>
                        <TableCell>{result.grade}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">View Details</Button>
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
