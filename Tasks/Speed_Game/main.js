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
const clickSound = () => new Audio("assets/mixkit-player-jumping-in-a-video-game-2043.wav").play();
const startSound = () => new Audio("assets/mixkit-game-level-completed-2059.wav").play();
const endSound = () => new Audio("assets/mixkit-final-level-bonus-2061.wav").play();


// random generator Code from w3schools //
const getRndInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => clickObject(i));
});

const clickObject = (i) => {
    if ( i !== active) {
        return endGame();
    } else {
        clickSound();
        count++;
        rounds--;
        score.textContent = count;
    }
};


const startGame = () => {
   
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.pointerEvents = 'auto';
    }

    // Number of missed rounds allowed

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
   end.style.display = 'hidden';
   endSound();
   if(count < 10){
    result.textContent = `You got ${count} birds and have a kind heart` ;
   } else if (count > 10) {
    result.textContent = `You got ${count} birds and have a mean heart` ;
   }
    clearTimeout(timer);
};

const restartGame = () => {
    window.location.reload();
};

const closeButton = () => {
    overlay.style.visibility = 'hidden';
}




start.addEventListener('click', startGame);
end.addEventListener('click', endGame);
closeOverlay.addEventListener('click', restartGame);
result.addEventListener('click', clickObject);
// replay.addEventListener('click', restartGame);
