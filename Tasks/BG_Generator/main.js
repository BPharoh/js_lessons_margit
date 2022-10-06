const form = document.querySelector(".gradient");
let cssCode = document.querySelector("p");
let colorA = document.querySelector(".colorA");
let colorB = document.querySelector(".colorB");
let position = document.querySelectorAll('input[name="position"]');

const chooseGradient = (event) => {
    event.preventDefault();


        let chosenValue;

        position.forEach((item) => {
            if (item.checked) {
                chosenValue = item.value;

            }
        }); 

    let gradient = `linear-gradient(${chosenValue}, ${colorA.value}, ${colorB.value}`;
    console.log(gradient);

        gradient = document.body.style.background-image;
        cssCode.textContent = gradient + ";";

};

form.addEventListener('change', chooseGradient);

