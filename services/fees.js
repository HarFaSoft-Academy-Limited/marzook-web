import axios from 'axios';
import { customBaseUrl } from './http';

export const getFees = async (params) => {
    try {
        const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/fees`, {
            params,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch fees:", error);
        return error.response?.data;
    }
};

export const createFee = async (feeData) => {
    try {
        const response = await axios.post(`${customBaseUrl.baseUrl}/api/v1/fees`, feeData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to create fee:", error);
        return error.response?.data;
    }
};

export const getFeeById = async (id) => {
    try {
        const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/fees/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch fee with id ${id}:`, error);
        return error.response?.data;
    }
};

export const updateFee = async (id, feeData) => {
    try {
        const response = await axios.put(`${customBaseUrl.baseUrl}/api/v1/fees/${id}`, feeData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Failed to update fee with id ${id}:`, error);
        return error.response?.data;
    }
};

export const deleteFee = async (id) => {
    try {
        const response = await axios.delete(`${customBaseUrl.baseUrl}/api/v1/fees/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Failed to delete fee with id ${id}:`, error);
        return error.response?.data;
    }
};

export const getFeeTypes = async () => {
    try {
        const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/fees/types`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch fee types:", error);
        return error.response?.data;
    }
};

export const assignFeeToClass = async (data) => {
    try {
        const response = await axios.post(`${customBaseUrl.baseUrl}/api/v1/fees/assign-to-class`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to assign fee to class:", error);
        return error.response?.data;
    }
};

export const getFeeSchedules = async () => {
    try {
        const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/fee-schedules`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data.data;
    } catch (error) {
        console.error("Failed to fetch fee schedules:", error);
        return error.response?.data;
    }
};

export const createFeeSchedule = async (feeScheduleData) => {
    try {
        const response = await axios.post(`${customBaseUrl.baseUrl}/api/v1/fee-schedules`, feeScheduleData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to create fee schedule:", error);
        return error.response?.data;
    }
};

export const getFeeStructures = async () => {
    try {
        const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/fee-structures`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data.data;
    } catch (error) {
        console.error("Failed to fetch fee structures:", error);
        return error.response?.data;
    }
};

export const getAcademicSessions = async () => {
    try {
        const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/sessions`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data.data;
    } catch (error) {
        console.error("Failed to fetch academic sessions:", error);
        return error.response?.data;
    }
};

export const createFeeStructure = async (feeStructureData) => {
    try {
        const response = await axios.post(`${customBaseUrl.baseUrl}/api/v1/fee-structures`, feeStructureData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to create fee structure:", error);
        return error.response?.data;
    }
};