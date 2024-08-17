import { UploadRepository } from "@/feature/report/repositories/upload-repository";
import { NameForFilePath, UploadFile } from "@/feature/report/types/file";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const uploadFile = async (file: UploadFile): Promise<NameForFilePath> => {
    const storage = getStorage();

    const fileType = file.file.type.split("/")[1]; // ファイルの拡張子を取得
    const nameForFilePath = uuidv4() + fileType; // ファイル名を作成

    // ファイルのアップロード
    const reportRef = ref(storage, nameForFilePath);
    await uploadBytes(reportRef, file.file);

    return nameForFilePath;
};

export const FirebaseFileUpload: UploadRepository = {
    uploadFile,
};