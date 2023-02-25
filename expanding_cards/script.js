document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.container__item');
    // const titles = document.querySelectorAll('.title');
    items.forEach(function (item) {
        item.addEventListener('click', function () {
            changeActive(item);
            changeHidden(item);
            // if (!(item.classList.contains('active'))) {
            //     items.forEach((item) => {
            //         item.classList.remove('active');
            //     });
            //     item.classList.add('active');
            //     titles.forEach((title) => {
            //         title.classList.add('hidden');
            //     });
            //     const title = item.querySelector('.title');
            //     title?.classList.remove('hidden');
            // }
        });
    });
});
function changeActive(item) {
    var items = document.querySelectorAll('.container__item');
    if (!(item.classList.contains('active'))) {
        items.forEach(function (item) {
            item.classList.remove('active');
        });
        item.classList.add('active');
    }
}
function changeHidden(item) {
    var titles = document.querySelectorAll('.title');
    titles.forEach(function (title) {
        title.classList.add('hidden');
    });
    var title = item.querySelector('.title');
    title === null || title === void 0 ? void 0 : title.classList.remove('hidden');
}
