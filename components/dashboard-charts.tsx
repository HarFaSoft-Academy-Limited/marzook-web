"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

export function SectionDistributionChart({ data }) {
  const sectionData = data?.class_performance?.map((item, index) => ({
    name: item.class_name,
    students: item.student_count,
    fill: ["#3b82f6", "#22c55e", "#eab308", "#a855f7"][index % 4],
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Section Overview</CardTitle>
        <CardDescription>Student distribution across sections</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sectionData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, students }) => `${name}: ${students}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="students"
              >
                {sectionData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} students`, "Enrollment"]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function MonthlyFeesChart({ data }) {
  const monthlyFeesData = data?.monthly_trends?.monthly_revenue?.map((item) => ({
    name: item.month,
    amount: item.revenue,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Fee Collection</CardTitle>
        <CardDescription>Fee collection trend throughout the year</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyFeesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `₦${value / 1000000}M`} />
              <Tooltip formatter={(value) => [`₦${(value).toLocaleString()}`, "Collection"]} />
              <Bar dataKey="amount" fill="#16a34a" name="Amount Collected" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function SubjectPerformanceChart({ data }) {
  const performanceData = data?.performance?.grade_distribution?.map((item) => ({
    subject: item.grade,
    score: item.count,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subject Performance</CardTitle>
        <CardDescription>Average scores by subject</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="subject" type="category" width={100} />
              <Tooltip formatter={(value) => [`${value}%`, "Score"]} />
              <Bar dataKey="score" fill="#3b82f6" name="Average Score" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function AttendanceChart({ data }) {
  const attendanceData = data?.monthly_attendance?.map((item) => ({
    day: item.month,
    primary: item.attendance_rate,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Attendance</CardTitle>
        <CardDescription>Attendance rates by section</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={[80, 100]} />
              <Tooltip formatter={(value) => [`${value}%`, "Attendance"]} />
              <Legend />
              <Line type="monotone" dataKey="primary" stroke="#3b82f6" name="Primary" />
              <Line type="monotone" dataKey="secondary" stroke="#22c55e" name="Secondary" />
              <Line type="monotone" dataKey="islamiyya" stroke="#eab308" name="Islamiyya" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
