// ===== ПРОМО-БАННЕР =====
document.addEventListener('DOMContentLoaded', function () {
    const promoBanner = document.getElementById('promoBanner');
    const closePromo = document.getElementById('closePromo');

    if (!promoBanner || !closePromo) return;

    closePromo.addEventListener('click', function () {
        promoBanner.classList.add('promo-banner--hidden');
    });
});