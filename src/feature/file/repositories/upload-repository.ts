import { UploadFile } from "../types/file";

export interface UploadRepository {
    uploadFile: (file: UploadFile) => Promise<void>;
};