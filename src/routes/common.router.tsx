import { COMMON_ROUTES } from "./routes.name";
import {
  About,
  Blog,
  BlogPost,
  Contact,
  ErrorPage,
  Home,
  Pricing,
  Services,
} from "../pages/common";

export default [
  {
    path: COMMON_ROUTES.HOME,
    element: <Home />,
  },
  {
    path: COMMON_ROUTES.ABOUT,
    element: <About />,
  },
  {
    path: COMMON_ROUTES.PRICING,
    element: <Pricing />,
  },
  {
    path: COMMON_ROUTES.SERVICES,
    element: <Services />,
  },
  {
    path: COMMON_ROUTES.CONTACT,
    element: <Contact />,
  },
  {
    path: COMMON_ROUTES.BLOG,
    element: <Blog />,
  },
  {
    path: COMMON_ROUTES.BLOG_POST,
    element: <BlogPost />,
  },
  {
    path: COMMON_ROUTES.NOT_FOUND,
    element: <ErrorPage />,
  },
];
