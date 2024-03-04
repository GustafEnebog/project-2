//-------------------- GETTING INPUT FROM FORM FIELD AND CALCULATING PARAMETERS FOR COMPLETE WING --------------------
let bHalf = [null, null, null, null];
let cRoot = [null, null, null, null];
let cTip = [null, null, null, null];
let xDelta = [null, null, null, null];
let delta = [null, null, null, null];


// Get the inputs from the html-form
function calcBHalf() {
  bHalf[1] = parseInt(document.getElementById('bhalf-p1').innerText);
  bHalf[2] = parseInt(document.getElementById('bhalf-p2').innerText);
  bHalf[3] = parseInt(document.getElementById('bhalf-p3').innerText);
  if (bHalf[1] != "" && bHalf[2] != "" && bHalf[3] != "") {
    bHalf[0] = bHalf[1] + bHalf[2] + bHalf[3];
  }
}

function calcCRoot() {
  cRoot[1] = parseInt(document.getElementById('croot-p1').innerText);
  // cRoot[2] = parseInt(document.getElementById('croot-p2').innerText);
  // cRoot[3] = parseInt(document.getElementById('croot-p3').innerText);
  if (cRoot[1] != "") {
    cRoot[0] = cRoot[1];
  }
}

function calcCTip() {
  cTip[1] = parseInt(document.getElementById('cTip-p1').innerText);
  cTip[2] = parseInt(document.getElementById('cTip-p2').innerText);
  cTip[3] = parseInt(document.getElementById('cTip-p3').innerText);
  if (cTip[3] != "") {
    cTip[0] = cTip[3];
  }
}

function calcXDelta() {
  xDelta[1] = parseInt(document.getElementById('xdelta-p1').innerText);
  xDelta[2] = parseInt(document.getElementById('xdelta-p2').innerText);
  xDelta[3] = parseInt(document.getElementById('xdelta-p3').innerText);
  xDelta[0] = "n/a";
}

function calcDelta() {
  delta[1] = parseInt(document.getElementById('delta-p1').innerText);
  delta[2] = parseInt(document.getElementById('cTip-p2').innerText);
  delta[3] = parseInt(document.getElementById('cTip-p3').innerText);
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
  if (lambda[1] != "") {
    lambda[1] = cTip[1] / cRoot[1];
    // document.getElementById("lambda[1]").innerHTML = lambda[1];
  }

  // Labmbda for Panel 2
  if (lambda[2] != "") {
    lambda[2] = cTip[2] / cRoot[2];
  }

  // Labmbda for Panel 3
  if (lambda[3] != "") {
    lambda[3] = cTip[3] / cRoot[3];
  }

  // Labmbda for Complete Wing
  if (lambda[1] != "" && lambda[3] != "") {
    lambda[0] = cTip[3] / cRoot[1];
  }
}

// Calculate cSmc from above input
function calcCSmc() {
  // cSmc for Panel 1
  if (cSmc[1] != "") {
    cSmc[1] = (cRoot[1] + cTip[1]) / 2;
  }

  // cSmc for Panel 2
  if (cSmc[2] != "") {
    cSmc[2] = (cRoot[2] + cTip[2]) / 2;
  }

  // cSmc for Panel 3
  if (cSmc[3] != "") {
    cSmc[3] = (cRoot[3] + cTip[3]) / 2;
  }

  // cSmc for Complete wing
  if (cSmc[1] != "" && cSmc[2] != "" && cSmc[3] != "" && bHalf[3] != "" && bHalf[3] != "" && bHalf[3] != "") {
    cSmc[0] = ((bHalf[1] * (cSmc[1])) + (bHalf[2] * (cSmc[2])) + (bHalf[3] * (cSmc[3]))) / (bHalf[1] + bHalf[2] + bHalf[3]);
  }
}

