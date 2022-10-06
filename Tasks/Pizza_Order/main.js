const form = document.querySelector('form');
const client = document.querySelector('#name');
const quantity = document.querySelectorAll('[name=quantity]');
const options = document.querySelectorAll('[type="checkbox"]')
const delivery = document.querySelector('#delivery');
const order = document.querySelector('#order');




const makeOrder = (event) => {
      event.preventDefault();

    let clientName = client.value;
    let quantitySelected = '';
    let optionsSelected = [];
    let deliverySelected = delivery.options[delivery.selectedIndex].value;
    let price = 0;
    


    quantity.forEach((item) => {
        if (item.checked) {
            quantitySelected = item.value;
        }
    });

    if (quantitySelected == 'two') {
        price += 7.5;   
    } else if (quantitySelected == 'four') {
        price += 10.5;
    } else if (quantitySelected == 'six') { 
        price += 12.5;
    } else if (quantitySelected == 'eight') {
        price += 15.5;      
    }

    options.forEach((item) => {
        if ( item.checked ) { 
        optionsSelected.push(item.value);
    }
});

    if (optionsSelected.length > 4){
        price += (optionsSelected.length - 4) * 0.7;
    }

    if (deliverySelected == 'home' ) {
        price += 5;
    }
    

    console.log(clientName);
    console.log(quantitySelected);
    console.log(optionsSelected);
    console.log(deliverySelected);
    console.log(price);

    order.innerHTML= `Thank you <span>${clientName}</span> for your order. You have made order for <span>${quantitySelected}</span> pizzas. Here are your toppings: <span>${optionsSelected.join( ',' )}</span> and the delivery method will be: <span>${deliverySelected}</span>. Total price is for your order is: <span>${price} €</span>.`;
    
  
    form.reset();
    
};

form.addEventListener('submit', makeOrder);


