/* global $, window, console*/
$(function (){
    "use strict";
    var winh = $(window).height(),
        upph = $('.upper-part').innerHeight(),
        navh = $('.navbar').innerHeight();
    $('.slide,.slide .carousel-item').height(winh - (upph + navh));

    $('.works ul li').on('click', function (){
        $(this).addClass('active').siblings().removeClass('active');
    
        var typ = $(this).data('class');
        if(typ === 'all') {
            $('.shaf .row > div').css('opacity','1');
        } else {
            $('.shaf .row > div').css('opacity','.5');
            $(typ).parent().css('opacity','1');
            
        }

    });

    $("body").niceScroll({
        cursorcolor: "#ed1d24",
        zindex:"5",
        cursorwidth:"5px",
        cursorborderradius:"0",
        cursorborder:"0"
    });

    $(window).scroll(function(){

        var sctop = $(window).scrollTop();

        if( sctop <= 400) {
            $('.scroll').hide();
        } else {
            $('.scroll').show();
        }

        $('.scroll i').click( function(e){

            e.preventDefault();

            $('html, body').animate({

                scrollTop: 0
                
            }, 2000);
        });
    });
});