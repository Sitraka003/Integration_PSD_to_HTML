$(document).ready(function () {
    var top = $(window).scrollTop();

    $('a[href^="#"]').on('click', function () {
        var cible_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(cible_id).offset().top
        }, 1000);
        return false;

    });
});