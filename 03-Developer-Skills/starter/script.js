// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Challenge: Finding the amplitude between the highest and lowest temperature

const temps = [3, -4, -6, "error", 9, 13, 17, 5, -1];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitude(temps));

// Concatenating two Arrays

const arrayOne = [1, 2, 5, 7];
const array2 = [-1, 3, 4, 10];
const arrayCombined = arrayOne.concat(array2);
console.log(arrayCombined);

// Promt, Waring and Errors

console.log(prompt("Put your favorite number in:")); // promt always returns a string

console.warn("This is a warning!");

console.error("ERROR!ERROR!");

// console.table(); // gives us a table with names and inputs

// Converting a string to a number:

Number(prompt("Put your favorite number in:"));

/* 
Developer Skills & Editor Setup

Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

*/

const tempsOne = [17, 21, 23];
const tempsTwo = [12, 5, -5, 0, 4];

const printForecast = function (temps) {
  let forecastString = ``;
  for (let i = 0; i < temps.length; i++) {
    forecastString += `${temps[i]}ºC in ${i + 1} days ...`;
  }
  return `...` + forecastString;
};

console.log(printForecast(tempsOne));
console.log(printForecast(tempsTwo));
