const cupImage1 = document.getElementById("cup_a")
const cupImage2 = document.getElementById("cup_b")
const cupImage3 = document.getElementById("cup_c")

const redBall = "red"
const greenBall = "green"
const closedCup = "close"

const startButton = document.getElementById("start")

let numClosedCups = 3;
let cup1, cup2, cup3;
playing = true


//-----------------------------------------------------------


cupImage1.onclick = () => {
    if (playing && cupImage1.className.includes(closedCup)) {
        cupImage1.classList.replace(closedCup,cup1)
        playCup(cupImage1)
    }
}

cupImage2.onclick = () => {
    if (playing && cupImage2.className.includes(closedCup)) {
        cupImage2.classList.replace(closedCup,cup2)
        playCup(cupImage2)
    }
}

cupImage3.onclick = () => {
    if (playing && cupImage3.className.includes(closedCup)) {
        cupImage3.classList.replace(closedCup,cup3)
        playCup(cupImage3)
    }
}


//-----------------------------------------------------------



function randomFindCupGenerator() {

      switch (Math.floor(Math.random() * 3)) {
        case 0:
            cup1 = redBall
            cup2 = greenBall
            cup3 = greenBall
            break;
        case 1:
            cup1 = greenBall
            cup2 = greenBall
            cup3 = redBall
            break;
        case 2:
            cup1 = greenBall
            cup2 = redBall
            cup3 = greenBall
            break;
    }
}

randomFindCupGenerator()
console.log(randomFindCupGenerator())

//-----------------------------------------------------------


function playCup(cup) {

    numClosedCups--

    if (numClosedCups == 0) {
        startButton.innerHTML = 'Kazandın!<br>Tekrar Oyna';
        startButton.classList.replace("disable","win")
        playing = false
        

    } else if (cup.className.includes(redBall)) {
        startButton.innerHTML = 'Kaybettin!<br>Tekrar Oyna';
        startButton.classList.replace("disable","lose")
        playing = false
    }
}


//-----------------------------------------------------------


startButton.onclick = () => {
    startButton.innerHTML = ''
    cupImage1.className = closedCup
    cupImage2.className = closedCup
    cupImage3.className = closedCup
    numClosedCups = 3
    playing = true
    startButton.className = "disable"
    startButton.classList.remove("win")
    startButton.classList.remove("lose")
    randomFindCupGenerator()
}


//-----------------------------------------------------------



function preloader() {
    if (document.images) {
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();

        img1.src = "img/close.png";
        img2.src = "img/green.png";
        img3.src = "img/red.png";
    }
}


function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

addLoadEvent(preloader);