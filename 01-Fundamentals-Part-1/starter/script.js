// let js = "amazing";
// console.log(40 + 8 + 23 - 10);



// console.log(firstName);

let isIsland = true;
let country = "germany";
let continent = "europe";
let population = "8.000.000"
console.log(isIsland);
console.log(country);
console.log(continent);
console.log(population);

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

const heightMark = 1.69
const weightMark = 78
const bmiMark = weightMark / heightMark ** 2

const heightJohn = 1.88
const weightJohn = 85
const bmiJohn = weightJohn / heightJohn ** 2

let markHigherBMI = bmiMark > bmiJohn

console.log(bmiMark)
console.log(bmiJohn)
console.log(markHigherBMI)

// Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`)
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
}




