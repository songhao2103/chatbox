import { IFormRegister, IFromLogin } from "./../../interface/form";
import { useMutation } from "@tanstack/react-query";
import { loginApi, registerApi } from "../../services/authApi";
import { ILoginResponse, IRegisterResponse } from "../../interface/responses";

//hook register
interface IUseRegister {
  endpoint: string;
  credentials: IFormRegister;
}

export const useRegister = () => {
  return useMutation<IRegisterResponse, Error, IUseRegister>({
    mutationFn: ({ endpoint, credentials }) => {
      return registerApi(endpoint, credentials);
    },

    onSuccess: async (data) => {
      console.log("UseRegister, data:", data);
    },

    onError: (error) => {
      console.error("Error during register:", error);
      if ("errors" in error) {
        console.log("Lỗi từ server:", error.errors);
      } else {
        console.log("Lỗi khác:", error);
      }
    },
  });
};

//hook register
interface IUseLogin {
  endpoint: string;
  credentials: IFromLogin;
}
export const useLogin = () => {
  return useMutation<ILoginResponse, Error, IUseLogin>({
    mutationFn: ({ endpoint, credentials }) => {
      return loginApi(endpoint, credentials);
    },

    onSuccess: async (data) => {
      console.log("useLogin, data:", data);
    },

    onError: (error) => {
      console.error("Error during login:", error);
      if ("errors" in error) {
        console.log("Lỗi từ server:", error.errors);
      } else {
        console.log("Lỗi khác:", error);
      }
    },
  });
};
