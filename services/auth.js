
import axios from "axios";
import { customBaseUrl } from "./http";

export const logout = async () => {
    try {
        // const response = await axios.post(`${customBaseUrl.baseUrl}/api/v1/logout`, {}, {
        //     headers: {
        //         Authorization: `${localStorage.getItem("token")}`,
        //         'Content-Type': 'application/json',
        //     }
        // });
        
        // if (response.data.status) {
            localStorage.removeItem("token");
            window.location.href = "/";
        // }
        // return response.data;
    } catch (error) {
        console.error("Logout failed:", error);
        return error.response?.data;
    }
};
