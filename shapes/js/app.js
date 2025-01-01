//Functions for creating basic shapes using JavaScript

window.onload = function () {
  //canvas preparation
  let myCanvas = document.getElementById("myCanvas");
  let kontext = myCanvas.getContext("2d");

  //function to draw a hexagon in portrain ----------------------------------------
  function hexagonPortrait(
    centerPoint,
    sizeShape,
    colorOutline = "#40E0D0", //the default value will be used if the user does not enter anything
    widthOutline = 4,
    colorFill = "#D7FFFF"
  ) {
    let x = centerPoint[0];
    let y = centerPoint[1];

    //colors
    kontext.strokeStyle = colorOutline;
    kontext.lineWidth = widthOutline;
    kontext.fillStyle = colorFill;

    //shifts
    let shiftXRight = x + sizeShape * 0.44;
    let shiftXLeft = x - sizeShape * 0.44;
    let shiftYUpBig = y - sizeShape * 0.5;
    let shiftYDownBig = y + sizeShape * 0.5;
    let shiftYUp = y - sizeShape * 0.25;
    let shiftYDown = y + sizeShape * 0.25;

    kontext.beginPath();
    kontext.moveTo(x, shiftYUpBig);
    kontext.lineTo(shiftXRight, shiftYUp);
    kontext.lineTo(shiftXRight, shiftYDown);
    kontext.lineTo(x, shiftYDownBig);
    kontext.lineTo(shiftXLeft, shiftYDown);
    kontext.lineTo(shiftXLeft, shiftYUp);
    kontext.closePath();
    kontext.stroke();
    kontext.fill();
  }
  //--------------------------------------------------------------------------------

  //let hexagon = hexagonPortrait([200, 200], 100); // Function call; center, size

  //function to draw a hexagon in landscape ----------------------------------------
  function hexagonLandscape(
    centerPoint,
    sizeShape,
    colorOutline = "#40E0D0", //the default value will be used if the user does not enter anything
    widthOutline = 4,
    colorFill = "#D7FFFF"
  ) {
    let x = centerPoint[0];
    let y = centerPoint[1];

    //colors
    kontext.strokeStyle = colorOutline;
    kontext.lineWidth = widthOutline;
    kontext.fillStyle = colorFill;

    //shifts
    let shiftXRight = x + sizeShape * 0.25;
    let shiftXLeft = x - sizeShape * 0.25;
    let shiftXRightBig = x + sizeShape * 0.5;
    let shiftXLeftBig = x - sizeShape * 0.5;
    let shiftYUp = y - sizeShape * 0.44;
    let shiftYDown = y + sizeShape * 0.44;

    kontext.beginPath();
    kontext.moveTo(shiftXLeft, shiftYUp);
    kontext.lineTo(shiftXRight, shiftYUp);
    kontext.lineTo(shiftXRightBig, y);
    kontext.lineTo(shiftXRight, shiftYDown);
    kontext.lineTo(shiftXLeft, shiftYDown);
    kontext.lineTo(shiftXLeftBig, y);
    kontext.closePath();
    kontext.stroke();
    kontext.fill();
  }
  //--------------------------------------------------------------------------------

  //let hexagon = hexagonLandscape([200, 200], 100); // Function call; center, size

  //function to draw a star ----------------------------------------
  function starLandscape(
    centerPoint,
    sizeShape,
    colorOutline = "#40E0D0", //the default value will be used if the user does not enter anything
    widthOutline = 4,
    colorFill = "#D7FFFF"
  ) {
    let x = centerPoint[0];
    let y = centerPoint[1];

    //colors
    kontext.strokeStyle = colorOutline;
    kontext.lineWidth = widthOutline;
    kontext.fillStyle = colorFill;

    //shifts
    let shiftXRight1 = x + sizeShape * 0.18;
    let shiftXRight2 = x + sizeShape * 0.25;
    let shiftXRight3 = x + sizeShape * 0.5;
    let shiftXLeft1 = x - sizeShape * 0.18;
    let shiftXLeft2 = x - sizeShape * 0.25;
    let shiftXLeft3 = x - sizeShape * 0.5;
    let shiftYUp1 = y - sizeShape * 0.44;
    let shiftYUp2 = y - sizeShape * 0.22;
    let shiftYUp3 = y - sizeShape * 0.1;
    let shiftYDown1 = y + sizeShape * 0.1;
    let shiftYDown2 = y + sizeShape * 0.22;
    let shiftYDown3 = y + sizeShape * 0.44;

    kontext.beginPath();
    kontext.moveTo(shiftXLeft2, shiftYUp1);
    kontext.moveTo(shiftXLeft2, shiftYUp1);
    kontext.lineTo(x, shiftYUp2);
    kontext.lineTo(shiftXRight2, shiftYUp1);
    kontext.lineTo(shiftXRight1, shiftYUp3);
    kontext.lineTo(shiftXRight3, y);
    kontext.lineTo(shiftXRight1, shiftYDown1);
    kontext.lineTo(shiftXRight2, shiftYDown3);
    kontext.lineTo(x, shiftYDown2);
    kontext.lineTo(shiftXLeft2, shiftYDown3);
    kontext.lineTo(shiftXLeft1, shiftYDown1);
    kontext.lineTo(shiftXLeft3, y);
    kontext.lineTo(shiftXLeft1, shiftYUp3);
    kontext.closePath();
    kontext.stroke();
    kontext.fill();
  }
  //--------------------------------------------------------------------------------

  //let star = starLandscape([200, 200], 100); // Function call; center, size

  // change of appearance --------------------------------------------------------------------------------
  let selectedShape = hexagonPortrait([200, 200], 100); //default state

  //change radiobutton
  const shapeSelection = document.querySelectorAll('input[name="shape"]');

  shapeSelection.forEach((radioButton) => {
    radioButton.addEventListener("change", () => {
      const selectedValue = document.querySelector(
        'input[name="shape"]:checked'
      ).value;

      switch (selectedValue) {
        case "hexagonPortrait": {
          kontext.clearRect(0, 0, myCanvas.width, myCanvas.height); //clean
          selectedShape = hexagonPortrait([200, 200], 100);
          break;
        }
        case "hexagonLandscape": {
          kontext.clearRect(0, 0, myCanvas.width, myCanvas.height);
          selectedShape = hexagonLandscape([200, 200], 100);
          break;
        }
        case "starLandscape": {
          kontext.clearRect(0, 0, myCanvas.width, myCanvas.height);
          selectedShape = starLandscape([200, 200], 100);
          break;
        }
        default: {
          kontext.clearRect(0, 0, myCanvas.width, myCanvas.height);
          selectedShape = starLandscape([200, 200], 100);
        }
      }
    });
  });
};
