"use client";

import { getStaff, deleteStaff } from "@/services/staff";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { AddStaffDialog } from "@/components/add-staff-dialog";
import { EditStaffDialog } from "@/components/edit-staff-dialog";
import DashboardLayout from "@/components/dashboard-layout";

export default function StaffPage() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const fetchStaff = async () => {
      const staffData = await getStaff();
      setStaff(staffData);
    };
    fetchStaff();
  }, []);

  const handleStaffAdded = async () => {
    const staffData = await getStaff();
    setStaff(staffData);
  };

  const handleStaffUpdated = async () => {
    const staffData = await getStaff();
    setStaff(staffData);
  };

  const handleDelete = async (id) => {
    await deleteStaff(id);
    const staffData = await getStaff();
    setStaff(staffData);
  };

  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Staff Management</h1>
          <AddStaffDialog onStaffAdded={handleStaffAdded} />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Designation</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staff.map((staffMember) => (
              <TableRow key={staffMember.id}>
                <TableCell>{staffMember.user.name}</TableCell>
                <TableCell>{staffMember.email}</TableCell>
                <TableCell>{staffMember.phone}</TableCell>
                <TableCell>{staffMember.designation}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <EditStaffDialog staffMember={staffMember} onStaffUpdated={handleStaffUpdated} />
                    <Button variant="destructive" onClick={() => handleDelete(staffMember.id)}>
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
}
