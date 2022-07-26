$("document").ready(function(){


    ////////////////Count Down
    function countdown() {

            var endTime = new Date("14 August 2022");			
                endTime = (Date.parse(endTime) / 1000);
    
                var now = new Date();
                now = (Date.parse(now) / 1000);
    
                var timeLeft = endTime - now;
    
                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
      
                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
    
                $("#days").html(days + "<span>Days</span>");
                $("#hours").html(hours + "<span>Hours</span>");
                $("#minutes").html(minutes + "<span>Minutes</span>");
                $("#seconds").html(seconds + "<span>Seconds</span>");		
        }
        setInterval(function() { countdown(); }, 1000);




        /////////// Owl Carousel

        $('.owl-one').owlCarousel({
            loop:false,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1,
                    dots:false
                },
                678:{
                    items:2,
                    dots:false
                },
                992:{
                    items:3,
                    dots:true
                }
            }
        });


        $('.owl-two').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            autoplay:true,
            autoplayTimeout:2000,
            responsive:{
                0:{
                    items:1,
                    dots:true
                },
                678:{
                    items:2,
                    dots:true
                },
                992:{
                    items:5,
                    dots:true
                }
            }
        })


        $('.owl-three').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            autoplay:true,
            autoplayTimeout:2000,
            responsive:{
                0:{
                    items:1,
                    dots:true
                },
                678:{
                    items:2,
                    dots:true
                },
                992:{
                    items:3,
                    dots:true
                }
            }
        })


        /// Change Navbar on scroll

        $(window).on("scroll",function(){
            var bodyheight = $(window).scrollTop();
            if(bodyheight > 300){
                $("nav").addClass("bg");
            }
            else{
                $("nav").removeClass("bg");
            }
        })


        // Wow.js Structure

        wow = new WOW(
            {
            boxClass:     'wow',      
            animateClass: 'animated', 
            offset:       0,          
            mobile:       false,       
            live:         true        
            })
          wow.init();


          // Preloader

          $(window).on('load', function(){
            setTimeout(removeLoader, 1000); 
            });
            function removeLoader(){
                $( "#loadingDiv" ).fadeOut(500, function() {
                
                $( "#loadingDiv" ).remove(); 
            });  
            }
})

