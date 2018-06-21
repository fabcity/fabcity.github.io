$(document).ready(function() {
  if ($('#earth_div').length > 0) {

    var options = {atmosphere: false, center: [0, 0], zoom: 2};
    var earth = new WE.map('earth_div', {minAltitude: 500000, maxAltitude: 10000000});

    WE.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidG9tYXNkaWV6IiwiYSI6ImRTd01HSGsifQ.loQdtLNQ8GJkJl2LUzzxVg', {
          minZoom: 0,
          maxZoom: 5,
          attribution: 'NASA'
    }).addTo(earth);


    // earth.setTilt(223)

    $.getJSON( "https://api.fablabs.io/v0/labs.json", function( data ) {
      $('#count').html(data.labs.length)
      for (var i = 0; i < data.labs.length; i++) {
        var item = data.labs[i];
        if ( item.latitude && item.longitude ) {
          WE.marker([item.latitude,item.longitude], 'img/general/lab.png', 15, 15).addTo(earth);
        }
      }
    });

    if ( true ) {
      earth.setView([25.3909267,-5], 2.4);
      for(var i = 0; i < window.markers.length; i++) {
        window.markers[i].addTo(earth);
      }
    } else {
      earth.setView([25.3909267,50.1673073], 2.4);
      var i = 1;

      function add(_i) {
        $('aside ul li:eq('+(_i-1)+')').addClass('active').delay(100).fadeIn('slow')
        window.markers[_i-1].addTo(earth);

        window.markers[2]
        if (i == window.markers.length) {
          setTimeout(function() { window.pause = null; doAnimation(); }, 7000);
        }
      }

      function doAnimation() {
        $('aside li').removeClass('active')
        var before = null;
        requestAnimationFrame(
          function animate(now) {
            if (!window.pause) {
              var c = earth.getPosition();
              var elapsed = before? now - before: 0;
              before = now;
              earth.setCenter([ Math.max(10,c[0]-0.1), c[1] - 0.1*(elapsed/8)]);
              requestAnimationFrame(animate);
            }
          }
        );
      }

      doAnimation();

      function onMouseWheel(event) {
        console.log("Mouse X Y :: ", event.x, event.y);

        if (event.x > 720 && event.x < 1180 && event.y > 120 && event.y < 330) {
            event.preventDefault();
            if (overRenderer) {
                zoom(event.wheelDeltaY * 0.3);
            }
        }
        return false;
    }

      function goto() {
        $('aside li').removeClass('active')
        // if (i == window.places.length) {
        //   window.pause = null;
        //   doAnimation();
        // } else {
          // earth.zoomOut()
          earth.panTo(window.places[i], { duration: 0.2});
          setTimeout(function() { add(i) }, 500);

          // window.pause = null;
          // doAnimation();
          i++;
        // }
      }

      window.markers[0].addTo(earth);
      $('aside li:nth-child(1)').fadeIn()

      function clicker() {
        $('img#logo').on('click',function(){
          $('img#logo').off('click')
          if (i < window.places.length) {
            $('#overlay').fadeIn(100).delay(50).fadeOut('fast')
            window.pause = true;
            goto();
          }
          setTimeout(function() { clicker() }, 2500);
        });
      }

      clicker();

      $('aside li:gt(0)').hide()

    }

      $(window.markers[1].element).find('.we-pp').first().css({top: -15, left: 5})
      $(window.markers[1].element).find('.we-pp-tip-cont').hide()
      $(window.markers[3].element).find('.we-pp').first().css({left: -142, top: -15})
      $(window.markers[3].element).find('.we-pp-tip-cont').hide()
  }
});
