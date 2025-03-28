import { ReactNode } from "react";
import imageLogin from "../../../public/images/image_login.avif";

interface ILayoutLoginProps {
  children: ReactNode;
}

const LayoutLogin: React.FC<ILayoutLoginProps> = ({ children }) => {
  return (
    <div className="flex justify-between mt-4 gap-x-6">
      <img
        src={imageLogin}
        alt=""
        className="hidden sm:block w-[50%] object-cover max-w-[450px] h-[550px]"
      />
      <div className="w-full sm:min-w-[45%]">{children}</div>
    </div>
  );
};

export default LayoutLogin;
