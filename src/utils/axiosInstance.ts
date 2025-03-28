import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getDataAtStorage } from "./localStorage";

export const publicRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 60 * 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

//kiểm tra response
publicRequest.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    return Promise.reject(error); //Chuyển lỗi đó xuống phần .catch() của axios request.
  }
);

//=======================================================
//privateRequest
export const privateRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 60 * 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

//thêm accessToken vào header
privateRequest.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    try {
      const accessToken = getDataAtStorage("accessToken");
      if (!accessToken) {
        window.location.href = "/login";

        //ngắt gọi api
        return Promise.reject(new Error("No access token"));
      } else {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }

      // config.params = { apiId: "api", ...config.params };
      return config;
    } catch (error) {
      console.log("Request error: ", error);
      // Luôn trả về Promise.reject(error) trong trường hợp catch để đảm bảo không trả về undefined.
      return Promise.reject(error);
    }
  }
);

//Kiểm tra phiên đăng nhập
privateRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    // Nếu lỗi 403 và request chưa được retry
    if (
      error.response &&
      error.response.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; //lưu lại config của request đó
      try {
        //cập nhật lại accessToken

        // Cập nhật header Authorization của request gốc

        // originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        // Retry lại request với token mới
        return privateRequest(originalRequest);
      } catch (refreshError) {
        // Nếu refresh token thất bại, chuyển hướng về trang login
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export const authRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 60 * 1000,
  headers: {
    "Content-Type": "application/json",
  },
});
