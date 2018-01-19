var moments = require("moment");
var constants = require("../config/config.js");

module.exports = {
    startTime: function(storageFile, redrawScreen){
        var intervallCounter = 0;
        var interval = setInterval(function(){
            var currentDay = storageFile.storageClass.increaseCurrentDay(0, 1);
            $('#currentDaySpan').empty();
            intervallCounter++;
            $('#currentDaySpan').html(currentDay.format('DD MM YYYY'));
            if (intervallCounter > constants.TIME_INTERVALL) {
                clearInterval(courseIntervall);
            }
        }, constants.REFRESH_RATE)
    }
}