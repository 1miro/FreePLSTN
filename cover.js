import bwipjs from 'bwip-js';
import{border_arucomarker}from './utielities/border_arucomarker.js'
import {doc,quesColors,id_color} from "./shared_parameter.js";


export const addCoverToDoc = (isColored,university, subject, time, code) => {
  const barcodeX = 430; // X-coordinate of the barcode
  const barcodeYTop = 320; // Y-coordinate of the barcode
  
  // Add barcode at the specified position
  const barcodeOptions = {
      bcid: 'code128', // Barcode type
      text: `${code}`, // Text to encode in the barcode
      scale: 3, // Scaling factor
      height: 10, // Height of the barcode
      includetext: false, // Include human-readable text
      textxalign: 'center', // Text alignment
  };
  // Generate barcode asynchronously
  
  bwipjs.toBuffer(barcodeOptions, (err, png) => {

    if (err) {
        console.error('Error generating barcode:', err);
        return;
    }
    
    // Add barcode image to the PDF document at the specified position
    const addBarcodeToPage = () => {
      doc.image(png, barcodeX, barcodeYTop, { width: 100, height: 30 });
    };
  
    doc.fillColor('black').fontSize(20).text("1",280,15);doc.stroke();

    border_arucomarker();

  
  const squareSize = 9;
  const gap = 0; // Gap between squares
  const rows = 1; // Number of rows of grids
  const cols = 5; // Number of columns of grids
  const squaresPerRow = 10; // Number of squares in each row
  const squaresPerCol = 1; // Number of squares in each column
  const rowGap = 10; // Gap between rows of grids
  const colGap = 10; // Gap between columns of grids
  const offsetX = 50; // X-offset for the starting position
  const offsetY = 210; // Y-offset for the starting position
  
  
  function student_number(){
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const startX = offsetX + col * (squaresPerRow * squareSize + (squaresPerRow - 1) * gap + colGap);
        const startY = offsetY + row * (squaresPerCol * squareSize + (squaresPerCol - 1) * gap + rowGap);
  
        for (let i = 0; i < squaresPerCol; i++) {
          for (let j = 0; j < squaresPerRow; j++) {
            const x = startX + j * (squareSize + gap);
            const y = startY + i * (squareSize + gap);
            doc.rect(x, y, squareSize, squareSize);if(isColored){doc.fillColor(id_color[col]).fill();doc.stroke();}
            doc.fontSize(8).text(j, x + squareSize / 2 - 4, y + squareSize / 2 - 3, {
              width: squareSize,
              height: squareSize,
              align: 'center',
              valign: 'center'
            });
          }
        }
      }
    }     
  }
  
  
  
  
  // University and Exam Information with logo
  doc.image('tanta_univ.png', 400, 50, { width: 80, height: 80 });//the pic will be dynamic 
  doc.fillColor('black').fontSize(20).text(`${university}`,150,80);
  doc.moveDown(2);
  
  // Student Information Box
  const infoBoxX = 45;
  const infoBoxY = 140;
  const infoBoxWidth = 505;
  const infoBoxHeight = 220;
  doc.rect(infoBoxX  , infoBoxY  , infoBoxWidth  , infoBoxHeight).stroke();
  
  doc.fontSize(14);
  doc.fillColor('black').text('Name:', infoBoxX + 10, infoBoxY + 20, { rtl: true });
  doc.fillColor('black').text('S.Number:', infoBoxX + 10, infoBoxY + 50, { rtl: true });
  doc.fillColor('black').text('Level:', infoBoxX + 10, infoBoxY + 100, { rtl: true });
  doc.fillColor('black').text('Department:', infoBoxX + 10, infoBoxY + 130, { rtl: true });
  doc.fillColor('black').text('Date:', infoBoxX + 10, infoBoxY + 160, { rtl: true });
  doc.fillColor('black').text('Subject:', infoBoxX + 10, infoBoxY + 190, { rtl: true });
  
  doc.rect(infoBoxX + 90, infoBoxY + 5 , 410, 25);if(isColored){doc.fillColor(quesColors.pop()).fill();doc.stroke();}
  doc.rect(infoBoxX + 90, infoBoxY + 35 , 410, 25);if(isColored){doc.fillColor(quesColors.pop()).fill();doc.stroke();}
  student_number()
  doc.rect(infoBoxX + 90, infoBoxY + 85 , 410, 25);if(isColored){doc.fillColor(quesColors.pop()).fill();doc.stroke();}
  doc.rect(infoBoxX + 90, infoBoxY + 115 , 410, 25);if(isColored){doc.fillColor(quesColors.pop()).fill();doc.stroke();}
  doc.rect(infoBoxX + 90, infoBoxY + 145 , 410, 25);if(isColored){doc.fillColor(quesColors.pop()).fill();doc.stroke();}
  
  doc.rect(infoBoxX + 90, infoBoxY + 175 , 280, 40);if(isColored){doc.fillColor(quesColors.pop()).fill();doc.stroke();}
  doc.fontSize(16).text(`${subject}`, infoBoxX + 100, infoBoxY + 190, { rtl: true });
  doc.rect(infoBoxX + 380, infoBoxY + 175, 120, 40);if(isColored){doc.fillColor(quesColors.pop()).fill();doc.stroke();} // Box for Subject Code
  addBarcodeToPage()
  
  // doc.moveTo(infoBoxX + 10, infoBoxY + 30).lineTo(infoBoxX + 450, infoBoxY + 30).stroke();
  // doc.moveTo(infoBoxX + 10, infoBoxY + 60).lineTo(infoBoxX + 450, infoBoxY + 60).stroke();
  // doc.moveTo(infoBoxX + 10, infoBoxY + 110).lineTo(infoBoxX + 450, infoBoxY + 110).stroke();
  // doc.moveTo(infoBoxX + 10, infoBoxY + 140).lineTo(infoBoxX + 450, infoBoxY + 140).stroke();
  // doc.moveTo(infoBoxX + 10, infoBoxY + 170).lineTo(infoBoxX + 450, infoBoxY + 170).stroke();
  // doc.moveTo(infoBoxX + 10, infoBoxY + 215).lineTo(infoBoxX + 450, infoBoxY + 215).stroke()
  
  
  
  
  
  
  
  
  doc.moveDown(10);
  
  // Instructions Box
  const instructionsBoxX = 45;
  const instructionsBoxY = 390;
  const instructionsBoxWidth = 505;
  const instructionsBoxHeight = 400;
  doc.rect(instructionsBoxX, instructionsBoxY, instructionsBoxWidth, instructionsBoxHeight).stroke();
  
  doc.fillColor('black').fontSize(14).text('Instructions For Student Number:', instructionsBoxX + 10, instructionsBoxY + 10, { underline: true });
  doc.fillColor('black').text('1. Write your seat number in the space provided. ', instructionsBoxX + 10, instructionsBoxY + 35);
  doc.fillColor('black').text('2. Shade your seat number from right (ones) to left (thousands).', instructionsBoxX + 10, instructionsBoxY + 55);
  doc.fillColor('black').text('3. (Important!) you must re-highlight your seat number on all test papers.', instructionsBoxX + 10, instructionsBoxY + 75);
  doc.fillColor('black').text('4. Make sure you have all the answer sheets and check their number.', instructionsBoxX + 10, instructionsBoxY + 95);
  doc.fillColor('black').text(`5. Time allotted: ${time} hours.`, instructionsBoxX + 10, instructionsBoxY + 115);
  doc.fillColor('black').fontSize(14).text('Instructions For MCQ , T/F:', instructionsBoxX + 10, instructionsBoxY + 140, { underline: true });
  doc.fillColor('black').text('1. Use only a blue or black pen to fill out the answer sheet', instructionsBoxX + 10, instructionsBoxY + 165);
  doc.fillColor('black').text('2. Do not use correction fluid.', instructionsBoxX + 10, instructionsBoxY + 185);
  doc.fillColor('black').text('3. Choose the correct answer by completely filling the selected bubble.', instructionsBoxX + 10, instructionsBoxY + 205);
  doc.fillColor('black').text('4. If you make a mistake. Don not pick another choice', instructionsBoxX + 10, instructionsBoxY + 225);
  doc.fillColor('black').text('5. Answer all multiple-choice questions by marking the correct bubble.', instructionsBoxX + 10, instructionsBoxY + 245);
  doc.fillColor('black').text('6. Ensure that all answers are clear and legible.', instructionsBoxX + 10, instructionsBoxY + 265);
  doc.fillColor('black').fontSize(14).text('Instructions For Text:', instructionsBoxX + 10, instructionsBoxY + 290, { underline: true });
  doc.fillColor('black').text('1. Make sure to answer in the designated spaces.', instructionsBoxX + 10, instructionsBoxY + 315);
  doc.fillColor('black').text('2. Do not answer outside the framework allocated for each question.', instructionsBoxX + 10, instructionsBoxY + 335);
  doc.fillColor('black').text('3. If you answer outside the designated answer box, it will not be accepted.', instructionsBoxX + 10, instructionsBoxY + 355);
  

  
  
  });
  
  //console.log(`PDF with logo and student information generated: ${outputFilePath}`);


}

