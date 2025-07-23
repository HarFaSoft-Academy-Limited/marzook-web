
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
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
import { Checkbox } from "@/components/ui/checkbox"
import { createFeeSchedule } from "@/services/fees"

export function AddFeeScheduleDialog() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [isMandatory, setIsMandatory] = useState(false)

  const handleCreateFeeSchedule = async () => {
    const res = await createFeeSchedule({ name, description, is_mandatory: isMandatory })
    if (res) {
      setOpen(false)
      // Optionally, refresh the fee schedules list in the parent component
      window.location.reload();
    } else {
      alert("Failed to create fee schedule")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Add Fee Schedule
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Fee Schedule</DialogTitle>
          <DialogDescription>
            Define a new fee item (e.g., Tuition, Books, Development Levy).
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Fee Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Tuition Fee, Books & Materials"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of the fee"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="mandatory"
              checked={isMandatory}
              onCheckedChange={(checked) => setIsMandatory(checked === true)}
            />
            <Label htmlFor="mandatory">Mandatory Fee</Label>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreateFeeSchedule}>
            Save Fee Schedule
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
