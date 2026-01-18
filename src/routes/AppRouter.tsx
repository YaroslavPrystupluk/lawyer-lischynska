import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";

import {
  About,
  Blog,
  Contacts,
  ErrorPage,
  Home,
  Post,
  Pricing,
} from "../pages/common";
import LayoutAuth from "../Layout/LayoutAuth.tsx";
import { ADMIN_ROUTES, COMMON_ROUTES } from "./routes.name.ts";
import type { ReactElement } from "react";
import CreatePost from "../pages/admin/CreatePost.tsx";
import Login from "../pages/admin/Login.tsx";
import AdminGuard from "../components/Guard/AdminGuard.tsx";

const AppRouter = (): ReactElement => {
  const router = createBrowserRouter([
    {
      path: COMMON_ROUTES.HOME,
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: COMMON_ROUTES.ABOUT, element: <About /> },
        { path: COMMON_ROUTES.CONTACTS, element: <Contacts /> },
        { path: COMMON_ROUTES.BLOG, element: <Blog /> },
        { path: COMMON_ROUTES.POST, element: <Post /> },
        { path: COMMON_ROUTES.PRICING, element: <Pricing /> },
      ],
    },

    {
      path: ADMIN_ROUTES.ROOT,
      element: <LayoutAuth />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Navigate to={ADMIN_ROUTES.LOGIN} replace /> },
        { path: "login", element: <Login /> },
        {
          index: true,
          element: <Navigate to={ADMIN_ROUTES.CREATE_POST} replace />,
        },
        {
          element: <AdminGuard />,
          children: [
            { path: ADMIN_ROUTES.CREATE_POST, element: <CreatePost /> },
            {
              index: true,
              element: <Navigate to={ADMIN_ROUTES.CREATE_POST} replace />,
            },

            // приклад інших сторінок
            // { path: "edit/:id", element: <EditPost /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </>
  );
};

export default AppRouter;
