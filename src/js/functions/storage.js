var Hardware = require('../classes/hardware.js');

//closures:
//https://www.w3schools.com/js/js_function_closures.asp
//used patterns
//https://medium.freecodecamp.org/node-js-module-exports-vs-exports-ec7e254d63ac

exports.storageClass = (function () {
    
    // Keep this variable private inside this closure scope
    var bitCoinsValue = 0;
    var availableHardware = [];
    var dollarValue = 10000;

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
        startMining: startMining,
    }
  })();
