$(document).ready(function () {
  $("img").hover(
    function () {
      if ($("p, h2, h1").css("color") == "rgb(11, 197, 230)") {
        $("img").css({ "box-shadow": " 4px 4px 4px rgb(11, 197, 230)" });
      } else {
        $("img").css({ "box-shadow": " 4px 4px 4px rgb(31, 161, 5)" });
      }
    },
    function () {
      $(this).css({ "box-shadow": "" });
    }
  );
  $("h1").hide().fadeIn(1000);
  $("h2").hide().fadeIn(4000);
  $(".text").hide().fadeIn(8000);
  $("#secret").hide().fadeIn(50000);
  $("p, h2, h1").click(function () {
    if ($("p, h2, h1").css("color") == "rgb(11, 197, 230)") {
      $("p, h2, h1").css("color", "rgb(31, 161, 5)");
    } else {
      $("p, h2, h1").css("color", "rgb(11, 197, 230)");
    }
  });
});
