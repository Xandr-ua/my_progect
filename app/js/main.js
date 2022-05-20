$(function() {

  $('.header__burger').on('click', function() {
    $('.header__list').toggleClass('header__list--active');
    $('.header__burger').toggleClass('active');
  });

  ///////// Page Crypto /////

  $(".star").rateYo({
    starWidth: "29px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

  ////////// Page Crypto End //////

  let mixer = mixitup('.portfolio__content-list');
  
})
