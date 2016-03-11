$(function(){
//	var test = "123";//测试
	var test = "";//线上
	//获取人才招聘
	function index_rczp(id){
		setTimeout(getRecr(id),1000);
	    $.ajax({
	        type:'get',
	        url:'/zky/zkContentInfo/selectContentByMenuId?menuId='+id,
	        async : false, 
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
	        		
//	        		$('.body_2_gcsj h1').html(data[1].title);
//
//	        		$('.body_2_gcsj li').eq(1).find('span').eq(0).html(data[1].long_title);
//	        		$('.body_2_gcsj li').eq(1).find('span').eq(1).html(data[1].content);
//
//	        		$('.body_2_gcsj li').eq(2).find('p').eq(0).html(data[2].long_title);
//	        		$('.body_2_gcsj li').eq(2).find('p').eq(1).html(data[2].content);
//
//	        		$('.body_2_gcsj li').eq(3).find('p').eq(0).html(data[3].long_title);
//	        		$('.body_2_gcsj li').eq(3).find('p').eq(1).html(data[3].content.split('；')[0]);
//	        		$('.body_2_gcsj li').eq(3).find('p').eq(2).html(data[3].content.split('；')[1]);
//	        		$('.body_2_gcsj li').eq(3).find('p').eq(3).html(data[3].content.split('；')[2]);
//
//	        		$('.body_2_yfl h1').html(data[4].title);
//
//	        		$('.body_2_yfl li').eq(1).find('span').eq(0).html(data[4].long_title);
//	        		$('.body_2_yfl li').eq(1).find('span').eq(1).html(data[4].content);
//
//	        		$('.body_2_yfl li').eq(2).find('span').eq(0).html(data[5].long_title);
//	        		$('.body_2_yfl li').eq(2).find('span').eq(1).html(data[5].content);
//
//	        		$('.body_2_yfl li').eq(3).find('span').eq(0).html(data[6].long_title);
//	        		$('.body_2_yfl li').eq(3).find('span').eq(1).html(data[6].content);
//
//	        		$('.body_2_zhushi span').html(data[7].content);
	            }
	        },
	        error:function(){
	            console("加载失败");
	        }
	    });
	    
	    //获取并设置招聘信息
	    
	    
	}
	
	function getRecr(id){
		$.ajax({
	        type:'get',
	        url:'/zky/zkMenu/selectMenuListByParentId?parentId='+id,
	        async : false, 
	        success:function (data){
	            if (data) {
	            	for(var i=0;i<data.length;i++){
	            		
	            		 //获取内容并设置
	            		 $.ajax({
	            		        type:'get',
	            		        url:'/zky/zkContentInfo/selectContentByMenuId?menuId='+data[i].id,
	            		        async : false, 
	            		        success:function (data1){
	            		        	if(data1){
//	            		        		console.log("i="+i);
//	            		        		console.log(data1[0]);
	            		        		if(data1[0]){
//	            		        			console.log("title="+data1[0].title);
//	            		        			console.log($('ul h1').eq(i).html());
	            		        			$('.body_2in ul  h1').eq(i).html(data1[0].title);
	            		        			$('.body_2in ul span').eq(i).html(data1[0].content);
	            		        		}
//	            		        		console.log(data1[0]);
	            		        	}
	            		        }
	            		 });
	            	}
	            }
	        },
	        error:function(){
	            console("加载失败");
	        }
	    });
	}
	
	
	var parentId=getQueryString("id");//获取父菜单id
    index_rczp(parentId);
});