jQuery(document).ready(function() { 
    /* for the sticky navigation */
    $('.js--section-services').waypoint(function(direction) {
        if (direction == "down"){
            $('nav').addClass('sticky');    
        } else {
            $('nav').removeClass('sticky');
        }
        console.log('Direction: ' + direction)
    },
    {
        offset: '60px;'
    }
    );
});