function Footer() {
    var topnode = $('body'),
        cool = false;

    // TODO: Get link colors
    while(!cool) {
        var elems = $('body').children().filter(function(){
            return $(this).height() > 0 && $(this).css('visibility') != "hidden" && $(this).css('position') != "absolute";
        });

        if (elems.length > 1) {
            var lastElem = $(elems[elems.length - 1]);
            return {
                'footer-padding-top' : lastElem.css('padding-top'),
                'footer-padding-bottom' : lastElem.css('padding-bottom'),
                'footer-background': lastElem.css('background-color'),
                'footer-text-color': lastElem.css('color')
            };
        } else if (elems.length == 1) {
            topnode = elems;
        } else {
            return 'error';
        }
    }
}