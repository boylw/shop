/**
 * Created by liuwenwu on 2017/11/23.
 */

/* for遍历每一张图片，然后对当前图片实现动画，再对鼠标放在上面的动画实现*/
$(function () {
    var
        $box = $('.banner'),
        $lis = $('.bannerList li img'),
        timer = null,
        index = 0;

    $lis.animate({opacity:0});
    $lis.eq(0).animate({opacity:1});
    $('.bannerbottom a').eq(0).addClass('current').siblings().removeClass('current');
    timer = setInterval(function () {
        changes(function () {
            index = (index >= $lis.length - 1) ? 0 : index + 1;
        });
    },2000);

    $box.hover(
        function () {
            clearInterval(timer);
        },
        function () {
            timer = setInterval(function () {
                changes(function () {
                    index = (index >= $lis.length-1) ? 0 : index + 1;
                })
            },2000)
        });

        $('.bannerbottom a').each(function (n) {
            $(this).hover(function () {
                $(this).addClass('current').siblings().removeClass('current');
                changes(function () {
                    index = n;
                });
            });
        });

    function changes(fn){
        $lis.eq(index).stop().animate({opacity:0},800);
        fn();
        console.log("index2:"+index);
        $('.bannerbottom a').eq(index).addClass('current').siblings().removeClass('current');
        $lis.eq(index).stop().animate({opacity:1},1000);
    }
    $(".hotBook .tabTit a").hover(function () {
        var $this = $(this);
        var thisIndex = $this.index();
        $this.addClass("cur").siblings().removeClass("cur");
        $(".tabCon .tabConList").eq(thisIndex).addClass("cur").siblings().removeClass("cur")
    })

    $(".tabConList .leftArrow").click(function () {
        var $this = $(this);
        var obj = $this.parents(".tabConList");
        var tabPanel = obj.find(".tabPanel");
        tabPanel.find(".tabItem").removeClass("cur");
        var lastLi = tabPanel.find(".tabItem:last");
        lastLi.addClass("cur");
        lastLi.prependTo(tabPanel);
    })

    $(".tabConList .rightArrow").click(function () {
        var $this = $(this);
        var obj = $this.parents(".tabConList");
        var tabPanel = obj.find(".tabPanel");
        tabPanel.find(".tabItem").removeClass("cur");
        var firstLi = tabPanel.find(".tabItem:first");
        firstLi.appendTo(tabPanel);
        tabPanel.find(".tabItem:first").addClass("cur");
    })


    var len = $(".navDot ul li").length;

    $(".navDot ul li").hover(function () {
        var $this = $(this);
        var thisIndex = $this.index();
        $this.addClass("blue").siblings().removeClass("blue");
        $(".hotCon ul").eq(thisIndex).stop().fadeIn(500).siblings().stop().fadeOut(200);

    })


    /*畅销榜*/
    $(".hotNav .rightArrow").click(function () {
        $(".hotNav .leftArrow").show();
        $(".hotNav .rightArrow").hide();
        $(".navDot ul").css("left", -55 * (len - 4) + 10 + "px");
    })
    $(".hotNav .leftArrow").click(function () {

        $(".navDot ul").css("left", 0);
        $(".hotNav .leftArrow").hide();
        $(".hotNav .rightArrow").show();
    })

    $(".hotCon ul li").hover(function () {
        var $this = $(this);
        $this.addClass("cur").siblings().removeClass("cur");
    })
    /*文学分类*/
    $('.floorTit li a').hover(function(){
        $(this).addClass('blue2');
    },function(){
        $(this).removeClass('blue2');
    })
})

