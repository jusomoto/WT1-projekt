var constants = require("../config/config.js");

module.exports = {
    isGameOver : function(storage){
        if(isEndDateReached(storage) || isMoneyOverAMillion(storage)){
            return true;
        }
        else{
            return false;
        }
    },
}

function isEndDateReached(storage){
    let currentDay = storage.storageClass.getCurrentDay();
    let gameEndDay = constants.END_DATE;

    if(currentDay.isSameOrAfter(gameEndDay) ) {
        return true;
    }
    else{
        return false;
    }
}

function isMoneyOverAMillion(storage){
    let currentMoney = storage.storageClass.getDollarValue();

    if(constants.END_OF_GAME_MONEY <= currentMoney){
        return true;
    }
    else{
        return false;
    }
}