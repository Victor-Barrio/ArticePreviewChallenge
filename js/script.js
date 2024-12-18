const button = document.getElementById("activateShare");
const shareMobile = document.getElementById("shareMobile");
const shareDesktop = document.getElementById("shareDesktop");
const hiddenPart = document.querySelector(".author");

let isShareActive = false;

button.addEventListener("click", () => {
    if (window.innerWidth > 1024) {
        if (isShareActive === false) {
            isShareActive = true;
            shareDesktop.style.display = "flex";
            button.classList.add("shareActive");
        } else {
            isShareActive = false;
            shareDesktop.style.display = "none";
            button.classList.remove("shareActive");
        }
    } else {
        if (isShareActive === false) {
            isShareActive = true;
            shareMobile.style.display = "flex";
            hiddenPart.style.display = "none";
            button.classList.add("shareActive");
        } else {
            isShareActive = false;
            shareMobile.style.display = "none";
            hiddenPart.style.display = "flex";
            button.classList.remove("shareActive");
        }
}});