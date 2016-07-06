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
				$("#showxiaochi").html(moban(data.xiaochi));
			}
		})


	}
	setTimeout(function(){
		var hei=$('#showxiaochi').height(),
			con=new iScroll("xiaochi");
		var len=$('#showxiaochi>dl').length;
		for(var i=0; i<len; i++){
			$("#xiaochi"+(i+1)).on('click',function(){
				var _url=$(this).attr('id'),
				name=$(this).find('h3').html();
				location.href=_url+".html?name="+name;
			})
		}			
	},100)
})
