var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 12
});

L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var downloadData = $.ajax("https://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/json/philadelphia-solar-installations.json");
downloadData.done(function(data) {
  var parsedData = JSON.parse(data);
  /* ================================
  Start your code here
  ================================ */

  /* ================================
  End your code here
  ================================ */
});


/*
Notes:
you can append to a specific item ID.

OPTION A:
_.each(parsedData, function(item){
allofMyHtml += var my Html = "<div class = "item><h3>" + item.NAME+ ""</h3>";
$(""#items")_.html(myHtml);
})


OPTION B:
If you want to pass all of your Html (nothing is already in the hmtl file??)
var allOfMyHtml = "";
_.each(parsedData, function(item){
allofMyHtml += "<div class = "item><h3>" + item.NAME+ ""</h3>";
});

$(""#items")_.html(myHtml); //outside of the function


*/
