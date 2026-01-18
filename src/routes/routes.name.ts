export enum COMMON_ROUTES {
  HOME = "/",
  PRICING = "pricing",
  ABOUT = "about",
  SERVICES_CONSULTATIONS = "services/consultations",
  SERVICES_DOCUMENTATION = "services/documentation",
  SERVICES_SUPPORT = "services/support",
  CONTACTS = "contacts",
  BLOG = "blog",
  POST = "blog/post/:id",
  NOT_FOUND = "404",
}

export enum ADMIN_ROUTES {
  ROOT = "admin",
  LOGIN = "login",
  CREATE_POST = "create-post",
  EDIT_POST = "edit/:id",
}
