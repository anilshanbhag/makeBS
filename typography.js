function Typography(){
    var body = $('body');
    return {
        'font-family-base' : body.css('font-family'),
        'font-size-base' : body.css('font-size'),
        'line-height-base' : body.css('line-height'),
        'text-color' : body.css('color'),
        'body-bg' : body.css('background-color')
    };
}