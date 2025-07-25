import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { GeneratePayrollModal } from "./generate-payroll-modal";

export function StaffPayrollDeduction({ staff }: { staff: any }) {
  const [showGeneratePayrollModal, setShowGeneratePayrollModal] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payroll and Deduction for {staff.user.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Payroll and deduction details will be displayed here.</p>
        <Button onClick={() => setShowGeneratePayrollModal(true)} className="mt-4">
          Generate Payroll Voucher
        </Button>
      </CardContent>
      <GeneratePayrollModal
        staff={staff}
        showModal={showGeneratePayrollModal}
        hideModal={setShowGeneratePayrollModal}
      />
    </Card>
  );
}
