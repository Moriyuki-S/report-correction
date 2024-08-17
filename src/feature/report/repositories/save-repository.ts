import { AuthUser } from "@/feature/auth/types/user";
import { CorrectedFile } from "../types/file";

export interface ISaveCorrectDataRepository {
    saveCorrectDataToDB: (user: AuthUser, report: CorrectedFile) => Promise<void>;
}