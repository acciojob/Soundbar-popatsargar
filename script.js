//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const soundName = button.getAttribute("data-sound");
        playSound(soundName);
    });
});

stopButton.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});

function playSound(sound) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`./sounds/${sound}.mp3`);
    currentAudio.play();
}
