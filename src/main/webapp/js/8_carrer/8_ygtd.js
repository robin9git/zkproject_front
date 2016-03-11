$(function(){
//	var test = "123";//测试
	var test = "";//线上
	//获取员工天地
    $.ajax({
        type:'get',
        url:'/zky/zkContentInfo/selectContentForLevel1ByMenuId',
        async : false, 
        data:{menuId:'4028814d52871d3d015287ac2991003b'},
        success:function (data){
        	//清除数据
        	$('.body').empty();
            if (data) {
            	var res = '';
            		//标题
	        		res += "<div class='body_title'>";
	        		res += 		"<div class='body_title_in'>";
	        		res += 			"<p class='body_title_left'></p>";
	        		res += 			"<p class='body_title_con'>"+(data[0].title!=undefined?data[0].title:'')+test+"</p>";
	        		res += 			"<p class='body_title_right'></p>";
	        		res += 		"</div>";
	        		res += "</div>";
	        		
	        		res += "<div class='con'>";
	        		res += 		"<div class='con_left'>";
	        		res += 		"<p>"+(data[0].content!=undefined?data[0].content:'')+"</p>";
	        		res +=		"<div></div>";
	        		res += 		"</div>";
	        		if(data[0].pic_src){
	        			res += 		"<img src='"+data[0].pic_src+"' alt=''>";
	            	}
	        		res += "</div>";
	        		
	        		if(res){
	        			$('.body').html(res);
	        		}
	        		
            }
        },
        error:function(){
            console("加载失败");
        }
    });
	
});