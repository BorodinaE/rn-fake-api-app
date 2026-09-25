import axios, { AxiosResponse, type AxiosInstance } from "axios";
import { getToken } from "./secureStore";

// Базовый URL фейкового API
const API_BASE_URL = "https://api.fake-rest.refine.dev";

// Экземпляр axios с настройками
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    getToken().then((item) => {
      if (item) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${item}`;
      }
    });

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (responce: AxiosResponse) => responce,
  (error) => {
    console.log("API error:", error?.responce?.data || error?.message);
    return Promise.reject(error);
  },
);

export default apiClient;
