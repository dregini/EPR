function slideSwitch() {
    var $active = $('#slideshow IMG.active');
    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');
        var $next =  $active.next().length ? $active.next()
            : $('#slideshow IMG:first');
                $active.addClass('last-active');
                $next.css({opacity: 0.0})
                    .addClass('active')
                    .animate({opacity: 1.0}, 2000, function() {
                        $active.removeClass('active last-active');
                    });
}
                
jQuery(
    function( $ ){
    // setInterval( "slideSwitch()", 3000 );
    $(document).ready(function () {
        $("nav").find("li").on("click", "a", function () {
            $('.navbar-collapse.in').collapse('hide');
        });
    });   
                
                
    $('.tabs a').click(function() {
        var url = $(this).attr('href');
            if (url == "#autovetture" ){
                if($('#autovetture').hasClass('hider')){
                    $('#autovetture').removeClass('hider');
                    $('#nautica').addClass('hider');
                    $('#immobiliare').addClass('hider');
                    $('#industrie').addClass('hider')
        
                    $('#slideshow').removeClass('boats');
                    $('#slideshow').removeClass('factories');
                    $('#slideshow').removeClass('scoves');
                    $('#slideshow').addClass('auto');
                }else {}
            }
            
            if (url == "#nautica" ){
                if($('#nautica').hasClass('hider')){
                    $('#nautica').removeClass('hider');
                    $('#autovetture').addClass('hider');
                    $('#immobiliare').addClass('hider');
                    $('#industrie').addClass('hider');
                        
                    $('#slideshow').removeClass('auto');
                    $('#slideshow').removeClass('factories');
                    $('#slideshow').removeClass('scoves');
                    $('#slideshow').addClass('boats');
                }else {}
            }
                    
            if (url == "#immobiliare" ){
                if($('#immobiliare').hasClass('hider')){
                    $('#immobiliare').removeClass('hider');
                    $('#autovetture').addClass('hider');
                    $('#nautica').addClass('hider');
                    $('#industrie').addClass('hider');
                
                    $('#slideshow').removeClass('boats');
                    $('#slideshow').removeClass('factories');
                    $('#slideshow').removeClass('auto');
                    $('#slideshow').addClass('scoves');
                }else {}
            }
                    
            if (url == "#industrie" ){
                if($('#industrie').hasClass('hider')){
                    $('#industrie').removeClass('hider');
                    $('#autovetture').addClass('hider');
                    $('#nautica').addClass('hider');
                    $('#immobiliare').addClass('hider');
                            
                    $('#slideshow').removeClass('boats');
                    $('#slideshow').removeClass('auto');
                    $('#slideshow').removeClass('scoves');
                    $('#slideshow').addClass('factories');
                    }else {}
                }
                return false;
    });
});