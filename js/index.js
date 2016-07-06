;(function($){
	$.getJSON("data/data.json",function(data){
		//console.log(data.head[0].bg_color)
		var ohtml=$("#moban").html(),
			moban=Handlebars.compile(ohtml);
			$(".container").html(moban(data));
			var n=0,
			len=$(".container .main .imgBox img").length;
			console.log(len)
			$(".container").on("swipeLeft",function(){
				n++;
				if(n>=len) n=len-1;
				$(".container .main .imgBox").css({
					"left":""+(-n*100)+"%"
				})
			}).on("swipeRight",function(){
				n--;
				if(n<=0) n=0;
				$(".container .main .imgBox").css({
					"left":""+(-n*100)+"%"
				})
			})
	})
	
})(Zepto)