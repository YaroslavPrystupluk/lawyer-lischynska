import { FirebaseTimestamp } from "../utils/firebaseDate";

export type Prices = {
  id: number;
  name: string;
  price: string;
};

export type Post = {
  id: string;
  userId: string;
  img: string;
  title: string;
  description: string;
  createDateAt?: FirebaseTimestamp | Date;
  category: string;
};

export type PostDto = {
  title: string;
  description: string;
  category: string;
  img: string;
};

export type PostRequestDTO = Omit<Post, "img"> & {
  img: File;
};

export type Authorisation = {
  email: string;
  password: string;
};
