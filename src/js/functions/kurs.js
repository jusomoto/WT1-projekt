var constants = require("../config/config.js");

module.exports = {
    runCourseByIntervall:function (storage){
        var courseExt = storage.storageClass.getStartCourse();
        var intervallCounter = 0;
        var courseIntervall = setInterval(function(){
            courseExt = courseExt * (Math.random() + constants.PROB_FOR_COIN_RISE);
            storage.storageClass.setCourse(courseExt);
            intervallCounter++;
            console.log(courseExt);
            if (intervallCounter > constants.TIME_INTERVALL) {
                clearInterval(courseIntervall);
            }
        }, constants.REFRESH_RATE);
    },
}
