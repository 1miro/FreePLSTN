import bwipjs from "bwip-js";
import {doc} from './shared_parameter.js';

import {checkAndDrawMSQ} from './MSQ.js'
import {checkAndDrawTF} from './T_F.js'
import {draw_text_box} from './text_question.js'
import {addCoverToDoc} from "./cover.js";
import {add_new_page}from "./utielities/new_page.js"
import fs from "fs";



// Adding functionality
doc.initForm();

const args = process.argv.slice(2);

const isColored = args.includes('--isColored');
const filename = args.find(arg => arg.endsWith('.pdf')) || 'output.pdf';
doc.pipe(fs.createWriteStream(filename));// Saving the pdf file in root directory.


// Add barcode at the specified position
const barcodeOptions = {
  bcid: "code128", // Barcode type
  text: `${45}mcq${15}tf${3}text`, // Text to encode in the barcode
  scale: 3, // Scaling factor
  height: 10, // Height of the barcode
  includetext: false, // Include human-readable text
  textxalign: "center", // Text alignment
};

addCoverToDoc(isColored,'Tanta University', 'Graduation Project', 3, '15CD40F');

bwipjs.toBuffer(barcodeOptions, (err, png) => {
  if (err) {
    console.error("Error generating barcode:", err);
    return;
  }

  add_new_page(png,isColored)



let num_MSQ=30;
let num_TF=30;


  checkAndDrawMSQ(isColored,png,num_MSQ);
  checkAndDrawTF(isColored,png,num_TF);

  draw_text_box(isColored,50, "q1",png);
  draw_text_box(isColored,40, "q2",png);
  draw_text_box(isColored,35, "q3",png);
  //draw_text_box(isColored,15, "q4",png);
  //draw_text_box(isColored,65, "q5",png);
//   draw_text_box(isColored,25, "q6",png);
//   draw_text_box(isColored,25, "q7",png);
//   draw_text_box(isColored,25, "q8",png);
//   draw_text_box(isColored,25, "q9",png);
//  draw_text_box(isColored,25, "q10",png);


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Finalize PDF file
  doc.end();
});
