$(function(){
	$("#navbarToggle").blur(function(event){
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});

(function (global) {

   var kachurivka = {};

   var homeHTML = "snippets/home-snippet.html"

   var insertHtml = function (selector, html){
    var targetElem = document.querySelector(selector);
    targetElem.innerHtml = html;
   };

   var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
   };

   document.addEventListener("DOMContentLoaded", function(event){
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
        homeHTML,
        function (responseText){
            document.querySelector("#main-content").innerHtml = responseText;
        },
        false);
   });



   global.$kachurivka = kachurivka;

})(window);