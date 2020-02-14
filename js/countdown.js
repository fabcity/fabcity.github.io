$(function() {

  var endDate;
  date = new Date("July 7, 2054 18:16:30");

  $('.countdown.styled').countdown({
    date: date,
    render: function(data) {
      $(this.el).html("<div>" + this.leadingZeros(data.years, 2) + " years " + this.leadingZeros(data.days, 3) + " days " + this.leadingZeros(data.hours, 2) + " hours " + this.leadingZeros(data.min, 2) + " minutes " + this.leadingZeros(data.sec, 2) + " seconds");
    }
  });

});
