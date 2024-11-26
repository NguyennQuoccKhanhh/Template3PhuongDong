// import { defaultSwiperConfig, gridSwiperConfig } from './swiperConfig'
const dropMenu = document.getElementById('dropMenu');
const clickMenu = document.getElementById('clickMenu');

if (dropMenu && clickMenu) {
    clickMenu.addEventListener('click', (e) => {
        dropMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!dropMenu.contains(e.target) && !clickMenu.contains(e.target)) {
            dropMenu.classList.remove('active');
        }
    });
}

var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 3.45,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.docterNext',
        prevEl: '.docterPrev',
    },
    breakpoints: {
        1848: {
            slidesPerView: 3.45,
        },
        1536: {
            slidesPerView: 2.8,
        },
        1330: {
            slidesPerView: 2.5,
        },
        1155: {
            slidesPerView: 2.2,
        },
        585: {
            slidesPerView: 1.8,
        },
        485: {
            slidesPerView: 1.5,
        },
        383: {
            slidesPerView: 1.2,
        },
        0: {
            slidesPerView: 0.8,
        }
    }
    
});
var gridSwiper = new Swiper(".gridSwiper", {
    slidesPerView: 5.8,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.docterNext1',
        prevEl: '.docterPrev1',
    },
    breakpoints: {
        1536: {
            slidesPerView: 5.8,
        },
        1280: {
            slidesPerView: 4.3,
        },
        1024: {
            slidesPerView: 3.5,
        },
        768:{
            slidesPerView: 2.8,
        },
        320: {
            slidesPerView: 1.5,
        },
    },
    
});
