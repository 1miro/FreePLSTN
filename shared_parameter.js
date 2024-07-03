import PDFDocument from 'pdfkit';
import fs from "fs";




export const high_of_A4 = 841.89;
export const width_of_A4 = 595.28;
export const margin_x = 10;
export const margin_y = 20;
export const margin_border_x = 41;
export const margin_border_y = 40;



export const doc = new PDFDocument({ size: 'A4' });
doc.font("Helvetica"); // establishes the default font
doc.pipe(fs.createWriteStream("newnewnewPDF.pdf"));// Saving the pdf file in root directory.

doc.lineWidth(1);



export let end_of_sections = [0];

