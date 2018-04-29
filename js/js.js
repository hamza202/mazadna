// for slider auction
$('.auction-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


// for slider customers
$('.box-testimonial').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 2,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

           
  $('.company-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $(document).ready(function(){
      
// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementsByClassName("demo").innerHTML = days + "ايام " + hours + "ساعات "
    + minutes + "دقائق " + seconds + "ثوان ";

    $('.demo1').html(days + "ايام " + hours + "ساعات "+ minutes + "دقائق " + seconds + "ثوان ");
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName("demo").innerHTML = "EXPIRED";
    }
}, 1000);
   
    $('.slick-next').html('<i class="fas fa-angle-right"></i>');
    $('.slick-next').addClass('fas');
    $('.slick-prev').html('<i class="fas fa-angle-left"></i>');
  




});
// document ready

