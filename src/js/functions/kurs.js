const PROB_FOR_COIN_RISE = 0.55;
const TIME_INTERVALL = 287;
const REFRESH_RATE = 1000;
module.exports = {
    runCourseByIntervall:function (storage){
        var courseExt = storage.storageClass.getStartCourse();
        var intervallCounter = 0;
        var courseIntervall = setInterval(function(){
            courseExt = courseExt * (Math.random() + PROB_FOR_COIN_RISE);
            storage.storageClass.setCourse(courseExt);
            intervallCounter++;
            console.log(courseExt);
            if (intervallCounter > TIME_INTERVALL) {
                clearInterval(courseIntervall);
            }
        },REFRESH_RATE);
    },
}
