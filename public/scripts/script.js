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
   my_map.lat = hcm_default.lat;
   my_map.lng = hcm_default.lng;
   my_map.zoom = hcm_default.zoom;
 });

 $("#map-dn-btn").on("click", function(){
   my_map.lat = dn_default.lat;
   my_map.lng = dn_default.lng;
   my_map.zoom = dn_default.zoom;
 });

 $("#map-hn-btn").on("click", function(){
   my_map.lat = hn_default.lat;
   my_map.lng = hn_default.lng;
   my_map.zoom = hn_default.zoom;
 });

});
