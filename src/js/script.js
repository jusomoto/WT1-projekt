window.jQuery = require("jquery");
window.Tether = require("tether");
window.$ = window.jQuery;
var shop = require('./functions/shop.js');
var storage = require('./functions/storage.js');
//var bootstrap = require('bootstrap');

$(document).ready(function(){
    shop.createShop(storage);
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
        storage.storageClass.setInitHardware(hardwareArray);
      });
  })();