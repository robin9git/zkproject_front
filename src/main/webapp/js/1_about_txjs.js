// 无缝滚动
function wfgd() {
	$(function(){ 
		var imgW=269+12;
		var timer1=null,timer2=null;
		var x=0;// 储存当前滚动的方向
		var sc=$('.body_2_lunbo_in').scrollLeft();
		var max_=0;
		// for (var i = 0; i < $('.body_2_lunbo_in li').length; i++) {
		// 	max_=max_+$('.body_2_lunbo_in li').eq(i).width()+12;
		// };
		max_=$('.body_2_lunbo_in li').length*imgW
		var fir=$('.body_2_lunbo_in li').clone();
		$('.body_2_lunbo_in').append(fir);
		$('.body_2_lunbo_in').width(max_*2);
		function clear(){
			clearInterval(timer1);
			clearInterval(timer2);
		}

		function moveleft(){//左滚动函数
			sc+=2;
			if (sc>=max_) {
				sc=0;
			};
			$('.body_2_lunbo_out').scrollLeft(sc);
		}

		function moveright(){//右滚动函数
			sc-=2;
			if (sc<=0) {
				sc=max_;
			};
			$('.body_2_lunbo_out').scrollLeft(sc);
		}

		timer1=setInterval(moveleft,15);//进入页面自动走
		// timer2=setInterval(moveright,10);//进入页面自动走

		$('.body_2_lunbo_right').click(function (){
			clear();
			timer1=setInterval(moveleft,15);
			x=0;
		})
		$('.body_2_lunbo_left').click(function (){
			clear();
			timer2=setInterval(moveright,15);
			x=1;
		})

		$('.body_2_lunbo_out').mouseenter(function() {
			clear();
		})
		$('.body_2_lunbo_out').mouseleave(function() {
			if (x==0) {
				timer1=setInterval(moveleft,15);
			} else{
				timer2=setInterval(moveright,15);
			};
		})
	});
	// wfgd();
}