// 静态网页js-start
	//首页第一大块鼠标点击移出事件-start
		$('.body_1 > div').mouseenter(function(){
			$(this).addClass('body_1_cur').siblings().removeClass('body_1_cur');
		})
		$('.body_1 > div').mouseleave(function(){
			$(this).removeClass('body_1_cur');
		})
	//首页第一大块鼠标点击移出事件-end

	//首页图片轮播-start
		function home_lunbo(){
			var x=0;
			var timer1=null;
			// $('.nav').width($('.nav li').length*47);
			// 点击左
			$('.out').find('.left').click(function (){
				clearInterval(timer1);
				$('.out .con li').eq(x).animate({opacity:'hide'},0);
				x--;
				if (x<0) {
					x=$('.out').find('.con li').length-1;
				};
				move();
				autoMove();
			});
			//第二步：点击右
			$('.out').find('.right').click(function (){
				clearInterval(timer1);
				$('.out .con li').eq(x).animate({opacity:'hide'},0);
				x++;
				if (x>=$('.out').find('.con li').length) {
					x=0;
				};
				move();
				autoMove();
			});
			//第四步：自动走
			function autoMove(){
				timer1=setInterval(function (){
					$('.out .con li').eq(x).animate({opacity:'hide'},0);
					x++;
					if (x>=$('.out').find('.con li').length) {
						x=0;
					};
					move();
				},5000)
			}
			autoMove();//进入页面执行
			//第六步：提取公用部分
			function move(){
				$('.out').find('.nav li img').eq(x).attr("src","../imgs/0_home_page/gy_header_line3_title2.png").parent().siblings().children('img').attr("src","../imgs/0_home_page/gy_header_line3_title.png");
				$('.out .con li').eq(x).animate({opacity:'show'},0);
				// $('.header_line3_text').eq(x).show().siblings('.header_line3_text').hide();
			}
			//第三步：点击数字
			$('.out').find('.nav li').click(function (){
				clearInterval(timer1);
				$('.out .con li').eq(x).animate({opacity:'hide'},0);
				x=$('.out').find('.nav li').index(this);
				move();
				autoMove();
			})
		}
		// home_lunbo();
	//首页图片轮播-end

	// body_1轮播-satrt
		function body_111_lunbo(){
			var x=1;
			var anm=true;
			var n=0;
			var timer1=null;
			var imgW=295;//$('.body_111 .body_1_img_lunbo img').width();
			$('.body_111').scrollLeft(imgW);//初始位置
			// 复制插入节点
			var fir=$('.body_111 .body_1_img_lunbo a:first').clone().addClass("clone");
			var las=$('.body_111 .body_1_img_lunbo a:last').clone().addClass("clone");
			$('.body_111 .body_1_img_lunbo').append(fir);
			$('.body_111 .body_1_img_lunbo').prepend(las);
			$('.lunbo_1_detail a').attr('href',$('.body_111 .body_1_img_lunbo a').not(".clone").eq(0).attr('href'));
			//第四步：自动走
			function autoMove(){
				//
				timer1=setInterval(function (){
//					console.log("s"+x);
					if(x==1||x==4){
						$('.lunbo_1_detail a').attr('href',$('.body_111 .body_1_img_lunbo a').not(".clone").eq(1).attr('href'));
					}else if(x==2){
						$('.lunbo_1_detail a').attr('href',$('.body_111 .body_1_img_lunbo a').not(".clone").eq(2).attr('href'));
					}else if(x==3){
						$('.lunbo_1_detail a').attr('href',$('.body_111 .body_1_img_lunbo a').not(".clone").eq(0).attr('href'));
					}
					x++;
					if (x>=$('.body_111 .body_1_img_lunbo img').length) {
						x=2;
						$('.body_111').scrollLeft(imgW);
					};
					n++;
					if (n>=$('.body_111 .body_xiabiao img').length) {
						n=0;
					};
					
					move();
				},3000)
			}
			autoMove();//进入页面执行
			//第六步：提取公用部分
			function move(){
				$('.body_111 .body_xiabiao img').eq(n).attr("src","../imgs/0_home_page/yuan2_05.png").siblings().attr("src","../imgs/0_home_page/yuan1_07.png");
				$('.body_111').stop().animate({scrollLeft:imgW*x},function (){
					anm=true;
				});
			}
			//第三步：点击数字
			$('.body_111 .body_xiabiao img').click(function (){
				clearInterval(timer1);
				n=$('.body_111 .body_xiabiao img').index(this);
				x=n+1;
				move();
				autoMove();
			})
		}
