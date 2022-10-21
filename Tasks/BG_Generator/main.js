const body = document.querySelector("body");
let colorA = document.querySelector(".colorA");
let colorB = document.querySelector(".colorB");
let positions = document.querySelectorAll('input[name="position"]');
let code = document.querySelector("p");
console.log(positions)




    function chooseGradient () {

        let choosenValue;
        positions.forEach((position) => {
            if (position.checked) {
                choosenValue = position.value;
                console.log(choosenValue)
            }
        }); 

        let gradient =  `linear-gradient(${choosenValue}, ${colorA.value}, ${colorB.value})`;    
        body.style.backgroundImage = gradient;
        code.textContent = gradient + ";";
    };



body.addEventListener("change", chooseGradient);
colorA.addEventListener("input", chooseGradient);
colorB.addEventListener("input", chooseGradient);


       

