import { getAuth, signInWithPopup, User } from "firebase/auth"
import { googleAuthProvider } from "./config";

const authByGoogle = async (): Promise<User> => {
    try {
        const auth = getAuth();
        const result = await signInWithPopup(auth, googleAuthProvider);
        const user = result.user;
        return user;
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