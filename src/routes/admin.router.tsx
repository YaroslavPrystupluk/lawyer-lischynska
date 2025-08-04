import { ADMIN_ROUTES } from "./routes.name";
import { Login } from "../pages/admin";

export default [
  {
    path: ADMIN_ROUTES.LOGIN,
    element: <Login />,
  },
];
