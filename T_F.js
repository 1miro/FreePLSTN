import {doc,end_of_sections,margin_y,margin_border_y,width_of_A4,high_of_A4,margin_border_x,margin_x} from './shared_parameter.js';
import {add_new_page}from "./utielities/new_page.js"
import {get_num_question_for_each_colum} from'./shared_func/get_num_question_for_each_colum.js'
import {draw_123} from'./shared_func/draw_123.js'
import {draw_circles}from './shared_func/draw_circles.js'


let radios = 5;
let distance_btn_circle = 8;
let num_question_TF ;//FOR TF
let num_question_for_each_line_TF = 8;
let lst_TF = ["T", "F"];
let step_x=60;
const for_const_center_x=6;



function draw_TF(
  num_q_for_this_rect,
  num_question_for_each_line,
  num_question_for_each_colum_of_this_rect,
  rest_questions,
  start_of_this_rect,
  start_of_counting,
  lst,
  step_x,for_const_center_x
) {
  draw_123(
    num_q_for_this_rect,
    num_question_for_each_line,
    num_question_for_each_colum_of_this_rect,
    rest_questions,
    start_of_this_rect,
    start_of_counting,
    step_x
  );
  //draw_ABCD(start_of_this_rect);
  draw_circles(
    num_q_for_this_rect,
    num_question_for_each_line,
    num_question_for_each_colum_of_this_rect,
    rest_questions,
    start_of_this_rect,lst,
    step_x,for_const_center_x


  );
}

export function checkAndDrawTF(png,num_TF) {
  num_question_TF=num_TF;
  let perivious_element = end_of_sections[end_of_sections.length - 1];
  doc.text("T&F", 280, perivious_element + margin_y / 2);

  let start_of_rect;
  const start_of_rec = perivious_element + margin_y;
  let [num_question_for_each_colum, rest_questions] =
  get_num_question_for_each_colum(
      num_question_TF,
      num_question_for_each_line_TF
    );
  let hight_of_rect =
    (num_question_for_each_colum + 1) * (radios * 2) +
    (num_question_for_each_colum + 1) * distance_btn_circle;
  if (
    hight_of_rect <=
    high_of_A4-start_of_rec - margin_border_y - margin_y  - radios * 2
  ) {
    doc.rect(
      margin_border_x + margin_x,
      start_of_rec,
      width_of_A4 - 2 * margin_border_x - 2 * margin_x,
      hight_of_rect
    ); //.fillColor('purple').fill();
    doc.stroke();
    draw_TF(
      num_question_TF,
      num_question_for_each_line_TF,
      num_question_for_each_colum,
      rest_questions,
      start_of_rec,
      0,lst_TF,
      step_x,for_const_center_x
    );

    end_of_sections.push(start_of_rec + hight_of_rect + margin_y);
    doc
      .moveTo(margin_border_x, end_of_sections[end_of_sections.length - 1]) // set the current point
      .lineTo(
        width_of_A4 - margin_border_x,
        end_of_sections[end_of_sections.length - 1]
      ) // draw a line
      .stroke();
  } else {
    ////fist rect
    let higt_of_first_rect =
      high_of_A4 - start_of_rec - margin_border_y - margin_y;
    let num_ques_for_first_rect;
    if (higt_of_first_rect<radios*4+3*distance_btn_circle){
      num_ques_for_first_rect=0;
    }
    else{
      let start_of_first_rect = start_of_rec;
      let num_ques_for_each_colum_of_first_rect =
        Math.floor(higt_of_first_rect / (2 * radios + distance_btn_circle)) - 2;
      num_ques_for_first_rect =
        num_ques_for_each_colum_of_first_rect * num_question_for_each_line_TF;
      doc.rect(
        margin_border_x + margin_x,
        start_of_first_rect,
        width_of_A4 - margin_border_x * 2 - margin_x * 2,
        higt_of_first_rect
      ); //.fillColor('purple').fill();
      doc.stroke();

      draw_TF(
        num_ques_for_first_rect,
        num_question_for_each_line_TF,
        num_ques_for_each_colum_of_first_rect,
        0,
        start_of_first_rect,
        0,lst_TF,step_x,for_const_center_x
      );
    }

    let num_of_remining_ques = num_question_TF - num_ques_for_first_rect;
    console.log(num_of_remining_ques);

    const num_ques_for_each_colum_for_allA4page =
      Math.floor(
        (high_of_A4 - margin_border_y * 2 - margin_y * 2) /
          (2 * radios + distance_btn_circle)
      ) - 2;
    let num_ques_for_A4_page =
    num_question_for_each_line_TF * num_ques_for_each_colum_for_allA4page; //116;
    let num_of_remining_A4_pages = Math.ceil(
      num_of_remining_ques / num_ques_for_A4_page
    );
    let start_of_counting_of_current_page = num_ques_for_first_rect; //84;
    //console.log(num_of_remining_ques, num_of_remining_A4_pages)
    //second rect

    for (let i = 0; i < num_of_remining_A4_pages; i++) {
      let num_ques_for_rect =
        num_of_remining_ques > num_ques_for_A4_page
          ? num_ques_for_A4_page
          : num_of_remining_ques;

      let [num_ques_for_each_colum_of_rect, rest_questions] =
        get_num_question_for_each_colum_TF(
          num_ques_for_rect,
          num_question_for_each_line_TF
        );

      let higt_of_rect =
        (num_ques_for_each_colum_of_rect + 1) * (radios * 2) +
        (num_ques_for_each_colum_of_rect + 1) * distance_btn_circle;
      console.log(higt_of_rect);

      add_new_page(png);
      start_of_rect =
        end_of_sections[end_of_sections.length - 1] + margin_y / 2;

      doc.rect(
        margin_border_x + margin_x,
        start_of_rect,
        width_of_A4 - margin_border_x * 2 - margin_x * 2,
        higt_of_rect
      ); //.fillColor('purple').fill();
      doc.stroke();
      draw_TF(
        num_ques_for_rect,
        num_question_for_each_line_TF,
        num_ques_for_each_colum_of_rect,
        rest_questions,
        start_of_rect,
        start_of_counting_of_current_page,lst_TF,
        step_x,for_const_center_x
      );
      if (num_of_remining_ques > num_ques_for_A4_page) {
        num_of_remining_ques -= num_ques_for_A4_page;
        start_of_counting_of_current_page += num_ques_for_A4_page;
      } else {
        //console.log(hight_of_rect)
        end_of_sections.push(higt_of_rect + start_of_rect + margin_y);
        doc
          .moveTo(
            margin_border_x,
            end_of_sections[end_of_sections.length - 1]
          ) // set the current point
          .lineTo(
            width_of_A4 - margin_border_x,
            end_of_sections[end_of_sections.length - 1]
          ) // draw a line
          .stroke();
      }
    }
  }
}