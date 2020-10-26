'use strict';

/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;
let avgDolhins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win with ${avgDolhins} vs ${avgKoalas}`)
  }
  else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win with ${avgKoalas} vs ${avgDolhins}`)
  }
  else {
    console.log("It's a no-winner")
  }
};

checkWinner(avgDolhins, avgKoalas);

avgDolhins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolhins, avgKoalas);

/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)
*/

function calcTip(billValue) {
  if (billValue > 50 && billValue > 300) {
    return billValue * 0.15
  } else {
    return billValue * 0.2
  }
}

const values = new Array(125, 555, 44)
const tips = [calcTip(values[0]), calcTip(values[1]), calcTip(values[2])]

const total = [values[0] + tips[0], values[1] + tips[1], values[2] + tips[2]]


console.log(values);
console.log(tips);
console.log(total);


//challenge 3.a

const jonas = {
  firstName: "jonas",
  lastName: "Blub",
  birthYear: 1991,
  friends: ["Nina", "Celine", "Manal"],
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  }
}

const friendsAmount = jonas.friends.length
const bestFriend = jonas.friends[0]

console.log(`Jonas has ${friendsAmount} friends and ${bestFriend} is his best friend.`);

console.log(jonas.calcAge(jonas.birthYear));
console.log(jonas["calcAge"](jonas.birthYear))


console.log(jonas.calcAge(jonas.birthYear))


//challenge 3.b

const nina = {
  firstName: "nina",
  lastName: "Blub",
  birthYear: 2000,
  friends: ["Nina", "Celine", "Manal"],
  calcAge: function () {
    return 2037 - this.birthYear;
  }
}

const friendsAmountNina = nina.friends.length
const bestFriendNina = nina.friends[0]

console.log(`${nina.firstName} has ${friendsAmountNina} friends and ${bestFriendNina} is her best friend.`);

console.log(nina.calcAge());

//challenge 3.c

const celine = {
  firstName: "nina",
  lastName: "Blub",
  birthYear: 2020,
  job: "teacher",
  friends: ["Nina", "Celine", "Manal"],
  hasDriversLicense: true,
  calcAgeCeline: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    if (this.hasDriversLicense) {
      return `${this.firstName} is a ${this.age}-year old ${this.job} and has a drivers license.`
    } else {
      return `${this.firstName} is a ${this.age}-year old ${this.job} and has no drivers license.`
    }
  }
}

console.log(celine.calcAgeCeline());
console.log(celine.age);
console.log(celine.getSummary());


/*
Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

const mark = {
  firstName: "mark",
  lastName: "miller",
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

const john = {
  firstName: "john",
  lastName: "smith",
  height: 1.95,
  mass: 92,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

mark.calcBMI()
john.calcBMI()
mark.bmi > john.bmi ? console.log(`${mark.firstName} hast the highest BMI(${mark.bmi})`) : console.log(`${john.firstName} hast the highest BMI(${john.bmi})`);


// Coding Challenge #4a

const ninaArray = [
  "nina",
  "hackenbroich",
  29,
  ["13232323", 1, "hi"]
]

for (let i = 0; i < ninaArray.length; i++) {
  console.log(ninaArray[i]);
}


// Coding Callenge #4b


const celineArray = [
  "celine",
  1,
  "chambre",
  29,
  ["celine", "manal", "Ivo"]
];

// break when reached first number

for (let i = 0; i < celineArray.length; i++) {
  if (typeof celineArray[i] === "number") break;
  console.log(celineArray[i], typeof celineArray[i]);
}

// only print strings, if no string go to next element

for (let i = 0; i < celineArray.length; i++) {
  if (typeof celineArray[i] !== "string") continue;
  console.log(celineArray[i], typeof celineArray[i]);
}

// starting from the last element 

for (let i = celineArray.length - 1; i >= 0; i--) {
  console.log(i, celineArray[i]);
}

// Coding Cahllenge : While-Loop (if you dont know how many times a loop runs)

let repetiotion = 1;

while (repetiotion <= 10) {
  console.log('Hi there');
  repetiotion++;
}

// next


let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is ending...")
}


/* Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array

*/


const newBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const newTips = []
const newTotals = []


function calcTip(billValue) {
  if (billValue > 50 && billValue > 300) {
    return billValue * 0.15
  } else {
    return billValue * 0.2
  }
}

for (let i = 0; i < newBills.length; i++) {
  newTips.push(calcTip(newBills[i]));
  newTotals.push((calcTip(newBills[i]) + newBills[i]));
}

console.log(newTips);
console.log(newTotals);


/*
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

function calcAverageTwo(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  const finalAverage = sum / array.length
  return finalAverage
}

console.log(calcAverageTwo(newTotals));



