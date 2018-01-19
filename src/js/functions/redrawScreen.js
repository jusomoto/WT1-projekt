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
        courseUpdate();
    };

    var updateUSDAndBitcoins = function(){
        let currentUSD = $("#currentUSD_value_span");
        let currentBTC = $("#currentBitcoin_value_span");
        currentUSD.text(storage.storageClass.getDollarValue());
        currentBTC.text(storage.storageClass.getBitcoinValue().toFixed(5));
    };

    var renderCurrentInventory = function(){
        let hardware = storage.storageClass.getHardware();
        $('#inventory-items').empty()
        for (let key in hardware) {
            if (hardware.hasOwnProperty(key)) {
                let element = hardware[key];
                if(element.count > 0){
                    var htmlBody = "<div><button type=\"button\" class=\"btn btn-secondary \" id='upgrade-" + element.id + "'>Upgrade " + element.name + "</button><span>+ " + element.upgradeEarnings + " BTC</span></div>";
                    $('#inventory-items').html($('#inventory-items').html() + htmlBody);
                }
            }
        }
        addEventListenerInventory();
    }

    var addEventListenerInventory = function () {
        let inventoryItems = $("#inventory-items").children();
    
        for (let key in inventoryItems) {
            let miningItem = inventoryItems[key].children;
            for(let key in miningItem)
            {
                if (miningItem[key].type == "button") {
                    miningItem[key].addEventListener("click", inventoryButtonClicked)
                }
            }
        }
    }

    let inventoryButtonClicked = function(element) {
        // let buttonID = element.target.id
        // buttonID = buttonID.replace("buy-", "");
        // if(storage.storageClass.canItemBeBought(buttonID)){
        //     storage.storageClass.buyItem(buttonID);
        //     redraw.redrawScreen.updateScreen();
        // }
    };

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

    var courseUpdate = function(){
        let courseValue = storage.storageClass.getCourse()
        $( "#course" ).html(courseValue);
    }
    
    var disableWholeShop = function()
    {  
        let shopItems = $("#shop-items").children();
        for(let i in shopItems)
        {
            let shopItemDiv = shopItems[i].children;
            for(let j in shopItemDiv)
            {
                let element = shopItemDiv[j];
                if(element.classList != undefined)
                {
                    element.classList.remove('disabled');
                    element.classList.add('disabled');
                }
            }
        }
    }

    return{
        initFunction: initFunction,
        updateUSDAndBitcoins: updateUSDAndBitcoins,
        updateScreen: updateScreen,
        renderCurrentInventory: renderCurrentInventory,
        renderShop: renderShop,
        courseUpdate: courseUpdate,
        disableWholeShop: disableWholeShop
    }

})();
