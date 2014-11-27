beforeEach(function () {
    jasmine.addMatchers({
        toBePlaying: function () {
            return {
                compare: function (actual, expected) {
                    var player = actual;

                    return {
                        pass: player.currentlyPlayingSong === expected && player.isPlaying
                    }
                }
            };
        },
        toWriteConsoleMsg: function () {
            return {
                compare: function (actual, expected) {
                    console.log(actual);
                    console.log("=============");
                    console.log(expected);
                }
            }
        }
    });
});
