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
  LOGIN = "/enter-login",
  CREATE_POST = "blog/create-post",
  EDIT_POST = "blog/edit/:id",
}
