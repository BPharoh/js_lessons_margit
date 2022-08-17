const salaryCalculator = () => {

let payRate = prompt('Hourly rate is');
let hours = prompt('Working hours is');
let extra = (9 - 7 * (0.5 * payRate));
let overTime = (hours - 9 * (2 * payRate)); 
salary = (hours * payRate);

if (hours <= 7) {
    return console.log(salary);
} else if (hours = 9) {
    return console.log(salary + extra);
} else if (hours > 9) {
    return console.log(salary + extra + overTime);
}
       
}

salaryCalculator();