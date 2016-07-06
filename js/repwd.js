;(function(){
	//现获取三个input的val的值
	$(".inp3").on("blur",function(){
		var inval2=$(".inp2").val(),
		    inval3=$(".inp3").val();
		//console.log(inval2,inval3);
		if(inval2===inval3){
			//点击清理缓存的时候 出现遮罩层
			$(".btn").on("click",function(){
				$(".alertmain").show();
				$(".acont").show();
			})
			//点击确认删除  遮罩层消失
			$(".conbtn").on("click",function(){
				$(".alertmain").hide();
				$(".acont").hide();
			})
		}else{
			alert("输入两次的密码不一致！");
		}
	})
})(jQuery)