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
  userId: string;
  img: string;
  title: string;
  description: string;
  createDateAt: Date;
  category: string;
}

export interface IAuth {
  email: string;
  password: string;
}
