const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
    button.addEventListener("click", function () {
        let buttonTextContent = this.textContent;
        makeSound(buttonTextContent);
        buttonAnimation(buttonTextContent)
    })
);

document.addEventListener("keypress", function (event) {
    let eventKey = event.key;
    makeSound(eventKey);
    buttonAnimation(eventKey);
});

function makeSound(key) {
    if (key === "w") {
        const crash = new Audio("sounds/crash.mp3");
        crash.play();
    } else if (key === "a") {
        const kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
    } else if (key === "s") {
        const snare = new Audio("sounds/snare.mp3");
        snare.play();
    } else if (key === "d") {
        const tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    } else if (key === "j") {
        const tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    } else if (key === "k") {
        const tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    } else if (key === "l") {
        const tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    }
}

function buttonAnimation(key) {
    const activeButton = document.querySelector(`.${key}`)
    activeButton.classList.add('pressed')
    setTimeout(function () {
        activeButton.classList.remove('pressed')
    }, 200)
}

