//-------------------- GETTING INPUT FROM FORM FIELD AND CALCULATING PARAMETERS FOR COMPLETE WING --------------------
let bHalf = [null, null, null, null];
let cRoot = [null, null, null, null];
let cTip = [null, null, null, null];
let xDelta = [null, null, null, null];
let delta = [null, null, null, null];


// Get the inputs from the html-form
function calcBHalf() {
  bHalf[1] = parseInt(document.getElementById('bhalf-p1').value);
  bHalf[2] = parseInt(document.getElementById('bhalf-p2').value);
  bHalf[3] = parseInt(document.getElementById('bhalf-p3').value);
  //debugger
  // console.log(bHalf[1] );
  // console.log(bHalf[2] );
  // console.log(bHalf[3] );
  if (bHalf[1] != "" && bHalf[2] != "" && bHalf[3] != "") {
    bHalf[0] = bHalf[1] + bHalf[2] + bHalf[3];
    // console.log(bHalf[0] );
  }
}

function calcCRoot() {
  cRoot[1] = parseInt(document.getElementById('croot-p1').value);
  // cRoot[2] = parseInt(document.getElementById('croot-p2').innerText);
  // cRoot[3] = parseInt(document.getElementById('croot-p3').innerText);
  if (cRoot[1] != "") {
    cRoot[0] = cRoot[1];
  }
}

function calcCTip() {
  cTip[1] = parseInt(document.getElementById('ctip-p1').value);
  cTip[2] = parseInt(document.getElementById('ctip-p2').value);
  cTip[3] = parseInt(document.getElementById('ctip-p3').value);
  if (cTip[3] != "") {
    cTip[0] = cTip[3];
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
    // document.getElementById("lambda[1]").innerHTML = lambda[1];
  }

  // Labmbda for Panel 2
  if (cTip[2] != "" && cRoot[2] != "") {
    lambda[2] = cTip[2] / cRoot[2];
  }

  // Labmbda for Panel 3
  if (cTip[3] != "" && cRoot[3] != "") {
    lambda[3] = cTip[3] / cRoot[3];
  }

  // Labmbda for Complete Wing
  if (cTip[3] != "" && cRoot[1] != "") {
    lambda[0] = cTip[3] / cRoot[1];
  }
}

// Calculate cSmc from above input
function calcCSmc() {
  // cSmc for Panel 1
  if (cRoot[1] != "" && cTip[1] != "") {
    cSmc[1] = (cRoot[1] + cTip[1]) / 2;
  }

  // cSmc for Panel 2
  if (cRoot[2] != "" && cTip[2] != "") {
    cSmc[2] = (cRoot[2] + cTip[2]) / 2;
  }

  // cSmc for Panel 3
  if (cRoot[3] != "" && cTip[3] != "") {
    cSmc[3] = (cRoot[3] + cTip[3]) / 2;
  }

  // cSmc for Complete wing
  if (cSmc[1] != "" && cSmc[2] != "" && cSmc[3] != "" && bHalf[1] != "" && bHalf[2] != "" && bHalf[3] != "") {
    cSmc[0] = ((bHalf[1] * (cSmc[1])) + (bHalf[2] * (cSmc[2])) + (bHalf[3] * (cSmc[3]))) / (bHalf[1] + bHalf[2] + bHalf[3]);
  }
}

// Calculate sHalf from above input (and cSmc from directly above)
function calcSHalf() {
  // sHalf for Panel 1
  if (cSmc[1] != "" && bHalf[1] != "") {
    sHalf[1] = cSmc[1] * bHalf[1];
  }

  // sHalf for Panel 2
  if (cSmc[2] != "" && bHalf[2] != "") {
    sHalf[2] = cSmc[2] * bHalf[2];
  }

  // sHalf for Panel 3
  if (cSmc[3] != "" && bHalf[3] != "") {
    sHalf[3] = cSmc[3] * bHalf[3];
  }

  // sHalf for Complete wing (using also parameters calculated in imediate above rows)
  if (sHalf[1] != "" && sHalf[2] != "" && sHalf[3]) {
    sHalf[0] = sHalf[1] + sHalf[2] + sHalf[3];
  }
}

