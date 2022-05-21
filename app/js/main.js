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

  let mixer = mixitup('.portfolio__content-list');
  
})



