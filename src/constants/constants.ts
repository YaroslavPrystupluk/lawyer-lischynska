export const COMMON_ROUTES_NAME: {
  id: number;
  name: string;
  to: string;
}[] = [
  { id: 1, name: "Головна", to: "/" },
  { id: 2, name: "Вартість", to: "/pricing" },
  { id: 3, name: "Про себе", to: "/about" },
  { id: 4, name: "Контакти", to: "/contacts" },
  { id: 5, name: "Блог", to: "/blog" },
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
