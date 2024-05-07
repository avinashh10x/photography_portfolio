jQuery(document).ready(function($){

    if($( "body.art-only-slider-left" ).length) {

        var breakpointMobile = 700,
            isChanging = false,
            isFiltered = false;
        $('#breakpointMobile').text( breakpointMobile );

        // Define the init handler before the initialization
        $('.slideshow').on('init breakpoint', function(event, slick){
            if ( ! isChanging ) {
                $('#breakpointValue').text( String(slick.activeBreakpoint) );
                // Prevent infinite loop
                isChanging = true;
                // The highest breakpoint is null
                if ( slick.activeBreakpoint && slick.activeBreakpoint <= breakpointMobile) {
                    if ( ! isFiltered ) {
                        slick.slickFilter(':not(.vanish-mobile)');
                        isFiltered = true;
                    }
                } else {
                    if ( isFiltered ) {
                        slick.slickUnfilter();
                        isFiltered = false;
                    }
                }
                isChanging = false;
            }
        }).slick({
            fade: true,
            speed:0,
            dots: true,
            nextArrow: $('#next'),
            prevArrow: $('#prev'),
            accessibility: true,
            responsive: [
                { breakpoint: 500 },
                { breakpoint: 700 },
                { breakpoint: 900 }
            ]
        });

        // Using key events with the slideshow
        var $carousel = $('.slideshow');
        $(document).on('keydown', function(e) {
            if(e.keyCode == 37) {
                $carousel.slick('slickPrev');
            }
            if(e.keyCode == 39) {
                $carousel.slick('slickNext');
            }
        });


        $(window).resize(function(){
            $('.slideshow')[0].slick.refresh();
        });

        // 	Fade Slideshow in
        setTimeout(function(){
            $('.slideshow').addClass("fadein");
        }, 1000);


        //   Check if subsequent slides have white classes
        $('.slideshow').on('afterChange', function(event, slick, currentSlide, nextSlide){

            if($('.slick-current').hasClass('white-logo')){
                $('body').addClass("white-logo");
            }

            else {
                $('body').removeClass("white-logo");
            }

            if($('.slick-current').hasClass('white-dot')){
                $('body').addClass("white-dot");
            }

            else {
                $('body').removeClass("white-dot");
            }

            if($('.slick-current').hasClass('white-caption')){
                $('body').addClass("white-caption");
            }

            else {
                $('body').removeClass("white-caption");
            }

            if($('.slick-current').hasClass('mobile-black')){
                $('body').addClass("black-logo");
            }

            else {
                $('body').removeClass("black-logo");
            }

            if($('.slick-current').hasClass('mobile-white')){
                $('body').addClass("white-logo-mobile");
            }

            else {
                $('body').removeClass("white-logo-mobile");
            }

        });


        // Toggle Info page
        $( ".page-dot" ).click(function() {
            $("body").toggleClass( "info-page-open" );
            $('.page-dot').toggleClass("make-dot-white");
            $('h1').toggleClass("make-logo-white");
        });


        // Viewport height container
        $(window).on('load', function(){
            $('.slide').height(window.innerHeight + 'px');
        });

        $(window).resize(function() {
            $('.slide').height(window.innerHeight + 'px');
        });


        // Viewport height container
        $(function() {
            $('.slide').height(window.innerHeight + 'px');
        });


        $(window).resize(function() {
            $('.slide').height(window.innerHeight + 'px');
        });


        // Swiping on mobile
        $(function(){
            // Bind the swipeleftHandler callback function to the swipe event on div.box
            $( "#next" ).on( "swipeleft", swipeleftHandler );

            // Callback function references the event target and adds the 'swipeleft' class to it
            function swipeleftHandler( event ){

            }
        });

    }


});