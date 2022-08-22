let age;
age = Number(prompt('What is your age'));

    if (age < 18) {
        console.log(`You are ${age} and too young for military service`);
    }
else
    if (age < 27) {
        console.log(`You are ${age} and within the right age for military service`);
    } else 

    if (age < 41) {
        console.log(` You are ${age} and you are in military service Reserve`); 

      }  else 
    if (age < 55) {
        console.log(`You are ${age} and in backup militatry service reserve`);
    
} else {
        console.log(`You are ${age} and too aged for military service`);
};
