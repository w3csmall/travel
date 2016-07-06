$(function(){
	
	init();

	function init(){
		Ajax();
		
	}
	function Ajax(){
		$.ajax({
			url:"data/data1.json",
			type:"get",
			dataType:"json",
			success:function(data){
				showpage(data);
			},
			error:function(){
				alert('请求失败!');
			}
		})
	}
	function showpage(data){
		var ohtml='';

			$.each(data.show,function(key,val){
				ohtml+="<dl id='"+val.id+"'>"
						+"<dt><img src='images/"+val.img+"'></dt>"
						+"<dd>"
							+"<h3>"+val.h3+"</h3>"
							+"<p>"+val.cont+"</p>"
						+"</dd>"
					+"</dl>";

			})
		$('#showpage').html(ohtml);
		addevent();
	}
	setTimeout(function(){
		$('#showpage').height();
		var con=new iScroll("con");
	},2000)
	function addevent(){
		var len=$('#showpage dl').length;
		for(var i=0 ; i<len ; i++){

			$('#click'+(i+1)).bind('click',function(e){
				var _url=$(this).attr('id');
				location.href=_url+".html";
			})
		}


		
	}

})