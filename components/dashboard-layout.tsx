"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bell,
  BookOpen,
  Calendar,
  CreditCard,
  FileText,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Moon,
  Settings,
  Sun,
  User,
  Users,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useTheme } from "@/components/theme-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DashboardLayoutProps {
  children: React.ReactNode
  userType: "admin" | "staff" | "parent"
}

export default function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const { setTheme } = useTheme()
  const pathname = usePathname()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const adminNavItems = [
    { name: "Dashboard", href: "/dashboard/admin", icon: Home },
    { name: "Users", href: "/dashboard/admin/users", icon: Users },
    { name: "Students", href: "/dashboard/admin/students", icon: User },
    { name: "Classes", href: "/dashboard/admin/classes", icon: BookOpen },
    { name: "Academic Records", href: "/dashboard/admin/academic-records", icon: BookOpen },
    { name: "Fees & Payments", href: "/dashboard/admin/fees", icon: CreditCard },
    { name: "Communication", href: "/dashboard/admin/communication", icon: MessageSquare },
    { name: "Reports", href: "/dashboard/admin/reports", icon: FileText },
    { name: "Calendar", href: "/dashboard/admin/calendar", icon: Calendar },
    { name: "Settings", href: "/dashboard/admin/settings", icon: Settings },
  ]

  const staffNavItems = [
    { name: "Dashboard", href: "/dashboard/staff", icon: Home },
    { name: "My Classes", href: "/dashboard/staff/classes", icon: BookOpen },
    { name: "Attendance", href: "/dashboard/staff/attendance", icon: Calendar },
    { name: "Enter Scores", href: "/dashboard/staff/scores", icon: FileText },
    { name: "Qur'an Progress", href: "/dashboard/staff/quran", icon: BookOpen },
    { name: "Messages", href: "/dashboard/staff/messages", icon: MessageSquare },
  ]

  const parentNavItems = [
    { name: "Dashboard", href: "/dashboard/parent", icon: Home },
    { name: "My Children", href: "/dashboard/parent/children", icon: Users },
    { name: "Academic Records", href: "/dashboard/parent/academic-records", icon: BookOpen },
    { name: "Pay Fees", href: "/dashboard/parent/fees", icon: CreditCard },
    { name: "Messages", href: "/dashboard/parent/messages", icon: MessageSquare },
  ]

  const navItems = userType === "admin" ? adminNavItems : userType === "staff" ? staffNavItems : parentNavItems

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-green-50">
        <div className="flex h-14 items-center border-b px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
              MMS
            </div>
            <span className="font-semibold text-green-800">Marzook Model School</span>
          </div>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === item.href
                    ? "bg-green-100 text-green-900"
                    : "text-gray-600 hover:bg-green-100 hover:text-green-900"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-green-200 flex items-center justify-center">
              <User className="h-4 w-4 text-green-700" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                {userType === "admin" ? "Admin User" : userType === "staff" ? "Staff User" : "Parent User"}
              </span>
              <span className="text-xs text-gray-500">
                {userType === "admin" ? "Administrator" : userType === "staff" ? "Teacher" : "Parent"}
              </span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Log out</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile navigation */}
      <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-14 items-center border-b px-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                MMS
              </div>
              <span className="font-semibold text-green-800">Marzook Model School</span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsMobileNavOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="grid gap-1 p-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === item.href
                    ? "bg-green-100 text-green-900"
                    : "text-gray-600 hover:bg-green-100 hover:text-green-900"
                }`}
                onClick={() => setIsMobileNavOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="border-t p-4 mt-auto">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-200 flex items-center justify-center">
                <User className="h-4 w-4 text-green-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  {userType === "admin" ? "Admin User" : userType === "staff" ? "Staff User" : "Parent User"}
                </span>
                <span className="text-xs text-gray-500">
                  {userType === "admin" ? "Administrator" : userType === "staff" ? "Teacher" : "Parent"}
                </span>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Log out</span>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <header className="flex h-14 items-center gap-4 border-b bg-white px-4 lg:px-6">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileNavOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-2">
              {userType === "admin" && (
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sections</SelectItem>
                    <SelectItem value="primary">Primary</SelectItem>
                    <SelectItem value="secondary">Secondary</SelectItem>
                    <SelectItem value="islamiyya">Islamiyya</SelectItem>
                    <SelectItem value="tahfeez">Tahfeez</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}
