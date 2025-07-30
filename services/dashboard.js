import axios from "axios";
import { customBaseUrl } from "./http";

export const getDashboardOverview = async () => {
  try {
    const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/dashboard/overview`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch dashboard overview:", error);
    return error.response?.data;
  }
};

export const getFinancialDashboard = async () => {
  try {
    const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/dashboard/financial`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch financial dashboard:", error);
    return error.response?.data;
  }
};

export const getStaffDashboard = async () => {
  try {
    const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/dashboard/staff`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch staff dashboard:", error);
    return error.response?.data;
  }
};

export const getAttendanceDashboard = async () => {
  try {
    const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/dashboard/attendance`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch attendance dashboard:", error);
    return error.response?.data;
  }
};
