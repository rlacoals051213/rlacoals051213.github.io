$(function(){
    // 햄버거 버튼
    $(".navBtn").click(function(){
        $("header nav").addClass("on");
    });
    $(".navIn>span").click(function(e){
        e.preventDefault();
        $("header nav").removeClass("on");
    });
    // 리사이즈

    $(window).resize(function(){
        var w=$(this).width();
        if(w>=768){
            $(".navIn>span").click();
        }
    });

    // 스크롤이벤트
    $(window).scroll(function(){
        var t=$(this).scrollTop();
        // console.log(t);
        if(t>=2500){
            $(".section").addClass("on");
        }
        else{
            $(".section").removeClass("on");
        }    
    });
    // click 이벤트
    $('.section li').click(function(){        
        $(".section li").removeClass("on");
        $(this).addClass("on");
    });

    // click
    $(".tabBtn li").click(function(e){
        e.preventDefault();
        $(".tabBtn li").removeClass("on");
        $(this).addClass("on");
        $(".tabCont li").removeClass("on");
        var i=$(this).index();
        $(".tabCont li").eq(i).addClass("on");
    });


});