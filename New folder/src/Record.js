/**
 * Created with JetBrains WebStorm.
 * User: rmeghl
 * Date: 11/18/14
 * Time: 3:34 PM
 * To change this template use File | Settings | File Templates.
 */
function Record() {
}


Record.prototype.startRecording = function () {
    // add a check that recording should only happen when the song is playing
    var song = new Song("Nice Song");
    var player = new Player();
    if (player.play(song)) {
        this.isRecording = true;
        $(".record-sign").show();
    }
};

// requirements:
// - when record is clicked
// - player should display a dot on it
// - player should capture the current frame of song and store it in the record object
// - when record is clicked second time, it should stop recording and save the results in an array
