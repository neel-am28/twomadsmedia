jQuery(document).ready(function ($) {


    "use strict";
    // Welcome screen fading animation
    // Initially hide the loader, then after 2000ms load it, after it is completed, hide this and show main content
    $('.loader-container').css('display', 'none');
    // $(function () {
    //     $('.loader-container').fadeIn(2000);
    //     $('#content').hide();
    //     setTimeout(function () {
    //         $('.loader-container').fadeOut('slow', function () {
    //             $('#content').fadeIn(1500);
    //             $("html,body").scrollTop(1);
    //         });
    //     }, 3000);

    // });
    // Welcome screen fading animation end
    $(function () {
        $("#tabs").tabs();
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var box = $('.header-text').height();
        var header = $('header').height();

        if (scroll >= box - header) {
            $("header").addClass("background-header");
            $('.top-logo').attr('src', './assets/images/logo.svg');
        } else {
            $("header").removeClass("background-header");
            $('.top-logo').attr('src', './assets/images/logo-svg-white.svg');
        }
    });

});

// About section read more
$('#about .read-more-btn').click(function (e) {
    e.preventDefault();
    $('#about .read-more-content').slideDown("slow");
    $('#about .read-less-btn').css('display', 'inline-block');
    $(this).css('display', 'none');
    // $(this).text(($(this).text() == 'Read More') ? 'Read Less' : 'Read More').fadeIn();
});
// About section read less
$('#about .read-less-btn').click(function (e) {
    e.preventDefault();
    $('#about .read-more-content').slideUp("slow");
    $('#about .read-more-btn').css('display', 'inline-block');
    $(this).css('display', 'none');
});
