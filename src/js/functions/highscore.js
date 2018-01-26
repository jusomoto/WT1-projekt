module.exports = {
    addUserToHighscore: (user, time, money) => {
        //add User then sort
        var highscore = module.exports.getHighscore();
        console.log("AUTH", highscore);
        highscore.players.push({'username': user,'time': time,'money': money});
        highscore.players.sort(function(a, b) {
            if (a.time < b.time) {
                return 1;
            } else if (b.time < a.time) {
                return -1;
            } else {
                return 0;
            }
        });
        module.exports.saveHighscore(highscore);
    },
    saveHighscore: (highscore) => {
        //save to localstorage as JSON
        if (typeof(Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            localStorage.setItem('highscore', JSON.stringify(highscore));
            return true;
        } else {
            // Sorry! No Web Storage support..
            return false;
        }
    },
    getHighscore: () => {
        if (typeof(Storage) !== "undefined") {
            return JSON.parse(localStorage.getItem('highscore'));
            // Code for localStorage/sessionStorage.
        } else {
            return false;
            // Sorry! No Web Storage support..
        }

        /*
        var highscore = {
            players: [
                {place: 1, username: 'test', money: 8293, time: 1234},
                {place: 1, username: 'test', money: 8293, time: 1234},
                {place: 1, username: 'test', money: 8293, time: 1234},
                {place: 1, username: 'test', money: 8293, time: 1234}
            ]
        }
        */
    },
    getDummyData: () => {
        var highscore = {
            players: [
                {username: 'test', money: 8293, time: 1234},
                {username: 'test', money: 8293, time: 1234},
                {username: 'test', money: 8293, time: 1234},
                {username: 'test', money: 8293, time: 1234}
            ]
        };
        module.exports.saveHighscore(highscore);
    },
    initHighscore: () => {
        var highscore = {
            players: []
        };
        module.exports.saveHighscore(highscore);
    }
};