/**
 * This quiz is to test your knowledge of for-of-Loop.
 *
 * 1. When you finish the quiz, create a PR on you repository
 * 2. Submit to your lead
 */

// Question 1: Loop through the array and print the names of the Apostles
const apostles = ["Peter", "James", "John", "Andrew", "Philip"];

for (let apostol of apostles) {
  console.log("[QUESTION #1: ", apostol);
}

// Answer should be: Peter, James, John, Andrew, Philip (each in a new line)

// Question 2: Calculate the sum of the ages of the Patriarchs
const patriarchAges = [930, 912, 905, 895];
let sumAges = 0;
for (let sum of patriarchAges) {
  sumAges = sum + sumAges;
}

console.log("[QUESTION #2: ", sumAges);

// console.log(answer) // Answer should be: 3642

// Question 3: Print the plagues of Egypt
const plagues = ["Frogs", "Locusts", "Hail"];

for (const plague of plagues) {
  console.log("[QUESTION #3: ", plague);
}

// Answer should be: Frogs, Locusts, Hail (each in a new line)

// Question 4: Convert Bible books to uppercase
const books = ["Genesis", "Exodus", "Leviticus"];
let booksUp = " ";
for (let book of books) {
  console.log("[QUESTION #4: ", book.toLocaleUpperCase() + " ");
}

// Answer should be: GENESIS, EXODUS, LEVITICUS (each in a new line)

// Question 5: Count the number of times 'apple' appears in the array
const fruitsInEden = ["apple", "pear", "apple", "grape"];
let i = 0;
for (const fruit of fruitsInEden) {
  if (fruit.includes("apple")) {
    i++;
  }
}

console.log("[QUESTION #5: ", i);
// Answer should be: 2

// Question 6: Multiply all elements in the array by 2
const davidStones = [1, 2, 3];
let multi = [];

for (let david of davidStones) {
  multi.push(david * 2);
}

console.log("[QUESTION #6: ", multi);
// Answer should be: [2, 4, 6]

// Question 7: Reverse the string
const nameOfGod = "Yahweh";
let reverse = "";

for (let name of nameOfGod) {
  reverse = name + reverse;
}
console.log("[QUESTION #7: ", reverse);

// Answer should be: hewhaY

// Question 8: Create a sentence by adding spaces to words
const peaceBeUponYou = ["Peace", "be", "upon", "you"];
let sentence = " ";
for (let sent of peaceBeUponYou) {
  sentence += sent + " ";
}
console.log("[QUESTION #8: ", sentence);

// Answer should be: Peace be upon you

// Question 9: Print out every other element from the array
const daysOfCreation = ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6"];
let o = 0;
let daysArray = [];
for (let day of daysOfCreation) {
  if (o % 2 === 0) {
    daysArray.push(day);
  }
  o++;
}
console.log("[QUESTION #9: ", daysArray);

// Answer should be: Day1, Day3, Day5 (each in a new line)

// Question 10: Concatenate all the strings in the array
const attributesOfGod = ["Omnipotent", "Omnipresent", "Omniscient"];
let string = "";
for (const atribute of attributesOfGod) {
  string += atribute + " ";
}
console.log("[QUESTION #10: ", string);

// Answer should be: OmnipotentOmnipresentOmniscient

// Question 11: Create a new array with only the numbers greater than 3
const biblicalNumbers = [1, 3, 7, 12];
let newArray = [];
let r = 0;

for (let biblical of biblicalNumbers) {
  if (biblicalNumbers[r] > 3) {
    newArray.push(biblical);
  }
  r++;
}

console.log("[QUESTION #11: ", newArray);

// Answer should be: [7, 12]

// Question 12: Calculate the product of all the elements in the array
const disciplesAges = [30, 25, 40, 50];
let product = 1;
for (let diciple of disciplesAges) {
  product *= diciple;
}
console.log("[QUESTION #12: ", product);

// Answer should be: 1500000

// Question 13: Replace 'Goliath' with 'David' in the array
const combatants = ["Goliath", "Soldier1", "Soldier2"];
for (let fighter of combatants) {
  if (combatants[0] === "Goliath") {
    combatants[0] = "David";
  }
}
console.log("[QUESTION #13: ", combatants);

// Answer should be: ["David", "Soldier1", "Soldier2"]

// Question 14: Print the square of each element in the array
const squaresOfNumbers = [1, 2, 3, 4];
let ctr = 0;

for (const square of squaresOfNumbers) {
  if (squaresOfNumbers[ctr] <= 4) {
    console.log("[QUESTION #14: ", squaresOfNumbers[ctr] ** 2);
    ctr++;
  }
}

// Answer should be: 1, 4, 9, 16 (each in a new line)

// Question 15: Count the number of vowels in the string
const theWord = "Bible";
let count15 = 0;

for (const wo of theWord) {
  if ("aeiou".includes(wo)) count15++;
}

console.log("[QUESTION #15: ", count15);

// Answer should be: 2

// Question 16: Print the elements that are divisible by 5
const numbersFromBible = [5, 10, 15, 20, 25];

for (const bNumb of numbersFromBible) {
  if (bNumb % 5 == 0) {
    console.log("[QUESTION 16: ", bNumb);
  }
}

// Answer should be: 5, 10, 15, 20, 25 (each in a new line)

// Question 17: Create a new string where the first letter of each word is capitalized
const phrase = "in the beginning";

const words1 = phrase.split(" ");
let capitalizedPhrase = "";
for (const word of words1) {
  capitalizedPhrase += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}
capitalizedPhrase = capitalizedPhrase.trim();
console.log("[Question #17:", capitalizedPhrase);

// Answer should be: In The Beginning

// Question 18: Create a new array where each element is double the original
const loavesAndFishes = [2, 5];

let newElement = [];

for (let h of loavesAndFishes) {
  newElement.push(h * 2);
}
console.log("[QUESTION #18: ", newElement);

// Answer should be: [4, 10]

// Question 19: Count the number of elements that are equal to 'manna'
const foodInDesert = ["manna", "quail", "manna", "manna"];
let foodCount = 0;
for (let c of foodInDesert) {
  if (c.includes("manna")) {
    foodCount++;
  }
}
console.log("[QUESTION #19: ", foodCount);
// Answer should be: 3

// Question 20: Create a new array by picking every 3rd element from the original array
const theCommandments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let thirdElementArraya = [];
let a = 0;

for (const k of theCommandments) {
  if (k % 3 === 0) thirdElementArraya.push(k);
}
console.log("[QUESTION #20: ", thirdElementArraya);

// Answer should be: [3, 6, 9]
