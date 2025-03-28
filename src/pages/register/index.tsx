import { Link } from "react-router-dom";
import FormRegister from "./components/FormRegister";

const index = () => {
  return (
    <div>
      <div className="w-auto">
        <p className="text-bv-20 font-[600] text-center">Sign up with Email</p>
        <p className="mt-4 text-center text-bv-16 text-Text2">
          Get chatting with friends and family today by signing up for our chat
          app!
        </p>

        <div className="mt-6">
          <FormRegister />
        </div>

        <p className="mt-4 text-bv-16 text-Text2">
          Already have an account&nbsp;{" "}
          <Link to={"/login"} className="font-medium underline text-Green">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default index;
