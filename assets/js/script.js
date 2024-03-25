// Conversion factor (since java script uses radians instead of degrees) to be used in sin trigonoetric function below
const degToRad = (Math.PI / 180);

const canvasWidthFix = 320;
const canvasHeightFix = 569;

var mode = document.getElementById("modeButton");

mode.addEventListener("click", function (event) { // Help from Roo
  // check if light-mode
  if (event.target.classList.contains("light-mode")) {
    event.target.classList.remove("light-mode"); // remove light
    event.target.classList.add("dark-mode"); // Add dark
    console.log("Add Dark");
  } else {
    event.target.classList.remove("dark-mode"); // Remove dark
    event.target.classList.add("light-mode"); // Add light
    console.log("Add Light");
  }
});

//-------------------- GETTING INPUT FROM FORM FIELD AND CALCULATING PARAMETERS FOR COMPLETE WING --------------------
let bHalf = [null, null, null, null];
let cRoot = [null, null];
let cTip = [null, null, null, null];
let xDelta = [null, null, null, null];
let delta = [null, null, null, null];

// Get the inputs from the html-form
function calcBHalf() {
  bHalf[1] = parseInt(document.getElementById('bhalf-p1').value);
  bHalf[2] = parseInt(document.getElementById('bhalf-p2').value);
  bHalf[3] = parseInt(document.getElementById('bhalf-p3').value);

  if (bHalf[1] != "" && bHalf[2] != "" && bHalf[3] != "") {
    bHalf[0] = bHalf[1] + bHalf[2] + bHalf[3];
    document.getElementById("bHalf[0]").innerHTML = bHalf[0];
  }
}

function calcCRoot() {
  cRoot[1] = parseInt(document.getElementById('croot-p1').value);
  if (cRoot[1] != "") {
    cRoot[0] = cRoot[1];
    cRoot[1] = cRoot[1]; // Unique to this parameter since the root chord for the complete wing and the first panel is the same 
    document.getElementById("cRoot[0]").innerHTML = cRoot[0];
  }
}

function calcCTip() {
  cTip[1] = parseInt(document.getElementById('ctip-p1').value);
  cTip[2] = parseInt(document.getElementById('ctip-p2').value);
  cTip[3] = parseInt(document.getElementById('ctip-p3').value);
  if (cTip[3] != "") {
    cTip[0] = cTip[3];
    document.getElementById("cTip[0]").innerHTML = cTip[0];
  }
}

function calcXDelta() {
  xDelta[1] = parseInt(document.getElementById('xdelta-p1').value);
  xDelta[2] = parseInt(document.getElementById('xdelta-p2').value);
  xDelta[3] = parseInt(document.getElementById('xdelta-p3').value);
  xDelta[0] = "n/a";
  deltaAlert();
}

function calcDelta() {
  delta[1] = parseInt(document.getElementById('delta-p1').value);
  delta[2] = parseInt(document.getElementById('delta-p2').value);
  delta[3] = parseInt(document.getElementById('delta-p3').value);
  delta[0] = "n/a";
  deltaAlert();
}

function deltaAlert() {
  if (delta[1] >= 60 || delta[2] >= 60 || delta[3] >= 60) {
    alert('That is a lot, are you sure you know what you are doing!?');
  }
}

//-------------------- CALCULATE OUTPUT USING INPUT FROM FORM FIELD --------------------
let lambda = [null, null, null, null];
let cSmc = [null, null, null, null];
let sHalf = [null, null, null, null];
let ar = [null, null, null, null];

// Calculate lambda from above input
function calcLambda() {
  // Labmbda for Panel 1
  if (cTip[1] != "" && cRoot[1] != "") {
    lambda[1] = cTip[1] / cRoot[1];
    document.getElementById("lambda[1]").innerHTML = lambda[1];
  }

  // Labmbda for Panel 2
  if (cTip[2] != "" && cTip[1] != "") {
    lambda[2] = cTip[2] / cTip[1];
    document.getElementById("lambda[2]").innerHTML = lambda[2];
  }

  // Labmbda for Panel 3
  if (cTip[3] != "" && cTip[2] != "") {
    lambda[3] = cTip[3] / cTip[2];
    document.getElementById("lambda[3]").innerHTML = lambda[3];
  }

  // Labmbda for Complete Wing
  if (cTip[3] != "" && cRoot[1] != "") {
    lambda[0] = cTip[3] / cRoot[1];
    document.getElementById("lambda[0]").innerHTML = lambda[0];
  }
}

