import { NameForFilePath, UploadFile } from "../types/file";

export interface UploadRepository {
    uploadFile: (file: UploadFile) => Promise<NameForFilePath>;
};