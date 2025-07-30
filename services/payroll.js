
import axios from 'axios';
import { customBaseUrl } from './http';

export const getStaffDeductions = async (page = 1, per_page = 15) => {
  try {
    const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/staff-deductions?page=${page}&per_page=${per_page}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        'Content-Type': 'application/json',
      },
    });
    return {
      data: response.data.data,
      totalPages: response.data.last_page || 1,
    };
  } catch (error) {
    console.error("Failed to fetch staff deductions:", error);
    throw error;
  }
};

export const createStaffDeduction = async (deductionData) => {
  try {
    const response = await axios.post(`${customBaseUrl.baseUrl}/api/v1/staff-deductions`, deductionData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to create staff deduction:", error);
    throw error;
  }
};

export const generatePayroll = async (payrollData) => {
  try {
    const response = await axios.post(`${customBaseUrl.baseUrl}/api/v1/payroll/voucher`, payrollData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to generate payroll:", error);
    throw error;
  }
};
