
import axios from 'axios';
import { customBaseUrl } from './http';

const getAuthHeader = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const token = localStorage.getItem("access_token");
    if (token) {
      return 'Bearer ' + token;
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
      },
    });
    return response.data.data; // Assuming the staff list is directly in response.data.data
  } catch (error) {
    console.error("Failed to fetch staff:", error);
    throw error;
  }
};
