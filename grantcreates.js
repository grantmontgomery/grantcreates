// =================KeyboardFunction===================

window.addEventListener('keydown', function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let light = document.querySelector(`img[data-key="${e.keyCode}"]`)
    light.style.display = 'block';
    if(!audio){ return;}
    audio.currentTime = 0;
    audio.play();
});

window.addEventListener('keyup', function(e){
    let light = document.querySelector(`img[data-key="${e.keyCode}"]`)
    light.style.display = 'none';
});


// ====================MouseFunction=====================

// ---------------------MouseFunction controller------------------------

window.addEventListener('mousedown', function(e){
    let light = e.srcElement.childNodes[3]
    let audio = document.getElementById(e.srcElement.classList[1])
    if (light.style.display === ""){
        light.style.display = "block"
        if(!audio){ return;}
        audio.currentTime = 0;
        audio.play();
    }
    window.addEventListener('mouseup', function(e){
        if (light.style.display === "block"){
            light.style.display = "";
        }
    })
})

// ----------------------MouseFunction instructions--------------------------

window.addEventListener('mouseover', function(e){
    let singlekeys = document.getElementsByClassName('single-keys')
    if (e.path[0].attributes[0].textContent === "instructions"){
        for(let i = 0; i < singlekeys.length; i++){
            singlekeys[i].style.display = "block";
        }
    }
    else{
        return;
    }    
})

window.addEventListener('mouseout', function(e){
    let singlekeys = document.getElementsByClassName('single-keys')
    if (e.path[0].attributes[0].textContent === "instructions"){
        for(let i = 0; i < singlekeys.length; i++){
            singlekeys[i].style.display = "";
        }
    }
    else{
        return;
    }   
})

// ---------------------------------MouseFunction contact-------------------------------

window.addEventListener('click', function(e){
    if(e.path[0].className === 'contact'){
        document.getElementById('email-phone').style.display = 'block'
        if (document.getElementById('email-phone').style.display === 'block'){
            document.getElementById('email-phone').style.display = ''
        }
    }
    else{
        return;
    }
})

// ==========================TouchFunction==============================

// -----------------------------TouchFunction controller-----------------------
window.addEventListener('touchstart', function(e){
    let light = e.srcElement.childNodes[3]
    let audio = document.getElementById(e.srcElement.classList[1])
    if (light.style.display === ""){
        light.style.display = "block"
        if(!audio){ return;}
        audio.currentTime = 0;
        audio.play();
    }
    window.addEventListener('touchend', function(e){
        e.preventDefault()
        if (light.style.display === "block"){
            light.style.display = "";
        }
    })
})

