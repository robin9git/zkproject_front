$(function(){ 
    //body2_title_in的长度是li的个数乘以130
    var lengths = $('.body2_title_in li').length;
    $('.body2_title_in').width(130 * lengths);
    var x = 0,v=0;
    $('.body2_title_in li').eq(v).addClass('body2_title_cur').siblings().removeClass('body2_title_cur');
    $('.body2_title_in li').eq(v+1).addClass('body2_title_cur_next').siblings().removeClass('body2_title_cur_next');
    $('.body2_title_in li').click(function () {
        $(this).addClass('body2_title_cur').siblings().removeClass('body2_title_cur');
        v=$(this).index();
        $('.body2_box_li').eq(v).show().siblings().hide();
    	$('.body2_title_in li').eq(v+1).addClass('body2_title_cur_next').siblings().removeClass('body2_title_cur_next');

    })
    $('#ctrDate .title li').first().trigger('click');
    $('.body2_title_r').click(function () {
    	if (v-x<3) {v = v + 1;};
    	x = x + 1;
    	if (x>=lengths) {x=lengths};
    	if (v>=lengths) {v=lengths};
    	$('.body2_title_in li').eq(v).trigger('click');
    	$('.body2_title_out').stop().animate({ scrollLeft: x * 130 }, "fast");
    })
    $('.body2_title_l').click(function () {
        x=x-1;
        v=v-1;
        if (x<=0) {x=0};
        if (v<=0) {v=0};
        $('.body2_title_in li').eq(v).trigger('click');
        $('.body2_title_out').stop().animate({ scrollLeft: x * 130 }, "fast");
    })
});