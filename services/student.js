import axios from "axios";
import { customBaseUrl } from "./http";

const getAuthHeader = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const token = localStorage.getItem("access_token");
    if (token) {
      return 'Bearer ' + token;
    }
  }
  return '';
};

export const getStudents = async (page = 1) => {
  try {
    const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/students?page=${page}`, {
      headers: {
        Authorization: getAuthHeader(),
        'ngrok-skip-browser-warning': 'true'
      }
    });
    if (res.status === 200) {
      return res.data;
    } else {
      console.error("Failed to fetch students data:", res.statusText);
      return { data: [], meta: null };
    }
  } catch (error) {
    console.error("Error fetching students data:", error);
    return { data: [], meta: null };
  }
};

export const createStudent = async (studentData) => {
  try {
    const res = await axios.post(`${customBaseUrl.baseUrl}/api/v1/students`, studentData, {
      headers: {
        Authorization: getAuthHeader(),
        'ngrok-skip-browser-warning': 'true'
      }
    });
    return res.data;
  } catch (error) {
    console.error("Error creating student:", error);
    return null;
  }
};

export const updateStudent = async (studentId, studentData) => {
  try {
    const res = await axios.put(`${customBaseUrl.baseUrl}/api/v1/students/${studentId}`, studentData, {
      headers: {
        Authorization: getAuthHeader(),
        'ngrok-skip-browser-warning': 'true'
      }
    });
    return res.status === 200;
  } catch (error) {
    console.error("Error updating student:", error);
    return false;
  }
};

export const deleteStudent = async (studentId) => {
  try {
    const res = await axios.delete(`${customBaseUrl.baseUrl}/api/v1/students/${studentId}`, {
      headers: {
        Authorization: getAuthHeader(),
        'ngrok-skip-browser-warning': 'true'
      }
    });
    return res.status === 200;
  } catch (error) {
    console.error("Error deleting student:", error);
    return false;
  }
};

export const getStudentsByClass = async (classId, page = 1) => {
  try {
    const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/classes/${classId}?page=${page}`, {
      headers: {
        Authorization: getAuthHeader(),
        'ngrok-skip-browser-warning': 'true'
      }
    });
    if (res.status === 200) {
      return res.data;
    } else {
      console.error("Failed to fetch students data:", res.statusText);
      return { data: [], meta: null };
    }
  } catch (error) {
    console.error("Error fetching students data:", error);
    return { data: [], meta: null };
  }
};

export const searchStudents = async (searchTerm, page = 1) => {
  try {
    const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/students?search=${searchTerm}&page=${page}`, {
      headers: {
        Authorization: getAuthHeader(),
        'ngrok-skip-browser-warning': 'true'
      }
    });
    if (res.status === 200) {
      return res.data;
    } else {
      console.error("Failed to fetch students data:", res.statusText);
      return { data: [], meta: null };
    }
  } catch (error) {
    console.error("Error fetching students data:", error);
    return { data: [], meta: null };
  }
};

export const getStudentById = async (studentId) => {
  try {
    const res = await axios.get(`${customBaseUrl.baseUrl}/api/v1/students/${studentId}`, {
      headers: {
        Authorization: getAuthHeader(),
        'ngrok-skip-browser-warning': 'true'
      }
    });
    if (res.status === 200) {
      return res.data.data;
    } else {
      console.error("Failed to fetch student data:", res.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error fetching student data:", error);
    return null;
  }
};