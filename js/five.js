;(function(){
	//点击清理缓存的时候 出现遮罩层
	$(".clearc").on("click",function(){
		$(".alertmain").show();
		$(".acont").show();
	})
	//点击确认删除  遮罩层消失
	$(".conbtn").on("click",function(){
		$(".alertmain").hide();
		$(".acont").hide();
	})
})(jQuery)