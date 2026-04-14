const dom = {
    playAudioButton: document.querySelector('#playAudio'),
    audioElement: document.querySelector('#myAudio')
};

function playAudio() {
    dom.audioElement.play();
}

dom.playAudioButton.addEventListener('click', playAudio);

