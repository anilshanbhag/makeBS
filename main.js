var page = require('webpage').create(),
    system = require('system'),
    url;
page.onConsoleMessage = function(msg) {
	  console.log( msg);
};
phantom.injectJs('./button.js');
phantom.injectJs('./navbar.js');

var handlers = [ Button , Navbar ];

if (system.args.length === 1) {
    console.log('Usage: main.js <some URL>');
    phantom.exit();
} else {
    url = system.args[1];
	page.viewportSize = { width: 1280 , height: 600 };
    page.open(url, function (status) {
		page.injectJs('./jquery.min.js');
        for(var i = 0; i < handlers.length; i++){
            var ret = page.evaluate(handlers[i]);
            console.log(ret);
        }

		page.render('test.jpg');
        phantom.exit();
    });
}
