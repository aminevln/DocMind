import axios from "axios";

const API_URL = "http://localhost:3001/api/upload";

export const uploadPdf = async (file) => {
    const formData = new FormData();

    formData.append("pdf", file);

    const response = await axios.post(API_URL, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
};