//$(document).ready(function(){
$(function(){	
	//TEST
	var absUrl = "http://192.168.1.161:8080/";
//	var absUrl = "";
	//PRO
//	var absUrl = "http://zkhcy.cn/";
	
//	console.log("initload.js ...");
	/**
	 * 异步取菜单信息
	 * */
	$.ajax({
		type : "POST",
		url:absUrl+"ZKYController.do?getMenu&r="+Math.random(),
		dataType:"json",
		async:false,//同步请求
		cache:false,//不用用缓存，到服务器取
        success: function (data) {
        	var resMenu = data.resMenu;
        	if(resMenu!=undefined){
        		resMenu = resMenu.replace(/\"/g,"");
            	resMenu = resMenu.replace(/@@@/g,"\"");
//            	console.log("resMenu:"+resMenu);
                $(".headLink").html(resMenu);
        	}
        	
        	//首页模块
        	var sbIM1 = data.sbIM1;
        	if(sbIM1!=undefined){
        		sbIM1 = sbIM1.replace(/\"/g,"");
        		sbIM1 = sbIM1.replace(/@@@/g,"\"");
//            	console.log("resMenu:"+resMenu);
                $("#Statement3 ->ul ->li").html(sbIM1);
        	}
        	var sbIM2 = data.sbIM2;
        	if(sbIM2!=undefined){
        		sbIM2 = resMenu.replace(/\"/g,"");
        		sbIM2 = resMenu.replace(/@@@/g,"\"");
//            	console.log("resMenu:"+resMenu);
                $(".FatBanner ->ul").eq(1).html(sbIM2);
        	}
        	var sbIM3 = data.sbIM3;
        	if(sbIM3!=undefined){
        		sbIM3 = resMenu.replace(/\"/g,"");
        		sbIM3 = resMenu.replace(/@@@/g,"\"");
//            	console.log("resMenu:"+resMenu);
                $(".FatBanner ->ul").eq(2).html(sbIM3);
        	}
        	
            var links = data.links;
            if(links!=undefined){
            	$(".footLink").html(links.replace(/\"/g,""));
        	}
            
            //底部菜单渲染
            var bottomMenu = data.BottomMenu;
            if(bottomMenu!=undefined){
            	bottomMenu = bottomMenu.replace(/\"/g,"");
                bottomMenu = bottomMenu.replace(/@@@/g,"\"");
                $(".footMd").html(bottomMenu);
        	}
            
          //底部公司信息渲染
            var comp = data.comp;
            if(comp!=undefined){
            	comp = comp.replace(/\"/g,"");
//            	console.log("comp:"+comp);
                $(".footRt .list").html(comp);
        	}
            
            //重新绑定事件
            menuFun();
            
        }
	})
	
	
	commCovert(absUrl);
	
	/**
	 * 新闻资讯-出版刊物显示
	 * */
	$("h3").click(function(){
		
		var year = $(this).text();
		if(year!=''){
			$("h3").css({"background":"#f5f5f5"});
			$(this).css({"background":"#0086fa"});
			getElcs(year);
		}
		
	});
		
});

/**
 * 跳转用
 * */
function menu2html(param){
	console.log("param:"+param);
	window.location.href = param;
}

/**
 * 获取url参数值
 * */
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function twolevel2(idx) {
    $(".zgs-tab a").removeClass("active").eq(idx).addClass("active");
    $(".zgs-con").addClass("hid3").eq(idx).removeClass("hid3");
}

/**
 * 加入我们
 * */
function getJoinUs(absUrl){
	$.ajax({
		type : "POST",
		url:absUrl+"ZKYController.do?getJoinUs&r="+Math.random(),
		dataType:"json",
		async:false,//同步请求
		cache:false,//不用用缓存，到服务器取
        success: function (data) {
        	//招聘职位
        	var recruits = data.recruits;
        	if(recruits!=undefined){
        		recruits = recruits.replace(/\"/g,"");
//	        	console.log("recruits:"+recruits);
	            $(".childCont").eq(1).html(recruits);
        	}
            //联系我们
            var linkUs = data.linkUs;
            if(linkUs!=undefined){
            	linkUs = linkUs.replace(/\"/g,"");
	        	console.log("linkUs:"+linkUs);
	            $(".childCont").eq(3).html(linkUs);
            }
            
        }
	});
}

/**
 * 社会责任
 * */
function getSociaRes(absUrl){
	$.ajax({
		type : "POST",
		url:absUrl+"ZKYController.do?getSociaRes&r="+Math.random(),
		dataType:"json",
		async:false,//同步请求
		cache:false,//不用用缓存，到服务器取
        success: function (data) {
        	//持续发展
            var sustainedDev = data.sustainedDev;
            if(sustainedDev!=undefined){
            	sustainedDev = sustainedDev.replace(/\"/g,"");
	        	console.log("sustainedDev:"+sustainedDev);
	            $(".childCont").eq(0).html(sustainedDev);
            }
            //社会贡献
            var sbSC = data.sbSC;
            if(sbSC!=undefined){
            	sbSC = sbSC.replace(/\"/g,"");
	        	console.log("sbSC:"+sbSC);
	            $(".socail").html(sbSC);
            }
            //员工建设--标题，内容
            var sbEc1 = data.sbEc1;
            if(sbEc1!=undefined){
            	sbEc1 = sbEc1.replace(/\"/g,"");
	        	console.log("sbEc1:"+sbEc1);
	            $(".corpInfo").eq(1).html(sbEc1);//员工建设标题
            }
            var sbEc2 = data.sbEc2;
            if(sbEc2!=undefined){
            	sbEc2 = sbEc2.replace(/\"/g,"");
	        	console.log("sbEc2:"+sbEc2);
	            $(".ygjs").eq(0).html(sbEc2);
            }
            //员工培训
            var sbET = data.sbET;
            if(sbET!=undefined){
            	sbET = sbET.replace(/\"/g,"");
	        	console.log("sbET:"+sbET);
	            $(".childContS").eq(0).html(sbET);
            }
            
        },
        error: function(e){
        	console.log("getSociaRes error...");
        }
	});
}

/**
 * 产品与服务-
 */
function getProServices(absUrl){
	$.ajax({
		type : "POST",
		url:absUrl+"ZKYController.do?getProServices&r="+Math.random(),
		dataType:"json",
		async:false,//同步请求
		cache:false,//不用用缓存，到服务器取
        success: function (data) {
        	 var tecResearchDes = data.tecResearchDes;
             if(tecResearchDes!=undefined){
 	            $(".tecResearchDes").html(tecResearchDes);
             }
            var strIC1 = data.strIC1;
            if(strIC1!=undefined){
            	strIC1 = strIC1.replace(/\"/g,"");
	        	console.log("strIC1:"+strIC1);
	            $(".childContS").eq(0).html(strIC1);
            }
            var strIC2 = data.strIC2;
            if(strIC2!=undefined){
            	strIC2 = strIC2.replace(/\"/g,"");
	        	console.log("strIC2:"+strIC2);
	            $(".childContS").eq(1).html(strIC2);
            }
            var strIC3 = data.strIC3;
            if(strIC3!=undefined){
            	strIC3 = strIC3.replace(/\"/g,"");
	        	console.log("strIC3:"+strIC3);
	            $(".childContS").eq(2).html(strIC3);
            }
            var strIC4 = data.strIC4;
            if(strIC4!=undefined){
            	strIC4 = strIC4.replace(/\"/g,"");
	        	console.log("strIC4:"+strIC4);
	            $(".childContS").eq(3).html(strIC4);
            }
            var strIC5 = data.strIC5;
            if(strIC5!=undefined){
            	strIC5 = strIC5.replace(/\"/g,"");
	        	console.log("strIC5:"+strIC5);
	            $(".childContS").eq(4).html(strIC5);
            }
            var strIC6 = data.strIC6;
            if(strIC6!=undefined){
            	strIC6 = strIC6.replace(/\"/g,"");
	        	console.log("strIC1:"+strIC6);
	            $(".childContS").eq(5).html(strIC6);
            }
            
            //工程技术服务
            var proTecService = data.proTecService;
            if(proTecService!=undefined){
            	proTecService = proTecService.replace(/\"/g,"");
	        	console.log("proTecService:"+proTecService);
	            $(".childCont").eq(1).html(proTecService);
            }
            
            //技术许可服务
            var tecAccessService = data.tecAccessService;
            if(tecAccessService!=undefined){
            	tecAccessService = tecAccessService.replace(/\"/g,"");
	        	console.log("tecAccessService:"+tecAccessService);
	            $(".childCont").eq(2).html(tecAccessService);
            }
            
            //催化剂 catalyst
            var catalyst = data.catalyst;
            if(catalyst!=undefined){
            	catalyst = catalyst.replace(/\"/g,"");
	        	console.log("catalyst:"+catalyst);
	            $(".proSerConIn").eq(0).html(catalyst);
            }
            
            //催化剂-技术产品研发历程
            var tecProResHis = data.tecProResHis;
            if(tecProResHis!=undefined){
            	tecProResHis = tecProResHis.replace(/\"/g,"");
	        	console.log("tecProResHis:"+tecProResHis);
	            $(".threeCont .timeLine").eq(0).html(tecProResHis);
            }
            //催化剂-技术优势
            var tecSupri = data.tecSupri;
            if(tecSupri!=undefined){
            	tecSupri = tecSupri.replace(/\"/g,"");
	        	console.log("tecSupri:"+tecSupri);
	            $(".threeCont2").html(tecSupri);
            }
            
        },
        error: function(e){
        	console.log("getSociaRes error...");
        }
	});
}

/**
 * 研究开发-
 */
function getTecResearch(absUrl){
	$.ajax({
		type : "POST",
		url:absUrl+"ZKYController.do?getTecResearch&r="+Math.random(),
		dataType:"json",
		async:false,//同步请求
		cache:false,//不用用缓存，到服务器取
        success: function (data) {
        	
        	//技术研究
        	var tecResearchDes047 = data.tecResearchDes047;//菜单longtital
            if(tecResearchDes047!=undefined){
	            $(".tecResearchDes").eq(0).html(tecResearchDes047);
            }
        	 var strTecReas0 = data.strTecReas0;
             if(strTecReas0!=undefined){
 	            $(".childContS").eq(0).html(strTecReas0);
             }
             var strTecReas1 = data.strTecReas1;
             if(strTecReas1!=undefined){
 	            $(".childContS2").html(strTecReas1);
             }
             var strTecReas2 = data.strTecReas2;
             if(strTecReas2!=undefined){
 	            $(".childContS3").html(strTecReas2);
             }
             var strTecReas3 = data.strTecReas3;
             if(strTecReas3!=undefined){
 	            $(".childContS4").html(strTecReas3);
             }
             var strTecReas4 = data.strTecReas4;
             if(strTecReas4!=undefined){
 	            $(".childContS5").html(strTecReas4);
             }
             var strTecReas5 = data.strTecReas5;
             if(strTecReas5!=undefined){
 	            $(".childContS6").html(strTecReas5);
             }
             var strTecReas6 = data.strTecReas6;
             if(strTecReas6!=undefined){
 	            $(".childContS7").html(strTecReas6);
             }
            
        },
        error: function(e){
        	console.log("getTecResearch error...");
        }
	});
}

/**
 * 新闻资讯-公司新闻
 * para1 1初始化，2加载更多
 * begin 开始取值index
 */
function getNews(absUrl,para1,begin){
	$.ajax({
		type : "POST",
		data: {"begin":begin},
		url:absUrl+"ZKYController.do?getNews&r="+Math.random(),
		dataType:"json",
		async:false,//同步请求
		cache:false,//不用用缓存，到服务器取
        success: function (data) {
        	//公司新闻
        	var sbComNews = data.sbComNews;//菜单longtital
            if(sbComNews!=undefined){
            	if(para1==2){
            		$(".newsCont").append(sbComNews);
            		$('.newsCont').BlocksIt({
            			numOfCol:4,  
            			offsetX:10,
                        offsetY:15
            		});
            	}else{
            		$(".newsCont").html(sbComNews);
            	}
	            
            }
            //公司新闻--重要新闻
        	var sbF1 = data.sbF1;//菜单longtital
            if(sbF1!=undefined){
            	$(".rec_news").eq(0).html(sbF1);
            }
            //行业动态--1级新闻
        	var sbIT1 = data.sbIT1;//菜单longtital
            if(sbIT1!=undefined){
            	$(".rec_news2").html(sbIT1);
            }
            //行业动态--2级新闻
        	var sbIT2 = data.sbIT2;//菜单longtital
            if(sbIT2!=undefined){
            	$(".tradeRec").html(sbIT2);
            }
            //行业动态--3级新闻
	    	var sbComNews2 = data.sbComNews2;//菜单longtital
	        if(sbComNews2!=undefined){
	        	if(para1==2){
	        		$(".tradeCont").append(sbComNews2);
	        		$('.tradeCont').BlocksIt({
	        			numOfCol:4,  
	        			offsetX:10,
	                    offsetY:15
	        		});
	        	}else{
	        		$(".tradeCont").html(sbComNews2);
	        	}
	        }
	        //电子刊物
	        var sbPdf = data.sbPdf;//菜单longtital
            if(sbPdf!=undefined){
            	$(".journalList").html(sbPdf);
            }
	        
	        
        },
        error: function(e){
        	console.log("getNews error...");
        }
	});
}

/**
 * 新闻资讯-公司新闻
 * para1 1初始化，2加载更多
 * begin 开始取值index
 */
function getElcs(year){
//	var begin =0;
	$.ajax({
		type : "POST",
		data: {"year":year},
		url:"ZKYController.do?getElcs&r="+Math.random(),
		dataType:"json",
		async:false,//同步请求
		cache:false,//不用用缓存，到服务器取
        success: function (data) {
	        //电子刊物
	        var sbPdf = data.sbPdf;//菜单longtital
            if(sbPdf!=undefined){
            	$(".journalList").html(sbPdf);
            }
        },
        error: function(e){
        	console.log("getElcs error...");
        }
	});
}

/**
 * 新闻资讯-公司新闻-详情
 * para1 1初始化，2加载更多
 * begin 开始取值index
 */
function getNewsDetail(absUrl,para1,begin,contId){
//	var begin =0;
	$.ajax({
		type : "POST",
		data: {"begin":begin,"contId":contId},
		url:absUrl+"ZKYController.do?getNewsDetail&r="+Math.random(),
		dataType:"json",
		async:false,//同步请求
		cache:false,//不用用缓存，到服务器取
        success: function (data) {
            //公司新闻--新闻详情
            var NewsDetai = data.NewsDetai;//菜单longtital
            if(NewsDetai!=undefined){
            	$(".newCont").html(NewsDetai);
            }
            
            //行业动态--1级新闻
        	var sbIT1 = data.sbIT1;//菜单longtital
            if(sbIT1!=undefined){
            	$(".rec_news2").html(sbIT1);
            }
            //行业动态--2级新闻
        	var sbIT2 = data.sbIT2;//菜单longtital
            if(sbIT2!=undefined){
            	$(".tradeRec").html(sbIT2);
            }
            //行业动态--3级新闻
	    	var sbComNews2 = data.sbComNews2;//菜单longtital
	        if(sbComNews2!=undefined){
	        	if(para1==2){
	        		$(".tradeCont").append(sbComNews2);
	        		$('.tradeCont').BlocksIt({
	        			numOfCol:4,  
	        			offsetX:10,
	                    offsetY:15
	        		});
	        	}else{
	        		$(".tradeCont").html(sbComNews2);
	        	}
	        }
	        //电子刊物
	        var sbPdf = data.sbPdf;//菜单longtital
            if(sbPdf!=undefined){
            	$(".journalList").html(sbPdf);
            }
	        
	        
        },
        error: function(e){
        	console.log("getNews error...");
        }
	});
}

/**
 * 关于我们
 */
function getAbout(absUrl){
	$.ajax({
		type : "POST",
		url:absUrl+"ZKYController.do?getAbout&r="+Math.random(),
		dataType:"json",
		async:false,//同步请求
		cache:false,//不用用缓存，到服务器取
        success: function (data) {
        	//集团概况-标题
        	var corpCont1 = data.corpCont1;
            if(corpCont1!=undefined){
	            $(".corpInfo_title").eq(0).html(corpCont1);
            }
            var corpCont2 = data.corpCont2;
            if(corpCont2!=undefined){
	            $(".corpInfo_title").eq(1).html(corpCont2);
            }
        	
        	 //关于我们
        	 var strGroupProfile0 = data.strGroupProfile0;//公司介绍
             if(strGroupProfile0!=undefined){
 	            $(".gsgy").html(strGroupProfile0);
             }
             var strGroupProfile1 = data.strGroupProfile1;//发展历程
             if(strGroupProfile1!=undefined){
 	            $(".childCont").eq(1).html(strGroupProfile1);
             }
             var strGroupProfile2 = data.strGroupProfile2;//企业文化
             if(strGroupProfile2!=undefined){
// 	            $(".qywh").html(strTecReas2);
 	           $(".childCont").eq(2).html(strGroupProfile2);
             }
             var strGroupProfile3 = data.strGroupProfile3;//组织机构
             if(strGroupProfile3!=undefined){
 	            $(".jgzz").html(strGroupProfile3);
             }
             var strGroupProfile4 = data.strGroupProfile4;//地理位置
             if(strGroupProfile4!=undefined){
 	            $(".mapBxo").before(strGroupProfile4);
             }
             var strGroupProfile5 = data.strGroupProfile5;
             if(strGroupProfile5!=undefined){
 	            $(".jsln").html(strGroupProfile5);
             }
             var strGroupProfile6 = data.strGroupProfile6;//管理层
             if(strGroupProfile6!=undefined){
 	            $(".childCont").eq(6).html(strGroupProfile6);
             }
             
             //子分公司
             var sbChildComps1 = data.sbChildComps1;
             if(sbChildComps1!=undefined){
 	            $(".zgs-con").eq(0).html(sbChildComps1);
             }
             var sbChildComps2 = data.sbChildComps2;
             if(sbChildComps2!=undefined){
 	            $(".zgs-con").eq(1).html(sbChildComps2);
             }
             var sbChildComps3 = data.sbChildComps3;
             if(sbChildComps3!=undefined){
 	            $(".zgs-con").eq(2).html(sbChildComps3);
             }
             
        },
        error: function(e){
        	console.log("getTecResearch error...");
        }
	});
}

/**
 * 增加后缀
 * */
function commCovert(absUrl){
	var menu1 = -1;
	var menu2 = -1;
	var menu3 = -1;
	var contId = null;
//	var lastU = '';
	var wl = window.location;
	wl = wl.toString();
	
	if(contains(wl,"news_details",true)){
		menu1 =2;
		menu2 =0;
		contId = wl.substring(wl.lastIndexOf("/")+1,wl.lastIndexOf(".html"));
	}else if(contains(wl,"industry_details",true)){
		menu1 =2;
		menu2 =1;
		contId = wl.substring(wl.lastIndexOf("/")+1,wl.lastIndexOf(".html"));
	}
	
	var name = wl.substring(wl.lastIndexOf("/")+1);
	
	if(name=='group_profile.html'){
//		lastU = param+"?menu1=1&menu2=0";
		menu1 =1;
		menu2 =0;
	}else if(name=='introduction.html'){
//		lastU = param+"?menu1=1&menu2=0&menu3=0";
		menu1 =1;
		menu2 =0;
		menu3 =0;
	}else if(name=='development.html'){
//		lastU = param+"?menu1=1&menu2=0&menu3=1";
		menu1 =1;
		menu2 =0;
		menu3 =1;
	}else if(name=='culture.html'){
//		lastU = param+"?menu1=1&menu2=0&menu3=2";
		menu1 =1;
		menu2 =0;
		menu3 =2;
	}else if(name=='structure.html'){
//		lastU = param+"?menu1=1&menu2=0&menu3=3";
		menu1 =1;
		menu2 =0;
		menu3 =3;
	}else if(name=='position.html'){
//		lastU = param+"?menu1=1&menu2=0&menu3=4";
		menu1 =1;
		menu2 =0;
		menu3 =4;
	}else if(name=='technology.html'){
//		lastU = param+"?menu1=1&menu2=0&menu3=5";
		menu1 =1;
		menu2 =0;
		menu3 =5;
	}else if(name=='management.html'){
//		lastU = param+"?menu1=1&menu2=0&menu3=6";
		menu1 =1;
		menu2 =0;
		menu3 =6;
	}else if(name=='child_company.html'){
//		lastU = param+"?menu1=1&menu2=1";
		menu1 =1;
		menu2 =1;
	}else if(name=='child_first.html'){
//		lastU = param+"?menu1=1&menu2=1&menu3=0";
		menu1 =1;
		menu2 =1;
		menu3 =0;
	}else if(name=='child_second.html'){
//		lastU = param+"?menu1=1&menu2=1&menu3=1";
		menu1 =1;
		menu2 =1;
		menu3 =1;
	}else if(name=='child_three.html'){
//		lastU = param+"?menu1=1&menu2=1&menu3=2";
		menu1 =1;
		menu2 =1;
		menu3 =2;
	}else if(name=='news.html'){
//		lastU = param+"?menu1=2&menu2=0";
		menu1 =2;
		menu2 =0;
	}else if(name=='industry.html'){
//		lastU = param+"?menu1=2&menu2=1";
		menu1 =2;
		menu2 =1;
	}else if(name=='publications.html'){
//		lastU = param+"?menu1=2&menu2=2";
		menu1 =2;
		menu2 =2;
	}else if(name=='composite_post.html'){
//		lastU = param+"?menu1=2&menu2=2&menu3=0";
		menu1 =2;
		menu2 =2;
		menu3 =0;
	}else if(name=='kerosene.html'){
//		lastU = param+"?menu1=2&menu2=2&menu3=1";
		menu1 =2;
		menu2 =2;
		menu3 =1;
	}else if(name=='cogasin.html'){
//		lastU = param+"?menu1=2&menu2=2&menu3=2";
		menu1 =2;
		menu2 =2;
		menu3 =2;
	}else if(name=='technical_study.html'){
//		lastU = param+"?menu1=3&menu2=0";
		menu1 =3;
		menu2 =0;
	}else if(name=='water.html'){
//		lastU = param+"?menu1=3&menu2=0&menu3=0";
		menu1 =3;
		menu2 =0;
		menu3 =0;
	}else if(name=='oil_processing.html'){
//		lastU = param+"?menu1=3&menu2=0&menu3=1";
		menu1 =3;
		menu2 =0;
		menu3 =1;
	}else if(name=='analysis.html'){
//		lastU = param+"?menu1=3&menu2=0&menu3=2";
		menu1 =3;
		menu2 =0;
		menu3 =2;
	}else if(name=='integration.html'){
//		lastU = param+"?menu1=3&menu2=0&menu3=3";
		menu1 =3;
		menu2 =0;
		menu3 =3;
	}else if(name=='delicacy.html'){
//		lastU = param+"?menu1=3&menu2=0&menu3=4";
		menu1 =3;
		menu2 =0;
		menu3 =4;
	}else if(name=='extension.html'){
//		lastU = param+"?menu1=3&menu2=0&menu3=5";
		menu1 =3;
		menu2 =0;
		menu3 =5;
	}else if(name=='gas.html'){
//		lastU = param+"?menu1=3&menu2=0&menu3=6";
		menu1 =3;
		menu2 =0;
		menu3 =6;
	}else if(name=='article.html'){
//		lastU = param+"?menu1=3&menu2=1";
		menu1 =3;
		menu2 =1;
	}else if(name=='open_class.html'){
//		lastU = param+"?menu1=3&menu2=2";
		menu1 =3;
		menu2 =2;
	}else if(name=='catalyzer.html'){
//		lastU = param+"?menu1=4&menu2=0";
		menu1 =4;
		menu2 =0;
	}else if(name=='product.html'){
//		lastU = param+"?menu1=4&menu2=0&menu3=0";
		menu1 =4;
		menu2 =0;
		menu3 =0;
	}else if(name=='superiority.html'){
//		lastU = param+"?menu1=4&menu2=0&menu3=1";
		menu1 =4;
		menu2 =0;
		menu3 =1;
	}else if(name=='project_service.html'){
//		lastU = param+"?menu1=4&menu2=1";
		menu1 =4;
		menu2 =1;
	}else if(name=='technical_service.html'){
//		lastU = param+"?menu1=4&menu2=2";
		menu1 =4;
		menu2 =2;
	}else if(name=='build.html'){
//		lastU = param+"?menu1=4&menu2=3";
		menu1 =4;
		menu2 =3;
	}else if(name=='luan_project.html'){
//		lastU = param+"?menu1=4&menu2=3&menu3=0";
		menu1 =4;
		menu2 =3;
		menu3 =0;
	}else if(name=='yitai_project.html'){
//		lastU = param+"?menu1=4&menu2=3&menu3=1";
		menu1 =4;
		menu2 =3;
		menu3 =1;
	}else if(name=='shenhua_project.html'){
//		lastU = param+"?menu1=4&menu2=3&menu3=2";
		menu1 =4;
		menu2 =3;
		menu3 =2;
	}else if(name=='delicacy_project.html'){
//		lastU = param+"?menu1=4&menu2=3&menu3=3";
		menu1 =4;
		menu2 =3;
		menu3 =3;
	}else if(name=='luan_integration.html'){
//		lastU = param+"?menu1=4&menu2=3&menu3=4";
		menu1 =4;
		menu2 =3;
		menu3 =4;
	}else if(name=='shenhua_ningmei.html'){
//		lastU = param+"?menu1=4&menu2=3&menu3=5";
		menu1 =4;
		menu2 =3;
		menu3 =5;
	}else if(name=='sustained_development.html'){
//		lastU = param+"?menu1=5&menu2=0";
		menu1 =5;
		menu2 =0;
	}else if(name=='society.html'){
//		lastU = param+"?menu1=5&menu2=1";
		menu1 =5;
		menu2 =1;
	}else if(name=='employee_build.html'){
//		lastU = param+"?menu1=5&menu2=2";
		menu1 =5;
		menu2 =2;
	}else if(name=='employee_learn.html'){
//		lastU = param+"?menu1=5&menu2=2&menu3=0";
		menu1 =5;
		menu2 =2;
		menu3 =0;
	}else if(name=='alent_recruitment.html'){
//		lastU = param+"?menu1=6&menu2=0";
		menu1 =6;
		menu2 =0;
	}else if(name=='jobs.html'){
//		lastU = param+"?menu1=6&menu2=1";
		menu1 =6;
		menu2 =1;
	}else if(name=='cooperation.html'){
//		lastU = param+"?menu1=6&menu2=2";
		menu1 =6;
		menu2 =2;
	}else if(name=='contact_us.html'){
//		lastU = param+"?menu1=6&menu2=3";
		menu1 =6;
		menu2 =3;
	}
	seleOP(absUrl,menu1,menu2,menu3,contId);
	
}

/**
 * 页面select op处理
 * */
function seleOP(absUrl,menu1,menu2,menu3,contId){
	
	if(menu3>=0){
		if(menu1==4){//产品与服务--产业化建设  催化剂--3级菜单处理
			twolevel(menu2);
			if(menu2==0){
				threelevel(menu3);//产品与服务--催化剂--3级菜单处理
			}else if(menu2==3){
				twolevelS(menu3);//产品与服务--产业化建设--3级菜单处理
			}
			getProServices(absUrl);
		}else{
			onelevel(menu2);//先2级tab
			if(menu1==2 && menu2==2){//新闻资讯--出版刊物--3级菜单处理
				twolevel(menu2);//2级level设置
				threelevel(menu3);//3级level设置
				getNews(absUrl,1,0);//列表新闻
			}else if(menu1==3 && menu2==0){//新闻资讯--出版刊物--3级菜单处理
				twolevelS(menu3);
			}else if(menu1==1){//关于我们
				getAbout(absUrl);//关于我们--子分公司特殊处理
				if(menu2==0){//集团
					twolevel(menu3);
				}else if(menu2==1){//子分公司
					twolevelS(menu3);
				}
			}
			else if(menu2==0){
				twolevel(menu3);//接着3级tab
			}else{
				//3级菜单 第二个tab不好使，仿生写法进行调用
//				twolevel2(menu3);//接着3级tab
			}
			if(menu1==3){//研究开发
				getTecResearch(absUrl);
				//4级菜单仿生写法
				threelevel(menu3);
			}
			if(menu1==5){//社会责任
				twolevel(menu2);
				getSociaRes(absUrl);
			}
		}
	}else if(menu2>=0){
		
		if(menu1==1){//关于我们--子分公司特殊处理--集团处理
			onelevel(menu2);//先2级tab
			//取页面信息
			getAbout(absUrl);
		}else{
			if(menu1==6){//招聘模块处理
				twolevel(menu2);
				if(menu2<=3){
					//异步取招聘信息  //异步取出联系我们的信息
					getJoinUs(absUrl);
				}
			}else{
				
				if(contId!=null){
					//详情新闻
					getNewsDetail(absUrl,1,0,contId);//列表新闻--不执行twolevel(menu2);
//					twolevel(menu2);
					
					$(".Tab label").removeClass("Current").eq(menu2).addClass("Current");
					$(".childCont").addClass("hide").eq(menu2).removeClass("hide");
					
				}else{
					twolevel(menu2);
					if(menu1==5){//社会责任-持续发展
						getSociaRes(absUrl);
					}else if(menu1==4){//产品与服务--- ,产业化建设,工程技术服务---技术许可服务
						getProServices(absUrl);
					}else if(menu1==3){//研究开发
						getTecResearch(absUrl);
					}else if(menu1==2){//新闻资讯
						getNews(absUrl,1,0);//列表新闻
					}
//					else if(menu1==1){//关于我们
//						getAbout(absUrl);
//					}
				}
				
			}
			
		}
		
	}
	
}

/**
*string:原始字符串
*substr:子字符串
*isIgnoreCase:忽略大小写
*/

function contains(string, substr, isIgnoreCase) {
 if (isIgnoreCase) {
  string = string.toLowerCase();
  substr = substr.toLowerCase();
 }
 var startChar = substr.substring(0, 1);
 var strLen = substr.length;
 for (var j = 0; j < string.length - strLen + 1; j++) {
  if (string.charAt(j) == startChar) //如果匹配起始字符,开始查找
  {
   if (string.substring(j, j + strLen) == substr) //如果从j开始的字符与str匹配，那ok
   {
    return true;
   }
  }
 }
 return false;
}
