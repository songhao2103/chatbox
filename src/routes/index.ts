import { ComponentType, ReactNode } from "react";
import Login from "../pages/login";
import Home from "../pages/home";
import LayoutLogin from "../components/layouts/LayoutLogin";
import Register from "../pages/register";

interface IRoutes {
  path: string;
  component: ComponentType;
  layout?: React.ComponentType<{ children: ReactNode }>;
}

export const publicRoutes: IRoutes[] = [
  {
    path: "/login",
    component: Login,
    layout: LayoutLogin,
  },
  {
    path: "/register",
    component: Register,
    layout: LayoutLogin,
  },
];

export const privateRoutes: IRoutes[] = [
  {
    path: "/",
    component: Home,
  },
];
