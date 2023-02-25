document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.container__item');
    items.forEach(function (item) {
        item.addEventListener('click', function () {
            if (!(item.classList.contains('active'))) {
                items.forEach(function (item) {
                    item.classList.remove('active');
                });
                item.classList.add('active');
            }
            ;
        });
    });
});
