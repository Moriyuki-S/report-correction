import { AuthUser } from "@/feature/auth/types/user";
import { CorrectedReport} from "../types/file";

export interface ISaveCorrectDataRepository {
    saveCorrectDataToDB: (user: AuthUser, report: CorrectedReport) => Promise<void>;
}