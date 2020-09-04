var scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) };

var elementsToShow = document.querySelectorAll('.pointer');
var vid = document.getElementsByClassName('vid');
console.log(vid)
function loop() {

    if (isElementInViewport(elementsToShow[0])) {
        //vid[0].classList.add('scale-vid');
        vid[0].animate({top: '38%',height: '28%'},2000);
    } else {
        //vid[0].classList.remove('scale-vid');
        vid[0].animate({top: '0%',height: '100%'},2000);
    }

    scroll(loop);
}

loop();

function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}