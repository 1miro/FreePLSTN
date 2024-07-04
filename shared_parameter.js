import PDFDocument from 'pdfkit';

export const high_of_A4 = 841.89;
export const width_of_A4 = 595.28;
export const margin_x = 10;
export const margin_y = 20;
export const margin_border_x = 41;
export const margin_border_y = 40;

export const id_color=["#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#00FFFF"]

export const quesColors =[,
    "#FF00FF",
    "#000000",
    "#FFFFFF",
    "#808080",
    "#800000",
    "#808000",
    "#000080",
    "#008080",
    "#800080",
    "#C0C0C0",
    "#00FF00",
    "#00FFFF",
    "#FF00FF",
    "#8B0000",
    "#006400",
    "#00008B",
    "#FFD700",
    "#D3D3D3",
    "#A9A9A9",
    "#4B0082",
    "#40E0D0",
    "#DA70D6",
    "#FF6347",
    "#FFA500",
    "#DC143C",
    "#FF7F50",
    "#F0E68C",
    "#DDA0DD",
    "#FA8072",
    "#D2691E",
    "#CD853F",
    "#D8BFD8",
    "#ADD8E6",
    "#E6E6FA",
    "#FFC0CB",
    "#FF69B4",
    "#FF1493",
    "#B22222",
    "#FF8C00",
    "#F08080",
    "#3CB371",
    "#7B68EE",
    "#4169E1",
    "#1E90FF"
  ];


export const doc = new PDFDocument({ size: 'A4' });
doc.font("Helvetica"); // establishes the default font

doc.lineWidth(1);



export let end_of_sections = [0];

