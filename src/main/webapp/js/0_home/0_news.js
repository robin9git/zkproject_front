$(function(){
	//获取公司新闻滚动图
    $.ajax({
        type:'get',
        url:'/zky/zkContentInfo/getZkContentInfoList3ById',
        async : false, 
        data:{menuId:'4028814d52871d3d015287a3546b0031'},
        success:function (data){
            if (data) {
        		for(var i=0;i<data.List.length;i++){
        			//设置图片连接
        			var hh = $('.body_111 .body_1_img_lunbo a').eq(i).attr("href");
//        			console.log("href:"+hh+data.List[i].id);
        			if(hh){
        				$('.body_111 .body_1_img_lunbo a').eq(i).attr("href",hh+"?id="+data.List[i].id);
        			}
        			$('.body_111 .body_1_img_lunbo img').eq(i).attr('src',data.List[i].indexPic);
        		}
            }
            body_111_lunbo();
        },
        error:function(){
            console.log("加载失败");
        }
    });
    
    //获取行业动态滚动图
    $.ajax({
        type:'get',
        url:'/zky/zkContentInfo/getZkContentInfoList3ById',
        async : false, 
        data:{menuId:'4028814d52871d3d015287a37feb0033'},
        success:function (data){
            if (data) {
        		for(var i=0;i<data.List.length;i++){
        			//设置图片连接
        			var hh = $('.body_122 .body_1_img_lunbo a').eq(i).attr("href");
//        			console.log("href:"+hh+data.List[i].id);
        			if(hh){
        				$('.body_122 .body_1_img_lunbo a').eq(i).attr("href",hh+"?id="+data.List[i].id);
        			}
        			$('.body_122 .body_1_img_lunbo img').eq(i).attr('src',data.List[i].indexPic);
        		}
            }
            body_122_lunbo();
        },
        error:function(){
            console.log("加载失败");
        }
    });
    
    //获取项目进展滚动图
    $.ajax({
        type: 'get',
        url: '/zky/zkContentInfo/getZkContentInfoList3ById',
        async: false,
        data: { menuId: '8aad12b1533058a80153318e6e97000e' },
        success: function (data) {
            if (data) {
                for (var i = 0; i < data.List.length; i++) {
                	//设置图片连接
        			var hh = $('.body_131 .body_1_img_lunbo a').eq(i).attr("href");
//        			console.log("href:"+hh+data.List[i].id);
        			if(hh){
        				$('.body_131 .body_1_img_lunbo a').eq(i).attr("href",hh+"?id="+data.List[i].id);
        			}
                    $('.body_131 .body_1_img_lunbo img').eq(i).attr('src', data.List[i].indexPic);
                }
            }
            body_131_lunbo();
        },
        error: function () {
            console.log("加载失败");
        }
    });

    //获取5条新闻
    $.ajax({
        type:'get',
        url:'/zky/zkContentInfo/selectContentByMenuId',
        async : false, 
        data:{menuId:'4028814d52871d3d015287a3546b0031',
        	pageCurrent:1,eachPageSize:5},
        success:function (data){
        	$('.body_112 ul').empty();
            if (data) {
            	var res = '';
        		for(var i=0;i<data.length;i++){
        			res += "<li>";
        			res += "<a href='../2_news/index_gsxw_xq.html?id="+(data[i].id!=undefined?data[i].id:'')+"'>";
        			res += "<span>";
        			if(data[i].title){
        				if(data[i].title.length>40){
        					res += data[i].title.substring(0,40);
        				}else{
        					res += data[i].title;
        				}
        			}
        			res += "......</span>";
        			res += "<span>"+(data[i].publicTime!=undefined?data[i].publicTime:'')+"</span>";
        			res += "</a>";
        			res += "</li>";
        		}
        		if(res){
        			$('.body_112 ul').html(res);
        		}
            }
        },
        error:function(){
            console.log("加载失败");
        }
    });
    
    //获取5条行业动态
    $.ajax({
        type:'get',
        url:'/zky/zkContentInfo/selectContentByMenuId',
        async : false, 
        data:{menuId:'4028814d52871d3d015287a37feb0033',
        	pageCurrent:1,eachPageSize:5},
        success:function (data){
        	$('.body_121 ul').empty();
            if (data) {
            	var res = '';
        		for(var i=0;i<data.length;i++){
        			res += "<li>";
        			res += "<a href='../2_news/index_hydt_xq.html?id="+(data[i].id!=undefined?data[i].id:'')+"'>";
        			res += "<span>";
        			if(data[i].title){
        				if(data[i].title.length>40){
        					res += data[i].title.substring(0,40);
        				}else{
        					res += data[i].title;
        				}
        			}
        			res += "......</span>";
        			res += "<span>"+(data[i].publicTime!=undefined?data[i].publicTime:'')+"</span>";
        			res += "</a>";
        			res += "</li>";
        		}
        		if(res){
        			$('.body_121 ul').html(res);
        		}
            }
        },
        error:function(){
            console.log("加载失败");
        }
    });

    //获取5条项目展示
    $.ajax({
        type: 'get',
        url: '/zky/zkContentInfo/selectContentByMenuId',
        async: false,
        data: {
            menuId: '8aad12b1533058a80153318e6e97000e',
            pageCurrent: 1, eachPageSize: 5
        },
        success: function (data) {
            $('.body_132 ul').empty();
            if (data) {
                var res = '';
                for (var i = 0; i < data.length; i++) {
                    res += "<li>";
                    res += "<a href='../2_news/index_xmjz_xq.html?id=" + (data[i].id != undefined ? data[i].id : '') + "'>";
                    res += "<span>";
                    if (data[i].title) {
                        if (data[i].title.length > 40) {
                            res += data[i].title.substring(0, 40);
                        } else {
                            res += data[i].title;
                        }
                    }
                    res += "......</span>";
                    res += "<span>" + (data[i].publicTime != undefined ? data[i].publicTime : '') + "</span>";
                    res += "</a>";
                    res += "</li>";
                }
                if (res) {
                    $('.body_132 ul').html(res);
                }
            }
        },
        error: function () {
            console.log("加载失败");
        }
    });
	
});