import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001",
});

export const getStatus = async () => {
    const response = await api.get("/");
    return response.data;
};

export default api;