import { RouterProvider, createBrowserRouter } from "react-router-dom";
import commonRouter from "./common.router";
import Layout from "../Layout/Layout";
import { ROLE } from "../types/types.ts";
import adminRouter from "./admin.router";
import { ErrorPage } from "../pages/common";
import LayoutAuth from "../Layout/LayoutAuth.tsx";
import { ADMIN_ROUTES, COMMON_ROUTES } from "./routes.name.ts";
import type {ReactElement} from "react";

const getRouterByRole = (role: ROLE) => {
  switch (role) {
    case ROLE.ADMIN:
      return adminRouter;
    case ROLE.USER:
      return commonRouter;
    default:
      return [];
  }
};

const AppRouter = (): ReactElement => {
  const user = ROLE.USER;
  const admin = ROLE.ADMIN;

  const router = createBrowserRouter([
    {
      path: COMMON_ROUTES.HOME,
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: getRouterByRole(user),
    },
    {
      path: ADMIN_ROUTES.LOGIN,
      element: <LayoutAuth />,
      errorElement: <ErrorPage />,
      children: getRouterByRole(admin),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </>
  );
};

export default AppRouter;
