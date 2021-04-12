$(document).ready(function(){
    $('#mycarousel').carousel( { interval: 2000 } );

    $('#carouselButton').click(function() {
        var theSpan = $('#carouselButton').children('span');
        var willPause = theSpan.hasClass('fa-pause');
        theSpan.removeClass(willPause ? 'fa-pause' : 'fa-play');
        theSpan.addClass( willPause ? 'fa-play' : 'fa-pause');
        if (willPause) {
            $('#mycarousel').carousel('pause');
        }
        else {
            $('#mycarousel').carousel('cycle');
        }
    });

    $('#reserve-table').click(function() {
        $('#mymodalForm').modal('toggle');
    });
    
    $('#login-button').click(function() {
        $('#loginModal').modal('toggle');
    });
});