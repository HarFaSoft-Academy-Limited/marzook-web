import axios from "axios";
import { customBaseUrl } from "./http";

const getAuthHeader = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const token = localStorage.getItem("access_token");
    if (token) {
      return `Bearer ${token}`;
    }
  }
  return '';
};

export const getSettings = async () => {
  try {
    const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/school-settings`, {
      headers: {
        Authorization: getAuthHeader(),
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch settings:", error);
    return null;
  }
};

export const updateSettings = async (settingsData) => {
  try {
    const response = await axios.put(`${customBaseUrl.baseUrl}/api/v1/school-settings`, { ...settingsData.settings}, {
      headers: {
        Authorization: getAuthHeader(),
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating settings:", error.response?.data || error.message);
    return null;
  }
};
