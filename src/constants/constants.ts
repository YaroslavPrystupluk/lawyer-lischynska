export const COMMON_ROUTES_NAME: {
  name: string;
  to: string;
  submenu?: { name: string; to: string }[];
}[] = [
  { name: "Головна", to: "/" },
  { name: "Вартість", to: "/pricing" },
  { name: "Про себе", to: "/about" },
  {
    name: "Послуги",
    to: "/services",
    submenu: [
      { name: "Консультації", to: "/services/consultations" },
      { name: "Документація", to: "/services/documentation" },
      { name: "Супровід", to: "/services/support" },
    ],
  },
  { name: "Контакти", to: "/contacts" },
  { name: "Блог", to: "/blog" },
];
