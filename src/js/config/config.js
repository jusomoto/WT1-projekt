var moment = require("moment");

function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("PROB_FOR_COIN_RISE", 0.55);
define("TIME_INTERVALL", 287);
define("REFRESH_RATE", 10000);
define("START_DATE", moment([2017, 1, 1]).format("YYYY-MM-DD"));
define("END_DATE", moment(exports.START_DATE).add(exports.TIME_INTERVALL, 'months').format("YYYY-MM-DD"));
define("START_BTC_VALUE", 0);
define("START_DOLLAR_VALUE", 5000);
define("START_COURSE_VALUE", 8000);
define("END_OF_GAME_MONEY", 1000000);

define("MINING_DURATION_MS", 2000);
define("MINING_LOADER_RESPONSE", 100);
define("SHOW_MINING_ALERT_MS", 5000);
define("FADE_IN_MINING_ALERT", 400);
define("FADE_OUT_MINING_ALERT", 200);
