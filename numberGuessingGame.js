
/**
 * Project: Number Guessing Game
 * Language: JavaScript (Node.js)
 * Author(s): Zayon Nieves
 */

// explain the rules of the game to the user
console.log(`
Welcome to the Number Guessing Game!

I will generate a random number between 0 and 100.
You will then guess what the number is.

Don't worry if you get it wrong, I will give you hints to help out.
After each failed attempt, you will be given the option to try again
or give up.

Best of luck!
`);


// global variables
const getInput = require('prompt-sync')();
const randomNum = Math.floor(Math.random() * 101);
let guess = null;


