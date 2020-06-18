
$(function() {

  var endDate;
  date = new Date("July 7, 2054 18:16:30");

  $('.countdown.styled').countdown({
    date: date,
    render: function(data) {
      $(this.el).html("<div>" + this.leadingZeros(data.years, 2) + " <span>years</span>" + this.leadingZeros(data.days, 3) + " <span>days</span>" + this.leadingZeros(data.hours, 2) + " <span>hours</span>" + this.leadingZeros(data.min, 2) + " <span>minutes</span>" + this.leadingZeros(data.sec, 2) + " <span>seconds</span></div>");
    }
  });

});
