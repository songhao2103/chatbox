import { ReactNode } from "react";

interface IPrivateRoutesProps {
  children: ReactNode;
}

const MainLayout: React.FC<IPrivateRoutesProps> = ({ children }) => {
  return (
    <div className="max-w-[360px] p-4 mx-auto  sm:p-6 sm:max-w-[900px]  sm:mx-auto border">
      {children}
    </div>
  );
};

export default MainLayout;
