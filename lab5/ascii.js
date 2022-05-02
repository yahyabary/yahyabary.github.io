/*
It took me almost 3hrs 30minutes to solve the issus.
Had an interesting challenge of making sure that when the user clicks on the checkbox to change the speed before clicking on the start button, 
the animation does not start

*/ 

window.onload = function(){
    document.getElementById("start").onclick = startAnimation;   
    document.getElementById("stop").onclick = stopAnimation;    
    document.getElementById("animation").onchange = chooseAnimation;
    document.getElementById("fontsize").onchange = chooseFontSize;
    document.getElementById("turbo").onchange = changeAnimationSpeed;
    
};

// This variable saves the initial value of the textarea, so as to put it back when the animation is stopped
let initialText = null;
let animationSpeed = 250;
let startButtonWasClicked = false; // This is to make sure that only the start button starts the animation and not the turbo checking

let intervalObj = null;
function startAnimation(){
    initialText = document.getElementById("text-area").value;
    document.getElementById("animation").disabled = true;
    document.getElementById("start").disabled = true;
    intervalObj = setInterval(updateTextArea, animationSpeed);
    startButtonWasClicked = true;
}

let index = 0;
var arr = ["blank", "custom", "exercise", "juggler", "bike", "dive"];
function updateTextArea(){
    if(index === arr.length){
        index = 0;
    }
    document.getElementById("text-area").value = ANIMATIONS[arr[index++]];
    document.getElementById("stop").disabled = false;
}

function stopAnimation(){
    clearInterval(intervalObj);
    document.getElementById("stop").disabled = true;
    document.getElementById("animation").disabled = false;
    document.getElementById("start").disabled = false;
    document.getElementById("text-area").value = initialText;
    startButtonWasClicked = false;
}

function chooseAnimation(){
    let choice = ANIMATIONS[document.getElementById("animation").value];
    document.getElementById("text-area").value = choice;
}

function chooseFontSize(){
    document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
}

function changeAnimationSpeed(){
    let result = document.getElementById("turbo").checked;
    animationSpeed = result ? 50 : 250;
    
    // This makes sure when the checkbox is checked before the start button is clicked, not animation happens.
    if(startButtonWasClicked){
        clearInterval(intervalObj);
        startAnimation();
    }
}