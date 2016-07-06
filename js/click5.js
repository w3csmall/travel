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
				$("#showshuiba").html(moban(data.shuiba));
			}
		})


	}
	setTimeout(function(){
		var hei=$('#showshuiba').height(),
			con=new iScroll("shuiba");
		var len=$('#showshuiba>dl').length;
		for(var i=0; i<len; i++){
			$("#shuiba"+(i+1)).on('click',function(){
				var _url=$(this).attr('id'),
				name=$(this).find('h3').html();
				location.href=_url+".html?name="+name;
			})
		}			
	},100)
})
