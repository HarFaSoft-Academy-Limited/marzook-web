import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StaffClasses({ staff }: { staff: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Classes Taught by {staff.user.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {staff.sections.length > 0 ? (
          <ul>
            {staff.sections.map((section: any) => (
              <li key={section.id}>
                <p className="font-semibold">Section: {section.name}</p>
                {/* You might want to fetch and display classes within each section here */}
              </li>
            ))}
          </ul>
        ) : (
          <p>No classes assigned to this staff member.</p>
        )}
      </CardContent>
    </Card>
  );
}
