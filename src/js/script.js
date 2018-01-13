window.jQuery = require("jquery");
window.Tether = require("tether");
window.$ = window.jQuery;
var shop = require('./functions/shop.js');
var storage = require('./functions/storage.js');
var redraw = require('./functions/redrawScreen.js');
//var bootstrap = require('bootstrap');

$(document).ready(function(){
    $("#miningBtn").click(miningBtnClicked);
});

var x =function() {
    $.getJSON("data/hardware.json", {
      format: "json"
    })
      .done(function( data ) {
        let hardwareArray=[];
        $.each(data.hardware, function( i, item ) {
            hardwareArray.push(item);
        });
        //load the JSON
        //then init the hardware
        storage.storageClass.setInitHardware(hardwareArray);
        //from now on we can redraw the screen, because the JSON is read
        shop.createShop(storage, redraw);
        redraw.redrawScreen.initFunction(storage, shop);
        redraw.redrawScreen.updateScreen();
      });
  }();

  let miningBtnClicked = function(element) {
      //todo: add fading for button
      redraw.redrawScreen.disableWholeShop();
      setTimeout(miningFinished, 2000);
}

let miningFinished = function(element) {
    storage.storageClass.startMining();
    redraw.redrawScreen.updateScreen();
}

