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
        courseUpdate();
        deleteWarnings();
    };

    var updateUSDAndBitcoins = function(){
        let currentUSD = $("#usd-amount");
        let currentBTC = $("#btc-amount");
        currentUSD.text(storage.storageClass.getDollarValue().toFixed(2));
        currentBTC.text(storage.storageClass.getBitcoinValue().toFixed(4));
    };

    var deleteWarnings = function(){
       $(".alert-warning").hide();
    }
    var renderCurrentInventory = function(){
        let hardware = storage.storageClass.getHardware();
        $('#inventory-items').empty()
        for (let key in hardware) {
            if (hardware.hasOwnProperty(key)) {
                let element = hardware[key];
                if(element.count > 0){
                    // <button type=\"button\" class=\"btn btn-secondary inventory-item-btn\" 
                    // id='upgrade-" + element.id + "'>Upgrade " + element.name + "</button>
                    var htmlBody = "<div>" + element.count + " " + element.name+" <span>+ " + element.upgradeEarnings + " BTC</span></div>";
                    $('#inventory-items').html($('#inventory-items').html() + htmlBody);
                }
            }
        }
        addEventListenerInventory();
    }

    var renderUserProfile = function() {
        let username = storage.storageClass.getUsername();
        if (username) {
            $('#username-txt').text(username);
        }
    }

    var renderHighscore = function() {
        var highscoreJson = highscore.getHighscore();
    }

    var addEventListenerInventory = function () {
        let inventoryItems = $(".inventory-item-btn").on("click", inventoryButtonClicked);
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
        $('#shop-items').empty();
        for (let key in hardware) {
            if (hardware.hasOwnProperty(key)) {
                let element = hardware[key];
                let style = "btn buy-btn";
                if (element.price > storage.storageClass.getDollarValue()){
                    style = style + " btn-secondary disabled";
                } else {
                    style += " btn-success";
                }
                var htmlBody = "<div class=\"shop-item-container row\"><div class=\"col-lg-9\">"+
                element.name + "<span>+ " + 
                element.miningEarnings + " BTC</span></div><div class=\"col-lg-3\"><button type=\"button\" class=\""+
                style+"\" id='buy-" + element.id + "'><i class=\"fal fa-shopping-cart\"></i></button></div></div>";
                $('#shop-items').html($('#shop-items').html() + htmlBody);
                
            }
        } 
        shop.addEventListener();
    }

    var courseUpdate = function(){
        let courseValue = storage.storageClass.getCourse().toFixed(4)
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
        renderUserProfile: renderUserProfile,
        renderHighscore: renderHighscore,
        courseUpdate: courseUpdate,
        disableWholeShop: disableWholeShop,
        deleteWarnings: deleteWarnings,
    }

})();
