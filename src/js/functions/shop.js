module.exports = {
    createShop: function (storageFile, redrawScreen) {
        $(document).ready(function () {
            redrawScreen.redrawScreen.renderShop();
            storage = storageFile;
            redraw = redrawScreen;                
        });
    },
    addEventListener: function () {
        $("button.buy-btn").on('click', shopButtonClicked);
    },
};

let storage = undefined;
let redraw = undefined;

let shopButtonClicked = function(element) {
    let buttonID = element.currentTarget.id;
    buttonID = buttonID.replace("buy-", "");
    if(storage.storageClass.canItemBeBought(buttonID)) {
        storage.storageClass.buyItem(buttonID);
        redraw.redrawScreen.updateScreen();
    }
};



