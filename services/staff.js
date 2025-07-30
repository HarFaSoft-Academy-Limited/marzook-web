import axios from 'axios';
import { customBaseUrl } from './http';

const getAuthHeader = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const token = localStorage.getItem("access_token");
    if (token) {
      return `Bearer ${token}`;
    }
  }
  return '';
};

export const getStaff = async () => {
  try {
    const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/staff`, {
      headers: {
        Authorization: getAuthHeader(),
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch staff:", error);
    return [];
  }
};

export const createStaff = async (staffData) => {
  try {
    const response = await axios.post(`${customBaseUrl.baseUrl}/api/v1/staff`, staffData, {
      headers: {
        Authorization: getAuthHeader(),
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating staff:", error.response?.data || error.message);
    return null;
  }
};

export const updateStaff = async (staffId, staffData) => {
    try {
      const response = await axios.put(`${customBaseUrl.baseUrl}/api/v1/staff/${staffId}`, staffData, {
        headers: {
          Authorization: getAuthHeader(),
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
      });
      return response.data;
    } catch (error){
      console.error("Error updating staff:", error.response?.data || error.message);
      return null;
    }
  }
export const deleteStaff = async (staffId) => {
  try {
    const response = await axios.delete(`${customBaseUrl.baseUrl}/api/v1/staff/${staffId}`, {
      headers: {
        Authorization: getAuthHeader(),
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting staff:", error.response?.data || error.message);
    return null;
  }
};