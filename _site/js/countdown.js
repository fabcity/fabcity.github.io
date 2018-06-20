$(function() {

  var endDate;
  date = new Date("July 7, 2054 18:16:30");

  $('.countdown.styled').countdown({
    date: date,
    render: function(data) {
      $(this.el).html("<div>" + this.leadingZeros(data.years, 2) + " <span>years</span></div><div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hours</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>minutes</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>seconds</span></div>");
    }
  });

});
