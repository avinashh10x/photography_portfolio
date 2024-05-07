jQuery( window ).on( 'elementor/frontend/init', () => {
	elementorFrontend.hooks.addAction( 'frontend/element_ready/testimonials-images.default', ( $element ) => {
		elementorFrontend.elementsHandler.addHandler( imagesSwiperTestimonialsImages, {
			$element,
		} );
	} );

	elementorFrontend.hooks.addAction( 'frontend/element_ready/testimonials-images-two.default', ( $element ) => {
		elementorFrontend.elementsHandler.addHandler( imagesSwiperTestimonialsImages, {
			$element,
		} );
	} );
} );

class imagesSwiperTestimonialsImages extends elementorModules.frontend.handlers.Base {
	getDefaultSettings() {
		return {
			selectors: {
				containerImage: '.swiper-container-testimonial-image',
				containerText: '.swiper-container-testimonial-text',
				navigationNextEl: '.swiper-button-next',
				navigationPrevEl: '.swiper-button-prev',
			}
		};
	}

	getDefaultElements() {
		const selectors = this.getSettings( 'selectors' );

		return {
			$containerImage: this.$element.find( selectors.containerImage ),
			$containerText: this.$element.find( selectors.containerText ),
			$navigationNextEl: this.$element.find( selectors.navigationNextEl ),
			$navigationPrevEl: this.$element.find( selectors.navigationPrevEl ),
		};
	}

	async initSwiper( swiperElement, swiperConfig ) {
		let mySwiper;

		const asyncSwiper = elementorFrontend.utils.swiper;

		mySwiper = await new asyncSwiper( swiperElement, swiperConfig ).then( ( newSwiperInstance ) => {
			mySwiper = newSwiperInstance;
		} );

		return mySwiper;
	}

	async onInit( ...args ) {
		await super.onInit( ...args );

		const elementSettings = this.getElementSettings();

		let sliderAutoplay = false;

		if ( 'yes' === elementSettings.autoplay ) {
			sliderAutoplay = {
				delay: elementSettings.autoplay_speed,
				disableOnInteraction: false,
			};
		}

		await this.initSwiper( this.elements.$containerImage, {
			spaceBetween: 10,
			slidesPerView: 1,
			effect: 'fade',
			allowTouchMove: false,
			fadeEffect: {crossFade: true},
			autoplay: sliderAutoplay,
			navigation: {
				nextEl: this.elements.$navigationNextEl,
				prevEl: this.elements.$navigationPrevEl,
			},
		} );

		await this.initSwiper( this.elements.$containerText, {
			spaceBetween: 10,
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {crossFade: true},
			autoplay: sliderAutoplay,
			navigation: {
				nextEl: this.elements.$navigationNextEl,
				prevEl: this.elements.$navigationPrevEl,
			},
		} );
	}
}
