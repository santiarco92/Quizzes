/**
 * This quiz is to test your knowledge of while-Loop.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Using a while loop, sum all numbers from 1 to 10 and store the result in a variable called sum.
 */

let sum = 0;
let n = 0;

while (n < 10) {
  n++;
  sum += n;
}

console.log("[Question #1]: ", sum);

/**
 * Question 2
 * Using a while loop, create a string of numbers from 5 to 15 separated by commas, e.g., "5,6,7,...,15".
 */

let stringnumbers = [];
let v = 4;

while (v <= 14) {
  v++;
  stringnumbers += [v] + ", ";
  if (v === 15) {
    stringnumbers += [v];
  }
}

console.log("[Question #2]: ", stringnumbers);

/**
 * Question 3
 * Print all even numbers between 10 and 30 using a while loop.
 */
let a = 10;
let evenNumbers = [];

while (a <= 30) {
  if (a % 2 === 0) {
    evenNumbers += [a] + " ";
  }
  a++;
}

console.log("[Question #3]: ", evenNumbers);

/**
 * Question 4
 * Determine the smallest power of 2 greater than 1000 using a while loop.
 */

let small = 1;

while (small <= 1000) {
  small *= 2;
}

console.log("[Question #4]: ", small);

/**
 * Question 5
 * Reverse a string "HelloWorld" using a while loop.
 */

let string5 = "HelloWorld";
let stringRevers5 = "";
let m = string5.length;

while (m > 0) {
  m--;
  stringRevers5 += string5[m];
}

console.log("[Question #5]: ", stringRevers5);

/**
 * Question 6
 * Using a while loop, count how many times the letter 'a' appears in the string "banana".
 */

let strfruit = "banana";
let ctr = 0;
let numberOfA = 0;

while (ctr < strfruit.length - 1) {
  ctr++;
  if (strfruit[ctr] === "a") {
    numberOfA++;
  }
}

console.log("[Question #6]: ", numberOfA);

/**
 * Question 7
 * Using a while loop, compute the factorial of 5.
 */

let factorial = 5;
let factorialResult = 1;

while (factorial >= 1) {
  factorialResult *= factorial;
  factorial--;
}

console.log("[Question #7]: ", factorialResult);

/**
 * Question 8
 * Print all numbers from 100 to 80 in descending order using a while loop.
 */
let numb = 100;
let numbPrint = "";

while (80 <= numb) {
  numbPrint += numb + " ";
  numb--;
}

console.log("[Question #8]: ", numbPrint);

/**
 * Question 9
 * Using a while loop, find the greatest common git initdivisor (GCD) of two numbers, 56 and 98.
 */

/**
 * Question 10
 * Calculate the sum of all odd numbers between 1 and 50 using  a while loop.
 */

let sumOfOdds = 0;
let i = 0;

while (i <= 50) {
  if (i % 2 === 1) {
    sumOfOdds += i;
  }
  i++;
}

console.log("[Question #10]: ", sumOfOdds);
