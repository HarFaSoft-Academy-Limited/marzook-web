import axios from 'axios';
import { customBaseUrl } from './http';

export const getCalendarEvents = async (sessionId) => {
    try {
        const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/calendars`, {
            params: { session_id: sessionId },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch calendar events:", error);
        return error.response?.data;
    }
};

export const addCalendarEvent = async (eventData) => {
    try {
        const response = await axios.post(`${customBaseUrl.baseUrl}/api/v1/calendars`, eventData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to add calendar event:", error);
        return error.response?.data;
    }
};

export const getSessions = async () => {
    try {
        const response = await axios.get(`${customBaseUrl.baseUrl}/api/v1/sessions`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch sessions:", error);
        return error.response?.data;
    }
};
