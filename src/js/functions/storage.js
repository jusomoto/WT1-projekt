var Hardware = require('../classes/hardware.js');
var moment = require("moment");
var constants = require("../config/config.js");

//closures:
//https://www.w3schools.com/js/js_function_closures.asp
//used patterns
//https://medium.freecodecamp.org/node-js-module-exports-vs-exports-ec7e254d63ac

exports.storageClass = (function () {
    
    // Keep this variable private inside this closure scope
    var bitCoinsValue = constants.START_BTC_VALUE;
    var availableHardware = [];
    var dollarValue = constants.START_DOLLAR_VALUE;
    var username = '';
    var course = constants.START_COURSE_VALUE;
    var currentDay = moment(constants.START_DATE);

    //Public Functions are decleared with var
    var increaseBitcoinValue = function(increaseValue) {
        bitCoinsValue = bitCoinsValue + increaseValue;    
        return bitCoinsValue;
    };
  
    var getBitcoinValue = function() {
        return bitCoinsValue;
    };

    var getDollarValue = function(){
        return dollarValue;
    };

    var getStartCourse = function(){
        return course;
    };
  
    var canItemBeBought = function(id) {
        let clickedShopItem = findItemByID(id);
        if(clickedShopItem == undefined) return false;

        if(clickedShopItem.price <= dollarValue){
            return true;
        }
        else{
            return false;
        }
    }

    var buyItem = function(id){
        let clickedShopItem = findItemByID(id);
        if(canItemBeBought){
            clickedShopItem.count++;
            dollarValue = dollarValue - clickedShopItem.price;
            clickedShopItem.upgradeEarnings = Number(clickedShopItem.miningEarnings) * clickedShopItem.count;
        }
    }

    var setInitHardware = function(hardwareArray) {
        for(var item in hardwareArray)
        {
            availableHardware.push(new Hardware(hardwareArray[item].id, hardwareArray[item].name, hardwareArray[item].price, 
                hardwareArray[item].currency, hardwareArray[item].miningEarnings, hardwareArray[item].upgradeEarnings, 0));
        }
    };
    
    var getHardware = function() {
        return availableHardware;
    }

    var setCourse = function(courseExt){
        course = courseExt;
    }

    var getCourse = function (){
        return course;
    }

    var canUsdBeChanged = function(usd){

        if(usd <= dollarValue){
            return true;
        }
        else{
            return false;
        }
    }
    var changeBtcToUsd = function(usd,btc){
        bitCoinsValue = bitCoinsValue - btc;
        dollarValue = dollarValue + usd;
    }
    var changeUsdToBtc = function(usd,btc){
        dollarValue = dollarValue - usd;
        bitCoinsValue = bitCoinsValue + btc;
    }

    var canBtcBeChanged = function(btc){
        if(btc <= bitCoinsValue){
            return true;
        }
        else{
            return false;
        }
    }
    var startMining = function() {
        let earnedBTC=0;
        for(let id in availableHardware){
            let hardWare = availableHardware[id];
            if(hardWare.count >= 1)
            {
                earnedBTC = earnedBTC + hardWare.upgradeEarnings;
                bitCoinsValue = bitCoinsValue + hardWare.upgradeEarnings;
            }
        }
        return earnedBTC;
    }
    
    var setTime

    //private functions are decleared with let

    let findItemByID = function(id){

        let result = $.grep(getHardware(), function(e) { return e.id == id; });
        if (result.length == 0) {
            return result[0];
          } else if (result.length == 1) {
            return result[0];
          } else {
            return null;
          }
    }

    let setUsername = function(user) {
        username = user;
    }

    let getUsername = function() {
        return username;
    }

    var getCurrentDay = function() {
        return currentDay;
    }

    var increaseCurrentDay = function(increaseByDay, increaseByMonth) {
        currentDay.add(increaseByDay, 'day').add(increaseByMonth, 'months');
        return currentDay;
    }

    // Explicitly reveal public pointers to the private functions 
    // that we want to reveal publicly
  
    return {      
        increaseBitcoinValue: increaseBitcoinValue,      
        getBitcoinValue: getBitcoinValue,
        setInitHardware: setInitHardware,
        getDollarValue: getDollarValue,
        getHardware: getHardware,
        canItemBeBought: canItemBeBought,
        buyItem: buyItem,
        setUsername: setUsername,
        getUsername: getUsername,
        setCourse: setCourse,
        getCourse: getCourse,
        canUsdBeChanged: canUsdBeChanged,
        canBtcBeChanged: canBtcBeChanged,
        changeUsdToBtc: changeUsdToBtc,
        changeBtcToUsd: changeBtcToUsd,
        getStartCourse: getStartCourse,
        startMining: startMining,
        getCurrentDay: getCurrentDay,
        increaseCurrentDay: increaseCurrentDay
    }
  })();
