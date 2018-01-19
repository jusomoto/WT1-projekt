window.jQuery = require("jquery");
window.Tether = require("tether");
window.$ = window.jQuery;
var shop = require('./functions/shop.js');
var storage = require('./functions/storage.js');
var redraw = require('./functions/redrawScreen.js');
var course = require('./functions/kurs.js');
var change = require('./functions/change.js')
//var bootstrap = require('bootstrap');

const MINING_DURATION_MS = 2000;
const MINING_LOADER_RESPONSE = 100;

$(document).ready(function(){
  course.runCourseByIntervall(storage);
  change.changeCurrency(storage,redraw);
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


  var IntID = undefined;
  var currentOpacityMiningBtn = 0;

  let miningBtnClicked = function(element) {
      //todo: add fading for button
      IntID = startFadeBtn();
      redraw.redrawScreen.disableWholeShop();
      setTimeout(miningFinished, MINING_DURATION_MS);
}

let miningFinished = function(element) {
    storage.storageClass.startMining();
    redraw.redrawScreen.updateScreen();
    stopFadeIn();
}


function startFadeBtn(){
    currentOpacityMiningBtn = 0;
    $('#miningBtn').hide();
    $('#miningProgressDiv').removeClass('hidden-div');
    $('#miningProgressDiv').addClass('show-div');
    let i = setInterval(fadeMIningBtnIn, MINING_DURATION_MS/MINING_LOADER_RESPONSE);
    return i;
}

function stopFadeIn() {
    currentOpacityMiningBtn = 0;
    $('#miningProgressDiv').removeClass('show-div');
    $('#miningProgressDiv').addClass('hidden-div');
    $('#miningBtn').show();
    clearInterval(IntID);
}

function fadeMIningBtnIn(){
    let valueToIncrease = (100/MINING_LOADER_RESPONSE);
    currentOpacityMiningBtn = currentOpacityMiningBtn + valueToIncrease;
    $('#miningProgressBar').css('width', currentOpacityMiningBtn+'%').attr('aria-valuenow', currentOpacityMiningBtn); 
}