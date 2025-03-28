export interface IRegisterResponse {
  success: boolean;

  errors?: {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
}

export interface ILoginResponse {
  success: boolean;
  error?: {
    email: string;
    password: string;
  };
  currentUser?: {
    email: string;
    password: string;
    userName: string;
    avatar?: string;
    role: "customer" | "admin";
    address?: string;
    isActive: boolean;
    phoneNumber: string;
    age: string;
    birtDate: string;
  };
  accessToken?: string;
  refreshToken?: string;
}
