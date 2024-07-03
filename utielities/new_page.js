import{student_number}from './student_id.js'
import{border_arucomarker}from './border_arucomarker.js'
import {addBarcodeToPage}from './barcode.js'
import {doc} from '../shared_parameter.js';


export function add_new_page(png) {
    doc.addPage({ size: "A4" });
    student_number();
    border_arucomarker();
    addBarcodeToPage(png);
  }