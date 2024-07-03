import bwipjs from "bwip-js";
import {doc} from './shared_parameter.js';
//import{student_number}from './utielities/student_id.js'
//import{border_arucomarker}from './utielities/border_arucomarker.js'
import {checkAndDrawMSQ} from './MSQ.js'
import {checkAndDrawTF} from './T_F.js'
import {draw_text_box} from './text_question.js'
//import {addBarcodeToPage}from './utielities/barcode.js'
import {create_cover} from "./cover.js";
import {add_new_page}from "./utielities/new_page.js"



// Adding functionality
doc.initForm();

// Add barcode at the specified position
const barcodeOptions = {
  bcid: "code128", // Barcode type
  text: `${45}mcq${15}tf${3}text`, // Text to encode in the barcode
  scale: 3, // Scaling factor
  height: 10, // Height of the barcode
  includetext: false, // Include human-readable text
  textxalign: "center", // Text alignment
};


bwipjs.toBuffer(barcodeOptions, (err, png) => {
  if (err) {
    console.error("Error generating barcode:", err);
    return;
  }
  create_cover();
  add_new_page(png)

let num_MSQ=80;
let num_TF=45;


  checkAndDrawMSQ(png,num_MSQ);
  checkAndDrawTF(png,num_TF);

  draw_text_box(50, "q1",png);
  draw_text_box(40, "q2",png);
  draw_text_box(25, "q3",png);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Finalize PDF file
  doc.end();
});
