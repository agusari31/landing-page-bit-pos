const menu = document.querySelector('#menu');
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});

footer.addEventListener('click', function () {
    drawer.classList.remove('open');
});