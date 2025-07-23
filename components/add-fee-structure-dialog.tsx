
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { createFeeStructure } from "@/services/fees";
import { getFeeSchedules } from "@/services/fees";
import { getAcademicSessions } from "@/services/fees";
import { getClasses } from "@/services/class";
import { getSections } from "@/services/section";

const formSchema = z.object({
  fee_schedule_id: z.string().min(1, { message: "Fee schedule is required" }),
  academic_session_id: z.string().min(1, { message: "Academic session is required" }),
  term_id: z.string().min(1, { message: "Term is required" }),
  section_id: z.string().optional(),
  school_class_id: z.string().optional(),
  arm: z.string().optional(),
  amount: z.string().min(1, { message: "Amount is required" }).regex(/^\d+(\.\d{1,2})?$/, { message: "Invalid amount" }),
});

export function AddFeeStructureDialog() {
  const [open, setOpen] = useState(false);
  const [feeSchedules, setFeeSchedules] = useState([]);
  const [academicSessions, setAcademicSessions] = useState([]);
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fee_schedule_id: "",
      academic_session_id: "",
      term_id: "",
      section_id: "",
      school_class_id: "",
      arm: "",
      amount: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const schedules = await getFeeSchedules();
      const sessions = await getAcademicSessions();
      const classesData = await getClasses();
      const sectionsData = await getSections();
      setFeeSchedules(schedules);
      setAcademicSessions(sessions);
      setClasses(classesData);
      setSections(sectionsData);
    };
    fetchData();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createFeeStructure({
        ...values,
        amount: parseFloat(values.amount),
        fee_schedule_id: parseInt(values.fee_schedule_id),
        academic_session_id: parseInt(values.academic_session_id),
        term_id: parseInt(values.term_id),
        section_id: values.section_id ? parseInt(values.section_id) : null,
        school_class_id: values.school_class_id ? parseInt(values.school_class_id) : null,
      });
      toast.success("Fee structure created successfully.");
      form.reset();
      setOpen(false);
    } catch (error) {
      toast.error("Failed to create fee structure.");
      console.error("Failed to create fee structure:", error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Fee Structure</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Fee Structure</DialogTitle>
          <DialogDescription>
            Define a new fee structure for a specific academic session, term, section, or class.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="fee_schedule_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fee Schedule</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a fee schedule" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {feeSchedules.map((schedule: any) => (
                        <SelectItem key={schedule.id} value={String(schedule.id)}>
                          {schedule.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="academic_session_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Academic Session</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an academic session" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {academicSessions.map((session: any) => (
                        <SelectItem key={session.id} value={String(session.id)}>
                          {session.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="term_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Term</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a term" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">First Term</SelectItem>
                      <SelectItem value="2">Second Term</SelectItem>
                      <SelectItem value="3">Third Term</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="section_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Section (Optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a section" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {sections.map((section: any) => (
                        <SelectItem key={section.id} value={String(section.id)}>
                          {section.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="school_class_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class (Optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a class" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {classes.map((cls: any) => (
                        <SelectItem key={cls.id} value={String(cls.id)}>
                          {cls.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="arm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Arm (Optional)</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <Input type="number" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Create Fee Structure</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
