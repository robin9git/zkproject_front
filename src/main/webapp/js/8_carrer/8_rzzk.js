$(function(){
//	var test = "123";//测试
	var test = "";//线上
	//获取人在中科
    $.ajax({
        type:'get',
        url:'/zky/zkContentInfo/selectContentForLevel1ByMenuId',
        async : false, 
        data:{menuId:'4028814d52871d3d015287abf0a50039'},
        success:function (data){
        	//清除数据
        	$('.body').empty();
            if (data) {
            	var res = '';
            	for(var i=0;i<data.length;i++){
            		//标题
	        		res += "<div class='body_title'>";
	        		res += 		"<div class='body_title_in'>";
	        		res += 			"<p class='body_title_left'></p>";
	        		res += 			"<p class='body_title_con'>"+(data[i].title!=undefined?data[i].title:'')+test+"</p>";
	        		res += 			"<p class='body_title_right'></p>";
	        		res += 		"</div>";
	        		res += "</div>";
	        		
	        		if(i==0){
	        			res += "<div class='con1'>";
	        			if(data[0].pic_src){
		        			res += 		"<img src='"+data[i].pic_src+"' alt=''>";
		            	}
	        			res += 		"<div class='con_left'>";
		        		res += 		"<p>"+(data[i].content!=undefined?data[i].content:'')+"</p>";
		        		res +=		"<div></div>";
		        		res += 		"</div>";
		        		res += "</div>";
	        		}else{
	        			res += "<div class='con2'>";
	        			res += 		"<div class='con_left'>";
		        		res += 		"<p>"+(data[i].content!=undefined?data[i].content:'')+"</p>";
		        		res +=		"<div></div>";
		        		res += 		"</div>";
		        		if(data[0].pic_src){
		        			res += 		"<img src='"+data[i].pic_src+"' alt=''>";
		            	}
		        		res += "</div>";
	        		}
	        		
            	}
	        		
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