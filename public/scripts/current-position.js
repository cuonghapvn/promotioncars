$(document).ready(function(){

  var hcm_default = {
    lat: 10.8282319,
    lng: 106.6694527,
    zoom: 13
  }
  var dn_default = {
    lat: 16.0523988,
    lng: 108.2068489,
    zoom: 14
  }
  var hn_default = {
    lat: 21.0247392,
    lng: 105.8331646,
    zoom: 15,
  }

  var my_map = new GMaps({
   div: '#current-position-map',
   lat: hcm_default.lat,
   lng: hcm_default.lng,
   zoom: hcm_default.zoom,
 });

 var hcm_pins = 0;
 $("#map-hcm-btn").on("click", function(){
   pins_remove()
   my_map.setCenter(hcm_default.lat, hcm_default.lng);
   my_map.setZoom(hcm_default.zoom);

   var pins = [
     [10.849309, 106.632620],
     [10.839244, 106.647152],
     [10.838563, 106.665289],
     [10.825073, 106.602295],
     [10.819236, 106.689457],
     [10.792476, 106.653288],
     [10.760042, 106.624732],
     [10.819055, 106.689498],
     [10.827560, 106.718362],
     [10.834825, 106.663880]
   ];

   hcm_pins = pins.length;
   setTimeout(function(){
     for (var i = 0; i < pins.length; i++) {
       my_map.drawOverlay({
         lat: pins[i][0],
         lng: pins[i][1],
         content: '<div id="hcm-pin' + i + '" class="pin"></div>'
       });
     }
   }, 1000);

 });

var dn_pins = 0;
 $("#map-dn-btn").on("click", function(){
   pins_remove()
   my_map.setCenter(dn_default.lat, dn_default.lng);
   my_map.setZoom(dn_default.zoom);

   var pins = [
     [16.032849, 108.222822],
     [16.065913, 108.192718],
     [16.065913, 108.202394],
     [16.056063, 108.207913],
     [16.060334, 108.214651],
     [16.070458, 108.213360],
     [16.075073, 108.180461],
     [16.073213, 108.223825],
     [16.061091, 108.224184],
     [16.059163, 108.186052],
   ];

   dn_pins = pins.length;
  setTimeout(function(){
    for (var i = 0; i < pins.length; i++) {
      my_map.drawOverlay({
        lat: pins[i][0],
        lng: pins[i][1],
        content: '<div id="dn-pin' + i + '" class="pin"></div>'
      });
    }
  }, 1000);

 });

var hn_pins = 0;
 $("#map-hn-btn").on("click", function(){
   pins_remove()
   my_map.setCenter(hn_default.lat, hn_default.lng);
   my_map.setZoom(hn_default.zoom);

   var pins = [
     [21.012848, 105.835419],
     [21.032157, 105.827179],
     [21.028231, 105.800142],
     [21.015973, 105.805635],
     [21.016454, 105.828810],
   ];

   hn_pins = pins.length;

   setTimeout(function(){
     for (var i = 0; i < pins.length; i++) {
       my_map.drawOverlay({
         lat: pins[i][0],
         lng: pins[i][1],
         content: '<div id="hn-pin' + i + '" class="pin"></div>'
       });
     }
   }, 1000);

 });

 function pins_remove(){
   $(".pin").remove();
 }

});
