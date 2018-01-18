module.exports = {
    createShop: function (storageFile, redrawScreen) {
        $(document).ready(function () {
            redrawScreen.redrawScreen.renderShop();
            storage = storageFile;
            redraw = redrawScreen;                
        });
    },
    addEventListener: function () {
        let shopItems = $("#shop-items").children();
    
        for (let key in shopItems) {
            let miningItem = shopItems[key].children;
            for(let key in miningItem)
            {
                if (miningItem[key].type == "button") {
                    miningItem[key].addEventListener("click", shopButtonClicked)
                }
            }
        }
    },
};

let storage = undefined;
let redraw = undefined;

let shopButtonClicked = function(element) {
    console.log("dollar value before = " + storage.storageClass.getDollarValue());
    let buttonID = element.target.id
    buttonID = buttonID.replace("buy-", "");
    if(storage.storageClass.canItemBeBought(buttonID)){
        storage.storageClass.buyItem(buttonID);
        redraw.redrawScreen.updateScreen();
    }
    console.log("dollar value after = " + storage.storageClass.getDollarValue());
};



