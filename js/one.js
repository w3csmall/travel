;(function($){
	$(".info").on("click","a",function(e){
		e.preventDefault();
		var _href=$(this).attr("href");
		//切换内容
		$(_href).css("-webkit-transform","translate3d(0,0,0)").siblings().css("-webkit-transform","translate3d(100%,0,0)");
		//添加样式
		$(this).addClass("on").parent().siblings().find("a").removeClass("on");
	})
})(jQuery)