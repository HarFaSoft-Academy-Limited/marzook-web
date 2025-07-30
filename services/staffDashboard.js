import axios from "axios";
import { customBaseUrl } from "./envConfig";

export const getStaffDashboard = async () => {
  try {
    const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/dashboard/staff`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch staff dashboard:", error);
    return error.response?.data;
  }
};
