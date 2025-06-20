const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const overlayButton = document.getElementById("overlay-button");

function triggerFullScreenOverlay(show){
    const overlay = document.getElementById("fullscreen-overlay");
    const display = show ? "flex" : "none";
    overlay.style.display = display;
}
document.querySelector("#fullscreen-overlay .close-button").addEventListener("click", () => {
    triggerFullScreenOverlay(false);
});
