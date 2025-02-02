function getEffect() {
    return window.innerWidth <= 768 ? 'cube' : 'coverflow';
}

function initSwiper() {
    if (window.swiperInstance) {
        window.swiperInstance.destroy(true, true);
    }

    window.swiperInstance = new Swiper(".mySwiper", {
        effect: getEffect(),
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: window.innerWidth <= 768 ? 1 : 3,
        loop: true,
        loopAdditionalSlides: 0,
        observer: true,
        observeParents: true,
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        }
    });
}

let thumbsSwiper = new Swiper(".swiper-thumbs", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});

let gallerySwiper = new Swiper(".swiper-gallery", {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    thumbs: { swiper: thumbsSwiper }
});

initSwiper();

window.addEventListener("resize", initSwiper);