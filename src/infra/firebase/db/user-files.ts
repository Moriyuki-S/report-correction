import { AuthUser } from "@/feature/auth/types/user";
import { SavedCorrectData, UploadFile } from "@/feature/report/types/file";
import { FirebaseFileUpload } from "../file/upload-file";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config";
import { ISaveCorrectDataRepository } from "@/feature/report/repositories/save-repository";

const saveCorrectDataToDB = async (user: AuthUser, report: UploadFile): Promise<void> => {

    // ファイルをアップロードして、そのファイル名を取得
    const nameForFilePath = await FirebaseFileUpload.uploadFile(report);

    const saveData: SavedCorrectData = {
        userId: user.id,
        name: report.name,
        correctedAt: report.correctedAt,
        correctComment: report.correctComment,
        memo: report.memo,
        nameForFilePath
    };

    await setDoc(doc(db, "(default)", nameForFilePath), saveData);
};

export const FirebaseStoreSaveCorrectData: ISaveCorrectDataRepository = {
    saveCorrectDataToDB
};