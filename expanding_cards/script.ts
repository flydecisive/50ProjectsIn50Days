document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.container__item');
    items.forEach((item) => {
        item.addEventListener('click', () => {
            changeActive(item);
            changeHidden(item);
        });
    });
});

function changeActive(item: Element): void {
    const items = document.querySelectorAll('.container__item');
    if (!(item.classList.contains('active'))) {
        items.forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    }
}

function changeHidden(item: Element): void {
    const titles = document.querySelectorAll('.title');
    titles.forEach((title) => {
        title.classList.add('hidden');
    });
    const title = item.querySelector('.title');
    title?.classList.remove('hidden');
}