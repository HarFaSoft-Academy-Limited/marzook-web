
import axios from "axios";
import { customBaseUrl } from "./http";

export const getParents = async () => {
  try {
    const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/parents`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("access_token"),
        'ngrok-skip-browser-warning': 'true'
      }
    });
    if (res.status === 200) {
      return res.data.data.data;
    } else {
      console.error("Failed to fetch parents data:", res.statusText);
      return [];
    }
  } catch (error) {
    console.error("Error fetching parents data:", error);
    return [];
  }
};

export const createParent = async (parentData) => {
  try {
    const res = await axios.post(`${customBaseUrl.baseUrl}/api/v1/parents`, parentData, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("access_token"),
        'ngrok-skip-browser-warning': 'true'
      }
    });
    return res.data;
  } catch (error) {
    console.error("Error creating parent:", error);
    return null;
  }
};

export const updateParent = async (parentId, parentData) => {
  try {
    const res = await axios.put(`${customBaseUrl.baseUrl}/api/v1/parents/${parentId}`, parentData, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("access_token"),
        'ngrok-skip-browser-warning': 'true'
      }
    });
    return res.status === 200;
  } catch (error) {
    console.error("Error updating parent:", error);
    return false;
  }
};

export const deleteParent = async (parentId) => {
  try {
    const res = await axios.delete(`${customBaseUrl.baseUrl}/api/v1/parents/${parentId}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("access_token"),
        'ngrok-skip-browser-warning': 'true'
      }
    });
    return res.status === 200;
  } catch (error) {
    console.error("Error deleting parent:", error);
    return false;
  }
};
