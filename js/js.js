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

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours ;
    document.getElementById("minutes").innerHTML = minutes ;
    document.getElementById("seconds").innerHTML = seconds ;




    // If the count down is over, write some text 
    // if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("demo").innerHTML = "EXPIRED";
    // }
}, 1000);
   
    $('.slick-next').html('<i class="fas fa-angle-right"></i>');
    $('.slick-next').addClass('fas');
    $('.slick-prev').html('<i class="fas fa-angle-left"></i>');
  
    $('.for-copmany').css('display','none');
    $('#thetype').change(function() {
      if ($(this).val() === '1') {
        $('.for-copmany').css('display','none');
      }
      if ($(this).val() === '2') {
        $('.for-copmany').css('display','flex');
      }
      if ($(this).val() === '3') {
        $('.for-copmany').css('display','flex');
      }
  });
});
// document ready
$(document).ready(function(){
  var element =  document.getElementById('map');
    if (typeof(element) != 'undefined' && element != null)
  {
    map = new GMaps({
    div: '#map',
    zoom:5
  });
  }
});





// for auction number

jQuery(document).ready(function(){
  $('.qtyplus').click(function(e){
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name='+fieldName+']').val());
      var numberValue =parseInt($('#numberEmportant').text());
      // If is not undefined
      if (!isNaN(currentVal)) {
          // Increment
          $('input[name='+fieldName+']').val(currentVal + numberValue);
      } else {
          // Otherwise put a 0 there
          $('input[name='+fieldName+']').val(0);
      }
  });
  // This button will decrement the value till 0
  $(".qtyminus").click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name='+fieldName+']').val());
      var numberValue =parseInt($('#numberEmportant').text());
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal > 0) {
          // Decrement one
          $('input[name='+fieldName+']').val(currentVal - numberValue);
      } else {
          // Otherwise put a 0 there
          $('input[name='+fieldName+']').val(0);
      }
  });
});