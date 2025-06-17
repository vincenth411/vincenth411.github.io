/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var walker = { x: 0, y: 0, speedX: 0, speedY: 0 };
  // Game Item Objects
  const KEY = {
    Enter: 13,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
  };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown); // change 'eventType' to the type of event you want to handle
  $(document).on("keyup", handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.Enter) {
      console.log("Enter pressed");
    }
    if (event.which === KEY.left) {
      walker.speedX = -5;
      console.log("left pressed");
    }
    if (event.which === KEY.up) {
      walker.speedY = -5;
      console.log("Up pressed");
    }
    if (event.which === KEY.right) {
      walker.speedX = 5;
      console.log("right pressed");
    }
    if (event.which === KEY.down) {
      walker.speedY = 5;
      console.log("down pressed");
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.Enter) {
      console.log("Enter pressed");
    }
    if (event.which === KEY.left) {
      walker.speedX = 0;
      console.log("left pressed");
    }
    if (event.which === KEY.up) {
      walker.speedY = 0;
      console.log("Up pressed");
    }
    if (event.which === KEY.right) {
      walker.speedX = 0;
      console.log("right pressed");
    }
    if (event.which === KEY.down) {
      walker.speedY = 0;
      console.log("down pressed");
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  console.log($("#board").width)
  function wallCollision() {
    if (walker.x < 0) {
      walker.x -= walker.speedX;
    }
 if (walker.y < 0) {
      walker.y -= walker.speedY;
 }


    if (walker.x > $("#board").width()) {
      walker.x -= walker.speedX ;
    }
    // $("#board").width(0);
    // $("board").height
  }

  function redrawGameItem() {
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
  }

  function repositionGameItem() {
    walker.x = walker.x + walker.speedX;
    walker.y += walker.speedY;
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
