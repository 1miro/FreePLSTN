import {doc,width_of_A4,high_of_A4,margin_border_x,margin_border_y} from '../shared_parameter.js';



export function border_arucomarker() {
    //المربعات الي في الجنب
    doc.lineWidth(10);
    doc.image("aruco1.jpeg", 3, 6, { width: 40 });
    doc.image("aruco1.jpeg", width_of_A4 - 43, 6, { width: 40 });
    doc.image("aruco2.jpg", 3, high_of_A4 - 46, { width: 40 });
    doc.image("aruco2.jpg", width_of_A4 - 43, high_of_A4 - 46, { width: 40 });

    doc.lineWidth(1);
    //حدود ال pdf كله
    doc.rect(
      margin_border_x,
      margin_border_y,
      width_of_A4 - margin_border_x * 2,
      high_of_A4 - margin_border_y * 2
    );
    doc.stroke();}