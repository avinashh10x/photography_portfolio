(function ($) {

    "use strict";


    // Venobox YouTube
    if ($('.venobox-youtube-link').length) {
        $('.venobox-youtube-link').venobox({
            autoplay: true
        });
    }


    /* Tabs */


    // Staff
    $('.art-staff-themselves li').on("mouseenter", function () {
        var widget_itself = $(this),
            widget_parent_content = widget_itself.parent().parent().parent().parent().parent(),
            selected_button = widget_itself.data('id');

        if (widget_parent_content.hasClass('art-finished')) {
            widget_parent_content.removeClass('art-finished');
            setTimeout(function () {
                widget_parent_content.find('.art-widget-image-block').removeClass('art-display-block').addClass('art-display-none');
                widget_parent_content.find('.art-widget-image-block[data-id="' + selected_button + '"]').removeClass('art-display-none').addClass('art-display-block');
                widget_parent_content.addClass('art-finished');
            }, 185);
        }

    });

    // Ticker
    $('.art-ticker-field').marquee({
        duration: 10000,
        startVisible: true,
        duplicated: true
    });


    // Accordion tabs
    $('.art-accordion-menu-tabs li').on('click', function () {

        var widget_itself = $(this),
            widget_parent_tabs = widget_itself.parent(),
            widget_parent_content = widget_itself.parent().parent().find('.art-accordion-menu-info'),
            selected_button = widget_itself.data('id');

        widget_parent_tabs.find('li').removeClass('art-active').addClass('art-no-active');
        widget_itself.removeClass('art-no-active').addClass('art-active');

        widget_parent_content.find('.art-accordion-item').hide();
        widget_parent_content.find('.art-accordion-item[data-id="' + selected_button + '"]').fadeIn();

    });


    // service menu two
    $('.art-service-menu-two-tabs li').on('click', function () {

        var widget_itself = $(this),
            widget_parent_tabs = widget_itself.parent(),
            widget_parent_content = widget_itself.parent().parent().find('.art-service-two-info'),
            selected_button = widget_itself.data('id');

        widget_parent_tabs.find('li').removeClass('art-active').addClass('art-no-active');
        widget_itself.removeClass('art-no-active').addClass('art-active');

        widget_parent_content.find('.art-service-wrapper').hide();
        widget_parent_content.find('.art-service-wrapper[data-id="' + selected_button + '"]').fadeIn();

    });

    // Mention
    $('.art-mention-tabs li').on('click', function () {

        var widget_itself = $(this),
            widget_parent_tabs = widget_itself.parent(),
            widget_parent_content = widget_itself.parent().parent().find('.art-mention-info'),
            selected_button = widget_itself.data('id');


        widget_parent_tabs.find('li').removeClass('art-active').addClass('art-no-active');
        widget_itself.removeClass('art-no-active').addClass('art-active');

        widget_parent_content.find('.art-mention-item').hide();
        widget_parent_content.find('.art-mention-item[data-id="' + selected_button + '"]').fadeIn();

    });

    // Contact menu two
    $('.art-contact-menu-two-tabs li').on('click', function () {

        var widget_itself = $(this),
            widget_parent_tabs = widget_itself.parent(),
            widget_parent_content = widget_itself.parent().parent().find('.art-contact-info-wrapper'),
            selected_button = widget_itself.data('id');

        widget_parent_tabs.find('li').removeClass('art-active').addClass('art-no-active');
        widget_itself.removeClass('art-no-active').addClass('art-active');

        widget_parent_content.find('.art-contact-info-data').hide();
        widget_parent_content.find('.art-contact-info-data[data-id="' + selected_button + '"]').fadeIn();

    });


    /**
     * Elementor JS Hooks
     */

    var imagesSwiperHandler = function ($scope, $) {

        /* Blog */
        var swiper = new Swiper('.swiper-container-blog', {
            slidesPerView: 4,
            spaceBetween: 30,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
                dragSize: 263
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                200: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                892: {
                    slidesPerView: 4,
                },
            }
        });


    };

    let imagesSwiperShop = function ($scope, $) {

        /* Shop */


        let swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 30,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
                dragSize: 263
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                200: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                892: {
                    slidesPerView: 4,
                },
            }
        });

    };

    let imagesSwiperSliderInfoHero = function ($scope, $) {

        let autoplay_speed = $('.swiper-container-slider-info').data('autoplay-speed'),
            autoplay = $('.swiper-container-slider-info').data('autoplay'),
            config = {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            };

        if (autoplay) {

            config.autoplay = {
                delay: autoplay_speed,
                disableOnInteraction: false
            }

        }

        /* Slider Info */
        let swiper = new Swiper('.swiper-container-slider-info', config);

    };

    let imagesSwiperTestimonials = function ($scope, $) {

        /* Slider Info */
        let swiper = new Swiper('.swiper-container-testimonial-info', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    };


    let myMapBlockImage = function ($scope, $) {

        mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3MTI0NTQiLCJhIjoiY2tkNGYyeHFwMXduNTMwcGdnZzN1dnRrZCJ9.OpOYQNg_IU9NoviDgt1rcA';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/andrew12454/ckd4g3dbl06ay1iq87ysv0weu'
        });

        map.scrollZoom.disable();
        map.addControl(new mapboxgl.NavigationControl());

    }

    $(window).on("elementor/frontend/init", function () {

        /*if (jQuery.fn.slick) {
            elementorFrontend.hooks.addAction(
                "frontend/element_ready/art-half-slider-left.default",
                imagesCarouselHandlerLeft
            );
        }*/

        /*if (jQuery.fn.slick) {
            elementorFrontend.hooks.addAction(
                "frontend/element_ready/art-half-slider-right.default",
                imagesCarouselHandlerRight
            );
        }*/

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/woo-star-posts-slider.default",
            imagesSwiperHandler
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/woo-star-products-slider.default",
            imagesSwiperShop
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/slider-info-hero.default",
            imagesSwiperSliderInfoHero
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/art-testimonials.default",
            imagesSwiperTestimonials
        );

        /*elementorFrontend.hooks.addAction(
            "frontend/element_ready/woo-team-slider.default",
            imagesSwiperTeam
        );*/

        /* elementorFrontend.hooks.addAction(
             "frontend/element_ready/art-my-map.default",
             myMapBlockImage
         );

         elementorFrontend.hooks.addAction(
             "frontend/element_ready/art-my-map-contacts.default",
             myMapBlockImage
         );*/

    });


    $('.art-open-gallery').magnificPopup({
        type: 'image',
        removalDelay: 300,
        delegate: 'a',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });


    $('.art-proofing-gallery').magnificPopup({
        type: 'image',
        removalDelay: 300,
        delegate: 'a.proofing-gallery-open',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',

            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });


    $('.art-open-custom-popup').magnificPopup({
        type: 'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.

        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',

        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto'
    });

    $('.art-open-custom-popup-simple').magnificPopup({
        type: 'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.

        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in art-popup-simple',

        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto'
    });


    // Custom Animation


})
(jQuery);






