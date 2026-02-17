import { FC, PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { COMMON_ROUTES } from "../../routes/routes.name";
import { useAuth } from "../../hooks/useAuth";
import Spinner from "../Spiner/Spinner.tsx";

type GuestGuardProps = PropsWithChildren<{ redirectTo?: string }>;
const ADMIN_UID = import.meta.env.VITE_USER_UID;

const AdminGuard: FC<GuestGuardProps> = ({
  redirectTo = COMMON_ROUTES.NOT_FOUND,
}) => {
  const { isAuthenticated, loading, user } = useAuth();

  if (loading) return <Spinner />;

  if (!isAuthenticated) return <Navigate to={redirectTo} replace />;
  if (user?.uid !== ADMIN_UID) return <Navigate to="/" replace />;
  return <Outlet />;
};

export default AdminGuard;
