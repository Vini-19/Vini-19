document.addEventListener("DOMContentLoaded", function () {
    let loaderContainer = document.getElementById("loader-container");

    setTimeout(() => {
        loaderContainer.classList.add("hidden"); // Aplica la animación de desvanecimiento
        setTimeout(() => {
            loaderContainer.remove(); // Elimina el loader del DOM después de la animación
        }, 500); // Espera 0.5s para la transición
    }, 2000); 
});
