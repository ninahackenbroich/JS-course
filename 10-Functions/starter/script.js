'use strict';

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');

// greet('Hello')('Nina');

// Transfer to Arrow Functions:

const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');

greet('Hello')('Nina');
