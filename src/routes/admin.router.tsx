import { ADMIN_ROUTES } from "./routes.name";
import { Login } from "../pages/admin";
import GuestGuard from "../components/Guard/GuestGuard";

export default [
  {
    path: ADMIN_ROUTES.LOGIN,
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
];
