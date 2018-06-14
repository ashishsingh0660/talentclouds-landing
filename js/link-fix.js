$(document).ready(function (e) {
    if ((navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPad/i))) {
        appleMobileDevice = true;
    }
    else {
        appleMobileDevice = false;
    }
    if (appleMobileDevice) {
        // alert('Hey it is the shitty apple product');
        $("header a, footer a").on("click touchend", function (e) {
            // alert('iOS Devices suck');
            var el = $(this);
            var link = el.attr("href");
            window.location = link;
        });
    }
});
