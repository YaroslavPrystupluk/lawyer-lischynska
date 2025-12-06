import {Auth, signInWithEmailAndPassword, signOut} from "firebase/auth";

export const login = async (
    auth: Auth,
    email: string,
    password: string
): Promise<void> => {
    await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async (auth: Auth): Promise<void> => {
    await signOut(auth);
};
