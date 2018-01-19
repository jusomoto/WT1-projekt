module.exports = {
changeCurrency: function(storageFile, redrawScreen){
    storage = storageFile;
    redraw = redrawScreen;
$("#changeBtt").click(function( event) {
    var btc = $("#btcInput").val();
    var usd = $("#usdInput").val();
    var course = storage.storageClass.getCourse();
    if (btc == '') {
        if (storage.storageClass.canUsdBeChanged(usd)){
            btc = usd/course;
            storage.storageClass.changeUsdToBtc(usd, btc);
            redraw.redrawScreen.updateScreen();
        }
    }
    if (usd == ''){
        if (storage.storageClass.canBtcBeChanged(btc)){
            usd = course * btc;
            storage.storageClass.changeBtcToUsd(usd, btc);
            redraw.redrawScreen.updateScreen();
        }

    }
    
  })
},
storage: null,
redraw : null
}
