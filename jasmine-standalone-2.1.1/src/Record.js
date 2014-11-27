/**
 * Created with JetBrains WebStorm.
 * User: rmeghl
 * Date: 11/18/14
 * Time: 3:34 PM
 * To change this template use File | Settings | File Templates.
 */
function Record(song) {
    // todo : this var is used to describe if a recorder instance can be created or not, need to use a better name for it
    this.isRecording = song && Boolean(song.songName) || false;
}

/**
 * @method: startRecording(recorder)
 * @param: recorder
 * @desc: initialize the recording functionality or throw an error if no song is found
 * */
Record.prototype.startRecording = function (recorder) {
    if (!recorder.isRecording) {
        recorder.throwError("Recording cannot start since no song selected to be played...");
    }
    $(".record-sign, .stop-btn").show();
    $(".record-btn").attr("disabled", "disabled");
};

/**
 * @method: stopRecording(recorder)
 * @param: recorder
 * @desc: initialize the recording functionality or throw an error if no song is found
 * */
Record.prototype.stopRecording = function (recorder) {
    if (!recorder.isRecording) {
        recorder.throwError("Recording cannot start since no song selected to be played...");
    }
    $(".record-sign, .stop-btn").hide();
    $(".record-btn").removeAttr("disabled", "disabled");
};

/**
 * @method: showError()
 * @return: Error Message
 */
Record.prototype.showError = function (msg) {
    console.error(msg);
};

/**
 *  @method: handleEvents()
 *  @desc: Add all the event handlers of the class here
 * */
Record.prototype.handleEvents = function (recorder) {
    var song = new Song("Samjho ho hi gaya");
    var recorderObj = typeof recorder !== "undefined" ? recorder : new Record(song);
    // Handle the click event of the record-btn
    $(".record-btn").on("click", function () {
        recorderObj.startRecording(recorderObj);
    });
    // Handle the click event of the stop-btn
    $(".stop-btn").on("click", function () {
        recorderObj.stopRecording(recorderObj);  // Question : Try to fail this test case
    });
};


// requirements:
// - when record is clicked
// - player should display a dot on it
// - player should capture the current frame of song and store it in the record object
// - when record is clicked second time, it should stop recording and save the results in an array
