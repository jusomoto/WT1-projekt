module.exports = {
    createShop: function (storageFile, redrawScreen) {
        $(document).ready(function () {
            redrawScreen.redrawScreen.renderShop();
            storage = storageFile;
            redraw = redrawScreen;                
        });
    },
    shopButtonClicked: function(element) {
        console.log("dollar value before = " + storage.storageClass.getDollarValue());
        let buttonID = element.target.id
        buttonID = buttonID.replace("buy-", "");
        if(storage.storageClass.canItemBeBought(buttonID)){
            storage.storageClass.buyItem(buttonID);
            redraw.redrawScreen.updateScreen();
        }
        console.log("dollar value after = " + storage.storageClass.getDollarValue());
    },
};

var storage = undefined;
var redraw = undefined;



