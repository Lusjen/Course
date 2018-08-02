var dropdownTrigger = $('.js-dropdown-sort-btn');
var dropdowns = $('.js-dropdown-sort');
var value = $('.js-value');

dropdownTrigger.on('click', function(event) {
  if (!dropdowns.hasClass('is-open')) {
    dropdowns.addClass('is-open');
  } else {
    dropdowns.removeClass('is-open');
  }   
  event.stopPropagation();
});

value.on('click', function() {
  var parent = $(this).parents('.js-dropdown-sort');
  var trigger = parent.find('.js-dropdown-sort-btn');
  	trigger.text($(this).text());
  parent.removeClass('is-open');
});
