$(document).ready(function () {
    AOS.init();

    function adjustNavBar() {
        var $nav = $("header");
        if ($(this).scrollTop() > ($nav.height() + 50) && !$nav.hasClass('scrolled')) {
            $("main").css("margin-top", "120px");
            $nav.addClass('scrolled');
        } else if ($(this).scrollTop() < ($nav.height() + 50) && $nav.hasClass('scrolled')) {
            $("main").css("margin-top", "0px");
            $nav.removeClass('scrolled');
        }
    }

    $(function () {
        adjustNavBar();

        $(document).scroll(function () {
            adjustNavBar()
        });
    });

    $(".navbar-brand").on('click', function (event) {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: 0
        }, 800, function () {
            window.location.hash = hash;
        });
    });

    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
})