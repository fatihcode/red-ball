const cupImage1 = document.getElementById("cup_a")
const cupImage2 = document.getElementById("cup_b")
const cupImage3 = document.getElementById("cup_c")

const redBall = "img/red.png"
const emptyCup = "img/green.png"
const closedCup = 'img/close.png'

const startButton = document.getElementById("start")

let numClosedCups = 3;

let openCup1, openCup2, openCup3;

playing = true


//-----------------------------------------------------------


cupImage1.onclick = () => {
    if (playing && cupImage1.src.includes(closedCup)) {
        cupImage1.src = openCup1
        playCup(cupImage1)
    }
}

cupImage2.onclick = () => {
    if (playing && cupImage2.src.includes(closedCup)) {
        cupImage2.src = openCup2
        playCup(cupImage2)
    }
}

cupImage3.onclick = () => {
    if (playing && cupImage3.src.includes(closedCup)) {
        cupImage3.src = openCup3
        playCup(cupImage3)
    }
}


//-----------------------------------------------------------



function randomFindCupGenerator() {

    let findCup = Math.floor(Math.random() * 3)
    console.log(findCup)

    switch (findCup) {
        case 0:
            openCup1 = redBall
            openCup2 = emptyCup
            openCup3 = emptyCup
            break;
        case 1:
            openCup1 = emptyCup
            openCup2 = emptyCup
            openCup3 = redBall
            break;
        case 2:
            openCup1 = emptyCup
            openCup2 = redBall
            openCup3 = emptyCup
            break;
    }
}

randomFindCupGenerator()


//-----------------------------------------------------------


function playCup(cup) {

    numClosedCups--

    if (numClosedCups == 0) {
        startButton.innerHTML = 'You win!<br>Play again?';
        startButton.classList.add("start-row-win")
        playing = false
        

    } else if (cup.src.includes(redBall)) {
        startButton.innerHTML = 'Game Over!<br>Play again?';
        startButton.classList.add("start-row-lose")
        playing = false
    }
}


//-----------------------------------------------------------


startButton.onclick = () => {
    startButton.innerHTML = 'Good<br>Luck!'
    cupImage1.src = closedCup
    cupImage2.src = closedCup
    cupImage3.src = closedCup
    numClosedCups = 3
    playing = true
    startButton.classList.remove("start-row-win")
    startButton.classList.remove("start-row-lose")
    randomFindCupGenerator()
}


//-----------------------------------------------------------