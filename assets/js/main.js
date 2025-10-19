(function ($) {
    "use strict";

    // Anys Script Will Go Here
    console.log("JS Loaded");

    ////////////////////////////////////////////////////
    // Counter Js
    const counters = [
        { id: 'happyCustomers', target: 15, suffix: 'K', duration: 1000 },
        { id: 'monthlyVisitor', target: 150, suffix: 'K', duration: 1000 },
        { id: 'worldwideCountires', target: 15, suffix: '', duration: 1000 },
        { id: 'topPartners', target: 100, suffix: '+', duration: 1000 }
    ];

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counterId = entry.target.id;
                const counterConfig = counters.find(c => c.id === counterId);

                if (counterConfig) {
                    animateCounter(
                        counterId,
                        counterConfig.target,
                        counterConfig.suffix,
                        counterConfig.duration
                    );
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        const $element = $('#' + counter.id);
        if ($element.length) observer.observe($element.get(0));
    });

    function animateCounter(elementId, target, suffix, duration) {
        const $element = $('#' + elementId);
        let start = 0;
        const increment = target / (duration / 16);
        let current = start;

        function updateCounter() {
            current += increment;
            if (current < target) {
                const displayValue = Math.floor(current) + '<span>' + suffix + '</span>';
                $element.html(displayValue);
                requestAnimationFrame(updateCounter);
            } else {
                const finalValue = target + '<span>' + suffix + '</span>';
                $element.html(finalValue);
            }
        }

        updateCounter();
    }

    ////////////////////////////////////////////////////

    ////////////////////////////////////////////////////
    // Quality Eduction Slider

    const qualEduSlider = new Swiper('.edu-card-carrousel', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 800,

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            570: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });

    const brandSlider = new Swiper('.brand-logo-carrousel', {
        loop: true,
        slidesPerView: 6,
        spaceBetween: 30,
        speed: 2000,               // Slower speed for smoother continuous movement
        // allowTouchMove: false,     // Prevents stopping on touch
        freeMode: true,          // Enables free mode for continuous sliding

        autoplay: {
            delay: 0,              // No delay between transitions
            disableOnInteraction: false,
            // pauseOnMouseEnter: false // Won't pause on mouse hover
        },


        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            }
        }
    });

    ////////////////////////////////////////////////////

})(jQuery);