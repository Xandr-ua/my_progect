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

   $('.hotel__about-slider').slick({
     dots: false,
     arrows: true,
     prevArrow: '<button type="button" class="slick-prev"><img src="images/hotel/icons/arrow-left.svg" alt=""></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="images/hotel/icons/arrow-right.svg" alt=""></button>',
   });

  ////////// Page Hotel End //////



  ///////// Page FastFix /////

  $('.fast-header__nav-item-1').on('click', function () {
    $('.fast-header__nav-item--arrow-1').toggleClass('expand');

    $('.fast-header__nav-item--arrow-2').removeClass('expand');

    $('.fast-header__nav-item--arrow-3').removeClass('expand');

    $('.fast-header__nav-item--arrow-4').removeClass('expand');

    $('.fast-header__nav-item--arrow-5').removeClass('expand');

    $('.fast-header__nav-item--arrow-6').removeClass('expand');


    $('.fast-header__nav-subtitle-iphone').toggleClass('show');
    $('.fast-header__nav-subtitle-mac').addClass('show');


  })

  $('.fast-header__nav-item-2').on('click', function () {
    $('.fast-header__nav-item--arrow-1').removeClass('expand');
    $('.fast-header__nav-item--arrow-2').toggleClass('expand');
    $('.fast-header__nav-item--arrow-3').removeClass('expand');
    $('.fast-header__nav-item--arrow-4').removeClass('expand');
    $('.fast-header__nav-item--arrow-5').removeClass('expand');
    $('.fast-header__nav-item--arrow-6').removeClass('expand');


    $('.fast-header__nav-subtitle-iphone').addClass('show');
    $('.fast-header__nav-subtitle-mac').addClass('show');

  })

  $('.fast-header__nav-item-3').on('click', function () {
    $('.fast-header__nav-item--arrow-1').removeClass('expand');
    $('.fast-header__nav-item--arrow-2').removeClass('expand');
    $('.fast-header__nav-item--arrow-3').toggleClass('expand');
    $('.fast-header__nav-item--arrow-4').removeClass('expand');
    $('.fast-header__nav-item--arrow-5').removeClass('expand');
    $('.fast-header__nav-item--arrow-6').removeClass('expand');


    $('.fast-header__nav-subtitle-iphone').addClass('show');

    $('.fast-header__nav-subtitle-mac').toggleClass('show');

  })

  $('.fast-header__nav-item-4').on('click', function () {
    $('.fast-header__nav-item--arrow-1').removeClass('expand');
    $('.fast-header__nav-item--arrow-2').removeClass('expand');
    $('.fast-header__nav-item--arrow-3').removeClass('expand');
    $('.fast-header__nav-item--arrow-4').toggleClass('expand');
    $('.fast-header__nav-item--arrow-5').removeClass('expand');
    $('.fast-header__nav-item--arrow-6').removeClass('expand');


    $('.fast-header__nav-subtitle-mac').addClass('show');
    $('.fast-header__nav-subtitle-iphone').addClass('show');

  })

  $('.fast-header__nav-item-5').on('click', function () {
    $('.fast-header__nav-item--arrow-1').removeClass('expand');
    $('.fast-header__nav-item--arrow-2').removeClass('expand');
    $('.fast-header__nav-item--arrow-3').removeClass('expand');
    $('.fast-header__nav-item--arrow-4').removeClass('expand');
    $('.fast-header__nav-item--arrow-5').toggleClass('expand');
    $('.fast-header__nav-item--arrow-6').removeClass('expand');


    $('.fast-header__nav-subtitle-mac').addClass('show');
    
    $('.fast-header__nav-subtitle-iphone').addClass('show');
    
  })

  $('.fast-header__nav-item-6').on('click', function () {
    $('.fast-header__nav-item--arrow-1').removeClass('expand');
    $('.fast-header__nav-item--arrow-2').removeClass('expand');
    $('.fast-header__nav-item--arrow-3').removeClass('expand');
    $('.fast-header__nav-item--arrow-4').removeClass('expand');
    $('.fast-header__nav-item--arrow-5').removeClass('expand');
    $('.fast-header__nav-item--arrow-6').toggleClass('expand');


    $('.fast-header__nav-subtitle-mac').addClass('show');
    
    
    $('.fast-header__nav-subtitle-iphone').addClass('show');
  });


  $('.fast-header__bottom-burger').on('click', function () {

    $('.fast-header__bottom-burger-line').toggleClass('open');
    $('.fast-header__burgermenu').toggleClass('fast-header__burgermenu-open');
    $('.fast-body').toggleClass('blur');
    $('.fast-body').toggleClass('fixed');
    $('.fast-header__burgermenu').toggleClass('menu-open');


  });


  //////////////////// Burger menu ///////////////////////


  $('.fast-header__burgermenu-item-iphone').on('click', function () {
    
    $('.fast-header__burgermenu-item--arrow-1').toggleClass('expand');
    $('.fast-header__burgermenu-item--arrow-2').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-3').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-4').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-5').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-6').removeClass('expand');

    $('.fast-header__burgermenu-submenu').toggleClass('open-submenu');


  });

  $('.fast-header__burgermenu-item-ipad').on('click', function () {

    $('.fast-header__burgermenu-item--arrow-1').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-2').toggleClass('expand');
    $('.fast-header__burgermenu-item--arrow-3').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-4').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-5').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-6').removeClass('expand');


  });

  $('.fast-header__burgermenu-item-mac').on('click', function () {

    $('.fast-header__burgermenu-item--arrow-1').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-2').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-3').toggleClass('expand');
    $('.fast-header__burgermenu-item--arrow-4').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-5').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-6').removeClass('expand');


  });

  $('.fast-header__burgermenu-item-samsung').on('click', function () {

    $('.fast-header__burgermenu-item--arrow-1').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-2').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-3').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-4').toggleClass('expand');
    $('.fast-header__burgermenu-item--arrow-5').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-6').removeClass('expand');


  });

  $('.fast-header__burgermenu-item-oneplus').on('click', function () {

    $('.fast-header__burgermenu-item--arrow-1').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-2').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-3').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-4').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-5').toggleClass('expand');
    $('.fast-header__burgermenu-item--arrow-6').removeClass('expand');


  });

  $('.fast-header__burgermenu-item-huawei').on('click', function () {

    $('.fast-header__burgermenu-item--arrow-1').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-2').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-3').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-4').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-5').removeClass('expand');
    $('.fast-header__burgermenu-item--arrow-6').toggleClass('expand');


  });


  //////////////////// Burger menu END ///////////////////////



let accordion = function () {
  let data = $('.fast-main__faq-list').attr('data-accordion');

  $('.fast-main__faq-subtitle').on('click', function () {
    if (data === 'close') {
      $('.fast-main__faq-text').slideUp();
      if ($(this).hasClass('active')) {
        $(this).toggleClass('active');
      } else {
        $('.fast-main__faq-list').removeClass('active');
        $(this).toggleClass('active');
      }
    } else {
      $(this).toggleClass('active');
    }
    $(this).next('.fast-main__faq-text').not(':animated').slideToggle();
  })
};

accordion();
  

  ////////// Page FastFix End //////

  

  let mixer = mixitup('.portfolio__content-list');
  
})



