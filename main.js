var page = require('webpage').create(),
    system = require('system'),
    url;

phantom.injectJs('./typography.js');
phantom.injectJs('./footer.js');
phantom.injectJs('./textblock.js');
//phantom.injectJs('./navbar.js');
phantom.injectJs('./widgetifier.js');

var handlers = [ Typography, Footer, TextBlock,textWidgetifier ]

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

if (system.args.length === 1) {
    console.log('Usage: main.js <some URL>');
    phantom.exit();
} else {
    url = system.args[1];
	page.viewportSize = { width: 1280 , height: 600 };
    page.open(url, function (status) {
        page.injectJs('jquery.min.js');
        var all = {};
        for(var i = 0; i < handlers.length; i++){
            var ret = page.evaluate(handlers[i]);

            if (ret == 'error') {
                console.log('error at ', i);
            } else {
                for (val in ret) {
                    if (val) { all[val] = ret[val]; }
                }
            }
        }

        if (all['text-color'] == all['body-bg']) {
            all['text-color'] = all['section-color'];
        }

        for(key in all) {
            console.log('@' + key + ":" + all[key] + ';');
        }

		page.render('test.jpg');
        phantom.exit();
    });
}