// Calculate cSmc from above input
function calcCSmc() {
  // cSmc for Panel 1
  if (cRoot[1] != "" && cTip[1] != "") {
    cSmc[1] = (cRoot[1] + cTip[1]) / 2;
    document.getElementById("cSmc[1]").innerHTML = cSmc[1];
  }

  // cSmc for Panel 2
  if (cTip[1] != "" && cTip[2] != "") {
    cSmc[2] = (cTip[1] + cTip[2]) / 2;
    document.getElementById("cSmc[2]").innerHTML = cSmc[2];
  }

  // cSmc for Panel 3
  if (cTip[2] != "" && cTip[3] != "") {
    cSmc[3] = (cTip[2] + cTip[3]) / 2;
    document.getElementById("cSmc[3]").innerHTML = cSmc[3];
  }

  // cSmc for Complete wing
  if (cSmc[1] != "" && cSmc[2] != "" && cSmc[3] != "" && bHalf[1] != "" && bHalf[2] != "" && bHalf[3] != "") {
    cSmc[0] = ((bHalf[1] * (cSmc[1])) + (bHalf[2] * (cSmc[2])) + (bHalf[3] * (cSmc[3]))) / (bHalf[1] + bHalf[2] + bHalf[3]);
    document.getElementById("cSmc[0]").innerHTML = cSmc[0];
  }
}

// Calculate sHalf from above input (and cSmc from directly above)
function calcSHalf() {
  // sHalf for Panel 1
  if (cSmc[1] != "" && bHalf[1] != "") {
    sHalf[1] = cSmc[1] * bHalf[1];
    document.getElementById("sHalf[1]").innerHTML = sHalf[1];
  }

  // sHalf for Panel 2
  if (cSmc[2] != "" && bHalf[2] != "") {
    sHalf[2] = cSmc[2] * bHalf[2];
    document.getElementById("sHalf[2]").innerHTML = sHalf[2];
  }

  // sHalf for Panel 3
  if (cSmc[3] != "" && bHalf[3] != "") {
    sHalf[3] = cSmc[3] * bHalf[3];
    document.getElementById("sHalf[3]").innerHTML = sHalf[3];
  }

  // sHalf for Complete wing (using also parameters calculated in imediate above rows)
  if (sHalf[1] != "" && sHalf[2] != "" && sHalf[3]) {
    sHalf[0] = sHalf[1] + sHalf[2] + sHalf[3];
    document.getElementById("sHalf[0]").innerHTML = sHalf[0];
  }
}

// Calculate ar from above input
function calcAr() {
  // ar for Panel 1
  if (bHalf[1] != "" && sHalf[1] != "") {
    ar[1] = bHalf[1] ** 2 / sHalf[1];
    document.getElementById("ar[1]").innerHTML = ar[1];
  }

  // ar for Panel 2
  if (bHalf[2] != "" && sHalf[2] != "") {
    ar[2] = bHalf[2] ** 2 / sHalf[2];
    document.getElementById("ar[2]").innerHTML = ar[2];
  }

  // ar for Panel 3
  if (bHalf[3] != "" && sHalf[3] != "") {
    ar[3] = bHalf[3] ** 2 / sHalf[3];
    document.getElementById("ar[3]").innerHTML = ar[3];
  }

  // ar for Complete wing
  if (bHalf[0] != "" && sHalf[0] != "") {
    ar[0] = bHalf[0] ** 2 / sHalf[0];
    document.getElementById("ar[0]").innerHTML = ar[0];
  }
}

//-------------------- CALCULATING ARRAYS FOR DRAWING BASED ON INPUT AND CALCULATED PARAMETERS FROM ABOVE --------------------
let sweepP1X = [null, null];
let sweepP1Y = [null, null];
let sweepP2X = [null, null];
let sweepP2Y = [null, null];
let sweepP3X = [null, null];
let sweepP3Y = [null, null];

