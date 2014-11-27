/**
 * Created with JetBrains WebStorm.
 * User: rmeghl
 * Date: 11/24/14
 * Time: 8:13 PM
 * To change this template use File | Settings | File Templates.
 */
var record = new Record();
$(".record-btn").on("click", function () {
    record.startRecording(); // todo : refactor this in a way that recording should only start if a song object is passed to it.
});
