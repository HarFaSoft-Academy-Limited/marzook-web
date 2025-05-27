import { Button } from "@/components/ui/button"
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
import { FeeStructureDialog } from "./fee-structure"

export default function FeesPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Fees & Payments</h1>
          <div className="flex gap-2">
            <FeeStructureDialog />
            <AddPaymentDialog />
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
              <div className="text-2xl font-bold">₦24,350,000</div>
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
              <div className="text-2xl font-bold">₦31,200,000</div>
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
              <div className="text-2xl font-bold">78%</div>
              <Progress value={78} className="h-2" />
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
              <div className="text-2xl font-bold">₦6,850,000</div>
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
                    {[
                      {
                        id: "RCP-001",
                        student: "Amina Ibrahim",
                        amount: "₦120,000",
                        section: "Primary",
                        date: "2024-04-05",
                        method: "Bank Transfer",
                      },
                      {
                        id: "RCP-002",
                        student: "Yusuf Mohammed",
                        amount: "₦150,000",
                        section: "Secondary",
                        date: "2024-04-03",
                        method: "Online Payment",
                      },
                      {
                        id: "RCP-003",
                        student: "Fatima Abubakar",
                        amount: "₦100,000",
                        section: "Primary",
                        date: "2024-04-02",
                        method: "Cash",
                      },
                      {
                        id: "RCP-004",
                        student: "Umar Abdullahi",
                        amount: "₦150,000",
                        section: "Secondary",
                        date: "2024-04-01",
                        method: "Bank Transfer",
                      },
                      {
                        id: "RCP-005",
                        student: "Aisha Sani",
                        amount: "₦80,000",
                        section: "Islamiyya",
                        date: "2024-03-30",
                        method: "Online Payment",
                      },
                    ].map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>{payment.id}</TableCell>
                        <TableCell className="font-medium">{payment.student}</TableCell>
                        <TableCell>{payment.amount}</TableCell>
                        <TableCell>{payment.section}</TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>{payment.method}</TableCell>
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
                    {[
                      {
                        id: "STD-001",
                        name: "Amina Ibrahim",
                        class: "Primary 3",
                        section: "Primary",
                        totalFee: "₦120,000",
                        paidAmount: "₦60,000",
                        outstanding: "₦60,000",
                        dueDate: "2025-04-30",
                      },
                      {
                        id: "STD-002",
                        name: "Yusuf Mohammed",
                        class: "JSS 1",
                        section: "Secondary",
                        totalFee: "₦150,000",
                        paidAmount: "₦75,000",
                        outstanding: "₦75,000",
                        dueDate: "2025-04-30",
                      },
                      {
                        id: "STD-003",
                        name: "Fatima Abubakar",
                        class: "Primary 5",
                        section: "Primary",
                        totalFee: "₦120,000",
                        paidAmount: "₦0",
                        outstanding: "₦120,000",
                        dueDate: "2025-04-30",
                      },
                    ].map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.id}</TableCell>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell>{student.class}</TableCell>
                        <TableCell>{student.section}</TableCell>
                        <TableCell>{student.totalFee}</TableCell>
                        <TableCell>{student.paidAmount}</TableCell>
                        <TableCell className="text-red-500 font-medium">{student.outstanding}</TableCell>
                        <TableCell>{student.dueDate}</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Record Payment
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
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
