window.jQuery = require("jquery");
window.Tether = require("tether");
window.$ = window.jQuery;
var shop = require('./functions/shop.js');
var storage = require('./functions/storage.js');
var redraw = require('./functions/redrawScreen.js');
//var bootstrap = require('bootstrap');

$(document).ready(function(){
    shop.createShop(storage, redraw);
});

(function() {
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
        redraw.redrawScreen.initFunction(storage);
        redraw.redrawScreen.updateScreen();
      });
  })();