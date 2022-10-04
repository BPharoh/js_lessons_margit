const circles = document.querySelectorAll('.circles');
const start = document.querySelector('#start');
const end = document.querySelector('#stop');
const replay = document.querySelector('#replay');
const score = document.querySelector('#scores');
const result = document.querySelector('#finalScore');
const overlay = document.querySelector('.overlay');
const closeOverlay = document.querySelector('#close');

let count = 0;
let active = 0;
let timer;
let pace = 1000;
let rounds = 0;



const getRndInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const clickObject = (i) => {
    if ( i !== active) {
        return endGame();
    } else {
        count++;
        rounds--;
    }
        score.textContent = count;
        result.textContent = count;
   
};


const startGame = () => {
    circles.forEach((circle, i) => {
        circle.addEventListener('click', () => clickObject(i));
    });

    // for (let i = 0; i < circles.length; i++) {
    //     circles[i].style.pointerEvents = 'auto';
    // }
   
    if (rounds >= 3) {
        return endGame();
    }

    let nextActive = pickNew(active);

    circles[nextActive].classList.toggle('active-state');
    circles[active].classList.remove('active-state');

    active = nextActive;

    console.log('current active number is:', active);
    timer = setTimeout(startGame, pace);

    pace = pace - 10;

    rounds++;

    function pickNew(active) {
        let nextActive = getRndInt(0, 3);

        if (nextActive != active) {
            return nextActive;
        } else {
            return pickNew(active);
        }
    }  

    end.style.display = 'block';
    start.style.display = 'none';
};

const endGame = () => {
   overlay.style.visibility = 'visible';
   start.style.visibility = 'visible';
    clearTimeout(timer);
};

const restartGame = () => {
    window.location.reload();
};

const closeButton = () => {
    overlay.style.visibility = 'hidden';
    clearTimeout(timer);
}




start.addEventListener('click', startGame);
end.addEventListener('click', endGame);
closeOverlay.addEventListener('click', closeButton);
result.addEventListener('click', clickObject);
replay.addEventListener('click', restartGame);
