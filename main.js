var page = require('webpage').create(),
    system = require('system'),
    url;

phantom.injectJs('./button.js');

var handlers = [ Button ];

if (system.args.length === 1) {
    console.log('Usage: main.js <some URL>');
    phantom.exit();
} else {
    url = system.args[1];
    page.open(url, function (status) {
        for(var i = 0; i < handlers.length; i++){
            var ret = page.evaluate(handlers[i]);
            console.log(ret);
        }

        phantom.exit();
    });
}