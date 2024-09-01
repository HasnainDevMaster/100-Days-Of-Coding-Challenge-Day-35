// 100 Days Of Coding Challenge!

/** Question 103: Random Boolean Value
Write a function that returns a random boolean value, true or false.*/

//---------------------------------------------------------------------

/**
 * Returns a random boolean value, true or false.
 * @returns {boolean} Random boolean value.
 */

// Function "getRandomBoolean" that returns a random boolean value.
function getRandomBoolean(): boolean {
    // Math.random() generates a random number between 0 and 1.
    // If the number is greater than 0.5, return true; otherwise, return false.
    return Math.random() >= 0.5;
}

// log the result of the getRandomBoolean function to the console
console.log(getRandomBoolean()); //output: true or false