// Calculate ar from above input
function calcAr() {
  // ar for Panel 1
  if (bHalf[1] != "" && sHalf[1] != "") {
    ar[1] = bHalf[1] ** 2 / sHalf[1];
  }

  // ar for Panel 2
  if (bHalf[2] != "" && sHalf[2] != "") {
    ar[2] = bHalf[2] ** 2 / sHalf[2];
  }

  // ar for Panel 3
  if (bHalf[3] != "" && sHalf[3] != "") {
    ar[3] = bHalf[3] ** 2 / sHalf[3];
  }

  // ar for Complete wing
  if (bHalf[0] != "" && sHalf[0] != "") {
    ar[0] = bHalf[0] ** 2 / sHalf[0];
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

    sweepP1X[1] = cRoot[1] * 0.01 * xDelta[1] + bHalf[1] * Math.sin(degToRad * delta[1]);
    sweepP1Y[1] = bHalf[1];

    // ---------- Plot ----------
    // Define a new path: 
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "1";
    ctx.setLineDash([10, 3]); /*dashes are 5px and spaces are 3px*/

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
  if (cRoot[2] != "" && xDelta[2] != "" && bHalf[2] != "" && bHalf[2] != "" && delta[2] != "") {
    sweepP2X[0] = cRoot[2] * 0.01 * xDelta[2];
    sweepP2Y[0] = bHalf[1];

    sweepP2X[1] = cRoot[2] * 0.01 * xDelta[2] + bHalf[1] * Math.sin(degToRad * delta[1]);
    sweepP2Y[1] = bHalf[1] + bHalf[2];

    // ---------- Plot ----------
    // Define a new path: 
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "1";
    ctx.setLineDash([10, 3]); /*dashes are 5px and spaces are 3px*/

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
  if (cRoot[3] != "" && xDelta[3] != "" && bHalf[3] != "" && bHalf[3] != "" && delta[3] != "") {
    sweepP3X[0] = cRoot[3] * 0.01 * xDelta[3];
    sweepP3Y[0] = bHalf[1] + bHalf[2];

    sweepP3X[1] = cRoot[3] * 0.01 * xDelta[3] + bHalf[3] * Math.sin(degToRad * delta[1]);
    sweepP3Y[1] = bHalf[1] + bHalf[2] + bHalf[3];

    // ---------- Plot ----------
    // Define a new path: 
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "1";
    ctx.setLineDash([10, 3]); /*dashes are 5px and spaces are 3px*/

    // Define a start point
    ctx.moveTo(sweepP3X[0], sweepP3Y[0]);

    // Define points
    ctx.lineTo(sweepP3X[1], sweepP3Y[1]);

    // Draw it
    ctx.stroke();
  }
}

// Panel 1
function calcP1() {
  if (sweepP1X[1] != "" && cTip[1] != "" && xDelta[1] != "" && bHalf[1] != "" && cRoot[1] != "") {
    P1X[0] = 0;
    P1Y[0] = 0;

    P1X[1] = sweepP1X[1] - cTip[1] * 0.01 * xDelta[1];
    P1Y[1] = bHalf[1];

    P1X[2] = sweepP1X[1] - cTip[1] * 0.01 * (100 - xDelta[1]);
    P1Y[2] = bHalf[1];

    P1X[3] = cRoot[1];
    P1Y[3] = 0;

    // ---------- Plot ----------
    // Define a new path:
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "3";

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
    P2Y[1] = P1Y[1] + bHalf[2];

    P2X[2] = sweepP2X[1] - cTip[2] * 0.01 * (100 - xDelta[2]);
    P2Y[2] = P1Y[1] + bHalf[2];

    P2X[3] = P1X[1] + cRoot[1];
    P2Y[3] = P1Y[1];

    // ---------- Plot ----------
    // Define a new path:
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "3";

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
    P3Y[1] = P2Y[1] + bHalf[3];

    P3X[2] = sweepP3X[1] - cTip[3] * 0.01 * (100 - xDelta[3]);
    P3Y[2] = P2Y[1] + bHalf[3];

    P3X[3] = P1X[2] + cRoot[2];
    P3Y[3] = P2Y[1];

    // ---------- Plot ----------
    // Define a new path:
    ctx.beginPath();

    // Style the line - Specific
    ctx.lineWidth = "3";

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


//-------------------- LET IT ALL HAPPEN (EVENTLISTENER)! --------------------
function funcForEvent() {
  console.log("funcForEvent");
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

// Alternative 2 - Is it correct!? VariableInput.addEventListener('change', funcForEvent);
 document.body.addEventListener('oninput', funcForEvent); // do I need an element first on this row. Should I use "changes" instead of "oninput"

// Alternative 2 - Is it correct!?
//let paramInputs = document.querySelectorAll(".paramInput");

//for (let paramInput of paramInputs) { // for (let i = 0; i < variableInputs.length; i++) {
//paramInput.addEventListener('change', funcForEvent);
//}