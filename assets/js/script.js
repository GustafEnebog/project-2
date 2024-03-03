console.log("connected!")

var bHalf
var cRoot
var cTip
var xDelta
var delta
var lambda
var cSmc
var sHalf
var ar

form - event







// Testing for how tot calculate bHalf for complete Wing
function calcBHalf() {
  var bHalf[1] = parseInt(document.getElementById('bhalf-p1').innerText);
  var bHalf[2] = parseInt(document.getElementById('bhalf-p2').innerText);
  var bHalf[3] = parseInt(document.getElementById('bhalf-p3').innerText);
  if (bHalf[1] != "" && bHalf[2] != "" && bHalf[3] != "" && ) {
    var bHalf[0] = bHalf[1] + bHalf[2] + bHalf[3];
  }
}

function calcCRoot() {
  var cRoot[1] = parseInt(document.getElementById('croot-p1').innerText);
  var cRoot[2] = parseInt(document.getElementById('croot-p2').innerText);
  var cRoot[3] = parseInt(document.getElementById('croot-p3').innerText);
  if (cRoot[1] != "") {
    var cRoot[0] = cRoot[1];
  }
}

function calcCTip() {
  var cTip[1] = parseInt(document.getElementById('cTip-p1').innerText);
  var cTip[2] = parseInt(document.getElementById('cTip-p2').innerText);
  var cTip[3] = parseInt(document.getElementById('cTip-p3').innerText);
  if (cTip[3] != "") {
    var cTip[0] = cTip[3];
  }
}

function calcXDelta() {
  var xDelta[1] = parseInt(document.getElementById('xdelta-p1').innerText);
  var xDelta[2] = parseInt(document.getElementById('xdelta-p2').innerText);
  var xDelta[3] = parseInt(document.getElementById('xdelta-p3').innerText);
  var xDelta[0] = "n/a";
}

function calcDelta() {
  var delta[1] = parseInt(document.getElementById('delta-p1').innerText);
  var delta[2] = parseInt(document.getElementById('cTip-p2').innerText);
  var delta[3] = parseInt(document.getElementById('cTip-p3').innerText);
  var delta[0] = "n/a";
}

// Calculate lambda from above input
// Lambda for Panel 1
if (lambda[1] != "") {
  var lambda[1] = cTip[1] / cRoot[1];
}

// Lambda for Panel 2
if (lambda[2] != "") {
  var lambda[2] = cTip[2] / cRoot[2];
}

// Lambda for Panel 3
if (lambda[3] != "") {
  var lambda[3] = cTip[3] / cRoot[3];
}

// Lambda for Complete Wing
if (lambda[1] != "" && lambda[3] != "") {
  var lambda[0] = cTip[3] / cRoot[1];
}

