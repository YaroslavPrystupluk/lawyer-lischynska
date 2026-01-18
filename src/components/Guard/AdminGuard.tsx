import { FC, PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { COMMON_ROUTES } from "../../routes/routes.name";
import { useAuth } from "../../hooks/useAuth";
import Spiner from "../Spiner/Spiner";

type GuestGuardProps = PropsWithChildren<{ redirectTo?: string }>;

const AdminGuard: FC<GuestGuardProps> = ({
  redirectTo = COMMON_ROUTES.NOT_FOUND,
}) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <Spiner />;

  return !isAuthenticated ? <Navigate to={redirectTo} replace /> : <Outlet />;
};

export default AdminGuard;
