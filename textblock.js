function TextBlock() {
    var elems = $('p');
    var ret = {};
    if (elems.length > 0) {
        var elem = $(elems[Math.floor(elems.length/2)]);
        var color = elem.css('color'),
            bgcolor = 'rgba(0, 0, 0, 0)';

        while (elem.prop('tagName') != 'BODY') {
            if (elem.css('background-color') != 'rgba(0, 0, 0, 0)') {
                bgcolor = elem.css('background-color');
                break;
            } else {
                elem = elem.parent();
            }
        }

        ret['section-color'] = color;
        ret['section-bgcolor'] = bgcolor;

        elems = $('p a');
        if (elems.length > 0) {
            elem = $(elems[Math.floor(elems.length/2)]);
            color = elem.css('color');

            ret['brand-primary'] = color;
            ret['link-color'] = color;
        }

        return ret;
    } else {
        return 'error';
    }
}