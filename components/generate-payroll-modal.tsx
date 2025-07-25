"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { customBaseUrl } from "@/services/http";

type GeneratePayrollModalProps = {
  staff: any;
  showModal: boolean;
  hideModal: (open: boolean) => void;
};

export function GeneratePayrollModal({ staff, showModal, hideModal }: GeneratePayrollModalProps) {
  const [formData, setFormData] = useState({
    for_month: "",
    basic_salary: "",
    allowances: "",
  });
  const [payrollResponse, setPayrollResponse] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = async () => {
    try {
      const payload = {
        staff_id: staff.id,
        for_month: formData.for_month,
        basic_salary: parseFloat(formData.basic_salary),
        allowances: parseFloat(formData.allowances),
      };

      const response = await axios.post(`${customBaseUrl.baseUrl}/api/v1/payroll/voucher`, payload, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      });

      setPayrollResponse(response.data);

      alert("Payroll voucher generated successfully!");
    } catch (error) {
      console.error("Error generating payroll voucher:", error);
      alert("Failed to generate payroll voucher. Please try again.");
    }
  };

  const handleDownloadVoucher = async () => {
    try {
      const response = await axios.post(`${customBaseUrl.baseUrl}/api/v1/payroll/voucher`, { staff_id: staff.id, for_month: formData.for_month }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "ngrok-skip-browser-warning": "true",
        },
        responseType: 'blob',
      });

      const fileURL = window.URL.createObjectURL(new Blob([response.data]));
      const fileLink = document.createElement('a');
      fileLink.href = fileURL;
      fileLink.setAttribute('download', `payroll_voucher_${staff.user.name}_${formData.for_month}.pdf`);
      document.body.appendChild(fileLink);
      fileLink.click();
      fileLink.remove();
    } catch (error) {
      console.error("Error downloading payroll voucher:", error);
      alert("Failed to download payroll voucher. Please try again.");
    }
  };

  return (
    <Dialog open={showModal} onOpenChange={hideModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Generate Payroll Voucher</DialogTitle>
          <DialogDescription>
            Enter the details to generate the payroll voucher for {staff.user.name}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="for_month" className="text-right">
              For Month
            </Label>
            <Input
              id="for_month"
              name="for_month"
              type="date"
              value={formData.for_month}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="basic_salary" className="text-right">
              Basic Salary
            </Label>
            <Input
              id="basic_salary"
              name="basic_salary"
              type="number"
              value={formData.basic_salary}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="allowances" className="text-right">
              Allowances
            </Label>
            <Input
              id="allowances"
              name="allowances"
              type="number"
              value={formData.allowances}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleGenerate}>Generate</Button>
        </DialogFooter>

        {payrollResponse && (
          <div className="mt-4 p-4 border rounded-md">
            <h3 className="text-lg font-semibold">Payroll Details</h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <p><span className="font-semibold">Staff ID:</span> {payrollResponse.staff_id}</p>
              <p><span className="font-semibold">For Month:</span> {payrollResponse.for_month}</p>
              <p><span className="font-semibold">Basic Salary:</span> {payrollResponse.basic_salary}</p>
              <p><span className="font-semibold">Allowances:</span> {payrollResponse.allowances}</p>
              <p><span className="font-semibold">Deductions:</span> {payrollResponse.deductions}</p>
              <p><span className="font-semibold">Net Pay:</span> {payrollResponse.net_pay}</p>
            </div>
            <Button onClick={handleDownloadVoucher} className="mt-4">
              Download Voucher
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
