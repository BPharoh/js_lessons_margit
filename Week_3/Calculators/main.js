function calculateAmount(price, money) { 

price = Number(prompt('What is the gasoline price?'));
money = Number(prompt('How much money do you have?'));
amount =  price / money;

if (amount < 10) {
    print('You have to stay here');
} else {
    print('Good, you can escape now');
}

};

calculateAmount(price, money);

