//Detecting Button Press
let numberofDrumButtons=document.querySelectorAll(".drum").length;
for(let i=0;i<numberofDrumButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       
        let buttonInnerHTML=this.innerHTML;
        keyPress(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
       
    });

}

//Detecting Keyboard Press
document.addEventListener("keypress",function(event){
    keyPress(event.key);
    buttonAnimation(event.key)
})

//Detecting which key is pressed
function keyPress(key){
    switch(key){
        case "w":
            const tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            const tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            const tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            const tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            const snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            const crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            const kickBass=new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default: console.log("Not a working key button!");

            
    }
}

//Applying Animation to Buttons
function buttonAnimation(currentKey){
    let animationButton = document.querySelector("."+currentKey);
    animationButton.classList.add("pressed");
    setTimeout(function(){
        animationButton.classList.remove("pressed");
    },100)
}