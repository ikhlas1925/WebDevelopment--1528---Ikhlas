//NavBar
$(document).ready(function () {

    $(window).scroll(function () {

        var height = $('.chevron-bod').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 40) {
            $('.nav-container').addClass('solid-nav');
        } else {
            $('.nav-container').removeClass('solid-nav');
        }

    });
});