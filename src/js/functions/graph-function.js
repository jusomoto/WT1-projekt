$(document).ready(function(){
    var Final = 0.002
    var price = 0.002;
    var i = 0;
    var zw1 = 0;
    var zw2 = 0;
    var zw3 = 0;
    var zw4 = 0;
    var zw5 = 0;
    var zw6 = 0;
    var zw7 = 0;
    setInterval(function price2() {

       Final = price * (Math.random() + 0.6);
       $("#Kurs").text(Final.toFixed(5));
       zw7 = zw6;
       zw6 = zw5;
       zw5 = zw4;
       zw4 = zw3;
       zw3 = zw2;
       zw2 = zw1;
       zw1 = price;
      
       price = Final;
       i++;
       $("#Counter").text(i);
   
       var trace1 = {
           x: [(i-7),(i-6),(i-5),(i-4),(i-3),(i-2),(i-1),i], 
           y: [zw7,zw6,zw5,zw4,zw3,zw2,zw1,Final], 
           type: 'scatter'
         };
         var data = [trace1];
         Plotly.newPlot("Chart", data); 

   },1000);
       $("#Crash").on("click", function(){
               alert("Pech, der Kurs ist eingebrochen!");
               price = Final * 0.1;});
});