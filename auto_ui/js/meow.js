var urlObj = new Object();  
function meow(ele, e) {
	if (e.isTrigger != undefined){
		window.open(urlObj[ele.value]);
	}
}
function onloadMeow(){
	$.getJSON('json/url.json', function(data) {
	   var size = 0;
	   $.each(data.url, function(i, f) {
		  
		  for (var key in f) {
			size += 1;
			if (f.hasOwnProperty(key)) {           
				urlObj[key]= f[key];
			}
		}
	 });
	 $("#urlCount").text(size);
   });
}
function loadAuto() {
	$('input.autocomplete').autocomplete({
		data: urlObj,
		limit: 10,
	});
}
function loadMe(){
	onloadMeow();
	setTimeout(function() {
		loadAuto();
	}, 3000);

}
$(document).on({
	"contextmenu": function(e) {
		e.preventDefault();
		alert('Meow-Thiru');
	}
});