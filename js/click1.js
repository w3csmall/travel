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
				$("#showjiudian").html(moban(data.show));
			}
		})


	}
	setTimeout(function(){
		var hei=$('#showjiudian').height(),
			con=new iScroll("jiudian");
		var len=$('#showjiudian>dl').length;
		for(var i=0; i<len; i++){
			$("#jiudian"+(i+1)).on('click',function(){
				var _url=$(this).attr('id'),
					name=$(this).find('h3').html();
				location.href=_url+".html?name="+name;
			})
		}			
	},100)
})
