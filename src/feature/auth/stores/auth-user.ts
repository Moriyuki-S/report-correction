import { atom } from "jotai";
import { AuthUser } from "../types/user";

const authUserStore = atom<AuthUser | null>(null);

export { authUserStore };