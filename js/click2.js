$(function(){
	
	init();

	function init(){
		handlebars();
	}

	function handlebars(){

		$.getJSON('data/jiudian.json',{},function(data){
			if(data.success==1){
				var ohtml=$('#shuju').html();
				moban=Handlebars.compile(ohtml);
				$("#showktv").html(moban(data.KTV));
			}
		})


	}
	setTimeout(function(){
		var hei=$('#showktv').height(),
			con=new iScroll("ktv");
		var len=$('#showktv>dl').length;
		for(var i=0; i<len; i++){
			$("#ktv"+(i+1)).on('click',function(){
				var _url=$(this).attr('id'),
				name=$(this).find('h3').html();
				location.href=_url+".html?name="+name;
			})
		}			
	},100)
})
