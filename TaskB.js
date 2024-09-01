"use strict";
// 100 Days Of Coding Challenge!
/** Question 104:
Create a function that generates a random hexadecimal color code.*/
//------------------------------------------------------------------
/**
 * Generates a random hexadecimal color code.
 * @returns {string} Random hexadecimal color code.
 */
// Function "getRandomHexColor" is defined and exported.
function getRandomHexColor() {
    // Math.random() generates a random number between 0 and 1.
    // We multiply by 0xFFFFFF to get a number in the range of 0 to 16777215.
    // Then, we convert it to a hexadecimal string and pad with leading zeros if necessary.
    const randomColor = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return `#${randomColor}`;
}
// log the result of the function call to the console
console.log(getRandomHexColor()); // Output: #a1b2c3