//项目展示轮播start
		function body_131_lunbo() {
		    var x = 1;
		    var anm = true;
		    var n = 0;
		    var timer1 = null;
		    var imgW = 295;//$('.body_111 .body_1_img_lunbo img').width();
		    $('.body_131').scrollLeft(imgW);//初始位置
		    // 复制插入节点
		    var fir = $('.body_131 .body_1_img_lunbo a:first').clone().addClass("clone");
		    var las = $('.body_131 .body_1_img_lunbo a:last').clone().addClass("clone");
		    $('.body_131 .body_1_img_lunbo').append(fir);
		    $('.body_131 .body_1_img_lunbo').prepend(las);
		    $('.lunbo_3_detail a').attr('href',$('.body_131 .body_1_img_lunbo a').not(".clone").eq(0).attr('href'));
		    //第四步：自动走
		    function autoMove1() {
		        timer1 = setInterval(function () {
		        	if(x==1||x==4){
						$('.lunbo_3_detail a').attr('href',$('.body_131 .body_1_img_lunbo a').not(".clone").eq(1).attr('href'));
					}else if(x==2){
						$('.lunbo_3_detail a').attr('href',$('.body_131 .body_1_img_lunbo a').not(".clone").eq(2).attr('href'));
					}else if(x==3){
						$('.lunbo_3_detail a').attr('href',$('.body_131 .body_1_img_lunbo a').not(".clone").eq(0).attr('href'));
					}
		            x++;
		            if (x >= $('.body_131 .body_1_img_lunbo img').length) {
		                x = 2;
		                $('.body_131').scrollLeft(imgW);
		            };
		            n++;
		            if (n >= $('.body_131 .body_xiabiao img').length) {
		                n = 0;
		            };
		            move1();
		        }, 3000)
		    }
		    autoMove1();//进入页面执行
		    //第六步：提取公用部分
		    function move1() {
		        $('.body_131 .body_xiabiao img').eq(n).attr("src", "../imgs/0_home_page/yuan2_05.png").siblings().attr("src", "../imgs/0_home_page/yuan1_07.png");
		        $('.body_131').stop().animate({ scrollLeft: imgW * x }, function () {
		            anm = true;
		        });
		    }
		    //第三步：点击数字
		    $('.body_131 .body_xiabiao img').click(function () {
		        clearInterval(timer1);
		        n = $('.body_131 .body_xiabiao img').index(this);
		        x = n + 1;
		        move1();
		        autoMove1();
		    })
		}
