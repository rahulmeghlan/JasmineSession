/**
 * Created with JetBrains WebStorm.
 * User: rmeghl
 * Date: 11/16/14
 * Time: 9:47 PM
 * To change this template use File | Settings | File Templates.
 */
describe("Testing Fixtures", function () {
    it("should load the fixture", function () {
        loadFixtures("htmlFixtures/myFixture.html");
        var $myFixture = $("#my-fixture");
        $myFixture.html("This is modified from the the test case !");
        expect($myFixture).toContainText("This is modified from the the test case !");
    })
})