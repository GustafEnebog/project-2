//-------------------- GETTING INPUT FROM FORM FIELD AND CALCULATING PARAMETERS FOR COMPLETE WING --------------------
let bHalf = [null, null, null, null];
let cRoot = [null, null];
let cTip = [null, null, null, null];
let xDelta = [null, null, null, null];
let delta = [null, null, null, null];


// var canvas = document.getElementById('drawing'); // according to tip from "Faheel" at https://stackoverflow.com/questions/34772957/how-to-make-canvas-responsive
// var heightRatio = 1,5;
// canvas.height = canvas.width * heightRatio;

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
  // cRoot[2] = parseInt(document.getElementById('croot-p2').innerText);
  // cRoot[3] = parseInt(document.getElementById('croot-p3').innerText);
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
}

function calcDelta() {
  delta[1] = parseInt(document.getElementById('delta-p1').value);
  delta[2] = parseInt(document.getElementById('delta-p2').value);
  delta[3] = parseInt(document.getElementById('delta-p3').value);
  delta[0] = "n/a";
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

let P1X = [null, null, null, null];
let P1Y = [null, null, null, null];
let P2X = [null, null, null, null];
let P2Y = [null, null, null, null];
let P3X = [null, null, null, null];
let P3Y = [null, null, null, null];

// Conversion factor (since java script uses radians instead of degrees) to be used in sin trigonoetric function below
const degToRad = (Math.PI / 180);

//-------------------- PLOTTING WINGPANEL USING CANVAS - THE STARTING POINT FOR BELOW CODE COMES FROM https://www.w3schools.com/graphics/canvas_shapes.asp --------------------
// Setting size of canvas

// canvasHeight = (Math.max(...plotArrayY) - Math.min(...plotArrayY));
// canvasWidth = (Math.max(...plotArrayY) - Math.min(...plotArrayY));
// var canvas = document.querySelector('canvas'); // Credit to https://www.youtube.com/@KevinPowell (if I remember correctly!)
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// drawing.height = canvasHeight;
// drawing.width = canvasWidth;

// Create a canvas:
const canvas = document.getElementById("drawing");
const ctx = canvas.getContext("2d");

// Style the line - General
ctx.strokeStyle = "black";
ctx.lineCap = "round";

/* The canvas plots are dispersed out into the below functions
so that as each aspect get printed right away as it becomes available.
This also has the added benefit that we do not need to write the if-statements twice. */

// Sweep line Panel 1
function calcSweepP1() {
  if (cRoot[1] != "" && xDelta[1] != "" && bHalf[1] != "" && bHalf[2] != "" && delta[1] != "") {
    sweepP1X[0] = cRoot[1] * 0.01 * xDelta[1];
    sweepP1Y[0] = 0;

    sweepP1X[1] = sweepP1X[0] + bHalf[1] * Math.tan(degToRad * delta[1]);
    sweepP1Y[1] = bHalf[1];

    // If Display Horizontal is choosen (Transposing x asssignes y and y assignes x)
    // if (displayHoriz == 1) {
    //  for (let i = 0; i < 2; i++) {
    //      let sweepP1XTemp[0] = sweepP1X[0];
    //      sweepP1X[0] = sweepP1Y[0];
    //      sweepP1Y[0] = sweepP1XTemp[0];
    //  }
    // }

    // ---------- Plot ----------
    // Define a new path: 
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "1";
    ctx.setLineDash([10, 5]); /*dashes are 5px and spaces are 3px*/

    // Define a start point
    ctx.moveTo(sweepP1X[0], sweepP1Y[0]);

    // Define points
    ctx.lineTo(sweepP1X[1], sweepP1Y[1]);

    // Draw it
    ctx.stroke();
  }
}

// Sweep line Panel 2
function calcSweepP2() {
  if (sweepP1X[1] != "" && cTip[1] != "" && xDelta[1] != "" && xDelta[2] != "" && bHalf[2] != "" && bHalf[2] != "" && delta[2] != "") {
    sweepP2X[0] = sweepP1X[1] - cTip[1] * 0.01 * xDelta[1] + cTip[1] * 0.01 * xDelta[2];
    sweepP2Y[0] = bHalf[1];

    sweepP2X[1] = sweepP2X[0] + bHalf[2] * Math.tan(degToRad * delta[2]);
    sweepP2Y[1] = bHalf[1] + bHalf[2];

    // ---------- Plot ----------
    // Define a new path: 
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "1";
    ctx.setLineDash([10, 5]); /*dashes are 5px and spaces are 3px*/

    // Define a start point
    ctx.moveTo(sweepP2X[0], sweepP2Y[0]);

    // Define points
    ctx.lineTo(sweepP2X[1], sweepP2Y[1]);

    // Draw it
    ctx.stroke();
  }
}

// Sweep line Panel 3
function calcSweepP3() {
  if (cTip[2] != "" && xDelta[3] != "" && bHalf[3] != "" && bHalf[3] != "" && delta[3] != "") {
    sweepP3X[0] = sweepP2X[1] - cTip[2] * 0.01 * xDelta[2] + cTip[2] * 0.01 * xDelta[3];
    sweepP3Y[0] = bHalf[1] + bHalf[2];

    sweepP3X[1] = sweepP3X[0] + bHalf[3] * Math.tan(degToRad * delta[3]);
    sweepP3Y[1] = bHalf[1] + bHalf[2] + bHalf[3];

    // ---------- Plot ----------
    // Define a new path: 
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "1";
    ctx.setLineDash([10, 5]); /*dashes are 5px and spaces are 3px*/

    // Define a start point
    ctx.moveTo(sweepP3X[0], sweepP3Y[0]);

    // Define points
    ctx.lineTo(sweepP3X[1], sweepP3Y[1]);

    // Draw it
    ctx.stroke();
  }
}


console.log("Test w sweep");
console.log(bHalf[1] * Math.tan(degToRad * delta[1]));
console.log(bHalf[2] * Math.tan(degToRad * delta[2]));
console.log(bHalf[3] * Math.tan(degToRad * delta[3]));


// Panel 1
function calcP1() {
  if (sweepP1X[1] != "" && cTip[1] != "" && xDelta[1] != "" && bHalf[1] != "" && cRoot[1] != "") {
    P1X[0] = 0;
    P1Y[0] = 0;

    P1X[1] = sweepP1X[1] - cTip[1] * 0.01 * xDelta[1];
    // P1X[1] = sweepP2X[1] - cTip[2] * 0.01 * xDelta[2] - cTip[1] * 0.01 * xDelta[1];
    P1Y[1] = bHalf[1];

    P1X[2] = P1X[1] + cTip[1];
    // P1X[2] = sweepP1X[1] + cTip[1] * 0.01 * (100 - xDelta[1]);
    P1Y[2] = bHalf[1];

    P1X[3] = cRoot[1];
    P1Y[3] = 0;

    // ---------- Plot ----------
    // Define a new path:
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "2";

    // Draw leading edge
    // Define a start point
    ctx.moveTo(P1X[0], P1Y[0]);

    // Define points
    ctx.lineTo(P1X[1], P1Y[1]);

    // Draw it
    ctx.stroke();

    // Draw trailing edge
    // Define a start point
    ctx.moveTo(P1X[2], P1Y[2]);

    // Define points
    ctx.lineTo(P1X[3], P1Y[3]);

    // Draw it
    ctx.stroke();

    // Draw wing root chord
    // Define a start point
    ctx.moveTo(P1X[0], P1Y[0]);

    // Define points
    ctx.lineTo(P1X[3], P1Y[3]);

    // Draw it
    ctx.stroke();

    // Draw panel Tip chord
    // Define a new path:
    ctx.beginPath();

    // Style the line  - Specific
    ctx.lineWidth = "1";

    // Define a start point
    ctx.moveTo(P1X[1], P1Y[1]);

    // Define points
    ctx.lineTo(P1X[2], P1Y[2]);

    // Draw it
    ctx.stroke();
  }
}

// Panel 2
function calcP2() {
  if (sweepP1X[1] != "" && cTip[1] != "" && xDelta[1] != "" && bHalf[1] != "" && cRoot[1] != "") {
    P2X[0] = P1X[1];
    P2Y[0] = P1Y[1];

    P2X[1] = sweepP2X[1] - cTip[2] * 0.01 * xDelta[2];
    // P2X[1] = sweepP2X[1] - cTip[2] * 0.01 * xDelta[2];
    P2Y[1] = P1Y[1] + bHalf[2];

    P2X[2] = P2X[1] + cTip[2];
    // P2X[2] = sweepP2X[1] + cTip[2] * 0.01 * (100 - xDelta[2]);
    P2Y[2] = P1Y[1] + bHalf[2];

    P2X[3] = P1X[2]; //+ cTip[2];
    P2Y[3] = P1Y[2];

    // ---------- Plot ----------
    // Define a new path:
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "2";

    // Draw leading edge
    // Define a start point
    ctx.moveTo(P2X[0], P2Y[0]);

    // Define points
    ctx.lineTo(P2X[1], P2Y[1]);

    // Draw it
    ctx.stroke();

    // Draw trailing edge
    // Define a start point
    ctx.moveTo(P2X[2], P2Y[2]);

    // Define points
    ctx.lineTo(P2X[3], P2Y[3]);

    // Draw it
    ctx.stroke();

    // Draw panel Tip chord
    // Define a new path:
    ctx.beginPath();

    // Style the line  - Specific
    ctx.lineWidth = "1";

    // Define a start point
    ctx.moveTo(P2X[1], P2Y[1]);

    // Define points
    ctx.lineTo(P2X[2], P2Y[2]);

    // Draw it
    ctx.stroke();
  }
}

// Panel 3
function calcP3() {
  if (sweepP1X[1] != "" && cTip[1] != "" && xDelta[1] != "" && bHalf[1] != "" && cRoot[1] != "") {
    P3X[0] = P2X[1];
    P3Y[0] = P2Y[1];

    P3X[1] = sweepP3X[1] - cTip[3] * 0.01 * xDelta[3];
    // P3X[1] = sweepP3X[1] - cTip[3] * 0.01 * xDelta[3];
    P3Y[1] = P2Y[1] + bHalf[3];

    P3X[2] = P3X[1] + cTip[3];
    // P3X[2] = sweepP3X[1] + cTip[3] * 0.01 * (100 - xDelta[3]);
    P3Y[2] = P2Y[1] + bHalf[3];

    P3X[3] = P2X[2]; // + cTip[3];
    P3Y[3] = P2Y[2];

    // ---------- Plot ----------
    // Define a new path:
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "2";

    // Draw leading edge
    // Define a start point
    ctx.moveTo(P3X[0], P3Y[0]);

    // Define points
    ctx.lineTo(P3X[1], P3Y[1]);

    // Draw it
    ctx.stroke();

    // Draw trailing edge
    // Define a start point
    ctx.moveTo(P3X[2], P3Y[2]);

    // Define points
    ctx.lineTo(P3X[3], P3Y[3]);

    // Draw it
    ctx.stroke();

    // Draw panel Tip chord
    // Define a new path:
    ctx.beginPath();

    // Style the line  - Specific
    ctx.lineWidth = "1";

    // Define a start point
    ctx.moveTo(P3X[1], P3Y[1]);

    // Define points
    ctx.lineTo(P3X[2], P3Y[2]);

    // Draw it
    ctx.stroke();
  }
}

// let displayHoriz = 1

// If Display Horizontal is choosen -> Rotate
//   if (displayHoriz == 1) {
//       ctx.rotate(-45 * Math.PI / 180);
//  }

//-------------------- LET IT ALL HAPPEN (EVENTLISTENER)! --------------------
function funcForEvent() {
  console.log("funcForEvent");
  ctx.clearRect(0, 0, 500, 500);  // Change the "500" to canvas width and height once the calculations of these has been made
  calcBHalf();
  calcCRoot();
  calcCTip();
  calcXDelta();
  calcDelta();
  calcLambda();
  calcCSmc();
  calcSHalf();
  calcAr();
  calcSweepP1();
  calcSweepP2();
  calcSweepP3();
  calcP1();
  calcP2();
  calcP3();
}

// Alternative 1 - Should I use "changes" instead of "oninput"
// document.body.addEventListener("click", funcForEvent);

// Alternative 2
//let paramInputs = document.querySelectorAll(".paramInput");
//for (let paramInput of paramInputs) { // for (let i = 0; i < variableInputs.length; i++) {
//paramInput.addEventListener('change', funcForEvent);
//}

// Alternative 3
// document.getElementById('input-output-form').addEventListener('click', funcForEvent)

// Alternative 4

document.querySelectorAll('.param-input').forEach(function (input) {
  input.addEventListener('input', funcForEvent);
  // Check if the Enter key was pressed
  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      funcForEvent();
    }
  });
});