import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  type UserCredential,
} from "firebase/auth";

export const login = (
  auth: Auth,
  email: string,
  password: string,
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = async (auth: Auth): Promise<void> => {
  await signOut(auth);
};
