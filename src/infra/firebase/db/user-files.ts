import { AuthUser } from "@/feature/auth/types/user";
import { CorrectedFile, SavedCorrectData } from "@/feature/report/types/file";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config";
import { ISaveCorrectDataRepository } from "@/feature/report/repositories/save-repository";

const saveCorrectDataToDB = async (user: AuthUser, report: CorrectedFile): Promise<void> => {

    const saveData: SavedCorrectData = {
        userId: user.id,
        name: report.name,
        correctedAt: report.correctedAt,
        correctComment: report.correctComment,
        memo: report.memo,
        nameForFilePath: report.nameForFilePath
    };

    await setDoc(doc(db, "(default)", report.nameForFilePath), saveData);
};

export const FirebaseStoreSaveCorrectData: ISaveCorrectDataRepository = {
    saveCorrectDataToDB
};