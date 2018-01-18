window.jQuery = require("jquery");
import $ from 'jquery';
window.Tether = require("tether");
window.$ = window.jQuery;
var bootstrap = require("bootstrap");
var shop = require('./functions/shop.js');
var storage = require('./functions/storage.js');
var redraw = require('./functions/redrawScreen.js');
//var bootstrap = require('bootstrap');

$(document).ready(function() {
  // ask for username & set it
  $('#username-modal').modal();

  $('#save-user-btn').click(function() {
    var user = $('#input-username').val();
    console.log(user);
    storage.storageClass.setUsername(user);
    $('#username-modal').modal('hide');
  });
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
        shop.createShop(storage, redraw);
        redraw.redrawScreen.initFunction(storage, shop);
        redraw.redrawScreen.updateScreen();
      });
  })();