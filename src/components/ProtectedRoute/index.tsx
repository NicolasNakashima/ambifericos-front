import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../contexts/AuthContext";

export const ProtectedRoute = () => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