let outlineP1X = [null, null, null, null];
let outlineP1Y = [null, null, null, null];
let outlineP2X = [null, null, null, null];
let outlineP2Y = [null, null, null, null];
let outlineP3X = [null, null, null, null];
let outlineP3Y = [null, null, null, null];

// Sweep line Panel 1
function calcSweepP1() {
  if (cRoot[1] != "" && xDelta[1] != "" && bHalf[1] != "" && delta[1] != "") { // && bHalf[2] != ""
    sweepP1X[0] = cRoot[1] * 0.01 * xDelta[1];
    sweepP1Y[0] = 0;

    sweepP1X[1] = sweepP1X[0] + bHalf[1] * Math.tan(degToRad * delta[1]);
    sweepP1Y[1] = bHalf[1];
  }
}

// Sweep line Panel 2
function calcSweepP2() {
  if (cTip[1] != "" && xDelta[1] != "" && xDelta[2] != "" && bHalf[1] != "" && bHalf[2] != "" && delta[2] != "") {
    sweepP2X[0] = sweepP1X[1] - cTip[1] * 0.01 * xDelta[1] + cTip[1] * 0.01 * xDelta[2];
    sweepP2Y[0] = bHalf[1];

    sweepP2X[1] = sweepP2X[0] + bHalf[2] * Math.tan(degToRad * delta[2]);
    sweepP2Y[1] = bHalf[1] + bHalf[2];
  }
}

// Sweep line Panel 3
function calcSweepP3() {
  if (cTip[2] != "" && delta[2] != "" && xDelta[3] != "" && bHalf[1] != "" && bHalf[2] != "" && bHalf[3] != "") {
    sweepP3X[0] = sweepP2X[1] - cTip[2] * 0.01 * xDelta[2] + cTip[2] * 0.01 * xDelta[3];
    sweepP3Y[0] = bHalf[1] + bHalf[2];

    sweepP3X[1] = sweepP3X[0] + bHalf[3] * Math.tan(degToRad * delta[3]);
    sweepP3Y[1] = bHalf[1] + bHalf[2] + bHalf[3];
  }
}

// Outline Panel 1
function calcOutlineP1() {
  if (cTip[1] != "" && xDelta[1] != "" && bHalf[1] != "" && cRoot[1] != "") {
    outlineP1X[0] = 0;
    outlineP1Y[0] = 0;

    outlineP1X[1] = sweepP1X[1] - cTip[1] * 0.01 * xDelta[1];
    outlineP1Y[1] = bHalf[1];

    outlineP1X[2] = outlineP1X[1] + cTip[1];
    outlineP1Y[2] = bHalf[1];

    outlineP1X[3] = cRoot[1];
    outlineP1Y[3] = 0;
  }
}

// Outline Panel 2
function calcOutlineP2() {
  if (cTip[1] != "" && xDelta[1] != "" && bHalf[1] != "" && cRoot[1] != "") {
    outlineP2X[0] = outlineP1X[1];
    outlineP2Y[0] = outlineP1Y[1];

    outlineP2X[1] = sweepP2X[1] - cTip[2] * 0.01 * xDelta[2];
    // P2X[1] = sweepP2X[1] - cTip[2] * 0.01 * xDelta[2];
    outlineP2Y[1] = outlineP1Y[1] + bHalf[2];

    outlineP2X[2] = outlineP2X[1] + cTip[2];
    // P2X[2] = sweepP2X[1] + cTip[2] * 0.01 * (100 - xDelta[2]);
    outlineP2Y[2] = outlineP1Y[1] + bHalf[2];

    outlineP2X[3] = outlineP1X[2]; //+ cTip[2];
    outlineP2Y[3] = outlineP1Y[2];
  }
}

// Outline Panel 3
function calcOutlineP3() {
  if (cTip[1] != "" && xDelta[1] != "" && bHalf[1] != "" && cRoot[1] != "") {
    outlineP3X[0] = outlineP2X[1];
    outlineP3Y[0] = outlineP2Y[1];

    outlineP3X[1] = sweepP3X[1] - cTip[3] * 0.01 * xDelta[3];
    // P3X[1] = sweepP3X[1] - cTip[3] * 0.01 * xDelta[3];
    outlineP3Y[1] = outlineP2Y[1] + bHalf[3];

    outlineP3X[2] = outlineP3X[1] + cTip[3];
    // P3X[2] = sweepP3X[1] + cTip[3] * 0.01 * (100 - xDelta[3]);
    outlineP3Y[2] = outlineP2Y[1] + bHalf[3];

    outlineP3X[3] = outlineP2X[2]; // + cTip[3];
    outlineP3Y[3] = outlineP2Y[2];
  }
}


