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

const tink = document.getElementsByClassName('tink')
const ride = document.getElementsByClassName('ride')
const openhat = document.getElementsByClassName('openhat')
const clap = document.getElementsByClassName('clap')
const hihat = document.getElementsByClassName('hihat')
const snare = document.getElementsByClassName('snare')
const kick = document.getElementsByClassName('kick')
const tom = document.getElementsByClassName('tom')
const boom = document.getElementsByClassName('boom')

// tink[0].addEventListener('mousedown', function(){
//     let light = tink[1]
//     let audio = document.getElementById('tink')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     tink[0].addEventListener('mouseup', function(){
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// ride[0].addEventListener('mousedown', function(){
//     let light = ride[1]
//     let audio = document.getElementById('ride')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     ride[0].addEventListener('mouseup', function(){
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// openhat[0].addEventListener('mousedown', function(){
//     let light = openhat[1]
//     let audio = document.getElementById('openhat')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     openhat[0].addEventListener('mouseup', function(){
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// clap[0].addEventListener('mousedown', function(){
//     let light = clap[1]
//     let audio = document.getElementById('clap')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     clap[0].addEventListener('mouseup', function(){
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// hihat[0].addEventListener('mousedown', function(){
//     let light = hihat[1]
//     let audio = document.getElementById('hihat')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     hihat[0].addEventListener('mouseup', function(){
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// snare[0].addEventListener('mousedown', function(){
//     let light = snare[1]
//     let audio = document.getElementById('snare')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     snare[0].addEventListener('mouseup', function(){
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// kick[0].addEventListener('mousedown', function(){
//     let light = kick[1]
//     let audio = document.getElementById('kick')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     kick[0].addEventListener('mouseup', function(){
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// tom[0].addEventListener('mousedown', function(){
//     let light = tom[1]
//     let audio = document.getElementById('tom')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     tom[0].addEventListener('mouseup', function(){
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// boom[0].addEventListener('mousedown', function(){
//     let light = boom[1]
//     let audio = document.getElementById('boom')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     boom[0].addEventListener('mouseup', function(){
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// ----------------------MouseFunction instructions--------------------------

const instructions = document.getElementById('instructions')
const singlekeys = document.getElementsByClassName('single-keys')

instructions.addEventListener('mouseover', function(){

        for(let i = 0; i < singlekeys.length; i++){
            singlekeys[i].style.display = "block";
        }
    
   
})

instructions.addEventListener('mouseout', function(){
   
        for(let i = 0; i < singlekeys.length; i++){
            singlekeys[i].style.display = "";
        }
    
})

// ---------------------------------MouseFunction contact-------------------------------


const contact = document.getElementById('contact')
const email_phone = document.getElementById('email-phone')

contact.addEventListener('click', function(){
    if(email_phone.style.display === ''){
            email_phone.style.display = 'block';}

    else if(email_phone.style.display === 'block'){
        email_phone.style.display = '';}
    })


    

    
// ==========================TouchFunction==============================

// -----------------------------TouchFunction controller-----------------------

// Variables ass mentioned above in MouseFunction controller


// const tink = document.getElementsByClassName('tink')
// const ride = document.getElementsByClassName('ride')
// const openhat = document.getElementsByClassName('openhat')
// const clap = document.getElementsByClassName('clap')
// const hihat = document.getElementsByClassName('hihat')
// const snare = document.getElementsByClassName('snare')
// const kick = document.getElementsByClassName('kick')
// const tom = document.getElementsByClassName('tom')
// const boom = document.getElementsByClassName('boom')




tink[0].addEventListener('touchstart', function(){
    let light = tink[1]
    let audio = document.getElementById('tink')
    if (light.style.display === ""){
        light.style.display = "block"
        if(!audio){ return;}
        audio.currentTime = 0;
        audio.play();
    }
    tink[0].addEventListener('touchend', function(){
        if (light.style.display === "block"){
            light.style.display = "";
        }
    })
})

ride[0].addEventListener('touchstart', function(){
    let light = ride[1]
    let audio = document.getElementById('ride')
    if (light.style.display === ""){
        light.style.display = "block"
        if(!audio){ return;}
        audio.currentTime = 0;
        audio.play();
    }
    ride[0].addEventListener('touchend', function(){
        if (light.style.display === "block"){
            light.style.display = "";
        }
    })
})

openhat[0].addEventListener('touchstart', function(){
    let light = openhat[1]
    let audio = document.getElementById('openhat')
    if (light.style.display === ""){
        light.style.display = "block"
        if(!audio){ return;}
        audio.currentTime = 0;
        audio.play();
    }
    openhat[0].addEventListener('touchend', function(){
        if (light.style.display === "block"){
            light.style.display = "";
        }
    })
})

