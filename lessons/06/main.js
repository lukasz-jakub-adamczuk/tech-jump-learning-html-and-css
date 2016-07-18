
'use strict';

// this JS is not awesome
// this is example code

var poorStrPad = function(string, length) {
	var length = length || 15;

	if (string.length > length) {
		return string;
	}
	length -= string.length;

	for (var i = 0; i < length; i++) {
		string += ' ';
	}
	return string;
};

$('form').submit(function(e) {
	console.log('%c' + this.className.split('-').join(' ').toUpperCase(), "color: blue; font-size: 16px;");

	e.preventDefault();

	var values = $(this).serializeArray();
	
	$.each(values, function(idx, itm) {
		console.log((idx+1) + '. ' + poorStrPad(itm.name + ':', 15) + '' + itm.value);
	})
});