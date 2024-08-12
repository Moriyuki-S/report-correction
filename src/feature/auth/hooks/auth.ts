import { useAtom } from "jotai";
import { authUserStore } from "../stores/auth-user";
import FirebaseAuth from "@/infra/firebase/auth";
import { AuthUser } from "../types/user";

const useAuth = () => {
    const [authUser, setAuthUser] = useAtom(authUserStore);

    const signIn = async () => {
        const user = await FirebaseAuth.authByGoogle();
        const { uid, displayName, photoURL } = user;
        const auth: AuthUser = {
            id: uid,
            name: displayName ?? "",
            icon: photoURL ?? ""
        };

        setAuthUser(auth);
    };

    const signOut = async () => {
        await FirebaseAuth.signOut();
        setAuthUser(null);
    };

    return {
        authUser,
        signIn,
        signOut
    };
};

export default useAuth;