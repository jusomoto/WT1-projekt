module.exports = {
  changeCurrency: function(storageFile, redrawScreen) {
    storage = storageFile;
    redraw = redrawScreen;
    const FADE_IN_TIME = 400;
    $("#maxBtc").click(function(event) {
      var MaxBTC = storage.storageClass.getBitcoinValue();
      $("#btcInput").val(MaxBTC);
    }),
      $("#maxUsd").click(function(event) {
        var MaxUSD = storage.storageClass.getDollarValue();
        $("#usdInput").val(MaxUSD);
      }),
      $("#changeBtt").click(function(event) {
        var btc = $("#btcInput").val();
        var usd = $("#usdInput").val();
        var course = storage.storageClass.getCourse();
        if (btc == "") {
          if (storage.storageClass.canUsdBeChanged(usd)) {
            btc = usd/course;
            storage.storageClass.changeUsdToBtc(usd, btc);
            redraw.redrawScreen.updateScreen();
          } else {
            $("#usdError").fadeIn(FADE_IN_TIME);
          }
        } else if (usd == "") {
          if (storage.storageClass.canBtcBeChanged(btc)) {
            usd = course * btc;
            storage.storageClass.changeBtcToUsd(usd, btc);
            redraw.redrawScreen.updateScreen();
          } else {
            $("#btcError").fadeIn(FADE_IN_TIME);
          }
        } else {
          $("#InputError").fadeIn(FADE_IN_TIME);
        }
      });
  },
  storage: null,
  redraw: null
};
