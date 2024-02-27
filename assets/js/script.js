console.log("connected!")

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
  mode:"lines"
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