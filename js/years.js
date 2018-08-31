window.onload=function(){
    
    function animateValue(id, start, end, duration) {
        var range = end - start;
        var current = start;
        var increment = end > start? 1 : -1;
        var stepTime = Math.abs(Math.floor(duration / range));
        var obj = document.getElementById(id);
        var timer = setInterval(function() {
            current += increment;
            obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    
    animateValue("years", 0, 15, 2000);
    animateValue("conf", 0, 79, 2000);
    animateValue("clients", 0, 459, 2000);
    animateValue("masters", 0, 16, 2000);

} 