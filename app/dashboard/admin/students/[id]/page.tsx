import StudentProfile from "./student-profile";

export async function generateStaticParams() {
  return [];
}

export default function StudentProfilePage() {
  return <StudentProfile />;
}