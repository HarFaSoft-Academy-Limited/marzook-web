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

// Sample data for charts
const sectionData = [
  { name: "Primary", students: 520, fill: "#3b82f6" },
  { name: "Secondary", students: 380, fill: "#22c55e" },
  { name: "Islamiyya", students: 210, fill: "#eab308" },
  { name: "Tahfeez", students: 138, fill: "#a855f7" },
]

const monthlyFeesData = [
  { name: "Jan", amount: 3500000 },
  { name: "Feb", amount: 2200000 },
  { name: "Mar", amount: 1800000 },
  { name: "Apr", amount: 4200000 },
  { name: "May", amount: 3800000 },
  { name: "Jun", amount: 2700000 },
  { name: "Jul", amount: 1500000 },
  { name: "Aug", amount: 500000 },
  { name: "Sep", amount: 3200000 },
  { name: "Oct", amount: 4500000 },
  { name: "Nov", amount: 3700000 },
  { name: "Dec", amount: 2900000 },
]

const performanceData = [
  { subject: "Math", score: 78 },
  { subject: "English", score: 82 },
  { subject: "Science", score: 65 },
  { subject: "Social Studies", score: 90 },
  { subject: "ICT", score: 85 },
  { subject: "Arabic", score: 72 },
  { subject: "Islamic Studies", score: 88 },
]

const attendanceData = [
  { day: "Mon", primary: 95, secondary: 92, islamiyya: 90 },
  { day: "Tue", primary: 97, secondary: 94, islamiyya: 93 },
  { day: "Wed", primary: 94, secondary: 90, islamiyya: 89 },
  { day: "Thu", primary: 96, secondary: 91, islamiyya: 92 },
  { day: "Fri", primary: 98, secondary: 95, islamiyya: 96 },
]

export function SectionDistributionChart() {
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
                {sectionData.map((entry, index) => (
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

export function MonthlyFeesChart() {
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

export function SubjectPerformanceChart() {
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

export function AttendanceChart() {
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