//end
		function body_122_lunbo(){
			var x=1;
			var anm=true;
			var n=0;
			var timer1=null;
			var imgW=295;//$('.body_122 .body_1_img_lunbo img').width();
			$('.body_122').scrollLeft(imgW);//初始位置
			// 复制插入节点
			var fir=$('.body_122 .body_1_img_lunbo a:first').clone().addClass("clone");
			var las=$('.body_122 .body_1_img_lunbo a:last').clone().addClass("clone");
			$('.body_122 .body_1_img_lunbo').append(fir);
			$('.body_122 .body_1_img_lunbo').prepend(las);
			$('.lunbo_2_detail a').attr('href',$('.body_122 .body_1_img_lunbo a').not(".clone").eq(0).attr('href'));
			//第四步：自动走
			function autoMove(){
				timer1=setInterval(function (){
					if(x==1||x==4){
						$('.lunbo_2_detail a').attr('href',$('.body_122 .body_1_img_lunbo a').not(".clone").eq(1).attr('href'));
					}else if(x==2){
						$('.lunbo_2_detail a').attr('href',$('.body_122 .body_1_img_lunbo a').not(".clone").eq(2).attr('href'));
					}else if(x==3){
						$('.lunbo_2_detail a').attr('href',$('.body_122 .body_1_img_lunbo a').not(".clone").eq(0).attr('href'));
					}
					x++;
					if (x>=$('.body_122 .body_1_img_lunbo img').length) {
						x=2;
						$('.body_122').scrollLeft(imgW);
					};
					n++;
					if (n>=$('.body_122 .body_xiabiao img').length) {
						n=0;
					};
					move();
				},3000)
			}
			autoMove();//进入页面执行
			//第六步：提取公用部分
			function move(){
				$('.body_122 .body_xiabiao img').eq(n).attr("src","../imgs/0_home_page/yuan2_05.png").siblings().attr("src","../imgs/0_home_page/yuan1_07.png");
				$('.body_122').stop().animate({scrollLeft:imgW*x},function (){
					anm=true;
				});
			}
			//第三步：点击数字
			$('.body_122 .body_xiabiao img').click(function (){
				clearInterval(timer1);
				n=$('.body_122 .body_xiabiao img').index(this);
				x=n+1;
				move();
				autoMove();
			})
		}
		//body_122_lunbo();
	// body_1轮播-end

	//body_2轮播-start
		function body_2_lunbo(){
			$('.body_2_title').find('li').eq(0).addClass('body_2_title_cur');//第一个添加类名
			var x=1;
			var anm=true;
			var n=0;
			var timer1=null;
			var imgW=1250;
			// var imgW=$('.body_2_img_in img').eq(0).width();
			$('.body_2_in_img').scrollLeft(imgW);//初始位置
			// 复制插入节点
			var fir=$('.body_2_img_in img:first').clone();
			var las=$('.body_2_img_in img:last').clone();
			$('.body_2_img_in').append(fir);
			$('.body_2_img_in').prepend(las);
			$('.body_2_img_in').width($('.body_2_img_in img').length*imgW);
			//第四步：自动走
			function autoMove(){
				timer1=setInterval(function (){
					x++;
					if (x>=$('.body_2_in_img').find('.body_2_img_in img').length) {
						x=2;
						$('.body_2_in_img').scrollLeft(imgW);
					};
					n++;
					if (n>=$('.body_2_title').find('li').length) {
						n=0;
					};
					move();
				},3000)
			}
			autoMove();//进入页面执行
			//第六步：提取公用部分
			function move(){
				$('.body_2_title').find('li').eq(n).addClass('body_2_title_cur').siblings().removeClass('body_2_title_cur');
				$('.body_2_box').eq(n).show().siblings('.body_2_box').hide();
				$('.body_2_in_img').stop().animate({scrollLeft:imgW*x},function (){
					anm=true;
				});
			}
			//第三步：点击数字
			$('.body_2_title').find('li').click(function (){
				clearInterval(timer1);
				n=$('.body_2_title').find('li').index(this);
				x=n+1;
				move();
				autoMove();
			})
		}
		// body_2_lunbo();
	// body_2轮播-end
// 静态网页js-end

