import { atom } from "jotai";
import { AuthUser } from "../types/user";

const authUser = atom<AuthUser | null>(null);

export { authUser };