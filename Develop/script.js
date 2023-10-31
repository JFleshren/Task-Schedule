$(document).ready(function() {
  var timeBlockContainer = $("#time-block-container");
  var currentHour = dayjs().hour();
  var savedText = JSON.parse(localStorage.getItem("savedText"));
  console.log(savedText)
  for (var hour = 9; hour <= 17; hour++) {
      var formattedHour = dayjs().hour(hour).format("hA");
      var currentHour = dayjs().hour();
      var timeBlock = $("<div>")
          .attr("id", "hour-" + hour)
          .addClass("row time-block");

      if (hour < currentHour) {
          timeBlock.addClass("past");
      } else if (hour === currentHour) {
          timeBlock.addClass("present");
      } else {
          timeBlock.addClass("future");
      }
      timeBlock.html(`
      <div class="col-2 col-md-4 col-lg-12 hour text-center py-3">${formattedHour}</div>
      <textarea class="col-8 col-md-10 col-lg-12 description" rows="4"></textarea>
      <button class="btn saveBtn col-2 col-md-1 col-lg-2" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
      </button>
  `);
  (function(hourId) {
    var saveBtn = timeBlock.find(".saveBtn");
    saveBtn.click(function() {
        var textArea = $(this).siblings(".description");
        var enteredText = textArea.val().trim();
        savedText[hourId] = enteredText;
        localStorage.setItem("savedText", JSON.stringify(savedText))
        alert("Event Added!");
        saveToLocalStorage("savedText", savedText)
    });
})("hour-" + hour);
  timeBlockContainer.append(timeBlock);
    }
});






// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
