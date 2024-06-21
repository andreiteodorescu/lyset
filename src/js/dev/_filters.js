$(document).ready(function () {
  $('.choice-selection-pill-button input[type="radio"]').change(function () {
    // Add the class to the parent label of the checked radio button
    if ($(this).is(":checked")) {
      $(this).parent().addClass("active");
      $(this).parent().siblings().removeClass("active");
    }
  });
});
