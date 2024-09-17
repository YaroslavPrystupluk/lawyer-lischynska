import { RouterProvider, createBrowserRouter } from "react-router-dom";
import commonRouter from "./common.router";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: commonRouter,
  },
]);

const AppRouter = (): JSX.Element => <RouterProvider router={router} />;

export default AppRouter;
