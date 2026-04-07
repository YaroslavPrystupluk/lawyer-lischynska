import { FC, PropsWithChildren } from "react";
import {Navigate, Outlet} from "react-router-dom";
import { COMMON_ROUTES } from "../../routes/routes.name";
import { useAuth } from "../../hooks/useAuth";
import Spinner from "../Spiner/Spinner.tsx";

type GuestGuardProps = PropsWithChildren<{ redirectTo?: string }>;

const GuestGuard: FC<GuestGuardProps> = ({
  redirectTo = COMMON_ROUTES.HOME,
}) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <Spinner />;
  return isAuthenticated ? (
    <Navigate to={redirectTo} replace />
  ) : (
    <Outlet/>
  );
};

export default GuestGuard;
