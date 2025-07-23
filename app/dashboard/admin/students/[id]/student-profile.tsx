
"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DashboardLayout from "@/components/dashboard-layout";
import { getStudentById } from "@/services/student";

export default function StudentProfile() {
  const { id } = useParams();
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const studentData = await getStudentById(id);
      setStudent(studentData);
    };
    if (id) {
      fetchStudent();
    }
  }, [id]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Student Profile</h1>
        <div>
          <p>Name: {student.user.name}</p>
          <p>Email: {student.user.email}</p>
          <p>Phone: {student.phone}</p>
          <p>Address: {student.address}</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
