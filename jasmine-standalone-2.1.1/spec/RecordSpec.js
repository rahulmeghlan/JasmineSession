/**
 * Created with JetBrains WebStorm.
 * User: rmeghl
 * Date: 11/24/14
 * Time: 9:29 PM
 * To change this template use File | Settings | File Templates.
 */
describe("when record is clicked, it", function () {
    var recorder,
        player,
        song;

    beforeEach(function () {
        song = new Song("some song...");
        player = new Player();
        recorder = new Record(song);
        loadFixtures("htmlFixtures/PlayerFixture.html");
        recorder.handleEvents(recorder);
        $(".record-btn").trigger("click");
    });
    afterEach(function () {
        recorder = "";
    });
    // todo : this spec needs to be visited again for more work
    xit("should show an error message if no song is played", function () {
        recorder = new Record();
        expect(recorder.showError("Error msg")).toWriteConsoleMsg("Error msg");
    });
    it("should show the recording dot", function () {
        expect(recorder.isRecording).toBeTruthy();
        expect($(".record-sign")).toBeVisible();
    });
    it("should disable record button", function () {
        expect($(".record-btn")).toBeDisabled();
    });
    it("should show stop button", function () {
        expect($(".stop-btn")).toBeVisible();
    });
    xdescribe("stop is clicked in recording mode, it", function () {
        xit("should enable the record button", function () {

        });
        xit("should disable the stop button", function () {

        });
        xit("should hide the recording icon", function () {

        });
        xit("should store the currently playing song in the data store", function () {
            // should store the currently playing song in the localStorage
        });


    })
});