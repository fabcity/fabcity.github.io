/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
    var modal = this;
    var hash = modal.id;
    window.location.hash = hash;
    window.onhashchange = function() {
        if (!location.hash){
            $(modal).modal('hide');
        }
    }
});

$('.cities-left').click(function() {
  // If we click to Show any city, hide all cities already shown
  $('.city-info.collapse').removeClass('in');
});

/*Mobile responsiveness for section height*/
$(window).load(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 767) {
        $(".section-texts").css("height", "auto");
        $(".section-img-box").css("height", "auto");
    }
 });
$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 767) {
        $(".section-texts").css("height", "auto");
        $(".section-img-box").css("height", "auto");
    }
});

/*Sharing popover on section buttons*/
// default init
//$(function () {
//  $('[data-toggle="popover"]').popover()
//})

$('[data-toggle="popover"]').popover({
  html : true, 
  container : '#btn-share',
  content: function() {
    return $('#popoverExampleHiddenContent').html();
  },
  template: '<div class="popover" role="tooltip"><div class="popover-content"></div></div>'
});

$(document).click(function (event) {
            // hide share button popover
        if (!$(event.target).closest('#btn-share').length) {
            $('#btn-share').popover('hide')
        }
    });