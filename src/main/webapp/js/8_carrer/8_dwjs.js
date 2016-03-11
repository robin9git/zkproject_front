$(function(){
//	var test = "123";//测试
	var test = "";//线上
	//获取队伍建设
    $.ajax({
        type:'get',
        url:'/zky/zkContentInfo/selectContentForLevel1ByMenuId',
        async : false, 
        data:{menuId:'4028814d52871d3d015287ac73df003d'},
        success:function (data){
        	//清除数据
        	$('.body').empty();
            if (data) {
            	var res = '';
            	res += 	"<div class='body_title'>";
            	res +=  "<div class='body_title_in'>";
            	res += 	"<p class='body_title_left'></p>";
            	res += 	"<p class='body_title_con'>队伍建设</p>";
            	res += 	"<p class='body_title_right'></p>";
            	res += "</div>";
            	res += "</div>";
            	
            		for(var i=0;i<data.length;i++){
            			if(i%3==0){
            				if(i==0){
            					res += "<div class='con body1'>";
            				}else if(i==3){
            					res += "<div class='con body2'>";
            				}
        	        		res += 		"<div class='con_left'>";
        	        		res +=      "<ul>";
            			}
            			res += 			"<li>";
            			res += 			"<p class='con_left_title'>"+(data[i].title!=undefined?data[i].title:'')+"</p>";
            			res += 			"<div>";
            			res += 			"<span>"+(data[i].long_title!=undefined?data[i].long_title:'')+test+"</span>";
            			res += 			"<p>"+(data[i].content!=undefined?data[i].content:'')+"</p>";
            			res += 			"</div>";
            			res += 			"</li>";
            			
            			if(i%3==2 ||i==data.length-1){
            				res +=      "</ul>";
            				res += 		"<div class='con_line'></div>";
        	        		res += 	"</div>";
        	        		res += "<img src='"+(data[i%3==2?i-2:(i%3==1?i-1:0)].pic_src!=undefined?data[i%3==2?i-2:(i%3==1?i-1:0)].pic_src:'')+"' alt='' class='con_right'>";
        	        		res += 	"</div>";
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