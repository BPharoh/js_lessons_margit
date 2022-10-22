const form = document.querySelector('form');
const searchLicense = document.querySelector('#search_license');
const license = document.querySelector('#license');
const make = document.querySelector('#make');
const model = document.querySelector('#model');
const owner = document.querySelector('#owner');
const price = document.querySelector('#price');
const color = document.querySelector('#color');
const message = document.querySelector('#message');
const display = document.querySelector('#display');
const searchInput = document.querySelector('#search');
const cars = [];



const uploadCarDetails = (e) => {
    e.preventDefault();

    let car = {
        licenseNum: license.value,
        makeNum: make.value,
        modelNum: model.value,
        ownerID: owner.value,
        priceTag: price.value,
        colorCode: color.value
    };

    cars.push(car);

    let row = display.insertRow();
    let position1 = row.insertCell(0);
    let position2 = row.insertCell(1);
    let position3 = row.insertCell(2);
    let position4 = row.insertCell(3);
    let position5 = row.insertCell(4);
    let position6 = row.insertCell(5);

    position1.innerHTML = car.licenseNum;
    position2.innerHTML = car.makeNum;
    position3.innerHTML = car.modelNum;
    position4.innerHTML = car.ownerID;
    position5.innerHTML = car.priceTag;
    position6.innerHTML = car.colorCode;

    console.table(cars);

   

};

const searchInventory = () => {
    let output;

    const getLicense = cars.findIndex(particularCar => particularCar.licenseNum.toUpperCase() === searchInput.value.toUpperCase());

    if (getLicense === -1) {
        output = `The license number does not exist, please try again?`
    } else {
        output = `This license ${cars[getLicense].licenseNum} is a ${cars[getLicense].makeNum} and belongs to ${cars[getLicense].ownerID}`
    }
    
    message.textContent = output;
};

const resetForm = () => {
    form.reset();
};

form.addEventListener('submit', uploadCarDetails);

searchInput.addEventListener("click", searchInventory);
