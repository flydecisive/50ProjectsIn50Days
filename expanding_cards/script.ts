document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.container__item');
    const titles = document.querySelectorAll('.title');
    items.forEach((item) => {
        item.addEventListener('click', () => {
            const title = item.querySelector('.title');
            changeActive(items, item);
            changeHidden(titles, title);
        });
    });
});

function changeActive(items: NodeListOf<Element>, item: Element): void {
    if (!(item.classList.contains('active'))) {
        items.forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    }
}

function changeHidden(titles: NodeListOf<Element>, title: Element | null): void {   
    titles.forEach((title) => {
        title.classList.add('hidden');
    });
    title?.classList.remove('hidden');
}