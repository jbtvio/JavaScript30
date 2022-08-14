function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return; // stops the function if return is null
    audio.currentTime = 0; // rewinds the audio file on keypress
    audio.play();
    key.classList.add('playing');
  }
  function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
  
  window.addEventListener('keydown', playSound)