// Calculate cSmc from above input
// cSmc for Panel 1
if (cSmc[1] != "") {
  var cSmc[1] = (cRoot[1] + cTip[1]) / 2;

// cSmc for Panel 2
if (cSmc[2] != "") {
  var cSmc[2] = (cRoot[2] + cTip[2]) / 2;

// cSmc for Panel 3
if (cSmc[3] != "") {
  var cSmc[3] = (cRoot[3] + cTip[3]) / 2;

// cSmc for Complete wing
if (cSmc[1] != "" && cSmc[2] != "" && cSmc[3] != "" && bHalf[3] != "" && bHalf[3] != "" && bHalf[3] != "") {
  var cSmc[0] = ((bHalf[1]*(cSmc[1])) + (bHalf[2]*(cSmc[2])) + (bHalf[3]*(cSmc[3]))) / (bHalf[1] + bHalf[2] + bHalf[3]);
}

// Calculate sHalf from above input (and cSmc from directly above)
// sHalf for Panel 1
if (sHalf[1] != "") {
  var sHalf[1] = cSmc[1] * bHalf[1];

// sHalf for Panel 2
if (sHalf[2] != "") {
  var sHalf[2] = cSmc[2] * bHalf[2];

// sHalf for Panel 3
if (sHalf[3] != "") {
  var sHalf[3] = cSmc[3] * bHalf[3];

// sHalf for Complete wing (using also parameters calculated in imediate above rows)
if (sHalf[1] != "" && sHalf[2] != "" && sHalf[3]) {
  var sHalf[0] = sHalf[1] + sHalf[2] + sHalf[3];
}

// Calculate ar from above input
// ar for Panel 1
if (bHalf[1] != "" && sHalf[1] != "") {
  var ar[1] = bHalf[1] ** 2 / sHalf[1];

// ar for Panel 2
if (bHalf[2] != "" && sHalf[2] != "") {
  var ar[2] = bHalf[2] ** 2 / sHalf[2];

// ar for Panel 3
if (bHalf[3] != "" && sHalf[3] != "") {
  var ar[3] = bHalf[3] ** 2 / sHalf[3];

// ar for Complete wing
if (bHalf[0] != "" && sHalf[0] != "") {
  var ar[0] = bHalf[0] ** 2 / sHalf[0];
}


function calcDrawCoord() {
  // Sweep line Panel 1
  const sweepP1X[0] = cRootP1 * 0.01 * xDeltaP1
  const sweepP1Y[0] = 0
  const sweepP1X[1] = sweepRootP1X + bhalfP1 * sin(deltaP1) // Check if rad or deg is default in Java Script!
  const sweepP1Y[1] = bhalfP1

  // Sweep line Panel 2
  const sweepP2X[0] = cRootP2 * 0.01 * xDeltaP2
  const sweepP2Y[0] = bhalfP1
  const sweepP2X[1] = sweepRootP2X + bhalfP2 * sin(deltaP2)
  const sweepP2Y[1] = bhalfP2

  // Sweep line Panel 3
  const sweepP3X[0] = cRootP3 * 0.01 * xDeltaP3
  const sweepP3Y[0] = bhalfP2
  const sweepP3X[1] = sweepRootP3X + bhalfP3 * sin(deltaP3)
  const sweepP3Y[1] = bhalfP3

  // Panel 1
  const P1X[0] = 0
  const P1Y[0] = 0

  const P1X[1] = sweepTip1X - cTipP1 * 0.01 * xDeltaP1
  const P1Y[1] = bhalfP1

  const P1X[2] = sweepTip1X - cTip * 0.01 * (100 - xDelta)
  const P1Y[2] = bhalfP1

  const P1X[3] = cRootCw
  const P1Y[3] = 0

  // Panel 2
  const P2X[0] = LeTipP1X
  const P2Y[0] = LeTipP1Y

  const P2X[1] = sweepTip2X - cTipP2 * 0.01 * xDeltaP2
  const P2Y[1] = bhalfP2

  const P2X[2] = sweepTip2X - cTipP2 * 0.01 * (100 - xDeltaP2)
  const P2Y[2] = bhalfP2

  const P2X[3] = TeTipP1X
  const P2Y[3] = TeTipP1Y

  // Panel 3
  const P3X[0] = LeTipP2X
  const P3Y[0] = LeTipP2Y

  var P3X[1] = sweepTip3X - cTipP3 * 0.01 * xDeltaP3
  const P3Y[1] = bhalfP3

  const P3X[2] = sweepTip3X - cTipP3 * 0.01 * (100 - xDeltaP3)
  const P3Y[2] = bhalfP3

  const P3X[3] = TeTipP2X
  const P3Y[3] = TeTipP2Y
}

.addEventListener('oninput', input - output - form); // do I need an element first on this row






// Define size of graph axis for the drawing. the graph starts at origo so no need to calculate min values for x and y
const xAxisMaxP[0] = max(P1X);
const xAxisMaxP[1] = max(P2X);
const xAxisMaxP[2] = max(P3X);
const xAxisMax = max(xAxisMaxP);
const yAxisMax = bhalfP3;

// Got this from stackoverflow but it does not work when showing it: import plotly.graph_objects as go


// const P1X = [0, 1, 5, 7];
// const P1Y = [0, 25, 25, 0];
const P1X = [0, 1, 5, 7];
const P1Y = [0, 25, 25, 0];

// Define Data
const data = [{
  x: P1X,
  y: P1Y,
  // x: xPanel2,
  // y: yPanel2,
  mode: "lines"
  /* marker = {'color' : 'red'} /* taken from https://stackoverflow.com/questions/63460213/how-to-define-colors-in-a-figure-using-plotly-graph-objects-and-plotly-express */
}];

// Define Layout
const layout = {
  xaxis: {
    range: [0, 8]
  } // , title: "longitudinal"},                                                   xAxisMax
  yaxis: {
    range: [0, 26]
  } // , title: "lateral"},                                                        yAxisMax
  // title: "WING with x nr. of panels"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);