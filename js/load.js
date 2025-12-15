// Tiempo que quieres que el loader permanezca visible
const timeout = 700; // 2 segundos

// Espera a que toda la página cargue
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader-overlay");
        loader.classList.add("hidden");
    }, timeout);
});
