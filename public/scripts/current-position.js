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

 $("#map-hcm-btn").on("click", function(){
   my_map.setCenter(hcm_default.lat, hcm_default.lng);
   my_map.setZoom(hcm_default.zoom);
 });

 $("#map-dn-btn").on("click", function(){
   my_map.setCenter(dn_default.lat, dn_default.lng);
   my_map.setZoom(dn_default.zoom);
 });

 $("#map-hn-btn").on("click", function(){
   my_map.setCenter(hn_default.lat, hn_default.lng);
   my_map.setZoom(hn_default.zoom);
 });

});
