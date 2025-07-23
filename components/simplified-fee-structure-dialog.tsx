"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Settings, Download } from "lucide-react";
import { getFeeSchedules, getFeeStructures, getAcademicSessions } from "@/services/fees";
import { getClasses } from "@/services/class";
import { getSections } from "@/services/section";
import jsPDF from "jspdf";
import "jspdf-autotable";

export function SimplifiedFeeStructureDialog() {
  const [open, setOpen] = useState(false);
  const [feeSchedules, setFeeSchedules] = useState([]);
  const [feeStructures, setFeeStructures] = useState([]);
  const [academicSessions, setAcademicSessions] = useState([]);
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);

  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

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
  const filteredFeeStructures = feeStructures.length > 0 && feeStructures.filter((fs: any, e) => {
    const matchesSection = selectedSection ? fs.section_id === parseInt(selectedSection) : true;
    const matchesSession = selectedSession ? fs.academic_session_id === parseInt(selectedSession) : true;
    const matchesClass = selectedClass ? fs.school_class_id === parseInt(selectedClass) : true;
    const matchesTerm = selectedTerm ? fs.term_id === parseInt(selectedTerm) : true;
    return matchesSection && matchesSession && matchesClass && matchesTerm;
  });

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Simplified Fee Structure", 14, 16);

    const tableColumn = ["Fee Item", "Amount", "Section", "Class", "Academic Session", "Term"];
    const tableRows: any = [];

    filteredFeeStructures.forEach((fs: any) => {
      const feeData = [
        fs.schedule?.name,
        `₦${parseFloat(fs.amount).toLocaleString()}`,
        fs.section?.name || "N/A",
        fs.school_class?.name || "N/A",
        fs.academic_session?.name,
        fs.term_id === 1 ? "First Term" : fs.term_id === 2 ? "Second Term" : "Third Term",
      ];
      tableRows.push(feeData);
    });

    const totalAmount = filteredFeeStructures.reduce((sum: number, fs: any) => sum + parseFloat(fs.amount), 0);
    tableRows.push([
      "Total:",
      `₦${totalAmount.toLocaleString()}`,
      "",
      "",
      "",
      "",
    ]);

    (doc as any).autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("simplified-fee-structure.pdf");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Simplified Fee Structure
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Simplified Fee Structure</DialogTitle>
          <DialogDescription>View fee structures with filters</DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div className="flex gap-4">
            <Select onValueChange={setSelectedSection} value={selectedSection || ""}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sections</SelectItem>
                {sections.map((section: any) => (
                  <SelectItem key={section.id} value={String(section.id)}>
                    {section.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select onValueChange={setSelectedSession} value={selectedSession || ""}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Session" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sessions</SelectItem>
                {academicSessions.map((session: any) => (
                  <SelectItem key={session.id} value={String(session.id)}>
                    {session.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select onValueChange={setSelectedClass} value={selectedClass || ""}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                {classes.map((cls: any) => (
                  <SelectItem key={cls.id} value={String(cls.id)}>
                    {cls.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select onValueChange={setSelectedTerm} value={selectedTerm || ""}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Term" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Terms</SelectItem>
                <SelectItem value="1">First Term</SelectItem>
                <SelectItem value="2">Second Term</SelectItem>
                <SelectItem value="3">Third Term</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleDownloadPdf} className="ml-auto">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fee Item</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Section</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Academic Session</TableHead>
                <TableHead>Term</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFeeStructures.length > 0 ? (
                <>
                  {filteredFeeStructures.map((fs: any) => (
                    <TableRow key={fs.id}>
                      <TableCell className="font-medium">{fs.schedule?.name}</TableCell>
                      <TableCell>₦{parseFloat(fs.amount).toLocaleString()}</TableCell>
                      <TableCell>{fs.section?.name || "N/A"}</TableCell>
                      <TableCell>{fs.school_class?.name || "N/A"}</TableCell>
                      <TableCell>{fs.academic_session?.name}</TableCell>
                      <TableCell>{fs.term_id === 1 ? "First Term" : fs.term_id === 2 ? "Second Term" : "Third Term"}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={1} className="font-bold text-right">Total:</TableCell>
                    <TableCell className="font-bold">₦{filteredFeeStructures.reduce((sum: number, fs: any) => sum + parseFloat(fs.amount), 0).toLocaleString()}</TableCell>
                    <TableCell colSpan={4}></TableCell>
                  </TableRow>
                </>
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">No fee structures found for the selected filters.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
