"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Settings } from "lucide-react"

export function FeeStructureDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Fee Structure
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Fee Structure</DialogTitle>
          <DialogDescription>View and manage fee structures for different sections</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="primary">Primary</TabsTrigger>
              <TabsTrigger value="secondary">Secondary</TabsTrigger>
              <TabsTrigger value="islamiyya">Islamiyya</TabsTrigger>
              <TabsTrigger value="tahfeez">Tahfeez</TabsTrigger>
            </TabsList>
            <TabsContent value="primary" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Primary Section Fee Structure</CardTitle>
                  <CardDescription>2024/2025 Academic Session</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Fee Item</TableHead>
                        <TableHead>Nursery</TableHead>
                        <TableHead>Primary 1-3</TableHead>
                        <TableHead>Primary 4-6</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Tuition Fee</TableCell>
                        <TableCell>₦60,000</TableCell>
                        <TableCell>₦70,000</TableCell>
                        <TableCell>₦80,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Books & Materials</TableCell>
                        <TableCell>₦15,000</TableCell>
                        <TableCell>₦20,000</TableCell>
                        <TableCell>₦25,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Development Levy</TableCell>
                        <TableCell>₦10,000</TableCell>
                        <TableCell>₦10,000</TableCell>
                        <TableCell>₦10,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Uniform (Optional)</TableCell>
                        <TableCell>₦8,000</TableCell>
                        <TableCell>₦8,000</TableCell>
                        <TableCell>₦8,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Transportation (Optional)</TableCell>
                        <TableCell>₦25,000</TableCell>
                        <TableCell>₦25,000</TableCell>
                        <TableCell>₦25,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium font-bold">Total (Required Fees)</TableCell>
                        <TableCell className="font-bold">₦85,000</TableCell>
                        <TableCell className="font-bold">₦100,000</TableCell>
                        <TableCell className="font-bold">₦115,000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit Structure
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Print
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="secondary" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Secondary Section Fee Structure</CardTitle>
                  <CardDescription>2024/2025 Academic Session</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Fee Item</TableHead>
                        <TableHead>JSS 1-3</TableHead>
                        <TableHead>SS 1-3</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Tuition Fee</TableCell>
                        <TableCell>₦90,000</TableCell>
                        <TableCell>₦100,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Books & Materials</TableCell>
                        <TableCell>₦30,000</TableCell>
                        <TableCell>₦35,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Laboratory Fee</TableCell>
                        <TableCell>₦10,000</TableCell>
                        <TableCell>₦15,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Development Levy</TableCell>
                        <TableCell>₦15,000</TableCell>
                        <TableCell>₦15,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Uniform (Optional)</TableCell>
                        <TableCell>₦10,000</TableCell>
                        <TableCell>₦10,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Transportation (Optional)</TableCell>
                        <TableCell>₦30,000</TableCell>
                        <TableCell>₦30,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium font-bold">Total (Required Fees)</TableCell>
                        <TableCell className="font-bold">₦145,000</TableCell>
                        <TableCell className="font-bold">₦165,000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit Structure
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Print
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="islamiyya" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Islamiyya Section Fee Structure</CardTitle>
                  <CardDescription>2024/2025 Academic Session</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Fee Item</TableHead>
                        <TableHead>Level 1-2</TableHead>
                        <TableHead>Level 3-4</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Tuition Fee</TableCell>
                        <TableCell>₦40,000</TableCell>
                        <TableCell>₦50,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Books & Materials</TableCell>
                        <TableCell>₦15,000</TableCell>
                        <TableCell>₦20,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Development Levy</TableCell>
                        <TableCell>₦5,000</TableCell>
                        <TableCell>₦5,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Uniform (Optional)</TableCell>
                        <TableCell>₦7,000</TableCell>
                        <TableCell>₦7,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium font-bold">Total (Required Fees)</TableCell>
                        <TableCell className="font-bold">₦60,000</TableCell>
                        <TableCell className="font-bold">₦75,000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit Structure
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Print
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tahfeez" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tahfeez Section Fee Structure</CardTitle>
                  <CardDescription>2024/2025 Academic Session</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Fee Item</TableHead>
                        <TableHead>All Levels</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Tuition Fee</TableCell>
                        <TableCell>₦35,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Books & Materials</TableCell>
                        <TableCell>₦10,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Development Levy</TableCell>
                        <TableCell>₦5,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Uniform (Optional)</TableCell>
                        <TableCell>₦7,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium font-bold">Total (Required Fees)</TableCell>
                        <TableCell className="font-bold">₦50,000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit Structure
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Print
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
