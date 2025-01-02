/**
 * This script creates a spinning "wheel of fortune" using an HTML5 canvas.
 * The wheel consists of two parts:
 * - A rotating bottom layer.
 * - A static top layer with a pointer.
 *
 * The animation is controlled by two buttons:
 * - "Start" button: Starts the spinning animation.
 * - "Stop" button: Stops the animation.
 *
 * The initial state of the wheel is rendered statically.
 *
 * Author: LuCa
 * Date: 2025-01-02
 * Version: 1.0
 */

window.onload = function () {
  // Create a 2D canvas
  let myCanvas = document.getElementById("myCanvas");
  let kontext = myCanvas.getContext("2d");

  // Define images
  let myImage = document.getElementById("wheel"); // Size: 360px
  myImage.style.display = "none"; // Hide the image

  let myImageTop = document.getElementById("wheelTop"); // Size: 368px
  myImageTop.style.display = "none"; // Hide the image

  let twist = 0; // Angle for rotation
  let interval = null; // Animation interval

  // Function for animating the bottom part of the wheel and rendering the static top part
  function redrawing() {
    kontext.clearRect(0, 0, 400, 400); // Clear the canvas

    // Render the rotating bottom image
    kontext.save();
    kontext.translate(200, 200);
    kontext.rotate(twist);
    kontext.drawImage(myImage, -180, -180);
    kontext.restore();

    // Render the static top image
    kontext.drawImage(myImageTop, 16, 16);
  }

  // Start the animation
  function startAnimation() {
    if (!interval) {
      // Ensure the animation doesn't start multiple times
      interval = setInterval(() => {
        twist += Math.PI / 12; // Rotation angle = 15°
        redrawing();
      }, 70); // Repeat the function every 70 ms
    }
  }

  // Stop the animation
  function stopAnimation() {
    clearInterval(interval); // Clear the interval
    interval = null; // Reset the interval
  }

  // Add event listeners for buttons
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");

  startButton.addEventListener("click", startAnimation);
  stopButton.addEventListener("click", stopAnimation);

  // Clear the interval when leaving the page
  window.addEventListener("beforeunload", function () {
    clearInterval(interval);
  });

  // Render the initial static state
  redrawing();
};
