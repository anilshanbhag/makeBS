function Navbar() {
	var uls = $('ul').filter(function(){
		var links = $(this).find('a');
		//var truth = true;
			//console.log($(this).text);
		console.log($(this).offset().top);
		if(links.length>2){
			var prevTop = links.offset().top;
			var truth = true;
			links.each(function(){
				if($(this).offset().top != prevTop){
					truth = false;
					return false;
				}
			});
			return truth;
		}
		else{
			return false;
		}
		//return (links.length>3);
	});
	var probNav = uls.first();
	var truth = true;
	var i=10;
	while(i>0){
		var sibs = probNav.siblings();
		if(sibs.length==0){
			probNav = probNav.parent();
		}
		else{
			sibs.each(function(){
				if($(this).offset().top > probNav.offset().top + probNav.height()){
					console.log($(this).offset().top +" "+(probNav.offset().top + probNav.height()));
					truth = false;
					return false;
				}});
			if(!truth)
				break;
			probNav = probNav.parent();
		}
		i--;
	}
	probNav.css('background-color','red');
	if(probNav.length==0)
		console.log("nothing in it");
	else{
		return {
		'navbar-height': (probNav.height()).toString()+'px',
		'navbar-margin-bottom': probNav.css('margin-bottom'),
		'navbar-default-color':            probNav.css('color'),
		'navbar-default-bg':                probNav.css('background-color'),
		'navbar-default-link-color':        probNav.find('a').css('color')
	};
	}
	return -1;
}
