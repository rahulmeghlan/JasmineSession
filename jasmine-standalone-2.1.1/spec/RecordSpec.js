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
        loadFixtures("htmlFixtures/PlayerFixture.html");

        song = new Song("some song...");
        player = new Player();
        recorder = new Record(song);
        recorder.handleEvents(recorder);
        $(".record-btn").trigger("click");
    });
    afterEach(function () {
        recorder = {};  // re-initialize the recorder object after every spec
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
    describe("When stop is clicked in recording mode, it", function () {
        beforeEach(function () {
            $(".stop-btn").trigger("click");
        });
        it("should enable the record button", function () {
            expect($(".record-btn")).not.toBeDisabled();
        });
        it("should hide the stop button", function () {
            expect($(".stop-btn")).toBeHidden();
        });
        it("should hide the recording icon", function () {
            expect($(".record-sign")).toBeHidden();
        });
    })
});