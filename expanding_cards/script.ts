document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.container__item');
    const titles = document.querySelectorAll('.title');
    items.forEach((item) => {
        item.addEventListener('click', () => {
            if (!(item.classList.contains('active'))) {
                items.forEach((item) => {
                    item.classList.remove('active');
                });
                item.classList.add('active');
                titles.forEach((title) => {
                    title.classList.add('hidden');
                });
                const title = item.querySelector('.title');
                title?.classList.remove('hidden');
            }
        });
    });
});