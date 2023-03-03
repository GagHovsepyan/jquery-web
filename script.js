$(document).ready(function() {


    $({ counter: 0 }).animate({ counter: 333 }, {
        duration: 2000,
        easing: 'linear',
        step: function() {
            $('.counter1').text(Math.ceil(this.counter))
        }
    })

    $({ counter: 0 }).animate({ counter: 188 }, {
        duration: 2000,
        easing: 'linear',
        step: function() {
            $('.counter2').text(Math.ceil(this.counter))
        }
    })



    $({ counter: 0 }).animate({ counter: 111 }, {
        duration: 2000,
        easing: 'linear',
        step: function() {
            $('.counter3').text(Math.ceil(this.counter))
        }
    })


    $({ counter: 0 }).animate({ counter: 222 }, {
        duration: 2000,
        easing: 'linear',
        step: function() {
            $('.counter4').text(Math.ceil(this.counter))
        }
    })




    $(window).scroll(function(){
        $('section').each(function(){   
            
            var x =  $(window).scrollTop() + $(window).height();
            
            var y = $(this).offset().top + $(this).height();

            if (x >= y ) {
                $(this).addClass('active')
            }
        })   
    })

})