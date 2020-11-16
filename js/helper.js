// --------------------- Noise helpers ---------------------

function playNoise(soundElementId) {
    if (noise) {
        let audio = document.getElementById(soundElementId);
        audio.play();
    }
    noise = true;
}