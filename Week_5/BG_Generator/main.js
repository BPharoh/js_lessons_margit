const form = document.querySelector(".gradient");
let cssCode = document.querySelector("p");
let colorA = document.querySelector(".colorA").value;
let colorB = document.querySelector(".colorB").value;
let position = document.querySelectorAll('input[name="position"]');

const chooseGradient = (event) => {
    event.preventDefault();

    
        let gradient = "linear-gradient(to right," + colorA.value + "," + colorB.value + ")";
        gradient = body.style.background;
        cssCode.textContent = gradient + ";";

        position.forEach((item) => {
            if (item.checked) {
                gradient = item.value;

            }
        }); 


};

colorA.addEventListener("input", chooseGradient);
colorB.addEventListener("input", chooseGradient);
body.addEventListener('change', chooseGradient);
form.addEventListener('change', chooseGradient);

