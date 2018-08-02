var dropdownTrig = $('.js-dropdown-btn');
var dropdowns = $('.js-dropdown');
var value = $('.js-select-value');

dropdownTrig.on('click', function(event) {
  console.log('lll');
  var parent = $(this).parents('.js-dropdown');
  console.log(parent);
	 if (!parent.hasClass('is-open')) {
	    dropdowns.removeClass('is-open');
	    parent.addClass('is-open');
	  } else {
	    parent.removeClass('is-open');
	  }   
	  event.stopPropagation();
});

value.on('click', function() {
  var parent = $(this).parents('.js-dropdown');
  var trigger = parent.find('.js-dropdown-btn');
  trigger.text($(this).text());
	  parent.removeClass('is-open');
});
