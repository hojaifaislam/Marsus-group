(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(400).fadeOut();

        if (window.matchMedia('(max-width: 991.98px)').matches) {
            $('header .drop_box>a').click(function(e) {
                e.preventDefault();
                var $this = $(this);
                $('header .drop_box>a').removeClass('active');
                $this.toggleClass('active');
                
                
                if ($this.next().hasClass('show')) {
                    $this.next().removeClass('show');
                    $this.next().slideUp(350);
                    $('header .drop_box>a').removeClass('active');
                    
                } else {
                    $this.parent().parent().find('.drop_wrap').removeClass('show');
                    $this.parent().parent().find('.drop_wrap').slideUp(350);
                    $this.next().toggleClass('show');
                    $this.next().slideToggle(350);
                }
            }); 
        }
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        });

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, #menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });

        // Tabs List
	(function ($) {
		$('.tab ul.tabs-list').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs-list li').on('click', function (g) {
			var tab = $(this).closest('.tab'), 
			index = $(this).closest('li').index();
			tab.find('ul.tabs-list > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});
	})(jQuery);
    
        $('.owl-carousel.home_slider').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 4000,
            items: 1,
            nav: true,
            dots: false,
            navText: [
                '<i class="fal fa-arrow-left"></i>',
                '<i class="fal fa-arrow-right"></i>'
            ],
            responsive: {
                0:{
                    stagePadding: 62,
                    margin: 15,
                },
                576:{
                    stagePadding: 100,
                },
                768:{
                    stagePadding: 140,
                },
                992:{
                    stagePadding: 100,
                },
                1200:{
                    stagePadding: 140,
                },
                1600:{
                    stagePadding: 160,
                }
            }
        });

        $('.owl-carousel.slider1').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: true,
            nav: false,
            responsive:{
                0:{
                    items: 1,
                },
                576:{
                    items: 3,
                    margin: 20,
                },
                992:{
                    items: 5,
                    margin: 20,
                },
                1200:{
                    items: 5
                },                
            }
        });     
    });

})(jQuery);