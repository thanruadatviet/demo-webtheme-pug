// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

$(document).ready(function(){
    'use strict';
    
// Scroll to top function
    // Khai báo ID button
    let btnTop = '#btn-top';
    // Set khoảng cách xuất hiện button
    let offset = $(window).height()/4;
    // Set thời gian thực hiện animation
    let duration = 500;
    // Kiểm tra ẩn/hiện button
    $(window).scroll(function() {
        // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
        if ($(this).scrollTop() > offset) {
            //nếu lớn hơn 200px thì hiện button
            $(btnTop).fadeIn(duration);
        } else {
            //nếu nhỏ hơn 200px thì ẩn button
            $(btnTop).fadeOut(duration);
        }
    });
    // Gán sự kiện click cho button
    $(btnTop).click(function(){        
        event.preventDefault();
        //Nếu button được click thì nhảy về đầu trang
        $('html, body').animate({scrollTop: $('#top').offset().top}, duration);
        return false;
    });

// Search box toggle
    $(".btn-search-toggle").click(function(){
        $(".search").fadeToggle("fast");
    });
    $(".btn-search-close").click(function(){
        $(".search").fadeOut("fast");
    });
    $(".btn-noti-toggle").click(function(){
        $(".noti-nav").toggle();
    });

// Owl initializer function
    let slider = $(".slider");
    slider.owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay: true
    });
    $(".slide-content-4").owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 4
            }
        }
    });
    $(".slide-content-3").owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });
    $(".partner").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 5
            }
        }
    });
    $(".slide-content-6").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: {
            0: {
                items: 3
            },
            576: {
                items: 4
            },
            768: {
                items: 6
            }
        }
    });
    $(".slide-content-1").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true
    });
    let spSlide = $('.sp-slide');
    spSlide.owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });
    $('#spPrevOwl').click(function (){
        spSlide.trigger('prev.owl.carousel', [300]);
    });
    $('#spNextOwl').click(function (){
        spSlide.trigger('next.owl.carousel', [300]);
    });
});