import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
});

const mainRequest = {
    get: axiosInstance.get,
    post: axiosInstance.post,
    delete: axiosInstance.delete,
    put: axiosInstance.put,
    patch: axiosInstance.patch,
};

export default mainRequest;
