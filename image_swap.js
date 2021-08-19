// use strict executes the code in the strict mode.
"use strict";

// when the document is ready the below functions will be executed.
$(document).ready(() => {
  $("#image_list a").each((index, link) => {
    const image = new Image();
    image.src = link.href;
  });

  //   adding the mouseover event listener
  $("#image_list a").mouseover((evt) => {
    const link = evt.currentTarget;
    $("#main_image").attr("src", link.href).fadeIn(2000);
    $("#caption").text(link.title);
    evt.preventDefault();
    $("#main_image").fadeOut(6000);
  });

  //   focus method shifts the focus on the html element with the respective ID.
  $("li:first-child a").focus();
});
