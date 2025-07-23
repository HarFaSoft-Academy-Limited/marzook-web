'use client'

import { useEffect, useState } from "react";
import { getStudentPayments } from "@/services/payments";
import { Button } from "@/components/ui/button"
import { FeeSchedule, FeeStructure, AcademicSession, Class, Section } from "./fee-structure";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { Download, Eye, FileText, MoreHorizontal, Search } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { AddPaymentDialog } from "./add-payment-dialog"
import { AddFeeScheduleDialog } from "@/components/add-fee-schedule-dialog";
import { FeeStructureDialog, FeeSchedule, FeeStructure, AcademicSession, Class, Section } from "./fee-structure";
import { getFeeSchedules, getFeeStructures, getAcademicSessions } from "@/services/fees";
import { getClasses } from "@/services/class";
import { getSections } from "@/services/section";
import { AddFeeStructureDialog } from "@/components/add-fee-structure-dialog";
import { SimplifiedFeeStructureDialog } from "@/components/simplified-fee-structure-dialog";

export default function FeesPage() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const studentPayments = await getStudentPayments();
      setPayments(studentPayments);
    };
    fetchPayments();
  }, []);
  const [feeSchedules, setFeeSchedules] = useState<FeeSchedule[]>([]);
  const [feeStructures, setFeeStructures] = useState<FeeStructure[]>([]);
  const [academicSessions, setAcademicSessions] = useState<AcademicSession[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [totalFeesCollected, setTotalFeesCollected] = useState(0);
  const [expectedFees, setExpectedFees] = useState(0);
  const [outstandingFees, setOutstandingFees] = useState(0);
  const [collectionRate, setCollectionRate] = useState(0);
  const [reload, setReload] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const schedules = await getFeeSchedules();
      const structures = await getFeeStructures();
      const sessions = await getAcademicSessions();
      const classesData = await getClasses();
      const sectionsData = await getSections();
      const studentPayments = await getStudentPayments();

      setFeeSchedules(schedules);
      setFeeStructures(structures);
      setAcademicSessions(sessions);
      setClasses(classesData);
      setSections(sectionsData);
      setPayments(studentPayments);

      const currentSession = sessions.find(session => session.current);
      if (currentSession) {
        let totalExpected = 0;
        let totalCollected = 0;

       structures.lenght  > 0 && structures.forEach(fs => {
          if (fs.academic_session_id === currentSession.id) {
            totalExpected += parseFloat(fs.amount);
          }
        });

        studentPayments.forEach(payment => {
          // Assuming payment.fee_structure_id links to feeStructures
          const feeStructure = structures.length > 0 && structures.find(fs => fs.id === payment.fee_structure_id);
          if (feeStructure && feeStructure.academic_session_id === currentSession.id) {
            totalCollected += parseFloat(payment.amount_paid);
          }
        });

        setExpectedFees(totalExpected);
        setTotalFeesCollected(totalCollected);
        setOutstandingFees(totalExpected - totalCollected);
        setCollectionRate((totalCollected / totalExpected) * 100);
      }

    };
    fetchData();
  }, [reload]);

  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Fees & Payments</h1>
          <div className="flex gap-2">
            {/* <FeeStructureDialog /> */}
            <AddPaymentDialog  reload={reload} setReload={setReload}/>
            <AddFeeScheduleDialog />
            <AddFeeStructureDialog />
            <SimplifiedFeeStructureDialog />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Fees Collected</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦{totalFeesCollected.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">For current term</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Expected Fees</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦{expectedFees.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">For current term</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{collectionRate.toFixed(0)}%</div>
              <Progress value={collectionRate} className="h-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Outstanding Fees</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦{outstandingFees.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Across all sections</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search payments..." className="w-full pl-8" />
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

        <Tabs defaultValue="recent" className="space-y-4">
          <TabsList>
            <TabsTrigger value="recent">Recent Payments</TabsTrigger>
            <TabsTrigger value="outstanding">Outstanding Fees</TabsTrigger>
            <TabsTrigger value="discounts">Discounts & Scholarships</TabsTrigger>
          </TabsList>
          <TabsContent value="recent" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Receipt ID</TableHead>
                      <TableHead>Student</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Section</TableHead>
                      <TableHead>Payment Date</TableHead>
                      <TableHead>Payment Method</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.length > 0 && payments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>{payment.id}</TableCell>
                        <TableCell className="font-medium">{payment?.student?.first_name} {payment?.student?.last_name}</TableCell>
                        <TableCell>₦{parseFloat(payment?.amount_paid).toLocaleString()}</TableCell>
                        <TableCell>{payment?.fee_structure?.section?.name}</TableCell>
                        <TableCell>{new Date(payment?.payment_date).toLocaleDateString()}</TableCell>
                        <TableCell>{payment?.method}</TableCell>
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
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <FileText className="mr-2 h-4 w-4" />
                                Print Receipt
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
          <TabsContent value="outstanding" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Outstanding Fees</CardTitle>
                <CardDescription>Students with unpaid or partially paid fees</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student ID</TableHead>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Section</TableHead>
                      <TableHead>Total Fee</TableHead>
                      <TableHead>Paid Amount</TableHead>
                      <TableHead>Outstanding</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.length > 0 && payments.filter(payment => {
                      const feeStructure = feeStructures.length > 0 && feeStructures.find(fs => fs.id === payment.fee_structure_id);
                      const currentSession = academicSessions.length > 0 && academicSessions.find(session => session.current);
                      return feeStructure && currentSession && feeStructure.academic_session_id === currentSession.id && payment.amount_paid < feeStructure.amount;
                    }).map((payment) => {
                      const feeStructure = feeStructures.find(fs => fs.id === payment.fee_structure_id);
                      const outstanding = parseFloat(feeStructure?.amount || '0') - payment.amount_paid;
                      return (
                        <TableRow key={payment.id}>
                          <TableCell>{payment.student.id}</TableCell>
                          <TableCell className="font-medium">{payment.student.first_name} {payment.student.last_name}</TableCell>
                          <TableCell>{payment.fee_structure.school_class.name}</TableCell>
                          <TableCell>{payment.fee_structure.section.name}</TableCell>
                          <TableCell>₦{parseFloat(feeStructure?.amount || '0').toLocaleString()}</TableCell>
                          <TableCell>₦{payment.amount_paid.toLocaleString()}</TableCell>
                          <TableCell className="text-red-500 font-medium">₦{outstanding.toLocaleString()}</TableCell>
                          <TableCell>N/A</TableCell>{/* Due Date is not available in the current data */}
                          <TableCell className="text-right">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Record Payment
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="discounts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Discounts & Scholarships</CardTitle>
                <CardDescription>Manage fee discounts and scholarship programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Active Discount Programs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Discount Type</TableHead>
                            <TableHead>Percentage</TableHead>
                            <TableHead>Eligibility</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Sibling Discount</TableCell>
                            <TableCell>10%</TableCell>
                            <TableCell>2+ siblings enrolled</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Staff Children</TableCell>
                            <TableCell>50%</TableCell>
                            <TableCell>Children of staff members</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Orphan Discount</TableCell>
                            <TableCell>100%</TableCell>
                            <TableCell>Verified orphans</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <Button variant="outline" size="sm" className="mt-4">
                        Manage Discounts
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Scholarship Recipients</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Student</TableHead>
                            <TableHead>Class</TableHead>
                            <TableHead>Scholarship Type</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Aisha Sani</TableCell>
                            <TableCell>Primary 2</TableCell>
                            <TableCell>Orphan Scholarship</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Ibrahim Musa</TableCell>
                            <TableCell>JSS 3</TableCell>
                            <TableCell>Academic Excellence</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Fatima Umar</TableCell>
                            <TableCell>Primary 4</TableCell>
                            <TableCell>Zakat Fund</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <Button variant="outline" size="sm" className="mt-4">
                        Manage Scholarships
                      </Button>
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
