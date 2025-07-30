"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { toast } from "@/components/ui/use-toast";
import { getStaff } from "@/services/staff";
import { ComboBox } from "@/components/ui/combobox";
import { generatePayroll } from "@/services/payroll";

const formSchema = z.object({
  staff_id: z.string().optional(), // Optional for generating for all staff
  for_month: z.string().min(1, { message: "Month is required." }),
  basic_salary: z.preprocess(
    (val) => Number(val),
    z.number().min(0, { message: "Basic Salary must be a positive number." })
  ),
  allowances: z.preprocess(
    (val) => Number(val),
    z.number().min(0, { message: "Allowances must be a positive number." })
  ),
});

interface GeneratePayrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function GeneratePayrollModal({ isOpen, onClose, onSuccess }: GeneratePayrollModalProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      staff_id: "",
      for_month: "",
      basic_salary: 0,
      allowances: 0,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [staffList, setStaffList] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const staff = await getStaff();
        setStaffList(staff);
      } catch (error) {
        console.error("Failed to fetch staff:", error);
        toast({
          title: "Error",
          description: "Failed to load staff list.",
          variant: "destructive",
        });
      }
    };
    fetchStaff();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await generatePayroll(values);
      toast({
        title: "Payroll Generated",
        description: "Payroll has been successfully generated.",
      });
      onSuccess();
      onClose();
    } catch (error) {
      toast({
        title: "Failed to Generate Payroll",
        description: "There was an error generating payroll. Please try again.",
        variant: "destructive",
      });
      console.error("Error generating payroll:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Generate Payroll</DialogTitle>
          <DialogDescription>
            Select staff and period to generate payroll.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="staff_id"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Staff (Optional)</FormLabel>
                  <FormControl>
                    <ComboBox
                      options={staffList.map((staff) => ({
                        value: staff.id.toString(),
                        label: staff.user.name + '  ' + staff.phone,
                      }))}
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder="Select a staff member (optional)"
                      searchPlaceholder="Search staff..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="for_month"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>For Month (YYYY-MM-DD)</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="basic_salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Basic Salary</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="allowances"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Allowances</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Generating..." : "Generate Payroll"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}