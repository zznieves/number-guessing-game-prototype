
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

// checkpoint
console.log(randomNum);


// tryAgain method: ask user if they would like to continue
function tryAgain() {
    let stayOn = null;

    while(true) {
        stayOn = getInput("Would you like to try again? ('y' for yes or 'n' for no) ");

        if((stayOn !== 'y') && (stayOn !== 'n')) {
            console.log('Invalid input.\n');
            continue;
        }
        else {
            break;
        }
    }

    // checkpoint
    console.log(stayOn);
}



 // user input validation
 while(true) {
    guess = Number(getInput('Enter a number between 0 and 100: '));

    // if user input is not valid whole number between 0 and 100, inform user and repeat prompt
    if((isNaN(guess)) || (guess < 0) || (guess > 100) || (guess % 1 !== 0)) {
        console.log('Invalid input. Please try again.\n');
        continue;
    }
    // if user input is valid, break out of the loop
    else {
        break;
    }
 }

 // checkpoint
 console.log(guess);

 // compare user input to random number

 // guess is correct
 if(guess === randomNum) {
    console.log(`
    Your guess: ${guess}
    The random number: ${randomNum}
    
    That is correct!
    Congratulations! You Win!`);
 }
 // guess is too low
 else if(guess < randomNum) {
    console.log('That guess is too low! Try Again.');
    // ask user to try again
 }
 // guess is too high
 else {
    console.log('That guess is too high! Try Again.');
    // ask user to try again
 }
