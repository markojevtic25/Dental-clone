window.onload=function(){
    $(document).ready(function(){

        
      /* function initMap() {
            var location = {lat: -25.363, lng: 131.044};
            var map = new google.maps.Map(document.getElementById("map"),{
                zoom: 4,
                center: location
            });*/
        

        $('.owl-four').owlCarousel({
            loop:true,
            items:4,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                400:{
                    items:2
                },
                600:{
                    items:3
                },
                900:{
                    items:4
                }
            }
        });
       
        $('.owl-three').owlCarousel({
            loop:true,
            nav:true,
            items:4,
            responsive:{
                0:{
                    items:1
                },
                320:{
                    items:2
                },
                600:{
                    items:3
                },
                900:{
                    items:4
                }
            }
        });
        
        $('.owl-two').owlCarousel({
            loop:true,
           /* margin:10,*/
            items:3,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                320:{
                    items:1
                },
                600:{
                    items:2
                },
                900:{
                    items:3
                }
            }
        });
        
       

        $('.owl-carousel').owlCarousel({
            loop:true,
           /* margin:10,*/
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

    
        
    

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
 
    });
   

} 