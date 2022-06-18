
var sound = ["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/snare.mp3","sounds/crash.mp3","sounds/kick-bass.mp3"];

// Detecting Button Press

for(var i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        btnAnimation(buttonInnerHTML);

    })
}

// Detecting keyboard Press 

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    btnAnimation(event.key);
})


function makeSound(key){
    switch (key.toLowerCase()) {
        case "w":
                var tom1 = new Audio(sound[0]);
                tom1.play();
            break;

        case "a":
                var tom2 = new Audio(sound[1]);
                tom2.play();
            break;

        case "s":
                var tom3 = new Audio(sound[2]);
                tom3.play();
            break;
        
        case "d":
                var tom4 = new Audio(sound[3]);
                tom4.play();
            break;
            
        case "j":
                var snare = new Audio(sound[4]);
                snare.play();
            break;

        case "k":
                var crash = new Audio(sound[5]);
                crash.play();
            break;

        case "l":
                var kick = new Audio(sound[6]);
                kick.play();
            break;
        
    
        default:
                console.log("Wrong Input");
            break;
    }
}

function btnAnimation(currentKey){
    var activeBtn = document.querySelector("."+currentKey.toLowerCase());

    activeBtn.classList.add("pressed");

    setTimeout(() => {
        activeBtn.classList.remove("pressed");
    }, 100);
}