// ajax-start
	// body_2项目示范-satrt
        function xiangmulunbo_ajax(){
            $.ajax({
                type:'get',
                url:'/zky/zkZhFactory/getFactoryList?lang=zh',
                async : false, 
                success:function (data){
                    if (data) {
                    	// 模板-start
	                    	var aa='<div class="body_2_box">'
							aa+='<div class="body_2_box_line1">'
							aa+='	<span>伊泰示范项厂1</span>'
							aa+='	<img src="../imgs/0_home_page/body_2_xiexian.jpg" alt="">'
							aa+='</div>'
							aa+='<div class="body_2_box_line2">'
							aa+='	<ul>'
							aa+='		<li>'
							aa+='			<span class="body_2name">项目名称</span>'
							aa+='			<span class="body_2con">内蒙古伊泰16万吨/年煤炭间接液化工业示范项目</span>'
							aa+='		</li>'
							aa+='		<li>'
							aa+='			<span class="body_2name">建设单位</span>'
							aa+='			<span class="body_2con">内蒙古伊泰煤制油有限责任公司</span>'
							aa+='		</li>'
							aa+='		<li>'
							aa+='			<span class="body_2name">建设地点</span>'
							aa+='			<span class="body_2con">内蒙古鄂尔多斯市准格尔旗大路工业园区</span>'
							aa+='		</li>'
							aa+='		<li>'
							aa+='			<span class="body_2name">建设规模</span>'
							aa+='			<span class="body_2con">16万吨/年</span>'
							aa+='		</li>'
							// aa+='		<li>'
							// aa+='			<span class="body_2name">项目投资</span>'
							// aa+='			<span class="body_2con">28亿元人民币</span>'
							// aa+='		</li>'
							aa+='		<li>'
							aa+='			<span class="body_2name">产品方案</span>'
							aa+='			<span class="body_2con" style="width:281px;">柴油、石脑油、液体石蜡、稳定轻烃、液化石油气</span>'
							aa+='		</li>'
							aa+='		<li>'
							aa+='			<span class="body_2name">项目状态</span>'
							aa+='			<span class="body_2con">2009年3月建成投产</span>'
							aa+='		</li>'
							aa+='	</ul>'
							aa+='</div>'
							aa+='</div>'
						// 模板-end
						$('.body_2_title').find('li').remove();
						$('.body_2_img_in').find('img').remove();
						$('.body_2_right').find('.body_2_box').remove();
                    	for (var i = 0; i < data.factoryList.length; i++) {
                    		$('.body_2_title').append('<li></li>');
                    		$('.body_2_img_in').append('<img src="../imgs/0_home_page/datudatu_02.jpg" alt="">');
                    		if (data.factoryList[i].pic_src) {
                    			$('.body_2_img_in img').eq(i).attr('src',data.factoryList[i].pic_src);
                    			// $('.body_2_img_in').append('<img src="'+data.factoryList[i].pic_src+'" alt="">');
                    		};
                    		$('.body_2_right').append(aa);
                    		$('.body_2_box').eq(i).find('.body_2_box_line1 span').html(data.factoryList[i].menu_name);
                    		$('.body_2_box').eq(i).find('.body_2con').eq(0).html(data.factoryList[i].proname);
                    		$('.body_2_box').eq(i).find('.body_2con').eq(1).html(data.factoryList[i].constructorunit);
                    		$('.body_2_box').eq(i).find('.body_2con').eq(2).html(data.factoryList[i].constructorsite);
                    		$('.body_2_box').eq(i).find('.body_2con').eq(3).html(data.factoryList[i].constructionscale);
                    		// $('.body_2_box').eq(i).find('.body_2con').eq(4).html(data.factoryList[i].profinance);
                    		$('.body_2_box').eq(i).find('.body_2con').eq(4).html(data.factoryList[i].mainpro);
                    		$('.body_2_box').eq(i).find('.body_2con').eq(5).html(data.factoryList[i].prostatus);
                    	};
                    };
                    body_2_lunbo();
                },
                error:function(){
                   console.log("加载失败");
                }
            }); 
        }
        xiangmulunbo_ajax();
    // body_2项目示范-end

	// 首页banner-satrt
        function banner_ajax(){
        	//加载轮播图片及文字
            $.ajax({
                type:'get',
                url:'/zky/zkBanner/getZkBannerList?lang=zh',
                async : false, 
                success:function (data){
                    if (data) {
       //              	//封装模板-start
       //              		var aa='<div class="header_line3_text">'
							// aa+='<span>科技先导</span>'
							// aa+='<p>为国家能源战略安全分忧</p>'
							// aa+='</div>'
       //              	//封装模板-end
						$('.nav').find('li').remove();
						$('.header_line3_text').children().remove();
						$('.gy_header_line3 .con').find('img').remove();
                    	for (var i = 0; i < data.List.length; i++) {
                    		$('.nav').append('<li><img src="../imgs/0_home_page/gy_header_line3_title.png" alt=""></li>');
                    		if (data.List[i].picsrc) {
                    			// $('.gy_header_line3 .con').append('<img src="'+data.List[i].picsrc+'" alt="">');
                    			$('.gy_header_line3 .con').append('<li style="background-image: url('+data.List[i].picsrc+')";></li>');
                    		};
                    		// $('.header_line3_in .title').before(aa);
							// $('.header_line3_text span').eq(i).html(data.List[i].bigtitle);
							// $('.header_line3_text p').eq(i).html(data.List[i].bigcontent);
                    	};
			            // $('.header_line3_text').eq(0).show();
						$('.out').find('.nav li img').eq(0).attr("src","../imgs/0_home_page/gy_header_line3_title2.png").parent().siblings().children('img').attr("src","../imgs/0_home_page/gy_header_line3_title.png");
                    };
                },
                error:function(){
                   console.log("加载失败");
                }
            }); 
			//加载轮播底部不变的字段
            $.ajax({
                type:'get',
                url:'/zky/zkProService/getZkProserviceList?lang=zh',
                async : false, 
                success:function (data){
                    if (data) {
						$('.gy_header_line3 .gy_text span').eq(0).html(data.entity.littitle);
						$('.gy_header_line3 .gy_text span').eq(1).html(data.entity.litcontent);
                    };
                },
                error:function(){
                   console.log("加载失败");
                }
            }); 
            // 启动轮播效果
			home_lunbo();			
        }
        banner_ajax();
    // 首页banner-end


    //项目展示-satrt
    	function xmzs_ajax(){
            $.ajax({
                type:'get',
                url:'/zky/zkZhFactory/getProDebreifing?lang=zh',
                async : false, 
                success:function (data){
                    if (data) {
                    	$('.body_132 p').html(data.getProDebreifing.proDebriefing);
                    	$('.body_131 img').attr('src',data.getProDebreifing.proDebPic);
                    	//根据menu_id添加链接路径
                    	if (data.getProDebreifing.menu_id=='4028814d52871d3d015287bd5e23005d') {
                    		$('.body_13 a').attr('href','../4_project/yitaishifanchang.html?id=4028814d52871d3d015287bd5e23005d');
                    	};
                    	if (data.getProDebreifing.menu_id=='8aad12b1528c49db01529ab2c9fa0018') {
                    		$('.body_13 a').attr('href','../4_project/luanshifanchang.html?id=8aad12b1528c49db01529ab2c9fa0018');
                    	};
                    	if (data.getProDebreifing.menu_id=='8aad12b152ed61890152ee42234e007d') {
                    		$('.body_13 a').attr('href','../4_project/shenhuashifanchang.html?id=8aad12b152ed61890152ee42234e007d');
                    	};
                    	if (data.getProDebreifing.menu_id=='4028814d52871d3d015287bc7b510059') {
                    		$('.body_13 a').attr('href','../4_project/shenhuaningmei.html?id=4028814d52871d3d015287bc7b510059');
                    	};
                    	if (data.getProDebreifing.menu_id=='4028814d52871d3d015287bcdc53005b') {
                    		$('.body_13 a').attr('href','../4_project/shanxiluan.html?id=4028814d52871d3d015287bcdc53005b');
                    	};
                    	if (data.getProDebreifing.menu_id=='8aad12b152ed61890152ee3b4604006e') {
                    		$('.body_13 a').attr('href','../4_project/yitaikangjinqi.html?id=8aad12b152ed61890152ee3b4604006e');
                    	};
                    	if (data.getProDebreifing.menu_id=='8aad12b152ed61890152ee44b9bc0083') {
                    		$('.body_13 a').attr('href','../4_project/yitaiyili.html?id=8aad12b152ed61890152ee44b9bc0083');
                    	};
                    	if (data.getProDebreifing.menu_id=='8aad12b152ed61890152ee45f4740085') {
                    		$('.body_13 a').attr('href','../4_project/yitaiganquanbao.html?id=8aad12b152ed61890152ee45f4740085');
                    	};
                    	if (data.getProDebreifing.menu_id=='4028814d52871d3d015287bdb24a005f') {
                    		$('.body_13 a').attr('href','../4_project/jingneng.html?id=4028814d52871d3d015287bdb24a005f');
                    	};
                    	if (data.getProDebreifing.menu_id=='8aad12b152ed61890152ee46aeb90088') {
                    		$('.body_13 a').attr('href','../4_project/yitaidalu.html?id=8aad12b152ed61890152ee46aeb90088');
                    	};
                    	if (data.getProDebreifing.menu_id=='8aad12b152ed61890152ee3c34b40071') {
                    		$('.body_13 a').attr('href','../4_project/guizhouyufu.html?id=8aad12b152ed61890152ee3c34b40071');
                    	};
                    	if (data.getProDebreifing.menu_id=='4028814d52871d3d015287be46040061') {
                    		$('.body_13 a').attr('href','../4_project/qinghaiguilu.html?id=4028814d52871d3d015287be46040061');
                    	};
                    };
                },
                error:function(){
                   console.log("加载失败");
                }
            }); 
        }
        //xmzs_ajax();
    //项目展示-end
// ajax-end