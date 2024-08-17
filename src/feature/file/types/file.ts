export type CorrectedFile = {
    name: string;
    correctedAt: Date;
    correctComment: string;
    memo: string;
    nameForFilePath: NameForFilePath;
    fileUrl?: FileUrl;
};

export type UploadFile = {
    name: string;
    correctedAt: Date;
    correctComment: string;
    memo: string;
    file: File;
};

export type SavedCorrectData = {
    userId: string;
    name: string;
    correctedAt: Date;
    correctComment: string;
    memo: string;
    nameForFilePath: NameForFilePath;
};

export type FileUrl = string;
export type NameForFilePath = string;