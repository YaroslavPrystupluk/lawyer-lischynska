import { useMutation } from "@tanstack/react-query";
import { login, logout } from "../../services/authService";
import { Auth } from "firebase/auth";
import { IAuth } from "../../types/types";

export const useLogin = (auth: Auth) => {
  {
    return useMutation({
      mutationFn: ({ email, password }: IAuth) => login(auth, email, password),
    });
  }
};

export const useLogout = (auth: Auth) => {
  return useMutation({
    mutationFn: () => logout(auth),
  });
};
