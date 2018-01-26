window.jQuery = require("jquery");
import $ from 'jquery';
import { storageClass } from "./functions/storage";
import { redrawScreen } from "./functions/redrawScreen";
window.Tether = require("tether");
window.$ = window.jQuery;
var bootstrap = require("bootstrap");
var shop = require('./functions/shop.js');
var storage = require('./functions/storage.js');
var redraw = require('./functions/redrawScreen.js');
var course = require('./functions/kurs.js');
var change = require('./functions/change.js')
var eventHandler = require('./functions/eventHandler.js')
var highscore = require('./functions/highscore.js');
var time = require('./functions/time.js');
var constants = require("./config/config.js");
var validation = require('./functions/validation.js');
var drawChart = require("./functions/chart.js");

$(document).ready(function() {

  change.changeCurrency(storage,redraw);
  let intervallCounter = 0;
  highscore.initHighscore();
  gameTick();
  let intervall = setInterval(function() {
    intervallCounter++;
    gameTick();
    if (intervallCounter > constants.TIME_INTERVALL) {
      clearInterval(intervall);
  }
  }, constants.REFRESH_RATE);

  let validationIntervall = setInterval(function() {
    storage.storageClass.increaseGameTime();
    if(validation.isGameOver(storage)) {
      $('#gameEnd-modal').modal();
      if(validation.isGameWon(storage)) {
        initGameEndPopUp(true);
      } else {
        initGameEndPopUp(false);
      }
      clearInterval(validationIntervall);
    }
  }, 1000);

  $("#miningBtn").click(miningBtnClicked);

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
    if(highscoreJson.players.length > 0) {
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
      $('#no-highscore-alert').css("display", "none");
      $('#highscore-table').css('display', 'table');
    } else {
      $('#no-highscore-alert').css("display", "block");
      $('#highscore-table').css('display', 'none');
    }
    $('#highscore-modal').modal();
  });

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
        eventHandler.initJson().done(() => {
          eventHandler.triggerNews(0, "steigung");
        });
        redraw.redrawScreen.initFunction(storage, shop);
        redraw.redrawScreen.updateScreen();
        redraw.redrawScreen.renderHighscore();
      });
  }();

  var IntID = undefined;
  var currentOpacityMiningBtn = 0;

  let miningBtnClicked = function(element) {
      //todo: add fading for button
      IntID = startFadeBtn();
      redraw.redrawScreen.disableWholeShop();
      setTimeout(miningFinished, constants.MINING_DURATION_MS);
}

let miningFinished = function(element) {
    let earnedBTC = 0;
    earnedBTC = storage.storageClass.startMining();
    showMiningAlertForSeconds(earnedBTC);
    redraw.redrawScreen.updateScreen();
    stopFadeIn();
}


function startFadeBtn(){
    currentOpacityMiningBtn = 0;
    $('#miningBtn').hide();
    $('#miningProgressDiv').removeClass('hidden-div');
    $('#miningProgressDiv').addClass('show-div');
    let i = setInterval(fadeMIningBtnIn, constants.MINING_DURATION_MS/constants.MINING_LOADER_RESPONSE);
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
    let valueToIncrease = (100/constants.MINING_LOADER_RESPONSE);
    currentOpacityMiningBtn = currentOpacityMiningBtn + valueToIncrease;
    $('#miningProgressBar').css('width', currentOpacityMiningBtn+'%').attr('aria-valuenow', currentOpacityMiningBtn); 
}

function showMiningAlertForSeconds(earnedBTC) {
    $('#miningAlert').empty();
    $('#miningAlert').html("You earned: " + earnedBTC.toFixed(4) + " BTC");
    $('#miningAlert').fadeIn(constants.FADE_IN_MINING_ALERT);
    clearTimeout(hideMiningAlert);
    setTimeout(hideMiningAlert, constants.SHOW_MINING_ALERT_MS);
}

function hideMiningAlert(){
    $('#miningAlert').fadeOut(constants.FADE_OUT_MINING_ALERT);
}

function initGameEndPopUp(isTheGameWon){
  let currentUser = storage.storageClass.getUsername();
  let currentDollar = storage.storageClass.getDollarValue();
  let currentBTC = storage.storageClass.getBitcoinValue();
  let currentGameTime = storage.storageClass.getGameTime();
  let gameEndMessage;
  let gameEndCaption;

  if(isTheGameWon){
    highscore.addUserToHighscore(currentUser, currentGameTime, currentDollar.toFixed(2));
    gameEndMessage = "You did it! 1.000.000 from Bitcoins. Who thought that something like this would be possible?";
    gameEndCaption = "Congrats";
  }
  else{
    gameEndMessage = "Oh no - Time is up. And still no Mineonaire! :-(";
    gameEndCaption = "You lost!";
  }

  $('#gameEndHeader').html(gameEndMessage);
  $('#gameEndCaption').html(gameEndCaption);

  //table stats
  $('#gameEndUserName').html(currentUser);
  $('#gameEndDollar').html(currentDollar.toFixed(2));
  $('#gameEndBTC').html(currentBTC.toFixed(4));
  $('#gameEndTime').html(currentGameTime + "sec");
}

function gameTick() {
  time.timeTick(storage, redraw);
  course.runCourseByIntervall(storage);
  drawChart.drawChart(storage);
  redraw.redrawScreen.updateScreen();
}

window.onbeforeunload = confirmExit;
function confirmExit() {
    return "You have attempted to leave this page. Are you sure?";
}
