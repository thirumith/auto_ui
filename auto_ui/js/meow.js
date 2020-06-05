var obj = "";
function meow(ele, e) {
	if (e.isTrigger != undefined){
		window.open(obj[ele.value]);
	}
}
$(function() {
	$('input.autocomplete').autocomplete({
		data: {
			"kibana": "http://placehold.it/250x250",
			"kibana2": "http://placehold.it/250x250",
		},
		limit: 20,
	});
});
$(document).on({
	"contextmenu": function(e) {
		e.preventDefault();
		alert('Meow-Thiru');
	}
});