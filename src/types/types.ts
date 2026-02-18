export type Prices = {
  id: number;
  name: string;
  price: string;
};

export type Post = {
  id: string;
  userId: string;
  img: File;
  title: string;
  description: string;
  createDateAt?: Date;
  category: string;
};

export type Authorisation = {
  email: string;
  password: string;
};
