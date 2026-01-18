import { COMMON_ROUTES } from "./routes.name";
import {
  About,
  Blog,
  Post,
  Contacts,
  Home,
  Pricing,
  ServicesConsultations,
  ServicesDocumentation,
  ServicesSupport,
} from "../pages/common";
import CreatePost from "../pages/admin/CreatePost.tsx";
import AdminGuard from "../components/Guard/AdminGuard.tsx";

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
    path: COMMON_ROUTES.SERVICES_CONSULTATIONS,
    element: <ServicesConsultations />,
  },
  {
    path: COMMON_ROUTES.SERVICES_DOCUMENTATION,
    element: <ServicesDocumentation />,
  },
  {
    path: COMMON_ROUTES.SERVICES_SUPPORT,
    element: <ServicesSupport />,
  },
  {
    path: COMMON_ROUTES.CONTACTS,
    element: <Contacts />,
  },
  {
    path: COMMON_ROUTES.BLOG,
    element: <Blog />,
  },
  {
    path: COMMON_ROUTES.POST,
    element: <Post />,
  },
  {
    path: COMMON_ROUTES.CREATE_POST,
    element: (
      <AdminGuard>
        <CreatePost />
      </AdminGuard>
    ),
  },
];
