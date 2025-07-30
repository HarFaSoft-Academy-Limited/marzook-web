"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ChevronsUpDown, Plus } from "lucide-react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { createPayment } from "@/services/payments";
import { getStudents } from "@/services/student";
import { getFeeStructures, getAcademicSessions } from "@/services/fees";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Swal from "sweetalert2"
// import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import { useForm } from "react-hook-form"

const formSchema = z.object({
  student_id: z.string().min(1, { message: "Student is required" }),
  fee_structure_id: z.string().min(1, { message: "Fee type is required" }),
  amount_paid: z.string().min(1, { message: "Amount is required" }).regex(/^\d+(\.\d{1,2})?$/, { message: "Invalid amount" }),
  payment_date: z.string().min(1, { message: "Payment date is required" }),
  method: z.string().min(1, { message: "Payment method is required" }),
  reference: z.string().optional(),
  notes: z.string().optional(),
});

export function AddPaymentDialog({setReload, reload}:any) {
  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState<any>([]);
  const [feeStructures, setFeeStructures] = useState([]);
  const [academicSessions, setAcademicSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      student_id: "",
      fee_structure_id: "",
      amount_paid: "",
      payment_date: new Date().toISOString().split("T")[0],
      method: "",
      reference: "",
      notes: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const studentsData = await getStudents();
      const feeStructuresData = await getFeeStructures();
      const academicSessionsData = await getAcademicSessions();
      setStudents(studentsData.data);
      setFeeStructures(feeStructuresData);
      setAcademicSessions(academicSessionsData);
    };
    fetchData();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createPayment({
        ...values,
        student_id: parseInt(values.student_id),
        fee_structure_id: parseInt(values.fee_structure_id),
        amount_paid: parseFloat(values.amount_paid),
      });
      toast.success("Payment recorded successfully.");
      Swal.fire('Success!', 'Payment recorded successfully.', 'success')
        setReload(!reload);
      form.reset();
      setOpen(false);
    } catch (error) {
      toast.error("Failed to record payment.");
      console.error("Failed to record payment:", error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Payment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Add New Payment</DialogTitle>
          <DialogDescription>Record a new payment for a student.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <FormField
                control={form.control}
                name="student_id"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Student</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className="w-full justify-between"
                          >
                            {field.value
                              ? students.find(
                                  (student: any) => String(student.id) === field.value
                                )?.first_name + ' ' + students.find(
                                    (student: any) => String(student.id) === field.value
                                  )?.last_name
                              : "Select student"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search student..." />
                          <CommandEmpty>No student found.</CommandEmpty>
                          <CommandGroup>
                            {students.length >0 && students?.map((student:any) => (
                              <CommandItem
                                value={student.first_name + ' ' + student.last_name}
                                key={student.id}
                                onSelect={() => {
                                  form.setValue("student_id", String(student.id))
                                }}
                              >
                                {student.first_name} {student.last_name} - {student.admission_no}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <FormItem>
              <FormLabel>Session</FormLabel>
              <Select onValueChange={setSelectedSession}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select session" />
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
            </FormItem>
            <FormField
              control={form.control}
              name="fee_structure_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fee Type</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      const selectedFeeStructure: any = feeStructures.find(
                        (fs: any) => String(fs.id) === value
                      );
                      if (selectedFeeStructure) {
                        form.setValue("amount_paid", String(selectedFeeStructure.amount));
                      }
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select fee type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {feeStructures
                        .filter((fs: any) => !selectedSession || String(fs.academic_session_id) === selectedSession)
                        .map((fs: any) => (
                        <SelectItem key={fs.id} value={String(fs.id)}>
                          {fs.schedule?.name} - {fs.academic_session?.name} - {fs.section?.name || "N/A"} - {fs.school_class?.name || "N/A"}
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
              name="amount_paid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount (₦)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter amount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="method"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                      <SelectItem value="online">Online Payment</SelectItem>
                      <SelectItem value="pos">POS</SelectItem>
                      <SelectItem value="cheque">Cheque</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reference</FormLabel>
                  <FormControl>
                    <Input placeholder="Payment reference" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="payment_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Additional notes" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              Save Payment
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
