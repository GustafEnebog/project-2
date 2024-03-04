console.log("connected!");

var bHalf;
var cRoot;
var cTip;
var xDelta;
var delta;
var lambda;
var cSmc;
var sHalf;
var ar;


function calcMega() {
  // Get the inputs from the html-form
  function calcBHalf() {
    var bHalf[1] = parseInt(document.getElementById('bhalf-p1').innerText);
    var bHalf[2] = parseInt(document.getElementById('bhalf-p2').innerText);
    var bHalf[3] = parseInt(document.getElementById('bhalf-p3').innerText);
    if (bHalf[1] != "" && bHalf[2] != "" && bHalf[3] != "" && ) {
      var bHalf[0] = bHalf[1] + bHalf[2] + bHalf[3];
    }
  }
  calcBHalf()

  function calcCRoot() {
    var cRoot[1] = parseInt(document.getElementById('croot-p1').innerText);
    // var cRoot[2] = parseInt(document.getElementById('croot-p2').innerText);
    // var cRoot[3] = parseInt(document.getElementById('croot-p3').innerText);
    if (cRoot[1] != "") {
      var cRoot[0] = cRoot[1];
    }
  }
  calcCRoot()

  function calcCTip() {
    var cTip[1] = parseInt(document.getElementById('cTip-p1').innerText);
    var cTip[2] = parseInt(document.getElementById('cTip-p2').innerText);
    var cTip[3] = parseInt(document.getElementById('cTip-p3').innerText);
    if (cTip[3] != "") {
      var cTip[0] = cTip[3];
    }
  }
  calcCTip()

  function calcXDelta() {
    var xDelta[1] = parseInt(document.getElementById('xdelta-p1').innerText);
    var xDelta[2] = parseInt(document.getElementById('xdelta-p2').innerText);
    var xDelta[3] = parseInt(document.getElementById('xdelta-p3').innerText);
    var xDelta[0] = "n/a";
  }
  calcXDelta()

  function calcDelta() {
    var delta[1] = parseInt(document.getElementById('delta-p1').innerText);
    var delta[2] = parseInt(document.getElementById('cTip-p2').innerText);
    var delta[3] = parseInt(document.getElementById('cTip-p3').innerText);
    var delta[0] = "n/a";
  }
  calcDelta()

  // Calculate lambda from above input
  // Lambda for Panel 1
  if (lambda[1] != "") {
    var lambda[1] = cTip[1] / cRoot[1];
    document.getElementById("lambda[1]").innerHTML = lambda[1];
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
  }

  // cSmc for Panel 2
  if (cSmc[2] != "") {
    var cSmc[2] = (cRoot[2] + cTip[2]) / 2;
  }

  // cSmc for Panel 3
  if (cSmc[3] != "") {
    var cSmc[3] = (cRoot[3] + cTip[3]) / 2;
  }

  // cSmc for Complete wing
  if (cSmc[1] != "" && cSmc[2] != "" && cSmc[3] != "" && bHalf[3] != "" && bHalf[3] != "" && bHalf[3] != "") {
    var cSmc[0] = ((bHalf[1] * (cSmc[1])) + (bHalf[2] * (cSmc[2])) + (bHalf[3] * (cSmc[3]))) / (bHalf[1] + bHalf[2] + bHalf[3]);
  }

  // Calculate sHalf from above input (and cSmc from directly above)
  // sHalf for Panel 1
  if (sHalf[1] != "") {
    var sHalf[1] = cSmc[1] * bHalf[1];
  }

  // sHalf for Panel 2
  if (sHalf[2] != "") {
    var sHalf[2] = cSmc[2] * bHalf[2];
  }

  // sHalf for Panel 3
  if (sHalf[3] != "") {
    var sHalf[3] = cSmc[3] * bHalf[3];
  }

  // sHalf for Complete wing (using also parameters calculated in imediate above rows)
  if (sHalf[1] != "" && sHalf[2] != "" && sHalf[3]) {
    var sHalf[0] = sHalf[1] + sHalf[2] + sHalf[3];
  }

  // Calculate ar from above input
  // ar for Panel 1
  if (bHalf[1] != "" && sHalf[1] != "") {
    var ar[1] = bHalf[1] ** 2 / sHalf[1];
  }

  // ar for Panel 2
  if (bHalf[2] != "" && sHalf[2] != "") {
    var ar[2] = bHalf[2] ** 2 / sHalf[2];
  }

  // ar for Panel 3
  if (bHalf[3] != "" && sHalf[3] != "") {
    var ar[3] = bHalf[3] ** 2 / sHalf[3];
  }

  // ar for Complete wing
  if (bHalf[0] != "" && sHalf[0] != "") {
    var ar[0] = bHalf[0] ** 2 / sHalf[0];
  }


  function calcDrawCoord() {
    // Sweep line Panel 1
    if (cRoot[1] != "" && xDelta[1] != "" && bhalf[1] != "" && bhalf[2] != "" && delta[1] != "") {
      const sweepP1X[0] = cRoot[1] * 0.01 * xDelta[1];
      const sweepP1Y[0] = 0;
      const sweepP1X[1] = cRoot[1] * 0.01 * xDelta[1] + bhalf[1] * sin(delta[1]); // Check if rad or deg is default in Java Script!
      const sweepP1Y[1] = bhalf[1];
    }

    // Sweep line Panel 2
    if (cRoot[2] != "" && xDelta[2] != "" && bhalf[2] != "" && bhalf[2] != "" && delta[2] != "") {
      const sweepP2X[0] = cRoot[2] * 0.01 * xDelta[2];
      const sweepP2Y[0] = bhalf[1];
      const sweepP2X[1] = cRoot[2] * 0.01 * xDelta[2] + bhalf[1] * sin(delta[2]); // Check if rad or deg is default in Java Script!
      const sweepP2Y[1] = bhalf[1] + bhalf[2];
    }

    // Sweep line Panel 3
    if (cRoot[3] != "" && xDelta[3] != "" && bhalf[3] != "" && bhalf[3] != "" && delta[3] != "") {
      const sweepP3X[0] = cRoot[3] * 0.01 * xDelta[3];
      const sweepP3Y[0] = bhalf[1] + bhalf[2];
      const sweepP3X[1] = cRoot[3] * 0.01 * xDelta[3] + bhalf[3] * sin(delta[3]); // Check if rad or deg is default in Java Script!
      const sweepP3Y[1] = bhalf[1] + bhalf[2] + bhalf[3];
    }


    // Panel 1
    const P1X[0] = 0;
    const P1Y[0] = 0;

    const P1X[1] = sweepP1X[1] - cTip[1] * 0.01 * xDelta[1];
    const P1Y[1] = bhalf[1];

    const P1X[2] = sweepP1X[1] - cTip * 0.01 * (100 - xDelta[1]);
    const P1Y[2] = bhalf[1];

    const P1X[3] = cRoot[1];
    const P1Y[3] = 0;

    // Panel 2
    const P2X[0] = P1X[1];
    const P2Y[0] = bhalf[1];

    const P2X[1] = sweepP1X[2] - cTip[2] * 0.01 * xDelta[2];
    const P2Y[1] = bhalf[1] + bhalf[2];

    const P2X[2] = sweepP1X[2] - cTip * 0.01 * (100 - xDelta[2]);
    const P2Y[2] = bhalf[1] + bhalf[2];

    const P2X[3] = P1X[2];
    const P2Y[3] = bhalf[1];

    // Panel 3
    const P3X[0] = P2X[1];
    const P3Y[0] = bhalf[1] + bhalf[2];

    const P3X[1] = sweepTip[3] - cTip[3] * 0.01 * xDelta[3];
    const P3Y[1] = bhalf[1] + bhalf[2] + bhalf[3];

    const P3X[2] = sweepTip[3] - cTip[3] * 0.01 * (100 - xDelta[3]);
    const P3Y[2] = bhalf[1] + bhalf[2] + bhalf[3];

    const P3X[3] = P2X[2];
    const P3Y[3] = bhalf[1] + bhalf[2];
  }
}

document.body.addEventListener('oninput', calcMega); // do I need an element first on this row. Should I use "changes" instead of "oninput"






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







const xArray = [50,60,70,80,90,100,110,120,130,140,150];
const yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
const data = [{
  x: xArray,
  y: yArray,
  mode:"lines"
}];

// Define Layout
const layout = {
  xaxis: {range: [40, 160], title: "Square Meters"},
  yaxis: {range: [5, 16], title: "Price in Millions"},  
  title: "House Prices vs. Size"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
