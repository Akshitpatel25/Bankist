const navE1 = document.querySelector('.nav');
const hamburgerE1 = document.querySelector('.hamburger');

hamburgerE1.addEventListener("click", () => {
    navE1.classList.toggle("nav--open");
    hamburgerE1.classList.toggle("hamburger--close");
});

navE1.addEventListener("click", () => {
    navE1.classList.remove("nav--open");
    hamburgerE1.classList.remove("hamburger--close");
});

// section 3_2 buttons

let divv = document.querySelector('.textarea_nav_item1');
let divv2 = document.querySelector('.textarea_nav_item2');
let divv3 = document.querySelector('.textarea_nav_item3');

let textareas_1 = document.querySelector('.textareas_1');
let textareas_2 = document.querySelector('.textareas_2');
let textareas_3 = document.querySelector('.textareas_3');
divv.addEventListener("click", () => {
    divv.classList.toggle("textarea_nav_item1--open");
    divv2.classList.remove("textarea_nav_item2--open");
    divv3.classList.remove("textarea_nav_item3--open");
    textareas_1.style.display="flex ";
    textareas_2.style.display="none";
    textareas_3.style.display="none";
});

divv2.addEventListener("click", () => {
    divv2.classList.toggle("textarea_nav_item2--open");
    divv.classList.remove("textarea_nav_item1--open");
    divv3.classList.remove("textarea_nav_item3--open");
    textareas_1.style.display="none";
    textareas_2.style.display="flex";
    textareas_3.style.display="none";
});

divv3.addEventListener("click", () => {
    divv3.classList.toggle("textarea_nav_item3--open");
    divv2.classList.remove("textarea_nav_item2--open");
    divv.classList.remove("textarea_nav_item1--open");
    textareas_1.style.display="none";
    textareas_2.style.display="none";
    textareas_3.style.display="flex";

})