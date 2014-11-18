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
        expect($myFixture).toBeInDOM();
    });

    it("should write the name after login", function () {
        loadFixtures("htmlFixtures/myFixture.html");
        var myObj = new myFixture();
        myObj.click();
        var $myFixture = $("#my-fixture");
        $myFixture.find("input").trigger("click");
        expect($myFixture.find(".username")).toContainHtml("Rahul");
    })
});