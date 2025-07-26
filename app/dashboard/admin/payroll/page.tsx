
"use client";

import React, { useState, useEffect } from 'react';
import { getStaffDeductions } from '@/services/payroll';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import DashboardLayout from "@/components/dashboard-layout"


const PayrollPage = () => {
  const [deductions, setDeductions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const perPage = 15;

  useEffect(() => {
    const fetchDeductions = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getStaffDeductions(currentPage, perPage);
        setDeductions(response.data);
        setTotalPages(response.totalPages);
      } catch (err) {
        setError("Failed to fetch deductions. Please try again.");
        console.error("Error fetching deductions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeductions();
  }, [currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <DashboardLayout userType="admin">
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Staff Payroll Deductions</CardTitle>
          <CardDescription>
            A comprehensive list of all staff payroll deductions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          ) : error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Staff Name</TableHead>
                    <TableHead>Deduction Type</TableHead>
                    <TableHead>Designation</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deductions.length > 0 ? (
                    deductions.map((deduction) => (
                      <TableRow key={deduction.id}>
                        <TableCell>{deduction.staff.email}</TableCell>
                        <TableCell>{deduction.type}</TableCell>
                        <TableCell>{deduction.staff.designation}</TableCell>
                        <TableCell>{deduction.amount}</TableCell>
                        <TableCell>{new Date(deduction.date).toLocaleDateString()}</TableCell>
                        <TableCell>{deduction.status}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">
                        No deductions found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              <div className="flex justify-end space-x-2 mt-4">
                <Button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
    </DashboardLayout>
  );
};

export default PayrollPage;
