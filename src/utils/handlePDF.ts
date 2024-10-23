import { saveAs } from 'file-saver';

export const DownloadPDF = (pdfPath: string, filename: string) => {
    const pdfUrl = pdfPath;
    saveAs(pdfUrl, `${filename}.pdf`);
};