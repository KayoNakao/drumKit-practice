
document.querySelectorAll(".drum").forEach((element) => {
    element.addEventListener("click", function handleClick() {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
});


document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound(character) {
    switch (character) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;            
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;            
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;            
        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;            
        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;            
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log(character);            
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}