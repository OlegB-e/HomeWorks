// ===== КОРЗИНА =====
document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.querySelector('.header__cart');
    const cartCount = document.createElement('span');
    
    if (!cartBtn) return;
    
    // Создаём счётчик товаров
    cartCount.classList.add('cart__count');
    cartCount.textContent = '0';
    cartBtn.appendChild(cartCount);
    
    // Функция добавления в корзину (пример)
    window.addToCart = function(productId) {
        let count = parseInt(cartCount.textContent) || 0;
        count++;
        cartCount.textContent = count;
        
        // Анимация
        cartBtn.classList.add('cart--pulse');
        setTimeout(() => {
            cartBtn.classList.remove('cart--pulse');
        }, 300);
    };
});