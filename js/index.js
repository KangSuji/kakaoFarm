$(document).ready(function () {
  $(".icon_bookmark").each(function () {
    $(this)
      .mouseenter(function () {
        $(this).addClass("active");
      })
      .mouseleave(function () {
        $(this).removeClass("active");
      });
  });
});
