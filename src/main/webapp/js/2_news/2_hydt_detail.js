$(function(){
//	var test = "123";//测试
	var test = "";//线上
	//根据id获取公司新闻详情
    $.ajax({
        type:'get',
        url:'/zky/zkContentInfo/selectZkContentInfoById',
        async : false, 
        data:{id:GetQueryString("id")},
        success:function (data){
        	//清除数据
        	$('.body_in').empty();
            if (data) {
            	var res = '';
            		//标题
	        		res += "<div class='body_in_left'>";
	        		res += 		"<p>"+(data.title!=undefined?data.title:'')+test+"</p>";
	        		res += 		"<div>文章来源："+(data.newsfrom!=undefined?data.newsfrom:'')+test+"</div>";
	        		res += "</div>";
	        		//内容
	        		res += "<div class='body_in_right'>";
	        		res += 		"<div class='body_in_right3'>";
	        		res += 		"<p>";
	        		res += 		(data.content!=undefined?data.content:'')+test;
	        		res += 		"</p>";
	        		res += 		"</div>";
	        		res += "</div>";
	        		//年份
	        		res += "<div class='body_in_year'>";
	        		if(data.publicTime){
	        			res += "<span>"+data.publicTime.substring(8,10)+"</span>";
	        			res += "<p>"+data.publicTime.substring(0,7)+"</p>";
	        			res += "<div class='body_line'></div>";
	        		}
	        		res += "</div>";
	        		
	        		if(res){
	        			$('.body_in').html(res);
	        		}
	        		
            }
        },
        error:function(){
            console("加载失败");
        }
    });
	
});

/**
 * 获取url参数值
 * */
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}