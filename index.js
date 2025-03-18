// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left -1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Arrowleft") {
        moveDodgerLeft();
    }
});
function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 40) {
        dodger.style.left = `${left + 1}px`;
    }
}   