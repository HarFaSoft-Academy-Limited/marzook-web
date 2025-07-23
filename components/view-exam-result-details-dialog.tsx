'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ViewExamResultDetailsDialog({ result }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">View Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Exam Result Details</DialogTitle>
          <DialogDescription>
            Detailed information about the exam result.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="col-span-1 font-semibold">Student</p>
            <p className="col-span-3">{result.student?.first_name} {result.student?.last_name}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="col-span-1 font-semibold">Exam</p>
            <p className="col-span-3">{result.exam?.name}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="col-span-1 font-semibold">Subject</p>
            <p className="col-span-3">{result.subject?.name}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="col-span-1 font-semibold">Test 1 Score</p>
            <p className="col-span-3">{result.test1_score}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="col-span-1 font-semibold">Test 2 Score</p>
            <p className="col-span-3">{result.test2_score}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="col-span-1 font-semibold">Exam Score</p>
            <p className="col-span-3">{result.exam_score}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="col-span-1 font-semibold">Total Score</p>
            <p className="col-span-3">{result.total_score}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="col-span-1 font-semibold">Grade</p>
            <p className="col-span-3">{result.grade}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
