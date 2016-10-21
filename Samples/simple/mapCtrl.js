var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.943916, lng: -75.158264},
    zoom: 20,
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
});