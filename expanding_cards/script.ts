document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.container__item');
    items.forEach((item) => {
        item.addEventListener('click', () => {
            if (!(item.classList.contains('active'))) {
                items.forEach((item) => {
                    item.classList.remove('active');
                });
                item.classList.add('active');
            };
        });
    });
});