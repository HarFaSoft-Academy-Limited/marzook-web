"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"
import { Download, Edit, MoreHorizontal, Search, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AddUserDialog } from "@/components/add-user-dialog"
import { EditDialog } from "@/components/edit-user"
import { useEffect, useState } from "react"
import axios from "axios"
import { customBaseUrl } from "@/services/http"
import { set } from "date-fns"

export default function UsersPage() {
  type Staff = {
    id: number;
    name: string;
    email: string;
    role: string;
    section: string;
    status: string;
    designation: string;
    user: {
      id: number | null;
      name: string;
      email: string;
      email_verified_at: string | null;
      created_at: string | null;
      updated_at: string | null;
    };
    subjects: {
      id: number;
      name: string;
      code: string;
      description: string;
      created_at: string;
      updated_at: string;
      pivot: {
        staff_id: number;
        subject_id: number;
      };
    }[];
    sections: {
      id: number;
      name: string;
      description: string;
      created_at: string;
      updated_at: string;
      pivot: {
        staff_id: number;
        section_id: number;
      };
    }[];
  };
  type Subject  = {
    id: number;
    name: string;
    code: string;
    description: string;
    created_at: string;
    updated_at: string;
  };

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Staff | null>(null);
  const [staffData, setStaff] = useState<Staff[]>([]);
  const [allUsersData, setAllUsersData] = useState<any[]>([]);
  const [searchWord, setSearchWord] = useState("");
  const [subjects, setSubjects] = useState<Subject[]>([]);


  const getStaff = async () =>  {
    try{
      const res  = await axios.get(`${customBaseUrl.baseUrl}/api/v1/staff`,
        {
          headers: {
            Authorization: 'Bearer '+ localStorage.getItem("access_token"),
            'ngrok-skip-browser-warning': 'true' 
          }
        }
      )
      if (res.status === 200) {
        setStaff(res.data.data);
      } else {
        console.error("Failed to fetch staff data:", res.statusText);
      }
    } catch (error) {
      console.error("Error fetching staff data:", error);
      // Handle error appropriately, e.g., show a notification or alert
    }
  }

  const getAllUsers = async () => {
    try {
      const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/users`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem("access_token"),
          'ngrok-skip-browser-warning': 'true'
        }
      })
      if (res.status === 200) {
        console.log('>>>>>>>><<<<<<<<<',res.data.data.data);
        setAllUsersData(res.data.data.data);
      } else {
        console.error("Failed to fetch all users data:", res.statusText);
      }
    } catch (error) {
      console.error("Error fetching all users data:", error);
    }
  }

      const fetchSubjects = async () => {
        try {
          const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/subjects`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          })
          console.log('kkkkkkkkkkk',res.data.data);
          setSubjects(res.data.data.data)
        } catch (error) {
          console.error("Error fetching subjects:", error)
        }
      }

  useEffect(() =>  {
    getStaff();
    getAllUsers();
    fetchSubjects()

  }, []);

  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
          <AddUserDialog subjects={subjects} />
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" onChange={(e) => setSearchWord(e.target.value)} placeholder="Search users..." className="w-full pl-8" />
          </div>
          {/* <div className="flex gap-2 w-full md:w-auto" hidden>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
                <SelectItem value="parent">Parent</SelectItem>
              </SelectContent>
            </Select>
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
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div> */}
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Users</TabsTrigger>
            <TabsTrigger value="admin">Admins</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
            <TabsTrigger value="parent">Parents</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Section</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allUsersData.length > 0 &&
                      allUsersData
                      ?.filter(
                        (user) =>
                          user?.name.toLowerCase().includes(searchWord.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchWord.toLowerCase())
                      )
                      .map((user) => (
                        <TableRow key={user.email}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user?.email}</TableCell>
                          <TableCell>{user?.roles[0]?.name || "N/A"}</TableCell>
                          <TableCell>{"N/A"}</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                              {user.status ?? "Active"}
                            </span>
                          </TableCell>
                          <TableCell className="text-right" hidden>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem>
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
          <TabsContent value="admin" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Admin Users</CardTitle>
                <CardDescription>Manage administrator accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Admin users will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="staff" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Staff Users</CardTitle>
                <CardDescription>Manage staff accounts</CardDescription>
              </CardHeader>
              <CardContent>
              <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Designation</TableHead>
                      <TableHead>Section</TableHead>
                      {/* <TableHead>Status</TableHead> */}
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="overflow-y-auto max-h-[300px]">
                    {staffData
                      ?.filter(
                      (user) =>
                        user.user.name.toLowerCase().includes(searchWord.toLowerCase()) ||
                        user.user.email.toLowerCase().includes(searchWord.toLowerCase())
                      )
                      .map((user) => (
                      <TableRow key={user?.email}>
                        <TableCell className="font-medium">{user.user.name}</TableCell>
                        <TableCell>{user.user.email}</TableCell>
                        <TableCell>{user.designation}</TableCell>
                        <TableCell>
                        {user.sections.map((e) => (
                          <span
                          key={e.id}
                          className="inline-block mr-1 px-2 py-1 bg-blue-100 text-blue-800 rounded"
                          >
                          {e.name}
                          </span>
                        ))}
                        </TableCell>
                        <TableCell>
                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                          {user.status ?? "N/A"}
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
                          <DropdownMenuItem
                            onClick={() => {
                            setSelectedUser(user);
                            setEditDialogOpen(true);
                            }}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
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
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="parent" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Parent Users</CardTitle>
                <CardDescription>Manage parent accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground">Parent users will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
        <EditDialog
          hideModal={setEditDialogOpen}
          showModal={editDialogOpen}
          user={selectedUser}
          subjects={subjects}
        />
    </DashboardLayout>
  )
}
