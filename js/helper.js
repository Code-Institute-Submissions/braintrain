// --------------------- Noise helpers ---------------------

function playNoise(soundElementId) {
    if (noise) {
        let audio = document.getElementById(soundElementId);
        audio.play();
    }
    noise = true;
}

function one() {
    playNoise("sound1");
    green.style.backgroundColor = "lightgreen";
}

function two() {
    playNoise("sound2");
    red.style.backgroundColor = "tomato";
}

function three() {
    playNoise("sound3");
    yellow.style.backgroundColor = "yellow";
}

function four() {
    playNoise("sound4");
    blue.style.backgroundColor = "lightskyblue";
}