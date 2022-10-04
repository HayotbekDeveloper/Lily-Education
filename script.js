AOS.init();

$(document).ready(function () {
    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
        if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
        }
        }, 30);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }

    $('.students_say_card').slick({
        centerMode: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    vertical: true,
                    verticalSwiping: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    vertical: true,
                    verticalSwiping: true
                }
            }
        ]
    });
});