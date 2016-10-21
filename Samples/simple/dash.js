var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.043501, lng: -75.520654},
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID  
  });
}

function showFrontLayer() {
  document.getElementById('bg_mask').style.visibility='visible';
  document.getElementById('frontlayer').style.visibility='visible';
}
function hideFrontLayer() {
  document.getElementById('bg_mask').style.visibility='hidden';
  document.getElementById('frontlayer').style.visibility='hidden';
}



$(document).ready( function() {

	$("#result").load("dashboard.html");

	//~이렇게 한줄만 해주면 알아서 contents에 testContents.html파일을 넣어 준다.

});