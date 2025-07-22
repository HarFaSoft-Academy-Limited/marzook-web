
import axios from 'axios';
import { customBaseUrl } from './http';

export const getPayments = async (params) => {
    try {
        const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/payments`, {
            params,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch payments:", error);
        return error.response?.data;
    }
};

export const createPayment = async (paymentData) => {
    try {
        const response = await axios.post(`${customBaseUrl.baseUrl}/api/v1/payments`, paymentData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to create payment:", error);
        return error.response?.data;
    }
};

export const getPaymentById = async (id) => {
    try {
        const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/payments/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch payment with id ${id}:`, error);
        return error.response?.data;
    }
};

export const updatePayment = async (id, paymentData) => {
    try {
        const response = await axios.put(`${customBaseUrl.baseUrl}/api/v1/payments/${id}`, paymentData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Failed to update payment with id ${id}:`, error);
        return error.response?.data;
    }
};

export const deletePayment = async (id) => {
    try {
        const response = await axios.delete(`${customBaseUrl.baseUrl}/api/v1/payments/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Failed to delete payment with id ${id}:`, error);
        return error.response?.data;
    }
};
