const decreaseText = document.getElementById("decreaseText");
const increaseText = document.getElementById("increaseText");
const contrastButton = document.getElementById("contrastButton");

let fontScale = 1;

decreaseText.addEventListener("click", () => {
    fontScale = Math.max(0.9, fontScale - 0.1);

    document.documentElement.style.setProperty(
        "--font-scale",
        fontScale
    );
});

increaseText.addEventListener("click", () => {
    fontScale = Math.min(1.3, fontScale + 0.1);

    document.documentElement.style.setProperty(
        "--font-scale",
        fontScale
    );
});

contrastButton.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
});