//-------------------- PLOTTING WINGPANEL USING CANVAS - THE STARTING POINT FOR BELOW CODE COMES FROM https://www.w3schools.com/graphics/canvas_shapes.asp --------------------

// Calculating the horizontal or vertical size of the drawing
function getDrawingSize() {
  let drawingMax = 0;
  let drawingMin = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > drawingMax) {
      drawingMax = arguments[i];
    }
    if (arguments[i] < drawingMin) {
      drawingMin = arguments[i];
    }
  }
  return drawingMax - drawingMin;
}

// Calculating the width of the drawing
var drawingWidth;

function getDrawingWidth() {
  drawingWidth = getDrawingSize(...outlineP1X, ...outlineP2X, ...outlineP3X);
  // canvas.width = drawingWidth;
}

var drawingHeight;
// Calulating the height of the drawing
function getDrawingHeight() {
  drawingHeight = sweepP3Y[1];
}

/* Compensation factor to make the drawing independent of users input (changing b = 10 to b = 1000 would make the drawing 100 times larger).
The drawing would still fit within the bounds but would be blurry if user input is to small and lines would be too thin if user input is too large.
Initial choise of width of common CSS breakpoint of 320px and a height of 500px gives an Aspect Ratio of 320 / 500 ~= 0,64
This lies close to the (inverse) of standard (used in e.g. YouTube-videos) 16 / 9 ~= 0,5625 so keeping the 320px width as a breakpoint
This gives a a height of 320 x (16 / 9) ~= 569. (480px could also be used instead of 320px). The aspect ratio is defined: width / height */

function getZoomFactor() {
  let viewPortAR = 320 / 569; // (9 / 16);
  let drawingAR = drawingWidth / drawingHeight;
  let zoomFactor = null;
  // Case if drawing width hits the viewport "side" first (before it hits the viewport height)
  if (drawingAR >= viewPortAR) {
    zoomFactor = canvasWidthFix / drawingWidth;
  }
  // Case if drawing height hits the viewport "height" first (before it hits the viewport width)
  else if (drawingAR < viewPortAR) {
    zoomFactor = canvasHeightFix / drawingHeight;
  }
  return zoomFactor;
}

// Compensate (by adding ) for negative x values in plot arrays (sweepP1X, sweepP2X, sweepP3X, outlineP1X, outlineP2X and outlineP3X)
// since the canvas do not have negative values (origo is top left corner of canvas). 
// This compensation will effectivly move the drawing (right) in within the bounds of the drawing.
// Note this is only for the x-values, not the y-values

// Calculating the horizontal compensation term
function getNegXCompFactor() {
  let negX = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < negX) {
      negX = arguments[i];
    }
  }
  return negX;
}

// Compensate all drawing x-coordinates using negXCompFactor

let sweepP1XC = [null, null];
let sweepP2XC = [null, null];
let sweepP3XC = [null, null];
let sweepP1YC = [null, null];
let sweepP2YC = [null, null];
let sweepP3YC = [null, null];

let outlineP1XC = [null, null, null, null];
let outlineP2XC = [null, null, null, null];
let outlineP3XC = [null, null, null, null];
let outlineP1YC = [null, null, null, null];
let outlineP2YC = [null, null, null, null];
let outlineP3YC = [null, null, null, null];

zoomFactor = getZoomFactor();

