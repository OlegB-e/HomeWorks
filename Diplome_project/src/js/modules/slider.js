// ===== СЛАЙДЕР ОТЗЫВОВ =====
document.addEventListener('DOMContentLoaded', function () {
    const sliderElement = document.querySelector('.testimonials__slider');
    if (!sliderElement) return;

    const swiper = new Swiper('.testimonials__slider', {
        // Основные настройки
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        speed: 500,

        // Навигация (стрелки)
        navigation: {
            nextEl: '.reviews__arrow--next',
            prevEl: '.reviews__arrow--prev',
        },

        // Пагинация (точки)
        pagination: {
            el: '.reviews__pagination',
            clickable: true,
        },

        // Адаптивность
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2.5,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },

        // Доступность
        a11y: {
            prevSlideMessage: 'Предыдущий отзыв',
            nextSlideMessage: 'Следующий отзыв',
        },
    });
});