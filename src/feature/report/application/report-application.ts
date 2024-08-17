import { AuthUser } from "@/feature/auth/types/user";
import { ISaveCorrectDataRepository } from "../repositories/save-repository";
import { UploadRepository } from "../repositories/upload-repository";
import { UploadFile } from "../types/file";

export class ReportApplication {
    private readonly uploadRepository: UploadRepository;
    private readonly saveRepository: ISaveCorrectDataRepository;

    constructor(uploadRepository: UploadRepository, saveRepository: ISaveCorrectDataRepository) {
        this.uploadRepository = uploadRepository;
        this.saveRepository = saveRepository;
    }

    async saveCorrectData(user: AuthUser, report: UploadFile): Promise<void> {
        const nameForFilePath = await this.uploadRepository.uploadFile(report);
        const saveFile = {...report, nameForFilePath};

        await this.saveRepository.saveCorrectDataToDB(user, saveFile);
    }
}