clap[0].addEventListener('touchstart', function(){
    let light = clap[1]
    let audio = document.getElementById('clap')
    if (light.style.display === ""){
        light.style.display = "block"
        if(!audio){ return;}
        audio.currentTime = 0;
        audio.play();
    }
    clap[0].addEventListener('touchend', function(){
        if (light.style.display === "block"){
            light.style.display = "";
        }
    })
})

hihat[0].addEventListener('touchstart', function(){
    let light = hihat[1]
    let audio = document.getElementById('hihat')
    if (light.style.display === ""){
        light.style.display = "block"
        if(!audio){ return;}
        audio.currentTime = 0;
        audio.play();
    }
    hihat[0].addEventListener('touchend', function(){
        if (light.style.display === "block"){
            light.style.display = "";
        }
    })
})

snare[0].addEventListener('touchstart', function(){
    let light = snare[1]
    let audio = document.getElementById('snare')
    if (light.style.display === ""){
        light.style.display = "block"
        if(!audio){ return;}
        audio.currentTime = 0;
        audio.play();
    }
    snare[0].addEventListener('touchend', function(){
        if (light.style.display === "block"){
            light.style.display = "";
        }
    })
})

kick[0].addEventListener('touchstart', function(){
    let light = kick[1]
    let audio = document.getElementById('kick')
    if (light.style.display === ""){
        light.style.display = "block"
        if(!audio){ return;}
        audio.currentTime = 0;
        audio.play();
    }
    kick[0].addEventListener('touchend', function(){
        if (light.style.display === "block"){
            light.style.display = "";
        }
    })
})

tom[0].addEventListener('touchstart', function(){
    let light = tom[1]
    let audio = document.getElementById('tom')
    if (light.style.display === ""){
        light.style.display = "block"
        if(!audio){ return;}
        audio.currentTime = 0;
        audio.play();
    }
    tom[0].addEventListener('touchend', function(){
        if (light.style.display === "block"){
            light.style.display = "";
        }
    })
})

boom[0].addEventListener('touchstart', function(){
    let light = boom[1]
    let audio = document.getElementById('boom')
    if (light.style.display === ""){
        light.style.display = "block"
        if(!audio){ return;}
        audio.currentTime = 0;
        audio.play();
    }
    boom[0].addEventListener('touchend', function(){
        if (light.style.display === "block"){
            light.style.display = "";
        }
    })
})




// tink[0].addEventListener('touchstart', function(){
//     let light = tink[1]
//     let audio = document.getElementById('tink')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     tink[0].addEventListener('touchend', function(){
//         event.preventDefault()
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// ride[0].addEventListener('touchstart', function(){
//     let light = ride[1]
//     let audio = document.getElementById('ride')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     ride[0].addEventListener('touchend', function(){
//         event.preventDefault()
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// openhat[0].addEventListener('touchstart', function(){
//     let light = openhat[1]
//     let audio = document.getElementById('openhat')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     openhat[0].addEventListener('touchend', function(){
//         event.preventDefault()
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// clap[0].addEventListener('touchstart', function(){
//     let light = clap[1]
//     let audio = document.getElementById('clap')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     clap[0].addEventListener('touchend', function(){
//         event.preventDefault()
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// hihat[0].addEventListener('touchstart', function(){
//     let light = hihat[1]
//     let audio = document.getElementById('hihat')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     hihat[0].addEventListener('touchend', function(){
//         event.preventDefault()
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// snare[0].addEventListener('touchstart', function(){
//     let light = snare[1]
//     let audio = document.getElementById('snare')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     snare[0].addEventListener('touchend', function(){
//         event.preventDefault()
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// kick[0].addEventListener('touchstart', function(){
//     let light = kick[1]
//     let audio = document.getElementById('kick')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     kick[0].addEventListener('touchend', function(){
//         event.preventDefault()
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// tom[0].addEventListener('touchstart', function(){
//     let light = tom[1]
//     let audio = document.getElementById('tom')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     tom[0].addEventListener('touchend', function(){
//         event.preventDefault()
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })

// boom[0].addEventListener('touchstart', function(){
//     let light = boom[1]
//     let audio = document.getElementById('boom')
//     if (light.style.display === ""){
//         light.style.display = "block"
//         if(!audio){ return;}
//         audio.currentTime = 0;
//         audio.play();
//     }
//     boom[0].addEventListener('touchend', function(){
//         event.preventDefault()
//         if (light.style.display === "block"){
//             light.style.display = "";
//         }
//     })
// })




// -------------------------TouchFunction contact------------------------

// As mentioned above in MouseFunction contact

// const contact = document.getElementById('contact')
// const email_phone = document.getElementById('email-phone')

contact.addEventListener('touchstart', function(){
    if(email_phone.style.display === ''){
        event.preventDefault();    
        email_phone.style.display = 'block';}

    else if(email_phone.style.display === 'block'){
        event.preventDefault();
        email_phone.style.display = '';}
    })


