$(document).ready(function() {

  if ($('#map').length > 0) {
    var map = L.map('map').setView([42.3057566,-71.0564704], 11);
    L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
      maxZoom: 18,
      id: 'johnrees.ined2i0c'
    }).addTo(map);

    $.getJSON( "https://api.fablabs.io/v0/labs.json", function( data ) {
      $('#count').html(data.labs.length)
      for (var i = 0; i < data.labs.length; i++) {
        var item = data.labs[i];
        if ( item.latitude && item.longitude ) {
          L.marker([item.latitude,item.longitude], {icon: window.pulseIcon}).addTo(map)
        }
      }
    });

    for(var i = 0; i < window.map_markers.length; i++) {
      window.map_markers[i].addTo(map)
    }

    // L.marker([41.3909267,2.1673073], {icon: window.pulseIcon}).addTo(map)
  }

});