function compensateNegX() {
  let negXCompFactor;
  negXCompFactor = getNegXCompFactor(...outlineP1X, ...outlineP2X, ...outlineP3X);
  let zoomFactor;
  zoomFactor = getZoomFactor();
  for (let i = 0; i < sweepP1X.length; i++) {
    sweepP1XC[i] = (sweepP1X[i] - negXCompFactor) * getZoomFactor();
    sweepP1YC[i] = sweepP1Y[i] * getZoomFactor();
  }
  console.log(sweepP1X);
  for (let i = 0; i < sweepP2X.length; i++) {
    sweepP2XC[i] = (sweepP2X[i] - negXCompFactor) * getZoomFactor();
    sweepP2YC[i] = sweepP2Y[i] * getZoomFactor();
  }

  for (let i = 0; i < sweepP3X.length; i++) {
    sweepP3XC[i] = (sweepP3X[i] - negXCompFactor) * getZoomFactor();
    sweepP3YC[i] = sweepP3Y[i] * getZoomFactor();
  }

  for (let i = 0; i < outlineP1X.length; i++) {
    outlineP1XC[i] = (outlineP1X[i] - negXCompFactor) * getZoomFactor();
    outlineP1YC[i] = outlineP1Y[i] * getZoomFactor();
  }
  console.log(outlineP2X);
  for (let i = 0; i < outlineP2X.length; i++) {
    outlineP2XC[i] = (outlineP2X[i] - negXCompFactor) * getZoomFactor();
    outlineP2YC[i] = outlineP2Y[i] * getZoomFactor();
  }
  console.log(outlineP2XC);
  for (let i = 0; i < outlineP3X.length; i++) {
    outlineP3XC[i] = (outlineP3X[i] - negXCompFactor) * getZoomFactor();
    outlineP3YC[i] = outlineP3Y[i] * getZoomFactor();
  }
}

// Create a canvas:
const canvas = document.getElementById("drawing");
const ctx = canvas.getContext("2d");

// Style the line - General
ctx.strokeStyle = "black";
ctx.lineCap = "round";

// Panel 1
function plotOutlineP1() {
  if (sweepP1XC[1] != "" && cTip[1] != "" && xDelta[1] != "" && bHalf[1] != "" && cRoot[1] != "") {

    // Define a new path:
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "2";

    // Draw leading edge
    // Define a start point
    ctx.moveTo(outlineP1XC[0], outlineP1YC[0]);

    // Define points
    ctx.lineTo(outlineP1XC[1], outlineP1YC[1]);

    // Draw it
    ctx.stroke();

    // Draw trailing edge
    // Define a start point
    ctx.moveTo(outlineP1XC[2], outlineP1YC[2]);

    // Define points
    ctx.lineTo(outlineP1XC[3], outlineP1YC[3]);

    // Draw it
    ctx.stroke();

    // Draw wing root chord
    // Define a start point
    ctx.moveTo(outlineP1XC[0], outlineP1YC[0]);

    // Define points
    ctx.lineTo(outlineP1XC[3], outlineP1YC[3]);

    // Draw it
    ctx.stroke();

    // Draw panel Tip chord
    // Define a new path:
    ctx.beginPath();

    // Style the line  - Specific
    ctx.lineWidth = "1";

    // Define a start point
    ctx.moveTo(outlineP1XC[1], outlineP1YC[1]);

    // Define points
    ctx.lineTo(outlineP1XC[2], outlineP1YC[2]);

    // Draw it
    ctx.stroke();
  }
}

// Panel 2
function plotOutlineP2() {
  if (sweepP1XC[1] != "" && cTip[1] != "" && xDelta[1] != "" && bHalf[1] != "" && cRoot[1] != "") {

    // Define a new path:
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "2";

    // Draw leading edge
    // Define a start point
    ctx.moveTo(outlineP2XC[0], outlineP2YC[0]);

    // Define points
    ctx.lineTo(outlineP2XC[1], outlineP2YC[1]);

    // Draw it
    ctx.stroke();

    // Draw trailing edge
    // Define a start point
    ctx.moveTo(outlineP2XC[2], outlineP2YC[2]);

    // Define points
    ctx.lineTo(outlineP2XC[3], outlineP2YC[3]);

    // Draw it
    ctx.stroke();

    // Draw panel Tip chord
    // Define a new path:
    ctx.beginPath();

    // Style the line  - Specific
    ctx.lineWidth = "1";

    // Define a start point
    ctx.moveTo(outlineP2XC[1], outlineP2YC[1]);

    // Define points
    ctx.lineTo(outlineP2XC[2], outlineP2YC[2]);

    // Draw it
    ctx.stroke();
  }
}

