const formatReportNameForUrl = (reportName: string): string => {
    return reportName.replace(/ /g, '-');
};

const formatUrlToReportName = (url: string): string => {
    return url.replace(/-/g, ' ');
};

export const ReportNameUtils = {
    formatReportNameForUrl,
    formatUrlToReportName,
};