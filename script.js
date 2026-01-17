const soundButtons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");
const sounds = document.querySelectorAll("audio");

soundButtons.forEach(button => {
    button.addEventListener("click", () => {
        stopAll();
        const soundName = button.dataset.sound;
        document.getElementById(soundName).play();
    });
});

stopButton.addEventListener("click", stopAll);

function stopAll() {
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
}
