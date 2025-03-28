import { Link } from "react-router-dom";
import FormLogin from "./components/FormLogin";
import FormLoginSocial from "./components/FormLoginSocial";

const index = () => {
  return (
    <div className="w-auto">
      <p className="text-bv-20 font-[600] text-center">Log in to Chatbox</p>
      <p className="mt-4 text-center text-bv-16 text-Text2">
        Welcome back! Sign in using your social account or email to continue us
      </p>
      <div className="pb-4 mt-6 mb-4 border-b border-[#ccc]">
        <FormLoginSocial />
      </div>
      <FormLogin />

      <p className="mt-4 text-bv-16 text-Text2">
        Don't have an account yet&nbsp;{" "}
        <Link to={"/register"} className="font-medium underline text-Green">
          Register
        </Link>
      </p>
    </div>
  );
};

export default index;
