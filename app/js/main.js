$(function() {

  $('.header__burger').on('click', function() {
    $('.header__list').toggleClass('header__list--active');
    $('.header__burger').toggleClass('active');
  });
  
})
