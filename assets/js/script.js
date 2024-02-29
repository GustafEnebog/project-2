console.log("connected!")

// 

function checkInput() {

}

function calculateDerivedParameters() {
  let bHalf = parseInt(document.getElementById('bHalf').innerText);
  let cRoot = parseInt(document.getElementById('cRoot').innerText);
  let cTip = document.getElementById("cTip").innerText;
}

function


function checkInput() {

}

onclick event!!!

  function calcDerivedParam() {
    let bHalf = parseInt(document.getElementById('bHalf').innerText);
    let cRoot = parseInt(document.getElementById('cRoot').innerText);
    let cTip = parseInt(document.getElementById('cTip').innerText);
    let cRoot = parseInt(document.getElementById('cRoot').innerText);
    let delta = parseInt(document.getElementById('delta').innerText);
    let xDelta = parseInt(document.getElementById('xDelta').innerText);
    let xDelta = parseInt(document.getElementById('xDelta').innerText);
  }


cSMC = (cRoot + cTip) / 2
AR = bHalf / cSMC
sHalf = cRoot * cTip
lambda = cTip / cRoot

bHalfCw
cRootCw
cTipCw
deltaCw
xDeltaCw
cSmcCw
arCw
sHalfCw
lambdaCw

bHalfP1
cRootP1
cTipP1
deltaP1
xDeltaP1
cSmcP1
arP1
sHalfP1
lambdaP1

bHalfP2
cRootP2
cTipP2
deltaP2
xDeltaP2
cSmcP2
arP2
sHalfP2
lambdaP2

bHalfP3
cRootP3
cTipP3
deltaP3
xDeltaP3
cSmcP3
arP3
sHalfP3
lambdaP3


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


let cTip = document.getElementById("cTip").innerText;

[AR w, p1, p2, …pn],
[b_half w, b_half p1, b_half p2, …b_half pn],
[S_half w, S_half p1, S_half p2, …S_half pn],
[c_r w, c_r p1, c_r p2, …c_r pn],
[c_t w, c_t p1, c_t p2, …c_t pn],
[c_smc w, c_smc p1, c_smc p2, …c_smc pn],
[λ w, λ p1, λ p2, …λ pn],
[Λ w, Λ p1, Λ p2, …Λ pn],
[x_Λ w, x_Λ p1, x_Λ p2, …x_Λ pn]]


















// CONFIG

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  },
};

// SETUP

const DATA_COUNT = 7;
const NUMBER_CFG = {
  count: DATA_COUNT,
  min: -100,
  max: 100
};

const labels = Utils.months({
  count: 7
});
const data = {
  labels: labels,
  datasets: [{
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
    {
      label: 'Dataset 2',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    }
  ]
};

// ACTION

const actions = [{
    name: 'Randomize',
    handler(chart) {
      chart.data.datasets.forEach(dataset => {
        dataset.data = Utils.numbers({
          count: chart.data.labels.length,
          min: -100,
          max: 100
        });
      });
      chart.update();
    }
  },
  {
    name: 'Add Dataset',
    handler(chart) {
      const data = chart.data;
      const dsColor = Utils.namedColor(chart.data.datasets.length);
      const newDataset = {
        label: 'Dataset ' + (data.datasets.length + 1),
        backgroundColor: Utils.transparentize(dsColor, 0.5),
        borderColor: dsColor,
        data: Utils.numbers({
          count: data.labels.length,
          min: -100,
          max: 100
        }),
      };
      chart.data.datasets.push(newDataset);
      chart.update();
    }
  },
  {
    name: 'Add Data',
    handler(chart) {
      const data = chart.data;
      if (data.datasets.length > 0) {
        data.labels = Utils.months({
          count: data.labels.length + 1
        });

        for (let index = 0; index < data.datasets.length; ++index) {
          data.datasets[index].data.push(Utils.rand(-100, 100));
        }

        chart.update();
      }
    }
  },
  {
    name: 'Remove Dataset',
    handler(chart) {
      chart.data.datasets.pop();
      chart.update();
    }
  },
  {
    name: 'Remove Data',
    handler(chart) {
      chart.data.labels.splice(-1, 1); // remove the label first

      chart.data.datasets.forEach(dataset => {
        dataset.data.pop();
      });

      chart.update();
    }
  }
];































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