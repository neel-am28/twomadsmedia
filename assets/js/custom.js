jQuery(document).ready(function ($) {


    "use strict";
    // Welcome screen fading animation
    // Initially hide the loader, then after 2000ms load it, after it is completed, hide this and show main content
    $('.loader-container').css('display', 'none');
    $(function () {
        $('.loader-container').fadeIn(2000);
        $('#content').hide();
        setTimeout(function () {
            $('.loader-container').fadeOut('slow', function () {
                $('#content').fadeIn(1500);
                $("html,body").scrollTop(1);
            });
        }, 3000);

    });
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
        } else {
            $("header").removeClass("background-header");
        }
    });

});
$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

    // About section read more/read less
    $('#about .read-more-btn').click(function (e) {
        e.preventDefault();
        $('#about .read-more-content').slideDown("slow");
        $('#about .read-less-btn').css('display', 'inline-block');
        $(this).css('display', 'none');
        // $(this).text(($(this).text() == 'Read More') ? 'Read Less' : 'Read More').fadeIn();
    });
    $('#about .read-less-btn').click(function (e) {
        e.preventDefault();
        $('#about .read-more-content').slideUp("slow");
        $('#about .read-more-btn').css('display', 'inline-block');
        $(this).css('display', 'none');
    });
    // About section read more/read less End

    // Our Services image slider
    $(".single-service").mouseover(function (e) {
        // console.log($(this).find('.service-icons').attr("src"))
        // $(this).fadeOut();
        $(this).find('.service-icons').attr("src", $(this).find('.service-icons').attr("src").replace("-blue", "-peach"));
    }).mouseout(function (e) {
        $(this).find('.service-icons').attr("src", $(this).find('.service-icons').attr("src").replace("-peach", "-blue"));
    });
    // Our Services image slider End
    // Our Team Slider
    $("#owl-demo").owlCarousel({
        items: 1,
        navigation: true, // Show next and prev buttons
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000, // after every 5s, slide will change
        autoplaySpeed: 1000, // auto play speed is set to 1s to change b/w slides
        dots: false,
        smartSpeed: 1000 // on click speed of changing slides

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
    // Our Team Slider End
});
