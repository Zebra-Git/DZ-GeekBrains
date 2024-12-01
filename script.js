const menu = document.querySelector('#nav_div_2')
menu.querySelector('#menu').addEventListener("click", () => {
    document.querySelector("#shop_menu").classList.add("active");
    document.querySelector(".close-menu").classList.add("close-menu-active");
});

// а тут мы вешаем на кнопку close-menu событие которое пр кликена кнопку
// удаляет menu_mobile  класс  active

document.querySelector(".close-menu").addEventListener("click", () => {
    document.querySelector("#shop_menu").classList.remove("active");
    document.querySelector(".close-menu").classList.remove("close-menu-active");
});
