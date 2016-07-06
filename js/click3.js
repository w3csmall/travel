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
				$("#showchaba").html(moban(data.chaba));
			}
		})


	}
	setTimeout(function(){
		var hei=$('#showchaba').height(),
			con=new iScroll("chaba");
		var len=$('#showchaba>dl').length;
		for(var i=0; i<len; i++){
			$("#chaba"+(i+1)).on('click',function(){
				var _url=$(this).attr('id'),
				name=$(this).find('h3').html();
				location.href=_url+".html?name="+name;
			})
		}			
	},100)
})
