document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.container__item');
    var titles = document.querySelectorAll('.title');
    items.forEach(function (item) {
        item.addEventListener('click', function () {
            if (!(item.classList.contains('active'))) {
                items.forEach(function (item) {
                    item.classList.remove('active');
                });
                item.classList.add('active');
                titles.forEach(function (title) {
                    title.classList.add('hidden');
                });
                var title = item.querySelector('.title');
                title === null || title === void 0 ? void 0 : title.classList.remove('hidden');
            }
        });
    });
});
