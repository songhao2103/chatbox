import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";

interface IPrivateRoutesProps {
  children: ReactNode;
}
const PrivateRoutes: React.FC<IPrivateRoutesProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state: RootState) => state.user.userInfo);

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      navigate("/login");
    }
  }, [location.pathname, user, navigate]);

  return <div>{user && <div>{children}</div>}</div>;
};

export default PrivateRoutes;
