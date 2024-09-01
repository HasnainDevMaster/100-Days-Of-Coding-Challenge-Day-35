// 100 Days Of Coding Challenge!

/** Question 105: Simulate a Dice Roll
Simulate a dice roll using JavaScript and return a random integer between 1 and 6.*/

//-----------------------------------------------------------------------------------

/**
 * Simulates a dice roll and returns a random integer between 1 and 6.
 * @returns {number} Random integer between 1 and 6.
 */

// Function "rollDice" that simulates a dice roll and returns a random integer between 1 and 6.
function rollDice(): number {
    // Math.random() generates a random number between 0 and 1.
    // We multiply by 6 to get a number in the range of 0 to 5.999...
    // Math.floor() rounds down to the nearest integer, giving us a range of 0 to 5.
    // Adding 1 shifts the range to 1 to 6.
    return Math.floor(Math.random() * 6) + 1;
}

// Log the result of the dice roll to the console.
console.log(rollDice()); // Output: A random integer between 1 and 6.
