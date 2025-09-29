//for zoom detection
px_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;

function isZooming() {
    var newPx_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
    if (newPx_ratio != px_ratio) {
        px_ratio = newPx_ratio;
        console.log("zooming");
        return true;
    } else {
        console.log("just resizing");
        return false;
    }
}
$(document).ready(function () {
    $('.slider-inner').slick({
        dots: true,
        infinite: true,
        arrows: false,
    });
    $('.reviews-inner').slick({
        infinite: true,
    });
    var lastWidth = $(window).width();
    setProps({ width: $(window).width() });
    $(":root").css('--main-width', $(window).width() + 'px');
    $(window).resize(function () {
        if (!isZooming()) {
            let width = $(window).width();
            console.log(width, lastWidth);
            if (width != lastWidth) {
                setProps({ width: width });
                lastWidth = width;
            }
        }
    })
});
var setProps = function (params) {
    if (params.width - 1218 > 0) {
        $(":root").css('--main-padding', ((params.width - 1170) / 2) + 'px');
    } else {
        $(":root").css('--main-padding', 24 + 'px');
    }
    $(":root").css('--main-width', params.width + 'px');
}