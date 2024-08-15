export type CorrectedFile = {
    id: string;
    name: string;
    correctedAt: Date;
    correctComment: string;
    memo: string;
    fileUrl: string;
};

export type UploadFile = {
    name: string;
    file: File;
};