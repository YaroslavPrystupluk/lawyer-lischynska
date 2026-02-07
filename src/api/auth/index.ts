import { useMutation } from "@tanstack/react-query";
import { login, logout } from "../../services/authService";
import { Auth, AuthError, UserCredential } from "firebase/auth";
import { Authorisation } from "../../types/types";

export const useLogin = (auth: Auth) => {
  return useMutation<UserCredential, AuthError, Authorisation>({
    mutationFn: ({ email, password }) => login(auth, email, password),
  });
};

export const useLogout = (auth: Auth) => {
  return useMutation<void, Error, void>({
    mutationFn: () => logout(auth),
  });
};
