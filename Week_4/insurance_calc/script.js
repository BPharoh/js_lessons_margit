const form = document.querySelector('form');
const age = document.querySelector('#age');
const client = document.querySelector('#name');
const conditions = document.querySelectorAll('[name=conditions]');
const negativeHabit = document.querySelectorAll('[name=negative-habits]');
const positiveHabit = document.querySelectorAll('[name=positive-habits]');
const  evaluation = document.querySelector('#evaluation');

// let healthsArray = [];
// healthsArray = Array.from(healths).map(item => item.value);

const checkInsurance  = (event) => {
    event.preventDefault ();


let ageSelected = age.value;
let clientName = client.value;
let conditionsChoosen = [];
let negativeHabitsChoosen = [];
let positiveHabitsChoosen = [];
let evaluation = 500;


if (ageSelected < 18) {
    evaluation = evaluation;
} else if ( ageSelected > 17 && ageSelected < 26 ) {
    evaluation *= 1.10;
} else if ( ageSelected > 25 && ageSelected < 36) {
    evaluation *= 1.30;
} else if ( ageSelected > 35 && ageSelected < 46) { 
    evaluation *= 1.60;
} else if (ageSelected > 45 && ageSelected < 56)  {
    evaluation *= 2.0;
} else if (ageSelected > 55 && ageSelected < 66) {
    evaluation *= 2.5;
}  else if ( ageSelected > 65) {
    evaluation *= 3.1;
}


conditions.forEach((item) => {
    if (item.checked) {
     conditionsChoosen.push(item.value);   
    }
}); 

    if (conditionsChoosen.length > 0) {
        evaluation *=  (1.01**(conditionsChoosen.length));
    }

positiveHabit.forEach((item) => {
    if (item.checked) {
        positiveHabitsChoosen.push(item.value);
    }
});

    if (positiveHabitsChoosen.length > 0) { 
        evaluation *= (0.95**(positiveHabitsChoosen.length));
    }

negativeHabit.forEach((item) => {
    if (item.checked) {
        negativeHabitsChoosen.push(item.value);
    }
});
     if (negativeHabitsChoosen.length > 0) {
        evaluation *= (1.05**(negativeHabitsChoosen.length));
    }

Math.floor(evaluation);

console.log(ageSelected);
console.log(clientName);
console.log(conditionsChoosen);
console.log(negativeHabitsChoosen);
console.log(positiveHabitsChoosen);
console.log(evaluation);



window.alert(`Hello ${clientName}, your health insurance bill is ${evaluation}`);
// evaluation.innerHTML = (`Hello ${clientName}, your health insurance bill is ${evaluation}`);

form.reset();

};

form.addEventListener("submit", checkInsurance);