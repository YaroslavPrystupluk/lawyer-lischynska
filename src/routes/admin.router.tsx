import { ADMIN_ROUTES } from "./routes.name";
import { Login } from "../pages/admin";
import GuestGuard from "../components/Guard/GuestGuard";
import CreatePost from "../pages/common/CreatePost.tsx";

export default [
  {
    path: ADMIN_ROUTES.LOGIN,
    element: (
      <GuestGuard>
        <Login />
        <CreatePost/>
      </GuestGuard>
    ),
  },
];
