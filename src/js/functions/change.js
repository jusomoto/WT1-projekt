var constants = require("../config/config.js");
module.exports = {
  // Eventlistener, which deletes the content of the other field,
  // if you write something into the other one
  changeCurrency: function(storageFile, redrawScreen) {
    storage = storageFile;
    redraw = redrawScreen;
    $("#maxBtc").click(function(event) {
      var MaxBTC = storage.storageClass.getBitcoinValue();
      $("#btcInput").val(MaxBTC);
    });
    $("#maxUsd").click(function(event) {
      var MaxUSD = storage.storageClass.getDollarValue();
      $("#usdInput").val(MaxUSD);
    });
    $("#changeBtt").click(function(event) {
      var btc = $("#btcInput").val();
      var usd = $("#usdInput").val();
      var course = storage.storageClass.getCourse();
      if (btc == "") {
        storage.storageClass.changeUsdToBtc(usd);
      } else if (usd == "") {
        storage.storageClass.changeBtcToUsd(btc);
      } else {
        $("#InputError").fadeIn(constants.FADE_IN_TIME);
      }
    });
  },
  storage: null,
  redraw: null
};
