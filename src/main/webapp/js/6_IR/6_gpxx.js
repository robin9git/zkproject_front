$(function(){
//	var test = "123";//测试
	var test = "";//线上
	//获取最新的一条新闻进行展示
//    $.ajax({
//        type:'get',
//        url:'/zky/zkContentInfo/selectContentByMenuId',
//        async : false, 
//        data:{menuId:'4028814d52871d3d015287a3546b0031',
//        	pageCurrent:1,eachPageSize:1},
//        success:function (data){
//        	//清除数据
//        	$('.body1_in').empty();
//            if (data) {
//            	var res = '';
//            		//标题和简短内容
//	        		res += "<div class='body1_in_left'>";
//	        		res += 		"<div class='body1_in_left_line'></div>";
//	        		res +=      "<span class='body1_in_left_text1'>"+(data[0].publicTime!=undefined?data[0].publicTime:'')+test+"</span>";
//	        		res += 		"<p class='body_title_left'></p>";
//	        		res += 		"<p class='body1_in_left_text2'>"+(data[0].title!=undefined?data[0].title:'')+test+"</p>";
//	        		res += 		"<p class='body1_in_left_text3'>";
//		        		if(data[0].content){
//		        			var con = data[0].content.replace(/<[^>]+>/g,"");
//		        			if(con.length>150){
//		        				res += 	con.substring(0,150)+"......";
//		        			}else{
//		        				res += 	con;
//		        			}
//		        		}
//	        		res += 		"</p>";
//	        		res += 		"<a class='body1_in_left_a' href='index_gsxw_xq.html?id="+(data[0].id!=undefined?data[0].id:'')+"'><span>查看详情</span></a>"
//	        		res += "</div>";
//	        		//图片
//	        		res += "<div class='body1_in_right'>";
//	        		if(data[0].pic_src){
//	        			res += 		"<img src='"+data[0].pic_src+"' alt=''>";
//	            	}
//	        		res += "</div>";
//	        		
//	        		if(res){
//	        			$('.body1_in').html(res);
//	        		}
//	        		
//	        		//加载新闻列表
//	        		getMoreNews(1,true);
//	        		
//            }
//        },
//        error:function(){
//            console("加载失败");
//        }
//    });
	
    
});

var p = 1;

function getMore(){
	p = p+1;
	getMoreNews(p,false);
}

function getMoreNews(pageCurrent,flag){

	var data = [{"publicTime":"2016-03-07","id":"123","title":"title1123","content":"content123"}
	,{"publicTime":"2016-03-07","id":"123","title":"title1123","content":"content123"}
	,{"publicTime":"2016-03-07","id":"123","title":"title1123","content":"content123"}
	,{"publicTime":"2016-03-07","id":"123","title":"title1123","content":"content123"}
	,{"publicTime":"2016-03-07","id":"123","title":"title1123","content":"content123"}];
	
	var res = '';
	for(var i=0;i<data.length;i++){
		//标题和简短内容
		res += "<li>";
		//年份
		res += "<div class='body2_li_l'>";
		if(data[i].publicTime){
			res += "<span>"+data[i].publicTime.substring(8,10)+"</span>";
			res += "<p>"+data[i].publicTime.substring(0,7)+"</p>";
		}
		res += "</div>";
		//内容
		res += "<a href='index_gsxw_xq.html?id="+(data[i].id!=undefined?data[i].id:'')+"' class='body2_li_r'>";
		res += 		"<h2>"+(data[i].title!=undefined?data[i].title:'')+"</h2>";
		res += 		"<p>";
	        		if(data[i].content){
	        			var con = data[i].content.replace(/<[^>]+>/g,"");
	        			if(con.length>150){
	        				res += 	con.substring(0,150)+"......";
	        			}else{
	        				res += 	con;
	        			}
	        		}
		res += 		"</p>";
		res += 		"<span>详情 》》</span>";
		res += "</a>";
		res += "</li>";
	}
	
	if(res){
		if(flag){
			$('.body2 ul').html(res);
		}else{
			$('.body2 ul').append(res);//追加数据
		}
	}
	
}
