var colorfulElements = $(".intro-section")
var colorNameDisplay = $("#color-display")

colorfulElements.hover(function(e) {
  var elementHoveredOver = $(e.target)
  colorNameDisplay.html(elementHoveredOver.attr("data-cool"));
})