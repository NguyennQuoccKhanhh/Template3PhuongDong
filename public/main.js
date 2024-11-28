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

var bannerSwiper = new Swiper(".bannerSwiper", {
    slidesPerView: 1,
    grabCursor: true,
    allowTouchMove: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 800,

});

var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 3.45,
    spaceBetween: 24,
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
    slidesPerView: 5.9,
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
            slidesPerView: 5.9,
        },
        1280: {
            slidesPerView: 4.3,
        },
        1024: {
            slidesPerView: 3.5,
        },
        768: {
            slidesPerView: 2.8,
        },
        320: {
            slidesPerView: 1.5,
        },
    },

});


function loadVideo() {
    const videoContainer = document.querySelector('.video-container');
    const iframe = document.createElement('iframe');

    iframe.src = "https://www.youtube.com/embed/qfD3g43V2FE?autoplay=1";
    iframe.className = "w-full h-full rounded-tr-[40px] rounded-tl-[40px] rounded-br-[40px]";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    videoContainer.innerHTML = '';
    videoContainer.appendChild(iframe);
}
