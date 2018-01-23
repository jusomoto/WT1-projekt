var constants = require("../config/config.js");

module.exports = {
    runCourseByIntervall: function (storage){
        var courseExt = storage.storageClass.getStartCourse();
        courseExt = courseExt * (Math.random() + constants.PROB_FOR_COIN_RISE);
        storage.storageClass.setCourse(courseExt);
    },
}
