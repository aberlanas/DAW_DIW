 

function playSound(e){

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);    
    
    if (!audio)return;
    
    audio.currentTime=0;
    audio.play();
    
    const key= document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    
};

function removeTransition(e){
    e.target.classList.remove('playing');
}

const keys=document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown',playSound);
