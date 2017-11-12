//Javascript Document

// Select size input
let height = 30,
    width = 30,
    color = "#eeee00",
    reset = 0;

/**
* @description Executes a fade in 
* @param {string} element - The DOM element you want to affect with the animation
* @param {string} color - A background color you want the element to have after fade in
*/
function animate(element, color) {
  $(element).fadeOut(3000, function() {
    $(element).css({"background-color": color});
  });
  $(element).fadeIn("slow");
}

animate("h1", "#eeee00");

//store the values for ht and width each time they are entered
$("#sizePicker").change(function() {
  height = $('#input_height').val();
  console.log(height);
  width = $('#input_width').val();
  console.log(width);
  return width, height;
});

//store the color used, if changed from default (#eeee00) 
$("#colorPickerForm").change(function() {
  color = $('#colorPicker').val();
  console.log(color);
});

/**
* @description Creates a HTML table grid based on height and width parameters
* @param {number} h - The number of rows in a grud
* @param {number} w - The number of columns in a grid
*/
function makeGrid(h, w) {
  if (reset < 1) {
    for (let i = 1; i <= h; i++) { 
      $("<tr class='tr-row'></tr>").appendTo(".pixel-canvas");
    }
    for (let j = w; j > 0; j--) {
      $("<td class='td-cell'></td>").appendTo(".tr-row");
    }
  reset = 1; //checks to see if submit has been previously clicked
  }
  else {
    $(".tr-row").remove(); //remove previous grid if reset = 1
    $(".td-cell").remove();
    for (let k = 1; k <= h; k++) { 
      $("<tr class='tr-row'></tr>").appendTo(".pixel-canvas");
    }
    for (let m = w; m > 0; m--) {
      $("<td class='td-cell'></td>").appendTo(".tr-row");
    }
  }
}

//calls the makeGrid function anytime the submit button is clicked
$("#sizePicker").submit(function () {
  makeGrid(height, width);
$(".td-cell").click(function() { //click to change cell to color
    $(this).css({"transition": "background-color 1s ease-in", "background-color": color});
  });
  $(".td-cell").dblclick(function() { //double click to change cell color back to white
    $(this).css({"transition": "background-color 1s ease-in", "background-color": "#fff"});
  });
  return false; //to stop submit from reloading
});



//Question for reviewer: Using 'let' tod ecalre variables triggers a LINT warning -->
//['let' is avaialb ES6 (use eversion 6) or Mozilla JS extension.]
//What does this mean and is this something I should be conerned about?
