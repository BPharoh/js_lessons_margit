const checkNumbers = () => { 

const num1 = Number(prompt('Input first number'));
const num2 = Number(prompt('Input second number'));
const num3 = Number(prompt('Input third number'));

addition = num1 + num2 + num3;
multiply = num1 * num2 * num3;

if (num1 >= 0 && num2 >= 0 && num3 >=0) {
    return console.log(`This is sum ${addition} and this is multiplication ${multiply}`);
}   else if (num1 <=0 || num1>=0 && num2 <=0 || num2>=0 && num3<=0 || num3>=0) {
    return console.log(`The sum is ${addition} and this is multiplication ${multiply}`);
}   else if (num1 < 0 && num2<0 && num3<0) {
    return console.log('These are negatives');
}

}

checkNumbers();
