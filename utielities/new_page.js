import{student_number}from './student_id.js'
import{border_arucomarker}from './border_arucomarker.js'
import {addBarcodeToPage}from './barcode.js'
import {doc} from '../shared_parameter.js';


let page_num=2;

function create_page_num(isColored){
  doc.fillColor('black').fontSize(20).text(page_num,280,15);doc.stroke();
  page_num+=1;
}
export function add_new_page(png,isColored) {
    doc.addPage({ size: "A4" });
    create_page_num(isColored)
    student_number(isColored);
    border_arucomarker();
    //addBarcodeToPage(png);
  }

