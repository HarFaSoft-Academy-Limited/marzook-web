import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StaffDetails({ staff }: { staff: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Staff Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Name:</p>
            <p>{staff.user.name}</p>
          </div>
          <div>
            <p className="font-semibold">Email:</p>
            <p>{staff.user.email}</p>
          </div>
          <div>
            <p className="font-semibold">Designation:</p>
            <p>{staff.designation}</p>
          </div>
          <div>
            <p className="font-semibold">Sections:</p>
            <p>{staff.sections.map((s: any) => s.name).join(", ")}</p>
          </div>
          <div>
            <p className="font-semibold">Subjects:</p>
            <p>{staff.subjects.map((s: any) => s.name).join(", ")}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
