(function (){
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

})();