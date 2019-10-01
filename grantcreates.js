

// ====================KeyboardFunction=====================

window.addEventListener('keydown', function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
});

// ====================MouseFunction=====================



window.addEventListener('click', function(e){
    let audio = document.getElementById(e.srcElement.classList[1])
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
})




