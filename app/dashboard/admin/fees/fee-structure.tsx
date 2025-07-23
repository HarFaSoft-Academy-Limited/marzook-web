"use client"

import { useEffect, useState } from "react"
import { getFeeSchedules, getFeeStructures, getAcademicSessions } from "@/services/fees";
import { getClasses } from "@/services/class";
import { getSections } from "@/services/section";

export type FeeSchedule = {
  id: number;
  name: string;
  description: string;
  is_mandatory: boolean;
};

export type FeeStructure = {
  id: number;
  fee_schedule_id: number;
  academic_session_id: number;
  term_id: number;
  class_id: number;
  amount: number;
};

export type AcademicSession = {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  current: boolean;
};

export type Class = {
  id: number;
  name: string;
  section_id: number;
};

export type Section = {
  id: number;
  name: string;
};

export type Student = {
  id: number;
  first_name: string;
  last_name: string;
  other_name?: string;
  gender: string;
  date_of_birth: string;
  nationality: string;
  religion: string;
  email: string;
  phone: string;
  address: string;
  admission_no: string;
  admission_date: string;
  parent_id: number;
  relationship: string;
  current_class_id: number;
  current_academic_session_id: number;
  current_term_id: number;
  class: Class;
};

export type Payment = {
  id: number;
  student_id: number;
  fee_structure_id: number;
  amount_paid: number;
  payment_date: string;
  payment_method: string;
  reference: string;
  student: Student;
  fee_structure: FeeStructure & {
    class: Class & {
      section: Section;
    };
  };
};
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Settings } from "lucide-react"

export function FeeStructureDialog() {
  const [open, setOpen] = useState(false);
  const [feeSchedules, setFeeSchedules] = useState([]);
  const [feeStructures, setFeeStructures] = useState([]);
  const [academicSessions, setAcademicSessions] = useState([]);
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const schedules = await getFeeSchedules();
      const structures = await getFeeStructures();
      const sessions = await getAcademicSessions();
      const classesData = await getClasses();
      const sectionsData = await getSections();
      setFeeSchedules(schedules);
      setFeeStructures(structures);
      setAcademicSessions(sessions);
      setClasses(classesData);
      setSections(sectionsData);
    };
    fetchData();
  }, []);
  // const [academicSessions, setAcademicSessions] = useState([]);
  // const [classes, setClasses] = useState([]);
  // const [sections, setSections] = useState([]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Fee Structure
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Fee Structure</DialogTitle>
          <DialogDescription>View and manage fee structures for different sections</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              {sections.map((section) => (
                <TabsTrigger key={section.id} value={section.name.toLowerCase()}>
                  {section.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {sections.map((section) => (
              <TabsContent value={section.name.toLowerCase()} className="mt-4" key={section.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{section.name} Section Fee Structure</CardTitle>
                    {academicSessions.length > 0 && (
                      <CardDescription>{academicSessions.find(session => session.current)?.name} Academic Session</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Fee Item</TableHead>
                          {classes
                            .filter((cls) => cls.section_id === section.id)
                            .map((cls) => (
                              <TableHead key={cls.id}>{cls.name}</TableHead>
                            ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {feeSchedules.length > 0 && feeSchedules.map((schedule) => (
                          <TableRow key={schedule.id}>
                            <TableCell className="font-medium">{schedule.name}</TableCell>
                            {classes
                              .filter((cls) => cls.section_id === section.id)
                              .map((cls) => {
                                const fee = feeStructures.find(
                                  (fs) =>
                                    fs.fee_schedule_id === schedule.id &&
                                    fs.class_id === cls.id &&
                                    fs.academic_session_id === academicSessions.find(session => session.current)?.id
                                );
                                return <TableCell key={cls.id}>{fee ? `₦${fee.amount.toLocaleString()}` : "-"}</TableCell>;
                              })}
                          </TableRow>
                        ))}
                        <TableRow>
                          <TableCell className="font-medium font-bold">Total (Required Fees)</TableCell>
                          {classes
                            .filter((cls) => cls.section_id === section.id)
                            .map((cls) => {
                              const total = feeStructures
                                .filter(
                                  (fs) =>
                                    fs.class_id === cls.id &&
                                    fs.academic_session_id === academicSessions.find(session => session.current)?.id &&
                                    feeSchedules.find(s => s.id === fs.fee_schedule_id)?.is_mandatory
                                )
                                .reduce((sum, fs) => sum + fs.amount, 0);
                              return <TableCell key={cls.id} className="font-bold">₦{total.toLocaleString()}</TableCell>;
                            })}
                        </TableRow>
                      </TableBody>
                    </Table>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm" className="mr-2">
                        Edit Structure
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Print
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
