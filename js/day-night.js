var mainDiv = document.querySelector(".day");
var changeButton = document.querySelector(".changeday");


var timeChange = function () {
    if (mainDiv.classList.contains("day")) {
        mainDiv.classList.remove("day");
        mainDiv.classList.add("night");
    } else if (mainDiv.classList.contains("night")) {
        mainDiv.classList.remove("night");
        mainDiv.classList.add("day");
    }
}

changeButton.addEventListener("click", timeChange);