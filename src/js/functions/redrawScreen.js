var highscore = require('./highscore.js');
exports.redrawScreen = (function () {
    let storage = undefined;
    let shop = undefined;

    var initFunction = function(storageFile, shopFile)
    {
        storage = storageFile;
        shop = shopFile;
    }

    var updateScreen = function(){
        updateUSDAndBitcoins();
        renderCurrentInventory();
        renderShop();
        renderUserProfile();
    };

    var updateUSDAndBitcoins = function(){
        let currentUSD = $("#usd-amount");
        let currentBTC = $("#btc-amount");
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

    var renderUserProfile = function() {
        let username = storage.storageClass.getUsername();
        if(username) {
            $('#username-txt').text(username);
        }
    }

    var renderHighscore = function() {
        var highscoreJson = highscore.getHighscore();
        console.log(highscoreJson);
    }

    var renderShop = function(){
        let hardware = storage.storageClass.getHardware();
        $('#shop-items').empty()
        for (let key in hardware) {
            if (hardware.hasOwnProperty(key)) {
                let element = hardware[key];
                let style = "btn btn-secondary";
                if(element.price > storage.storageClass.getDollarValue()){
                    style = style + " disabled"
                }
                var htmlBody = "<div><button type=\"button\" class=\""+style+"\" id='buy-" + element.id + "'>Buy " + element.name + "</button><span>+ " + element.miningEarnings + " BTC</span></div>";
                $('#shop-items').html($('#shop-items').html() + htmlBody);
                
            }
        } 
        shop.addEventListener();
    }

    return{
        initFunction: initFunction,
        updateUSDAndBitcoins: updateUSDAndBitcoins,
        updateScreen: updateScreen,
        renderCurrentInventory: renderCurrentInventory,
        renderShop: renderShop,
        renderUserProfile: renderUserProfile,
        renderHighscore: renderHighscore
    }

})();
