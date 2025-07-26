
"use client";

import React, { useEffect, useState } from "react";
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
import { createStaffDeduction } from "@/services/payroll";
import { getStaff } from "@/services/staff";
import { ComboBox } from "@/components/ui/combobox";

const formSchema = z.object({
  staff_id: z.string().min(1, { message: "Staff ID is required." }),
  for_month: z.string().min(1, { message: "Month is required." }),
  type: z.string().min(1, { message: "Deduction type is required." }),
  amount: z.preprocess(
    (val) => Number(val),
    z.number().min(0, { message: "Amount must be a positive number." })
  ),
});

interface AddDeductionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function AddDeductionDialog({ isOpen, onClose, onSuccess }: AddDeductionDialogProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      staff_id: "",
      for_month: "",
      type: "",
      amount: 0,
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
      await createStaffDeduction(values);
      toast({
        title: "Deduction Added",
        description: "Staff deduction has been successfully added.",
      });
      onSuccess();
      onClose();
    } catch (error) {
      toast({
        title: "Failed to Add Deduction",
        description: "There was an error adding the staff deduction. Please try again.",
        variant: "destructive",
      });
      console.error("Error adding deduction:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Staff Deduction</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new staff deduction.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="staff_id"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Staff</FormLabel>
                  <FormControl>
                    <ComboBox
                      options={staffList.map((staff) => ({
                        value: staff.id.toString(),
                        label: staff.user.name+ '  '+staff.phone ,
                      }))}
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder="Select a staff member"
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
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deduction Type</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
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
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Adding..." : "Add Deduction"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
