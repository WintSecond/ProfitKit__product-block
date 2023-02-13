// Слайдеры
(() => {
    // Галерея продукта
    new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        slideToClickedSlide: false,
    });

    // Слайдер каталог
    new Swiper(".catalog__slider", {
        navigation: {
            nextEl: ".tabs__content .swiper-button-next",
            prevEl: ".tabs__content .swiper-button-prev",
        },
        slideToClickedSlide: false,
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2
            },
            991: {
                slidesPerView: 4
            }
        }
    });

})();


// Табы
(() => {
    const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
    const tabsItems = document.querySelectorAll(".tabs__content");

    tabsBtn.forEach(function (item) {
        item.addEventListener("click", function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);

            if (!currentBtn.classList.contains("active")) {
                tabsBtn.forEach(function (item) {
                    item.classList.remove("active")
                });

                tabsItems.forEach(function (item) {
                    item.classList.remove("active")
                });

                currentBtn.classList.add("active");
                currentTab.classList.add("active");
            };

        });
    });
})();

// функционал счётчика товаров
(() => {
    const count = document.querySelectorAll(".card__count")

    //фокус на счётчик товара
    count.forEach(countFocus => {
        countFocus.addEventListener("focusin", function () {
            this.classList.add("focus");
        });
    });

    count.forEach(countFocus => {
        countFocus.addEventListener("focusout", function () {
            this.classList.remove("focus");
        });
    });

    // счётчик
    document.querySelectorAll('.card__count .action').forEach((elem) => {
        elem.addEventListener('click', function () {
            const countWrapper = elem.closest('.card__count');
            const input = countWrapper.querySelector('input[name="count"]');
            const action = this.dataset.action;

            let value = +input.value;

            switch (action) {
                case 'increment': {
                    value += 1;
                    break;
                }
                case 'decrement': {
                    if ((value - 1) !== 0) {
                        value -= 1;
                    }
                    break;
                }
                default:
                    break;
            }

            input.value = value;
        });
    });
})();
