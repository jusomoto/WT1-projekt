var moments = require("moment");

module.exports = {
    timeTick: function(storageFile, redrawScreen){
        var intervallCounter = 0;
        var currentDay = storageFile.storageClass.increaseCurrentDay(0, 1);
        $('#currentDaySpan').empty();
        $('#currentDaySpan').html(currentDay.format('DD.MM.YYYY'));
    }
}