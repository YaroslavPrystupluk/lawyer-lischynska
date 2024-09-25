import { RouterProvider, createBrowserRouter } from "react-router-dom";
import commonRouter from "./common.router";
import Layout from "../Layout/Layout";
import { ROLE } from "../types/types";
import adminRouter from "./admin.router";
import { ErrorPage } from "../pages/common";

const getRouterByRole = (role: ROLE) => {
  switch (role) {
    case ROLE.ADMIN:
      return [...commonRouter, ...adminRouter];
    case ROLE.USER:
      return commonRouter;
    default:
      return [];
  }
};

const AppRouter = (): JSX.Element => {
  const role = ROLE.USER;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: getRouterByRole(role),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
