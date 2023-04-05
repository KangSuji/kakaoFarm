$(document).ready(function () {
  $(".icon_bookmark").each(function () {
    $(this)
      .mouseenter(function () {
        $(this).attr("src", "/images/bookmark_fill.svg");
      })
      .mouseleave(function () {
        $(this).attr("src", "/images/bookmark.svg");
      });
  });
});
