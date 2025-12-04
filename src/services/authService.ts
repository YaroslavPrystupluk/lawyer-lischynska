import {Auth, signInWithEmailAndPassword, signOut} from "firebase/auth";

export const login = async (
    auth: Auth,
    email: string,
    password: string
): Promise<void> => {
    try {

        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const logout = async (auth: Auth): Promise<void> => {
    await signOut(auth);
};
