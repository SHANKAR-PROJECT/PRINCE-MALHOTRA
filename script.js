const rope = document.getElementById("rope");
const flagModule = document.getElementById("flagbody");
const music = document.getElementById("music");
const flagButton = document.getElementById("flagButton");
const musicButton = document.getElementById("musicButton");
const flowerContainer = document.getElementById("flower-container");
let flagOpened = false;

alert("You will find a short and thin rope by the left side of the flag stick and which is hanging from the golden ball at the top. Tap or Pull it to let our flag glorify the day today and forever");
//Copy This Code --> You Might Get hacked :)
// Created By ==> Anubhav


addHands();
findTime();

function addHands() {
    // Anubhav's existing code for adding hands
    var chakra = document.getElementById("Chakra")
    var Hand = document.getElementsByClassName("chakraHand")
    
    for(x=0;x<24;x++){
        chakra.innerHTML +="<div class='chakraHand'></div>"
        Hand[x].style.transform="rotate("+eval(x*15)+"deg)"
    }
}

function toggleFlag() {
    if (!flagOpened) {
        rope.style.height = "170px";
        setTimeout(() => {
            rope.style.height = "0px";
        }, 100);
        flagModule.style.width = "250px";
        flagModule.style.animationName = "Wave";
        flagOpened = true;

        startFlowerFall();
        animateFlowers();
    } else {
        rope.style.height = "0px";
        flagModule.style.width = "0px";
        flagModule.style.animationName = "None";
        flagOpened = false;

        stopFlowerFall();
    }
}

function animateFlowers() {
    const flowers = document.querySelectorAll('.flowers');
    flowers.forEach((flower, index) => {
        setTimeout(() => {
            flower.style.left = Math.random() * 200 + 'px'; // Adjust positioning
            flower.style.animation = 'fall 3s linear forwards';
        }, index * 300); // Delay each flower drop
    });
}

function findTime() {
    // Your existing code for finding time
    // ...
    var dd = new Date().getDate()
    var mm = new Date().getMonth()
    var yy = new Date().getFullYear()
    
    if(dd<15 && mm<=7){
        num = eval(eval(yy-1947)-1)
    }else{
        num = eval(yy-1947)
    }
    
    document.getElementById("celebration").innerHTML="Celebration of "+num+" years as an independent nation"

    setTimeout(findTime,500);
}

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicButton.textContent = "Pause Music";
    } else {
        music.pause();
        musicButton.textContent = "Play Music";
    }
}

function startFlowerFall() {
    const numFlowers = 20;

    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        // Add class to specify flower color
        if (i % 3 === 0) {
            flower.classList.add("red-flower");
        } else if (i % 3 === 1) {
            flower.classList.add("yellow-flower");
        } else {
            flower.classList.add("green-flower");
        }

        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = (Math.random() * 5 + 3) + "s";
        flowerContainer.appendChild(flower);
    }
}

function stopFlowerFall() {
    flowerContainer.innerHTML = "";
}