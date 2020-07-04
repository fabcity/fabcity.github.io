// Set the date we're counting down to
var countDownDate = new Date("July 7, 2054 18:16:30").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var years = Math.floor(distance / ((1000 * 60 * 60 * 24) * 365.25) );
  var days = Math.floor(distance / (1000 * 60 * 60 * 24) - (years * 365.25));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = "<div class=\"col\"><div class=\"cnums\">" + years + "</div><div class=\"text-uppercase h3 \">years</div></div> <div class=\"col\"><div class=\"cnums\">" + days + "</div><div class=\"text-uppercase h3\">days</div></div> <div class=\"col\"><div class=\"cnums\">" + hours + "</div><div class=\"text-uppercase h3 \">hours</div></div><div class=\"col\"><div class=\"cnums\">" + minutes + "</div><div class=\"text-uppercase h3\">minutes</div></div><div class=\"col\"><div class=\"cnums\">" + seconds + "</div><div class=\"text-uppercase h3\">seconds</div></div>";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
