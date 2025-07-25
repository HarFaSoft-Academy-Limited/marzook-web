"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { customBaseUrl } from "@/services/http";
import DashboardLayout from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StaffDetails } from "@/components/staff-details";
import { StaffClasses } from "@/components/staff-classes";
import { StaffPayrollDeduction } from "@/components/staff-payroll-deduction";

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

export default function StaffProfilePage() {
  const params = useParams();
  const { id } = params;
  const [staff, setStaff] = useState<Staff | null>(null);

  useEffect(() => {
    const getStaffDetails = async () => {
      try {
        const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/staff/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "ngrok-skip-browser-warning": "true",
          },
        });
        if (res.status === 200) {
          setStaff(res.data);
        } else {
          console.error("Failed to fetch staff data:", res.statusText);
        }
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };

    if (id) {
      getStaffDetails();
    }
  }, [id]);

  return (
    <DashboardLayout userType="admin">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Staff Profile</h1>
        {staff && (
          <Tabs defaultValue="details" className="space-y-4">
            <TabsList>
              <TabsTrigger value="details">Staff Details</TabsTrigger>
              <TabsTrigger value="classes">Staff Classes</TabsTrigger>
              <TabsTrigger value="payroll">Staff Payroll and Deduction</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Staff Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <StaffDetails staff={staff} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="classes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Staff Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <StaffClasses staff={staff} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="payroll" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Staff Payroll and Deduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <StaffPayrollDeduction staff={staff} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </DashboardLayout>
  );
}
