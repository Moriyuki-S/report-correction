import { AuthUser } from "@/feature/auth/types/user";
import { UploadFile } from "../types/file";

export interface ISaveCorrectDataRepository {
    saveCorrectDataToDB: (user: AuthUser, report: UploadFile) => Promise<void>;
}