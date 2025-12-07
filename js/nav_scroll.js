document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0.5) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});