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

export function ViewExamDetailsDialog({ exam }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">View Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Exam Details</DialogTitle>
          <DialogDescription>
            Detailed information about the exam.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="col-span-1 font-semibold">Exam Name</p>
            <p className="col-span-3">{exam.name}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="col-span-1 font-semibold">Term</p>
            <p className="col-span-3">{exam.term?.name}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="col-span-1 font-semibold">Start Date</p>
            <p className="col-span-3">{new Date(exam.start_date).toLocaleDateString()}</p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="col-span-1 font-semibold">End Date</p>
            <p className="col-span-3">{new Date(exam.end_date).toLocaleDateString()}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
