'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  orderDelivery: function (
    address,
    mainIndex = 1,
    starterIndex = 1,
    time = '20:00'
  ) {
    console.log(address, mainIndex, starterIndex, time);
  }, // >> order of parameters is not important.
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1},  ${ing2} and ${ing3}!`);
  },
};

// passing an object to a function

restaurant.orderDelivery({
  time: '22.30',
  address: 'seestraße 119',
  mainIndex: 2,
  starterIndex: 1,
});

// destructuring an array:

let [a, b, c] = restaurant.categories;
const [x, , z] = restaurant.categories;

// switching array order

let [main, secondary] = restaurant.starterMenu;

[main, secondary] = [secondary, main];

// order

const [starter, mainCOurse] = restaurant.order(2, 0);
console.log(starter, mainCOurse);

// order with nested destructuring

const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;
console.log(i, j, k); // > 2 5 6

// destructuring with default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // > 8 9 1

// creating three new variables

const { name, openingHours, categories } = restaurant;

// renaming them

const {
  name: resaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;

// Mutating variables

a = 111;
b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // NEED for Parantheses, to be able to change a,b. otherwise through the curly braces its expecting a bloc.

// mutating nested Objects

const {
  fri: { open, close },
} = openingHours;

console.log(open, close);

/*
///// DATA STRUCTURES AND MODERN OPERATORS
*/

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// or with SPREAD Operator

const newArr = [1, 2, ...arr];

console.log(...newArr);

// adding new items to array with SPREAD

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
restaurant.mainMenu = newMenu;

console.log(restaurant.mainMenu);

// copy array

const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays

const menuComplete = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuComplete);

// !!! SPREAD works on iterables.
// >> Iterables: arrays, strings, maps, sets, NOT objects
// SPREAD only usable when building an array or passing the elements in a function

const str = 'jonas';
const letters = [...str, ' ', 's.'];
console.log(letters);

// Passing into a function

const ingredients = [
  //   prompt("Let's make pasta. Ingredient 1?"),
  //   prompt('Ingredient 2?'),
  //   prompt('Ingredient 3?'),
];
restaurant.orderPasta(...ingredients);

// Obejcts with SPREAD

const newRestaurant = { fundedIn: 1998, ...restaurant, founder: 'Giovanni' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Plaza';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// SPREAD on right side of =

const arrayTry = [1, 2, ...[3, 4]];
console.log(arrayTry);

// REST Pattern on left side of =

const [m, n, ...others] = [1, 2, 3, 4, 5];
console.log(m, n, others);

// Both operators

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];

// destructuring Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions with REST

const add = function (...numbers) {
  let sum = 0;
  for (let ind = 0; ind < numbers.length; ind++) sum += numbers[ind];
  console.log(sum);
};

add(2, 3);
add(4, 4, 5, 6, 7, 8, 8, 1, 3);

// Data Structures, Modern Operators and Strings

// Coding Challenge #1

// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:

// 1. Create one player array for each team (variables 'players1' and
// 'players2')

// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

const game = {
  players: [
    [
      'Manuel Neuer',
      'Davies',
      'Muller',
      'Lewandowski',
      'Kimmich',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
    ],
    ['Towart', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
  ],
  substitutes: ['Thiago', 'Coutinho', 'Perisic'],
  odds: { team1: 60, draw: 10, team2: 30 },
  scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
  printGoals: function (...scorers) {
    let scoredPlayers = `${scorers[0]}`;
    for (let i = 1; i < scorers.length; i++) {
      scoredPlayers += `, ${scorers[i]}`;
    }
    console.log(`${scorers.length} goals were scored by ${scoredPlayers}`);
  },
};

const [players1, players2] = game.players;
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
const allPlayers = [...players1, players2];

const players1Final = [...players1, ...game.substitutes];

let finalScorersCopy = game.printGoals(...game.scored);

game.odds.team1 < game.odds.team2 &&
  console.log('Team 2 is more likely to win!');
game.odds.team1 > game.odds.team2 &&
  console.log('Team 1 is more likely to win!');
game.odds.team1 = game.odds.team2 || console.log('Its a draw!');
