
import axios from "axios";
import { customBaseUrl } from "./http";

export const getClasses = async () => {
  try {
    const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/classes`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("access_token"),
        'ngrok-skip-browser-warning': 'true'
      }
    });
    if (res.status === 200) {
      return res.data.data.data;
    } else {
      console.error("Failed to fetch classes data:", res.statusText);
      return [];
    }
  } catch (error) {
    console.error("Error fetching classes data:", error);
    return [];
  }
};
