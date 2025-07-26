
// Получаем элементы
const btnOpen = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal__close-btn');

// Открытие модального окна
btnOpen.addEventListener('click', () => {
    modal.classList.add('modal--active');
});

// Закрытие по кнопке "X"
btnClose.addEventListener('click', () => {
    modal.classList.remove('modal--active');
});

// Закрытие при клике вне модального окна
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('modal--active');
    }
});
