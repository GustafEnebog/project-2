console.log("connected!")



  function calcDerivedParam() {
    // Get indata parameters for Panel 1
    var bHalf[1] = parseInt(document.getElementById('bhalf-p1').innerText);
    var cRoot[1] = parseInt(document.getElementById('croot-p1').innerText);
    var cTip[1] = parseInt(document.getElementById('ctip-p1').innerText);
    var xDelta[1] = parseInt(document.getElementById('xdelta-p1').innerText);
    var delta[1] = parseInt(document.getElementById('delta-p1').innerText);
    // Calculate parameters for Panel 1
    var lambda[1] = cTipP1 / cRootP1;
    var cSmc[1] = (cRootP1 + cTipP1) / 2;
    var sHalf[1] = cRootP1 * cTipP1;
    var ar[1] = bHalfP1 / cSmcP1;


    // Get indata parameters for Panel 2
    var bHalf[2] = parseInt(document.getElementById('bhalf-p2').innerText);
    var cRoot[2] = parseInt(document.getElementById('croot-p2').innerText);
    var cTip[2] = parseInt(document.getElementById('ctip-p2').innerText);
    var xDelta[2] = parseInt(document.getElementById('xdelta-p2').innerText);
    var delta[2] = parseInt(document.getElementById('delta-p2').innerText);
    // Calculate parameters for Panel 2
    var lambda[2] = cTipP2 / cRootP2;
    var cSmc[2] = (cRootP2 + cTipP2) / 2;
    var sHalf[2] = cRootP2 * cTipP2;
    var ar[2] = bHalfP2 / cSmcP2;

    // Get indata parameters for Panel 3
    var bHalf[3] = parseInt(document.getElementById('bhalf-p3').innerText);
    var cRoot[3] = parseInt(document.getElementById('croot-p3').innerText);
    var cTip[3] = parseInt(document.getElementById('ctip-p3').innerText);
    var xDelta[3] = parseInt(document.getElementById('xdelta-p3').innerText);
    var delta[3] = parseInt(document.getElementById('delta-p3').innerText);
    // Calculate parameters for Panel 3
    var lambda[3] = cTipP3 / cRootP3;
    var cSmc[3] = (cRootP3 + cTipP3) / 2;
    var sHalf[3] = cRootP3 * cTipP3;
    var ar[3] = bHalfP3 / cSmcP3;

    // Calculate parameters for Complete wing (cw)
    var bHalf[0] = bHalfP1 + bHalfP2 + bHalfP3;
    var cRoot[0] = cRootP1;
    var cTip[0] = cTipP3;
    var xDelta[0] = "N/A";
    var delta[0] = "N/A";
    // Calculate parameters for Complete wing (cw)
    var lambda[0] = cTipP3 / cRootP1;
    var cSmc[0] = "N/A";
    var sHalf[0] = sHalfP1 + sHalfP2 + sHalfP3; // Switched row between sHalfCw and arCw so that sHalfCw can be used to calculate arCw
    var ar[0] = (bHalfCw)^2 / sHalfCw;
  }

// var lengthpara = document.getElementById("lenght");

// element.addEventListener("oninput", calcDerivedParam); // We use oninput instead of onchange since event occurs immediately after the content has been changed, while onchange occurs when the element loses focus. Also there was no use for the third and last parameter: useCapture




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

// Define size of graph axis for the drawing. the graph starts at origo so no need to calculate min values for x and y
const xAxisMaxP[0] = max(P1X);
const xAxisMaxP[1] = max(P2X);
const xAxisMaxP[2] = max(P3X);
const xAxisMax = max(xAxisMaxP);
const yAxisMax = bhalfP3;

// Got this from stackoverflow but it does not work when showing it: import plotly.graph_objects as go


// const P1X = [0, 1, 5, 7];
// const P1Y = [0, 25, 25, 0];


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
  xaxis: {range: [0, xAxisMax]} // , title: "longitudinal"},
  yaxis: {range: [0, yAxisMax]} // , title: "lateral"},
  // title: "WING with x nr. of panels"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);