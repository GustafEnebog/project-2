console.log("connected!")



  function calcDerivedParam() {
    // Get indata parameters for Panel 1
    let bHalfP1 = parseInt(document.getElementById('bhalf-p1').innerText);
    let cRootP1 = parseInt(document.getElementById('croot-p1').innerText);
    let cTipP1 = parseInt(document.getElementById('ctip-p1').innerText);
    let xDeltaP1 = parseInt(document.getElementById('xdelta-p1').innerText);
    let deltaP1 = parseInt(document.getElementById('delta-p1').innerText);
    // Calculate parameters for Panel 1
    let lambdaP1 = cTipP1 / cRootP1;
    let cSmcP1 = (cRootP1 + cTipP1) / 2;
    let sHalfP1 = cRootP1 * cTipP1;
    let arP1 = bHalfP1 / cSmcP1;


    // Get indata parameters for Panel 2
    let bHalfP2 = parseInt(document.getElementById('bhalf-p2').innerText);
    let cRootP2 = parseInt(document.getElementById('croot-p2').innerText);
    let cTipP2 = parseInt(document.getElementById('ctip-p2').innerText);
    let xDeltaP2 = parseInt(document.getElementById('xdelta-p2').innerText);
    let deltaP2 = parseInt(document.getElementById('delta-p2').innerText);
    // Calculate parameters for Panel 2
    let lambdaP2 = cTipP2 / cRootP2;
    let cSmcP2 = (cRootP2 + cTipP2) / 2;
    let sHalfP2 = cRootP2 * cTipP2;
    let arP2 = bHalfP2 / cSmcP2;

    // Get indata parameters for Panel 3
    let bHalfP3 = parseInt(document.getElementById('bhalf-p3').innerText);
    let cRootP3 = parseInt(document.getElementById('croot-p3').innerText);
    let cTipP3 = parseInt(document.getElementById('ctip-p3').innerText);
    let xDeltaP3 = parseInt(document.getElementById('xdelta-p3').innerText);
    let deltaP3 = parseInt(document.getElementById('delta-p3').innerText);
    // Calculate parameters for Panel 3
    let lambdaP3 = cTipP3 / cRootP3;
    let cSmcP3 = (cRootP3 + cTipP3) / 2;
    let sHalfP3 = cRootP3 * cTipP3;
    let arP3 = bHalfP3 / cSmcP3;

    // Calculate parameters for Complete wing (cw)
    let bHalfCw = bHalfP1 + bHalfP2 + bHalfP3;
    let cRootCw = cRootP1;
    let cTipCw = cTipP3;
    let xDeltaCw = "N/A";
    let deltaCw = "N/A";
    // Calculate parameters for Complete wing (cw)
    let lambdaCw = cTipP3 / cRootP1;
    let cSmcCw = "N/A";
    let sHalfCw = sHalfP1 + sHalfP2 + sHalfP3; // Switched row between sHalfCw and arCw so that sHalfCw can be used to calculate arCw
    let arCw = (bHalfCw)^2 / sHalfCw;
  }

// var lengthpara = document.getElementById("lenght");

// element.addEventListener("oninput", calcDerivedParam); // We use oninput instead of onchange since event occurs immediately after the content has been changed, while onchange occurs when the element loses focus. Also there was no use for the third and last parameter: useCapture




function calcDrawCoord() {
  // Sweep line Panel 1
  sweepRootP1X = cRootP1 * 0.01 * xDeltaP1
  sweepRootP1Y = 0
  sweepTipP1X = sweepRootP1X + bhalfP1 * sin(deltaP1) // Check if rad or deg is default in Java Script!
  sweepTipP1Y = bhalfP1

  // Sweep line Panel 2
  sweepRootP2X = cRootP2 * 0.01 * xDeltaP2
  sweepRootP2Y = bhalfP1
  sweepTipP2X = sweepRootP2X + bhalfP2 * sin(deltaP2)
  sweepTipP2Y = bhalfP2

  // Sweep line Panel 3
  sweepRootP3X = cRootP3 * 0.01 * xDeltaP3
  sweepRootP3Y = bhalfP2
  sweepTipP3X = sweepRootP3X + bhalfP3 * sin(deltaP3)
  sweepTipP3Y = bhalfP3

  // Panel 1
  LeRootP1X = 0
  LeRootP1Y = 0

  LeTipP1X = sweepTip1X - cTipP1 * 0.01 * xDeltaP1
  LeTipP1Y = bhalfP1

  TeTipP1X = sweepTip1X - cTip * 0.01 * (100 - xDelta)
  TeTipP1Y = bhalfP1

  TeRootP1X = cRootCw
  TeRootP1Y = 0

  // Panel 2
  LeRootP2X = LeTipP1X
  LeRootP2Y = LeTipP1Y

  LeTipP2X = sweepTip2X - cTipP2 * 0.01 * xDeltaP2
  LeTipP2Y = bhalfP2

  TeTipP2X = sweepTip2X - cTipP2 * 0.01 * (100 - xDeltaP2)
  TeTipP2Y = bhalfP2

  TeRootP2X = TeTipP1X
  TeRootP2Y = TeTipP1Y

  // Panel 3
  LeRootP3X = LeTipP2X
  LeRootP3Y = LeTipP2Y

  LeTipP3X = sweepTip3X - cTipP3 * 0.01 * xDeltaP3
  LeTipP3Y = bhalfP3

  TeTipP3X = sweepTip3X - cTipP3 * 0.01 * (100 - xDeltaP3)
  TeTipP3Y = bhalfP3

  TeRootP3X = TeTipP2X
  TeRootP3Y = TeTipP2Y
}



// Got this from stackoverflow but it does not work when showing it: import plotly.graph_objects as go


const xPanel1 = [0, 1, 5, 7];
const yPanel1 = [0, 25, 25, 0];

//const xPanel1 = [1, 2, 3, 5];
//const yPanel1 = [25, 35, 35, 25,];

// Define Data
const data = [{
  x: xPanel1,
  y: yPanel1,
  // x: xPanel2,
  // y: yPanel2,
  mode: "lines"
  /* marker = {'color' : 'red'} /* taken from https://stackoverflow.com/questions/63460213/how-to-define-colors-in-a-figure-using-plotly-graph-objects-and-plotly-express */
}];

// Define Layout
const layout = {
  // xaxis: {range: [0, 20], title: "longitudinal"},
  // yaxis: {range: [0, 40], title: "lateral"},
  // title: "WING with x nr. of panels"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);