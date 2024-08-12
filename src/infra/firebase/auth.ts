import { getAuth, getRedirectResult, signInWithRedirect, User } from "firebase/auth"
import { googleAuthProvider } from "./config";

const authByGoogle = async (): Promise<User> => {
    try {
        const auth = getAuth();
        await signInWithRedirect(auth, googleAuthProvider);

        const result = await getRedirectResult(auth);
        if (!result) {
            throw new Error("Failed to get redirect result");
        }

        return result.user;
    } catch (error) {
        console.error(error);
        throw new Error('ログインに失敗しました');
    }
};

const signOut = async (): Promise<void> => {
    try {
        const auth = getAuth();
        await auth.signOut();
    } catch (error) {
        console.error(error);
        throw new Error('ログアウトに失敗しました');
    }
};

const FirebaseAuth = {
    authByGoogle,
    signOut
};

export default FirebaseAuth;