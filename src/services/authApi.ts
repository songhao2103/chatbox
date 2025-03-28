import { AxiosError } from "axios";
import { IRegisterResponse, ILoginResponse } from "../interface/responses";
import { authRequest } from "../utils/axiosInstance";

//credentials là data được gửi lên server
export const registerApi = async (
  endpoint: string,
  credentials: object
): Promise<IRegisterResponse> => {
  try {
    const response = await authRequest.post<IRegisterResponse>(
      endpoint,
      credentials
    );

    // Tại runtime, response chính là IRegisterResponse
    console.log("response", response);

    // Vì response đã là IRegisterResponse, không cần .data
    return response.data;
  } catch (error) {
    console.error("API error:", error);

    const axiosError = error as AxiosError<IRegisterResponse>;

    // Nếu có response từ server, throw error để React Query nhận diện lỗi
    if (axiosError.response?.data) {
      throw axiosError.response.data;
    }

    // Nếu lỗi không có response từ server (ví dụ: mất mạng), throw lỗi gốc
    throw axiosError;
  }
};

//api login
export const loginApi = async (
  endpoint: string,
  credentials: object
): Promise<ILoginResponse> => {
  try {
    const response = await authRequest.post<ILoginResponse>(
      endpoint,
      credentials
    );

    // Tại runtime, response chính là ILoginResponse
    console.log("response", response);

    // Vì response đã là ILoginResponse, không cần .data
    return response.data;
  } catch (error) {
    console.error("API error:", error);

    const axiosError = error as AxiosError<ILoginResponse>;

    // Nếu có response từ server, throw error để React Query nhận diện lỗi
    if (axiosError.response?.data) {
      throw axiosError.response.data;
    }

    // Nếu lỗi không có response từ server (ví dụ: mất mạng), throw lỗi gốc
    throw axiosError;
  }
};
