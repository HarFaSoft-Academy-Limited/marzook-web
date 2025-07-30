"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import {
  BookOpen,
  CreditCard,
  DollarSign,
  Download,
  GraduationCap,
  MessageSquare,
  TrendingUp,
  Users,
} from "lucide-react"
import { SectionDistributionChart, MonthlyFeesChart, SubjectPerformanceChart, AttendanceChart } from "@/components/dashboard-charts"
import { useEffect, useState } from "react"
import { getDashboardOverview, getFinancialDashboard, getStaffDashboard, getAttendanceDashboard } from "@/services/dashboard"

export default function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState(null)
  const [financialData, setFinancialData] = useState(null)
  const [staffData, setStaffData] = useState(null)
  const [attendanceData, setAttendanceData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const [overview, financial, staff, attendance] = await Promise.all([
        getDashboardOverview(),
        getFinancialDashboard(),
        getStaffDashboard(),
        getAttendanceDashboard(),
      ])
      setDashboardData(overview.data)
      setFinancialData(financial.data)
      setStaffData(staff.data)
      setAttendanceData(attendance.data)
    }
    fetchData()
  }, [])

  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Current Session: {dashboardData?.current_session?.name}
            </span>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData?.statistics?.students?.total}</div>
                  <p className="text-xs text-muted-foreground">
                    {dashboardData?.statistics?.students?.growth_rate}% from last term
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Fee Collection</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ₦{Number(financialData?.revenue_summary?.this_month_revenue).toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {financialData?.outstanding_fees?.payment_percentage}% of expected fees
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Staff Members</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData?.statistics?.staff?.total}</div>
                  <p className="text-xs text-muted-foreground">Across all sections</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{attendanceData?.today_attendance?.overall_attendance_rate}%</div>
                  <p className="text-xs text-muted-foreground">
                    {/* +2% from last week */}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="col-span-4">
                <SectionDistributionChart data={dashboardData} />
              </div>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest updates across all sections</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dashboardData?.recent_activities?.payments.map((activity, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-4 mt-0.5">
                          <CreditCard className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Fee Payment</p>
                          <p className="text-sm text-muted-foreground">
                            {activity.student.first_name} {activity.student.last_name} paid ₦
                            {Number(activity.amount_paid).toLocaleString()}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(activity.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <MonthlyFeesChart data={financialData} />
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <SubjectPerformanceChart data={dashboardData} />
              <AttendanceChart data={dashboardData} />
            </div>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Reports Content</CardTitle>
                <CardDescription>Generated reports will be displayed here</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Reports and downloadable documents will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
