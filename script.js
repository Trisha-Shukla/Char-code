let pressed=document.getElementsByTagName("body")[0];
let container=document.getElementsByClassName("container")[0];
let pressedkey={}
let Key_code=document.getElementsByClassName("key-code")[0];
console.log(Key_code);

pressed.addEventListener("keydown",(event)=>{
    const audio = new Audio("sound.mp3");
    audio.play();
    pressedkey[event.key]=true;
    let count=Object.keys(pressedkey).filter((key) => {
        return pressedkey[key]}).length;

    if(count===1){
        container.innerHTML=`You pressed  <span>${event.key}</span>`;
    }
    else if(count===2){
        container.innerHTML=`You pressed  <span>${Object.keys(pressedkey).filter((key) => {
            return pressedkey[key]}).join(' + ')}</span>`;
    }

    Key_code.style.display="flex";
    Key_code.innerHTML=`<span>${event.keyCode}</span>`

})

pressed.addEventListener("keyup",(event)=>{
    pressedkey[event.key]=false;
})