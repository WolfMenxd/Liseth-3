const button = document.getElementById("flowerButton");
const petalsContainer = document.getElementById("petals");

button.addEventListener("click", () => {

    // Llevar al mensaje
    document.getElementById("message").scrollIntoView({
        behavior: "smooth"
    });

    // Crear lluvia de flores
    for (let i = 0; i < 35; i++) {

        const petal = document.createElement("div");

        petal.classList.add("petal");

        const flowers = [
            "🌻",
            "🌼",
            "💛",
            "✨"
        ];

        petal.textContent =
            flowers[Math.floor(Math.random() * flowers.length)];

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.fontSize =
            18 + Math.random() * 25 + "px";

        petal.style.animationDuration =
            3 + Math.random() * 4 + "s";

        petal.style.animationDelay =
            Math.random() * 1.5 + "s";

        petalsContainer.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 8000);
    }

    // Cambiar el texto del botón
    button.innerHTML = "🌻 Para ti, Morenita 💛";
});