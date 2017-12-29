exports.redrawScreen = (function () {
    let storage = undefined;

    var initFunction = function(storageFile)
    {
        storage = storageFile;
    }

    var updateScreen = function(){
        updateUSDAndBitcoins();
    };

    var updateUSDAndBitcoins = function(){
        let currentUSD = $("#currentUSD_value_span");
        let currentBTC = $("#currentBitcoin_value_span");
        currentUSD.text(storage.storageClass.getDollarValue());
        currentBTC.text(storage.storageClass.getBitcoinValue());
    };

    return{
        initFunction: initFunction,
        updateUSDAndBitcoins: updateUSDAndBitcoins,
        updateScreen: updateScreen
    }

})();
