



window.addEventListener('keydown',function(e){

    const keys = Array.from(this.document.querySelectorAll('.key'));

    console.log(e)

    keys.forEach(key =>  key.addEventListener('transitionend',RemoveTransition))
    window.addEventListener('keydown',PlaySound)

});




function RemoveTransition(e){
    console.log("removeTransition")
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function PlaySound(e){
    console.log("playSound")
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key  = document.querySelector(`div[data-key="${e.keyCode}"]`)

    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0 ;
    audio.play()


}