// Panel 3
function plotOutlineP3() {
  if (sweepP1XC[1] != "" && cTip[1] != "" && xDelta[1] != "" && bHalf[1] != "" && cRoot[1] != "") {

    // Define a new path:
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "2";

    // Draw leading edge
    // Define a start point
    ctx.moveTo(outlineP3XC[0], outlineP3YC[0]);

    // Define points
    ctx.lineTo(outlineP3XC[1], outlineP3YC[1]);

    // Draw it
    ctx.stroke();

    // Draw trailing edge
    // Define a start point
    ctx.moveTo(outlineP3XC[2], outlineP3YC[2]);

    // Define points
    ctx.lineTo(outlineP3XC[3], outlineP3YC[3]);

    // Draw it
    ctx.stroke();

    // Draw panel Tip chord
    // Define a new path:
    ctx.beginPath();

    // Style the line  - Specific
    ctx.lineWidth = "1";

    // Define a start point
    ctx.moveTo(outlineP3XC[1], outlineP3YC[1]);

    // Define points
    ctx.lineTo(outlineP3XC[2], outlineP3YC[2]);

    // Draw it
    ctx.stroke();
  }
}


// Sweep line Panel 1
function plotSweepP1() {
  if (cRoot[1] != "" && xDelta[1] != "" && bHalf[1] != "" && bHalf[2] != "" && delta[1] != "") {

    // Define a new path: 
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "1";
    ctx.setLineDash([10, 5]); /*dashes are 5px and spaces are 3px*/

    // Define a start point
    ctx.moveTo(sweepP1XC[0], sweepP1YC[0]);

    // Define points
    ctx.lineTo(sweepP1XC[1], sweepP1YC[1]);

    // Draw it
    ctx.stroke();

    // Reset to solid line
    ctx.setLineDash([]);
  }
}

// Sweep line Panel 2
function plotSweepP2() {
  if (sweepP1XC[1] != "" && cTip[1] != "" && xDelta[1] != "" && xDelta[2] != "" && bHalf[2] != "" && bHalf[2] != "" && delta[2] != "") {

    // Define a new path: 
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "1";
    ctx.setLineDash([10, 5]); /*dashes are 5px and spaces are 3px*/

    // Define a start point
    ctx.moveTo(sweepP2XC[0], sweepP2YC[0]);

    // Define points
    ctx.lineTo(sweepP2XC[1], sweepP2YC[1]);

    // Draw it
    ctx.stroke();

    // Reset to solid line
    ctx.setLineDash([]);
  }
}

// Sweep line Panel 3
function plotSweepP3() {
  if (cTip[2] != "" && xDelta[3] != "" && bHalf[3] != "" && bHalf[3] != "" && delta[3] != "") {

    // Define a new path: 
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "1";
    ctx.setLineDash([10, 5]); /*dashes are 5px and spaces are 3px*/

    // Define a start point
    ctx.moveTo(sweepP3XC[0], sweepP3YC[0]);

    // Define points
    ctx.lineTo(sweepP3XC[1], sweepP3YC[1]);

    // Draw it
    ctx.stroke();

    // Reset to solid line
    ctx.setLineDash([]);
  }
}

//-------------------- LET IT ALL HAPPEN (EVENTLISTENER)! --------------------
function funcForEvent() {
  calcBHalf();
  calcCRoot();
  calcCTip();
  calcXDelta();
  calcDelta();
  deltaAlert();
  calcLambda();
  calcCSmc();
  calcSHalf();
  calcAr();
  calcSweepP1();
  calcSweepP2();
  calcSweepP3();
  calcOutlineP1();
  calcOutlineP2();
  calcOutlineP3();
  getDrawingWidth();
  getDrawingHeight();
  compensateNegX();
  ctx.clearRect(0, 0, 320, 569); 
  plotSweepP1();
  plotSweepP2();
  plotSweepP3();
  plotOutlineP1();
  plotOutlineP2();
  plotOutlineP3();
}

document.querySelectorAll('.param-input').forEach(function (input) {
  input.addEventListener('input', funcForEvent);
  // Check if the Enter key was pressed
  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      funcForEvent();
    }
  });
});