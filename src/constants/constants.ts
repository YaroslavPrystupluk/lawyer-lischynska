import { v4 as uuidv4 } from "uuid";

export const COMMON_ROUTES_NAME: {
  id: string;
  name: string;
  to: string;
}[] = [
  { id: uuidv4(), name: "Головна", to: "/" },
  { id: uuidv4(), name: "Вартість", to: "/pricing" },
  { id: uuidv4(), name: "Про себе", to: "/about" },
  { id: uuidv4(), name: "Контакти", to: "/contacts" },
  { id: uuidv4(), name: "Блог", to: "/blog" },
];

export const COMMON_ROUTES_NAME_SUBMENU: {
  name: string;
  submenu: { id: string; name: string; to: string }[];
}[] = [
  {
    name: "Послуги",
    submenu: [
      { id: uuidv4(), name: "Консультації", to: "/services/consultations" },
      { id: uuidv4(), name: "Документація", to: "/services/documentation" },
      { id: uuidv4(), name: "Супровід", to: "/services/support" },
    ],
  },
];

export const CARD: {
  id: string;
  title: string;
  discription: string;
  icon: string;
}[] = [
  {
    id: uuidv4(),
    title: "Справи щодо нерухомого майна та землі",
    discription:
      "суперечки і складнощі з поділом, купівлею-продажем, даруванням, орендою",
    icon: "home-land",
  },
  {
    id: uuidv4(),
    title: "Сімейні спори",
    discription: "розлучення, поділ майна, опіка над дітьми, аліменти",
    icon: "family-disputes",
  },
  {
    id: uuidv4(),
    title: "Проблеми, пов’язані з ДТП",
    discription: "штрафи, стягнення шкоди і спори зі страховими компаніями",
    icon: "car-crash",
  },
  {
    id: uuidv4(),
    title: "Трудові спори",
    discription:
      "звільнення з роботи, неправомірність доган і дисциплінарних стягнень",
    icon: "labor-disputes",
  },
];
