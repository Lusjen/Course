var menu = $('.js-menu');
var btn = $('.js-burger');
var burger =$('.burger');

btn.on('click', function() {
  if (!menu.hasClass('is-open')) {
    menu.addClass('is-open');
    burger.addClass('is-open');
  } else {
    menu.removeClass('is-open');
    burger.removeClass('is-open');
  }
});