// Calculate sHalf from above input (and cSmc from directly above)
function calcSHalf() {
  // sHalf for Panel 1
  if (sHalf[1] != "") {
    sHalf[1] = cSmc[1] * bHalf[1];
  }

  // sHalf for Panel 2
  if (sHalf[2] != "") {
    sHalf[2] = cSmc[2] * bHalf[2];
  }

  // sHalf for Panel 3
  if (sHalf[3] != "") {
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

// function calcDrawCoord() {
  // Sweep line Panel 1
  function calcSweepP1() {
  if (cRoot[1] != "" && xDelta[1] != "" && bhalf[1] != "" && bhalf[2] != "" && delta[1] != "") {
    sweepP1X[0] = cRoot[1] * 0.01 * xDelta[1];
    sweepP1Y[0] = 0;
    deltaP1Rad = (Math.PI / 180) * delta[1];
    sweepP1X[1] = cRoot[1] * 0.01 * xDelta[1] + bhalf[1] * sin(deltaP1Rad); // Check if rad or deg is default in Java Script!
    sweepP1Y[1] = bhalf[1];
  }
  }

  // Sweep line Panel 2
  function calcSweepP2() {
  if (cRoot[2] != "" && xDelta[2] != "" && bhalf[2] != "" && bhalf[2] != "" && delta[2] != "") {
    sweepP2X[0] = cRoot[2] * 0.01 * xDelta[2];
    sweepP2Y[0] = bhalf[1];
    deltaP2Rad = (Math.PI / 180) * delta[2];
    sweepP2X[1] = cRoot[2] * 0.01 * xDelta[2] + bhalf[1] * sin(deltaP2Rad); // Check if rad or deg is default in Java Script!
    sweepP2Y[1] = bhalf[1] + bhalf[2];
  }
  }

  // Sweep line Panel 3
  function calcSweepP3() {
  if (cRoot[3] != "" && xDelta[3] != "" && bhalf[3] != "" && bhalf[3] != "" && delta[3] != "") {
    sweepP3X[0] = cRoot[3] * 0.01 * xDelta[3];
    sweepP3Y[0] = bhalf[1] + bhalf[2];
    deltaP3Rad = (Math.PI / 180) * delta[3];
    sweepP3X[1] = cRoot[3] * 0.01 * xDelta[3] + bhalf[3] * sin(deltaP3Rad); // Check if rad or deg is default in Java Script!
    sweepP3Y[1] = bhalf[1] + bhalf[2] + bhalf[3];
  }
  }

  // Panel 1
  function calcP1() {
  P1X[0] = 0;
  P1Y[0] = 0;

  P1X[1] = sweepP1X[1] - cTip[1] * 0.01 * xDelta[1];
  P1Y[1] = bhalf[1];

  P1X[2] = sweepP1X[1] - cTip * 0.01 * (100 - xDelta[1]);
  P1Y[2] = bhalf[1];

  P1X[3] = cRoot[1];
  P1Y[3] = 0;
  }

  // Panel 2
  function calcP2() {
  P2X[0] = P1X[1];
  P2Y[0] = bhalf[1];

  P2X[1] = sweepP1X[2] - cTip[2] * 0.01 * xDelta[2];
  P2Y[1] = bhalf[1] + bhalf[2];

  P2X[2] = sweepP1X[2] - cTip * 0.01 * (100 - xDelta[2]);
  P2Y[2] = bhalf[1] + bhalf[2];

  P2X[3] = P1X[2];
  P2Y[3] = bhalf[1];
  }

  // Panel 3
  function calcP3() {
  P3X[0] = P2X[1];
  P3Y[0] = bhalf[1] + bhalf[2];

  P3X[1] = sweepTip[3] - cTip[3] * 0.01 * xDelta[3];
  P3Y[1] = bhalf[1] + bhalf[2] + bhalf[3];

  P3X[2] = sweepTip[3] - cTip[3] * 0.01 * (100 - xDelta[3]);
  P3Y[2] = bhalf[1] + bhalf[2] + bhalf[3];

  P3X[3] = P2X[2];
  P3Y[3] = bhalf[1] + bhalf[2];
}

//-------------------- LET IT ALL HAPPEN (EVENTLISTENER)! --------------------
function funcForEvent() {
  calcBHalf()
  calcCRoot()
  calcCTip()
  calcXDelta()
  calcDelta()
  calcLambda()
  calcCSmc()
  calcSHalf()
  calcAr()
  calcSweepP1()
  calcSweepP2()
  calcSweepP3()
  calcP1()
  calcP2()
  calcP3()
}

document.body.addEventListener('oninput', funcForEvent); // do I need an element first on this row. Should I use "changes" instead of "oninput"
