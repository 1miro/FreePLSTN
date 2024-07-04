-For running code : install pdfkit &bwip-js;
-To get pdf without color run this line : nodemon exam_generator.js pdf_withoutColor.pdf;
-to get pdf with color run this line : nodemon exam_generator.js pdf_withColor.js --isColored ;
-If you want change colores of text questions || student's id , change colores in  quesColors  array for text question || colores in id_color array for student's id && this arrays in shared_parameter.js file ;
-To generate different pdfs change in num_MSQ & num_TF parameters . these parameters in exam_generator.js file ; and you can call draw_text_box() func and change at num of lines for this question ; 


