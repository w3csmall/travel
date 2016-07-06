$(function(){

	init();
	function init(){
		var name=window.location.search,
		arr=name.split("=");
		var url=window.location.pathname;
			$("#back").attr('href',"click4.html");
			
		//输出名字
		//console.log(window.decodeURIComponent(arr[1]));
		
		$('.header').find('h2').text(window.decodeURIComponent(arr[1]));
		$('.xie').text(window.decodeURIComponent(arr[1]));
		$('#both3').text(window.decodeURIComponent(arr[1]));
		//addevet();
	}
	
	setTimeout(function(){
		var con=new iScroll("jiudianxiangqing");
	},200)
		



})