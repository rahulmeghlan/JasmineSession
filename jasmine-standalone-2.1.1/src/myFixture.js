//jasmine.getFixtures().fixturesPath = 'htmlFixtures/';
//console.log(jasmine.getFixtures());
function myFixture() {
}

myFixture.prototype.click = function () {
    $(".login input").on("click", function () {
        $(".username").html("Rahul");
    })
};
