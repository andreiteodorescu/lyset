$(document).ready(function () {
  $('.js-choice-selection-button input[type="radio"]').change(function () {
    if ($(this).is(":checked")) {
      $(this).parent().addClass("active");
      $(this).parent().siblings().removeClass("active");
    }
  });

  $('.js-choice-selection-button-grid input[type="radio"]').change(function () {
    if ($(this).is(":checked")) {
      $(this).parent().addClass("active");
      $(this)
        .parent()
        .parent()
        .siblings()
        .find(".js-choice-selection-button-grid")
        .removeClass("active");
    }
  });
});
