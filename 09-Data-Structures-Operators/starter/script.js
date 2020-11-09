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
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  score: '4:0',
  substitutes: ['Thiago', 'Coutinho', 'Perisic'],
  odds: { team1: 60, draw: 10, team2: 30 },
  scored: ['Davies', 'Muller', 'Lewandowski', 'Lewandowski'],
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

// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:

// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }
// GOOD LUCK �

for (const [score, name] of game.scored.entries()) {
  console.log(`Goal ${score + 1}: ${name}`);
}

const entries = Object.entries(game.odds);
const values = Object.values(game.odds);

let avgOdd = 0;

for (const value of values) {
  avgOdd += value;
}

console.log(`The average odds are ${avgOdd / values.length}`);

for (const [key, value] of entries) {
  const teamStr = key === 'x' ? 'draw' : `victory of ${game[key]}`;
  console.log(`Odd of ${teamStr} is ${value}`);
}

// const goalscorers = game.scored;
// const gameScores = {};

// for (const [key, value] of goalscorers) {
//   gameScores += (key: value);
// }

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

// Coding Challenge #3

// Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, 'Substitution'],
  [47, '⚽ GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, 'Yellow card'],
]);

//Your tasks:

// 1. Create an array 'events' of the different game events that happened (no duplicates)

const events = [...new Set(gameEvents.values())];

console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:[FIRST HALF] 17: ⚽ GOAL

for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'First' : 'Second';
  console.log(`[${half} HALF] ${key}: ${value}`);
}
