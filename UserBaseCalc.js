
const readline = require('readline');

let weight;
let height;
let age;
let gender;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function userDetails(){
    rl.question("Enter your weight in kg: ", (w) => {
        weight = parseFloat(w);
        rl.question("Enter your height in cm: ", (h) => {
            height = parseFloat(h);
            rl.question("Enter your age in years: ", (a) => {
                age = parseInt(a);
                rl.question("Enter your gender (male or female): ", (g) => {
                    gender = g.toLowerCase();
                    BaseCalories();
                    rl.close();
                });
            });
        });
    });
}

function BaseCalories(){
    let BMR;
    if(gender == "male"){
        BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        console.log(`Your BMR is: ${BMR}`);
    }
    else{
        BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        console.log(`Your BMR is: ${BMR}`);
    }
}

userDetails();
