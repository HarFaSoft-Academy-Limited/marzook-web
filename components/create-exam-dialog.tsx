'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { createExam } from "@/services/exam";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getAcademicSessions } from "@/services/fees";
import { getSections } from "@/services/section";

const formSchema = z.object({
  name: z.string().min(1, { message: "Exam name is required" }),
  term_id: z.string().min(1, { message: "Term is required" }),
  academic_session_id: z.string().min(1, { message: "Academic session is required" }),
  section_id: z.string().min(1, { message: "Section is required" }),
  start_date: z.string().min(1, { message: "Start date is required" }),
  end_date: z.string().min(1, { message: "End date is required" }),
  weight: z.string().min(1, { message: "Weight is required" }),
});

export function CreateExamDialog({setReload, reload}: any) {
  const [open, setOpen] = useState(false);
  const [academicSessions, setAcademicSessions] = useState([]);
  const [sections, setSections] = useState([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      term_id: "",
      academic_session_id: "",
      section_id: "",
      start_date: "",
      end_date: "",
      weight: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const academicSessionsData = await getAcademicSessions();
      const sectionsData = await getSections();
      setAcademicSessions(academicSessionsData);
      setSections(sectionsData);
    };
    fetchData();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createExam({
        ...values,
        term_id: parseInt(values.term_id),
        academic_session_id: parseInt(values.academic_session_id),
        section_id: parseInt(values.section_id),
        weight: parseInt(values.weight),
      });
      toast.success("Exam created successfully.");
      setReload(!reload);
      form.reset();
      setOpen(false);
    } catch (error) {
      toast.error("Failed to create exam.");
      console.error("Failed to create exam:", error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Exam</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Create New Exam</DialogTitle>
          <DialogDescription>Fill in the details to create a new exam.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Exam Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter exam name" {...field} />
                  </FormControl>
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
                        <SelectValue placeholder="Select term" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1st Term</SelectItem>
                      <SelectItem value="2">2nd Term</SelectItem>
                      <SelectItem value="3">3rd Term</SelectItem>
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
                        <SelectValue placeholder="Select academic session" />
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
              name="section_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Section</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select section" />
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
              name="start_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="end_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight (%)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter weight" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Create Exam</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
