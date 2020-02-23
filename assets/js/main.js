$(document).ready(function () {
  $('.header-navbar__hamburger').click(function () {
    $(this).toggleClass('active');
    $('.header-navbar__list').toggleClass('active');
    $('.header-navbar__list').fadeToggle(500);
  });
});
