$(function() {

  $('.header__burger').on('click', function() {
    $('.header__list').toggleClass('header__list--active');
    $('.header__burger').toggleClass('active');
  });




  ///////// Page Crypto /////

  $('.crypto-currency__list-up').slick({
  infinite: true,
  slidesToShow: 5.5,
  slidesToScroll: 1,
  arrows: false,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});

$('.crypto-feedback__list-up').slick({
  infinite: true,
  slidesToShow: 4.5,
  slidesToScroll: 1,
  arrows: false,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        dots: true,
      }
    }
  ]
});

$('.crypto-currency__list-bottom').slick({
  infinite: true,
  slidesToShow: 5.5,
  slidesToScroll: 1,
  arrows: false,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000,
  rtl: true,
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});

$('.crypto-feedback__list-bottom').slick({
 infinite: true,
  slidesToShow: 4.5,
  slidesToScroll: 1,
  arrows: false,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3000,
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});

$('.crypto-tools__list-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
});

  $(".star").rateYo({
    starWidth: "29px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });


  ////////// Page Crypto End //////



   ///////// Page Hotel /////

  

   $(".hotel__star").rateYo({
     starWidth: "8px",
     normalFill: "#ccccce",
     ratedFill: "#ffc35b",
     readOnly: true,
     starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px"height="16px" viewBox="0 0 18 16" version="1.1"> <g id="surface1"> <path  d="M 11.914062 4.695312 L 16.402344 5.359375 C 16.773438 5.414062 17.085938 5.675781 17.207031 6.035156 C 17.324219 6.398438 17.226562 6.789062 16.960938 7.058594 L 13.703125 10.253906 L 14.472656 14.835938 C 14.535156 15.210938 14.382812 15.589844 14.070312 15.8125 C 13.757812 16.035156 13.351562 16.0625 13.015625 15.882812 L 9.003906 13.742188 L 4.992188 15.882812 C 4.65625 16.0625 4.246094 16.035156 3.9375 15.8125 C 3.628906 15.589844 3.472656 15.210938 3.539062 14.835938 L 4.304688 10.253906 L 1.050781 7.058594 C 0.78125 6.789062 0.683594 6.398438 0.804688 6.035156 C 0.921875 5.675781 1.230469 5.414062 1.605469 5.359375 L 6.09375 4.695312 L 8.105469 0.5625 C 8.273438 0.21875 8.621094 0 9.003906 0 C 9.386719 0 9.738281 0.21875 9.902344 0.5625 Z M 11.914062 4.695312 " /> </g> </svg>',
   });

  ////////// Page Hotel End //////

  let mixer = mixitup('.portfolio__content-list');
  
})



