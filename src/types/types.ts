export enum ROLE {
  ADMIN = "admin",
  USER = "user",
}

export interface IPrices {
  id: number;
  name: string;
  price: string;
}

export interface IPost {
    id: string;
    img: string;
    title: string;
    description: string;
    createDateAt: string;
}
