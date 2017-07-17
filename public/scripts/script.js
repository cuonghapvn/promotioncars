$(document).ready(function(){

  var hcmc_default = {
    lat: 10.8282319,
    lng: 106.6694527,
    zoom: 13
  }
  var dana_default = {
    lat: 16.0523988,
    lng: 108.2068489,
    zoom: 14
  }
  var hn_default = {
    lat: 21.0247392,
    lng: 105.8331646,
    zoom: 15,
  }

  new GMaps({
   div: '#current-position-map',
   lat: 10.8282319,
   lng: 106.6694527,
   zoom: 13,
 });

});
