import {doc} from '../shared_parameter.js';

const barcodeX = 255; // X-coordinate of the barcode
const barcodeYTop = 6; // Y-coordinate of the barcode
const barcodeYBot = 805; // Y-coordinate of the barcode 

export const addBarcodeToPage = (png) => {
    doc.image(png, barcodeX, barcodeYTop, { width: 100, height: 30 });
    doc.image(png, barcodeX, barcodeYBot, { width: 100, height: 30 });
  };