$(document).ready(function() {
  $("#standart").on("click", function fade1() {
    $(this).unbind("click", fade1);
    $("#nrstandart").hide();
    $(this)
      .text("Wait")
      .hide()
      .fadeIn(5000, function() {
        $(this).text("Standart PC");
        $(this).bind("click", fade1);
        $("#nrstandart").show();
      });
  });
  $("#PC").on("click", function fade1() {
    $(this).unbind("click", fade1);
    $("#nrpc").hide();
    $(this)
      .text("Wait")
      .hide()
      .fadeIn(5000, function() {
        $(this).text("Mineing PC");
        $(this).bind("click", fade1);
        $("#nrpc").show();
      });
  });
  $("#server").on("click", function fade1() {
    $(this).unbind("click", fade1);
    $("#nrserver").hide();
    $(this)
      .text("Wait")
      .hide()
      .fadeIn(5000, function() {
        $(this).text("Server");
        $(this).bind("click", fade1);
        $("#nrserver").show();
      });
  });
  $("#farm").on("click", function fade1() {
    $(this).unbind("click", fade1);
    $("#nrfarm").hide();
    $(this)
      .text("Wait")
      .hide()
      .fadeIn(5000, function() {
        $(this).text("Server Farm");
        $(this).bind("click", fade1);
        $("#nrfarm").show();
      });
  });

  $("#quanten").on("click", function fade1() {
    $(this).unbind("click", fade1);
    $("#nrquanten").hide();
    $(this)
      .text("Wait")
      .hide()
      .fadeIn(5000, function() {
        $(this).text("Quanten Computer");
        $(this).bind("click", fade1);
        $("#nrquanten").show();
      });
  });

  $("#wurmloch").on("click", function fade1() {
    $(this).unbind("click", fade1);
    $("#nrwurmloch").hide();
    $(this)
      .text("Wait")
      .hide()
      .fadeIn(5000, function() {
        $(this).text("Wurmloch Generator");
        $(this).bind("click", fade1);
        $("#nrwurmloch").show();
      });
  });
});
