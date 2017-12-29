
module.exports = {
    createShop: function (storageFile) {
        $(document).ready(function () {
            //$('#shop-items').html()
            $.getJSON("data/hardware.json", function (data) {
                $.each(data.hardware, function (key, val) {
                    var htmlBody = "<div><button type=\"button\" class=\"btn btn-secondary \" id='buy-" + val.id + "'>Buy " + val.name + "</button><span>+ " + val.miningEarnings + " BTC</span></div>";
                    $('#shop-items').html($('#shop-items').html() + htmlBody);
                });
                addEventListener(storageFile);
            });
        });
    },
};

var storage = undefined;

var addEventListener = function (storageFile) {
    let shopItems = $("#shop-items").children();
    storage = storageFile;

    for (let key in shopItems) {
        let miningItem = shopItems[key].children;
        for(let key in miningItem)
        {
            if (miningItem[key].type == "button") {
                miningItem[key].addEventListener("click", shopButtonClicked)
            }
        }
    }
};

var shopButtonClicked = function(element) {
    console.log("dollar value before = " + storage.storageClass.getDollarValue());
    let buttonID = element.target.id
    buttonID = buttonID.replace("buy-", "");
    if(storage.storageClass.canItemBeBought(buttonID)){
        storage.storageClass.buyItem(buttonID);
    }
    console.log("dollar value after = " + storage.storageClass.getDollarValue());
};

