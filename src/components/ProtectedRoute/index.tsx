import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../contexts/AuthContext";

interface ProtectedRouteProps {
  adminOnly?: boolean;
}

export const ProtectedRoute = ({ adminOnly }: ProtectedRouteProps) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !user.adm) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};
