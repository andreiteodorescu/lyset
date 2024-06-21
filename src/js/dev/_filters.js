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

  // Function to update the class based on input value
  function updateParentClass(input) {
    const value = parseInt($(input).val(), 10);
    const parent = $(input).closest(".lights-item");
    if (value > 0) {
      parent.addClass("active");
    } else {
      parent.removeClass("active");
    }
  }

  // Check the initial state of all quantity inputs on page load
  $(".lights-item-quantity").each(function () {
    updateParentClass(this);
  });

  // Event listener for input change
  $(".lights-item-quantity").on("input", function () {
    if ($(this).val() < 0) {
      $(this).val(0);
    }
    updateParentClass(this);
  });

  // Custom arrow click handlers
  $(".quantity-up").on("click", function () {
    const input = $(this)
      .closest(".quantity-wrapper")
      .find(".lights-item-quantity");
    input.val(parseInt(input.val(), 10) + 1);
    input.trigger("input");
  });

  $(".quantity-down").on("click", function () {
    const input = $(this)
      .closest(".quantity-wrapper")
      .find(".lights-item-quantity");
    input.val(Math.max(0, parseInt(input.val(), 10) - 1));
    input.trigger("input");
  });
});
