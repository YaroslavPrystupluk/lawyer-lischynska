export const COMMON_ROUTES_NAME: {
  name: string;
  to: string;
}[] = [
  { name: "Головна", to: "/" },
  { name: "Вартість", to: "/pricing" },
  { name: "Про себе", to: "/about" },
  { name: "Контакти", to: "/contacts" },
  { name: "Блог", to: "/blog" },
];

export const COMMON_ROUTES_NAME_SUBMENU: {
  name: string;
  submenu: { id: number; name: string; to: string }[];
}[] = [
  {
    name: "Послуги",
    submenu: [
      { id: 1, name: "Консультації", to: "/services/consultations" },
      { id: 2, name: "Документація", to: "/services/documentation" },
      { id: 3, name: "Супровід", to: "/services/support" },
    ],
  },
];
