
import axios from "axios";
import { customBaseUrl } from "./envConfig";

const getAuthHeader = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const token = localStorage.getItem("token");
    if (token) {
      return `Bearer ${token}`;
    }
  }
  return '';
};

export const getSections = async () => {
  try {
    const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/sections`, {
      headers: {
        Authorization: getAuthHeader(),
        'ngrok-skip-browser-warning': 'true'
      }
    });
    if (res.status === 200) {
      return res.data.data;
    } else {
      console.error("Failed to fetch sections data:", res.statusText);
      return [];
    }
  } catch (error) {
    console.error("Error fetching sections data:", error);
    return [];
  }
};
