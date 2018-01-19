window.jQuery = require("jquery");
import $ from 'jquery';
window.Tether = require("tether");
window.$ = window.jQuery;
var bootstrap = require("bootstrap");
var shop = require('./functions/shop.js');
var storage = require('./functions/storage.js');
var redraw = require('./functions/redrawScreen.js');
var highscore = require('./functions/highscore.js');

$(document).ready(function() {
  //ask for username & set it
  $('#username-modal').modal();

  $('#save-user-btn').click(function() {
    var user = $('#input-username').val();
    storage.storageClass.setUsername(user);
    // update screen
    redraw.redrawScreen.renderUserProfile();
    // hide modal
    $('#username-modal').modal('hide');
  });

  $('#username-modal').on('hidden.bs.modal', function() {
    // if the user hide the modal, set a default username
    var user = storage.storageClass.getUsername();
    if (user == '') {
      storage.storageClass.setUsername("username");
      redraw.redrawScreen.renderUserProfile();
    }
  });

  $('#highscore-btn').click(function() {
    //highscore-table-body
    var highscoreJson = highscore.getHighscore();
    var body = '';
    highscoreJson.players.forEach(function(elem, index) {
      var trClass = '';
      if(index == 0) {
         trClass = 'table-success';
      }
      body += '<tr class="'+trClass+'"><th scope="row">'+(index + 1)+'</th>';
      body += '<td>'+elem.username+'</td>';
      body += '<td>'+elem.time+'</td>';
      body += '<td>'+elem.money+'</td></tr>';
    });
    $('#highscore-table-body').html(body);
    $('#highscore-modal').modal();
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
        highscore.getDummyData();
        highscore.addUserToHighscore('ungerdunger', 10000, 13000);
        redraw.redrawScreen.initFunction(storage, shop);
        redraw.redrawScreen.updateScreen();
        redraw.redrawScreen.renderHighscore();
      });
  })();

  