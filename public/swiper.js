export const defaultSwiperConfig = {
    slidesPerView: 3.45,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1848: { slidesPerView: 3.45 },
        1536: { slidesPerView: 2.8 },
        1330: { slidesPerView: 2.5 },
        1155: { slidesPerView: 2.2 },
        585: { slidesPerView: 1.8 },
        485: { slidesPerView: 1.5 },
        383: { slidesPerView: 1.2 },
        0: { slidesPerView: 0.8 }
    }
}

export const gridSwiperConfig = {
    slidesPerView: 5.8,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        1536: { slidesPerView: 5.8 },
        1280: { slidesPerView: 4.3 },
        1024: { slidesPerView: 3.5 },
        768: { slidesPerView: 2.8 },
        320: { slidesPerView: 1.5 }
    }
}
