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
        addEventListenerShop();
    }

    let addEventListenerShop = function () {
        let shopItems = $("#shop-items").children();
    
        for (let key in shopItems) {
            let miningItem = shopItems[key].children;
            for(let key in miningItem)
            {
                if (miningItem[key].type == "button") {
                    miningItem[key].addEventListener("click", shop.shopButtonClicked)
                }
            }
        }
    };

    return{
        initFunction: initFunction,
        updateUSDAndBitcoins: updateUSDAndBitcoins,
        updateScreen: updateScreen,
        renderCurrentInventory: renderCurrentInventory,
        renderShop: renderShop
    }

})();
