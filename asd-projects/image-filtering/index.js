// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(increaseGreenByBlue);
applyFilter(increaseGreenByBlue);
applyFilter(reddify);


  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  //The image is an array of arrays.
  for (var i = 0; i < image.length; i++) {
    //Row stores an array of strings
    var row = image[i];
    for (var j = 0; j < row.length; j++) {
     //this a string
      var pixel = row[j];
      var pixelArray = rgbStringToArray(pixel);
      //this where we midify the colors later 
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);

      image[i][j] = updatedPixel;
    
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function

function applyFilterNoBackground(filterFunction){
var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++) {
    //Row stores an array of strings
    var row = image[i];
    for (var j = 0; j < row.length; j++) {
     //this a string
      var pixel = row[j];
      var pixelArray = rgbStringToArray(pixel);
      //this where we midify the colors later 
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);

      
      if (image [i] [j] !== backgroundColor){
        image[i][j] = updatedPixel;
        }
    }
  }
}




// TODO 6: Create the keepInBounds function

function keepInBounds(number){
  if (number < 0){
    return 0;
  }
  else if (number > 255){
    return 255;
  }
  else{
    return number;
  }
}
// TODO 4: Create reddify filter function

function reddify(pixel){
pixel[RED] = 200; 
}


// TODO 7 & 8: Create more filter functions
function decreaseBlue (pixel){
pixel[BLUE] = keepInBounds(pixel[BLUE] -50);
}

function increaseGreenByBlue(pixel){
  pixel[GREEN] = keepInBounds(pixel[GREEN] + pixel[BLUE]);
}
// code goes below here