import axios from 'axios';
import { customBaseUrl } from './http';

export const getExams = async () => {
  try {
    const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/exams`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data.data.data;
  } catch (error) {
    console.error('Failed to fetch exams:', error);
    return [];
  }
};

export const getExamResults = async () => {
  try {
    const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/exam-results`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data.data.data;
  } catch (error) {
    console.error('Failed to fetch exam results:', error);
    return [];
  }
};
