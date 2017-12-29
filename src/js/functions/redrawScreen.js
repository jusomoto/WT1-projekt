exports.redrawScreen = (function () {
    let storage = undefined;

    var initFunction = function(storageFile)
    {
        storage = storageFile;
    }

    var updateScreen = function(){
        updateUSDAndBitcoins();
        renderCurrentInventory();
    };

    var updateUSDAndBitcoins = function(){
        let currentUSD = $("#currentUSD_value_span");
        let currentBTC = $("#currentBitcoin_value_span");
        currentUSD.text(storage.storageClass.getDollarValue());
        currentBTC.text(storage.storageClass.getBitcoinValue());
    };

    var renderCurrentInventory = function(){
        let hardware = storage.storageClass.getHardware();
        $('#inventory-items').empty()
        for (let key in hardware) {
            if (hardware.hasOwnProperty(key)) {
                let element = hardware[key];
                if(element.count > 0){
                    var htmlBody = "<div><button type=\"button\" class=\"btn btn-secondary \" id='buy-" + element.id + "'>Buy " + element.name + "</button><span>+ " + element.upgradeEarnings + " BTC</span></div>";
                    $('#inventory-items').html($('#inventory-items').html() + htmlBody);
                }
            }
        }
    }

    return{
        initFunction: initFunction,
        updateUSDAndBitcoins: updateUSDAndBitcoins,
        updateScreen: updateScreen,
        renderCurrentInventory: renderCurrentInventory
    }

})();
