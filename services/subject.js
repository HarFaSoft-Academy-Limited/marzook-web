import axios from 'axios';
import { customBaseUrl } from './http';

export const getSubjects = async () => {
  try {
    const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/subjects`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data.data.data;
  } catch (error) {
    console.error('Failed to fetch subjects:', error);
    return [];
  }
};
