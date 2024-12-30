/**
 * Toggle Image Script
 *
 * Description: This script handles toggling between two images to simulate a toggle switch.
 * It updates the image source and associated attributes dynamically based on user interaction.
 *
 * Author: LuCa
 * Date: 2024-12-30
 * Version: 1.0
 *
 * Dependencies: Ensure the images are correctly linked and exist in the specified paths.
 */

window.onload = function () {
  //element
  let toggle = document.getElementById("toggle");

  //image exchange function
  function toggleImage() {
    if (toggle.getAttribute("src") === "img/toggle-color.svg") {
      toggle.src = "img/toggle-grey.svg";
    } else {
      toggle.src = "img/toggle-color.svg";
    }
  }

  toggle.onclick = toggleImage;
};
