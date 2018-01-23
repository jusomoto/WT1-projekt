module.exports ={
    drawChart: function(storageFile) {
    storage = storageFile;
var trace1 = {
    x: storage.storageClass.getDatePoints(), 
    y: storage.storageClass.getPlotPoints(), 
    type: 'scatter'
  };
  var data = [trace1];
  var layout = [];
  Plotly.newPlot("Chart", data, layout, {displayModeBar: false}); 


}
};