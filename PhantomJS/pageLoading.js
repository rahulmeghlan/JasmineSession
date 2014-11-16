/**
@desc: This is an example to show the use-case of pageloading which will capture screen shots of a URL provided.
*/
var page = require('webpage').create();

page.open('https://www.facebook.com/', function(){
	page.render('facebook.png');
	console.log("Image Created");
	phantom.exit();
});