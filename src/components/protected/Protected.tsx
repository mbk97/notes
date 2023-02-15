import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const auth = true;
  return auth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
