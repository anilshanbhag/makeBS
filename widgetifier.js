function textWidgetifier(){
	function Box(obj){
		obj = $(obj);
		//obj is a query object

		this.top = obj.offset().top;
		this.left = obj.offset().left;
		this.right = this.left+ obj.width();
		this.bottom = this.top+ obj.height();
		this.leftRightThresh = 80;
		//this.
	}
	Box.prototype.top = '';
	Box.prototype.left = '';
	Box.prototype.right = '';
	Box.prototype.bottom = '';
	Box.prototype.aboveOf = function(nextbox){
		//console.log(this.left+' '+this.top+' '+this.right+' '+this.bottom);
		//console.log(nextbox.left+' '+nextbox.top+' '+nextbox.right+' '+nextbox.bottom);
		return (this.bottom<=nextbox.top && 
				Math.abs(this.left - nextbox.left) <= this.leftRightThresh && 
				Math.abs(this.right - nextbox.right) <= this.leftRightThresh )
	};
	Box.prototype.leftOf = function(nextbox){
		return this.right<=nextbox.left;
	};

	var textWidgetTags = [
		"strong",
	"p",
	"del",
	"em",
	"pre",
	"ul",
	"ol",
	"table",
	"inline",
	"a",
	"hr",
	"span",
	"i",
	"blockquote",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6"
		];
    var body = $('body');
	var tagList = textWidgetTags.join();
	var tags = $('body').find(tagList);
	var filtered = tags.filter(function(){
		if(tags.has($(this)).length == 0)
			return true;
	});
	combined = $([]);
	filtered.each(function(){
		//console.log($(this).attr('class'));
		//console.log(combined.length);
		if(!combined.is($(this)) && combined.has($(this)).length==0){
			var siblings = $(this).add(filtered.filter($(this).siblings()));
			var group = $(this);
			//console.log(siblings.length);
			for(var i=0;i<siblings.length-1;i++){
				var b1 = new Box(siblings[i]);
				var b2 = new Box(siblings[i+1]);
				if(b1.aboveOf(b2)){
					group = group.add($(siblings[i+1]));
					//console.log('above');
				}
				else{
					//console.log('wrap');
					combined = combined.add(group.parent('.rich'));
					group = $(siblings[i+1]);
				}
			}
			group.wrapAll("<div class='rich edit-text'></div>");
			combined = combined.add(group.parent('.rich'));
		}


	});
	combined.css('background-color', 'rgba(0,0,0,0.1)');
	combined.css('border', '2px rgba(255,0,0,0.5)');
}
