const buttons = document.querySelectorAll(".btn");
const sounds = document.querySelectorAll("audio");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        stopSounds();

        const soundName = button.getAttribute("data-sound");
        if (soundName) {
            document.getElementById(soundName).play();
        }
    });
});

function stopSounds() {
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
}
