/**
 * This quiz is to test your knowledge of Switch Statements.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Given a variable color with a value "red", use a switch statement to set a variable feeling to "passionate" for "red", "calm" for "blue", and "neutral" for other colors.
 */

const color = "red";
let feeling;

switch (color) {
  case "red":
    feeling = "Passionate";
    break;
  case "blue":
    feeling = "calm";
    break;
  default:
    feeling = "Neutral";
    break;
}

console.log("Question #1 ", feeling);

/**
 * Question 2
 * Using a switch statement, check the value of the variable day (e.g., "Monday"). Return "Working day" for weekdays and "Weekend" for Saturday and Sunday.
 */

const day = "saturday";

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("Question #2 ", "working day");
    break;

  default:
    console.log("Question #2 ", "weekend");
    break;
}

/**
 * Question 3
 * Given a variable score of 85, set a grade: "A" for 90 and above, "B" for 80-89, "C" for 70-79, "D" for 60-69, and "F" for below 60.
 */

const score = 85;
let grade;

switch (score) {
  case grade >= 90:
    console.log("Question #3 ", (grade = "A"));
    break;
  case grade >= 80 && grade <= 89:
    console.log("Question #3 ", (grade = "B"));
    break;
  case grade >= 70 && grade <= 79:
    console.log("Question #3 ", (grade = "C"));
    break;
  case grade >= 60 && grade <= 69:
    console.log("Question #3 ", (grade = "D"));
    break;
  case grade < 60:
    console.log("Question #3 ", (grade = "F"));
    break;
}

/**
 * Question 4
 * Use a switch statement to determine if the variable fruit is a "berry". Set "berry" for strawberries, blueberries, and raspberries. "Not a berry" for other fruits.
 */

const fruit = "apple";

switch (fruit) {
  case "strawberries":
  case "bleberries":
  case "raspberries":
    console.log("Question #4 ", "berry");
    break;
  default:
    console.log("Question #4 ", "Not a Berry");
    break;
}

/**
 * Question 5
 * Check the value of the variable month (e.g., "January") and return which quarter of the year it belongs to.
 */

const month = "March";

switch (month) {
  case "January":
  case "February":
  case "March":
    console.log("Question #5 ", "First Quarter");
    break;
  case "April":
  case "May":
  case "June":
    console.log("Question #5 ", "Second Quarter");
    break;
  case "July":
  case "August":
  case "September":
    console.log("Question #5 ", "Third Quarter");
    break;
  case "October":
  case "November":
  case "December":
    console.log("Question #5 ", "Fourth Quarter");
}

/**
 * Question 6
 * Use a switch statement to determine if a number is "small", "medium", or "large". Consider numbers 1-3 as "small", 4-6 as "medium", and 7-9 as "large".
 */

const number = 5;

switch (number) {
  case number >= 1 && number <= 3:
    console.log("Question #6 ", "small");
    break;
  case number >= 4 && number <= 6:
    console.log("Question #6 ", "medium");
    break;
  case number >= 7 && number <= 9:
    console.log("Question #6 ", "large");
    break;
}

/**
 * Question 7
 * Determine the type of the variable pet (e.g., "dog"). Return "Canine" for a dog, "Feline" for a cat, and "Unknown" for other pets.
 */

const pet = "cat";

switch (cat) {
  case "dog":
    console.log("Question #7 ", "Canine");
    break;
  case "cat":
    console.log("Question #7 ", "Feline");
    break;
  default:
    console.log("Question #7 ", "Unknown");
    break;
}

/**
 * Question 8
 * Given a variable transportMode with a value like "car", return "Fast" for "plane", "Medium" for "car", and "Slow" for "bicycle".
 */

const transportMode = "car";

switch (transportMode) {
  case "plane":
    console.log("Question #8 ", "Fast");
    break;
  case "car":
    console.log("Question #8 ", "Medium");
    break;
  case "bicycle":
    console.log("Question #8 ", "Slow");
    break;
}

/**
 * Question 9
 * For a variable direction with values like "N", determine the full direction name. "N" for "North", "S" for "South", etc.
 */

const direction = "N";

switch (direction) {
  case "N":
    console.log("Question #9 ", "North");
    break;
  case "S":
    console.log("Question #9 ", "South");
    break;
  case "W":
    console.log("Question #9 ", "West");
    break;
  case "E":
    console.log("Question #9 ", "East");
    break;
}

/**
 * Question 10
 * Determine the type of drink based on the variable drink. "Water" for "H2O", "Coffee" for "C8H10N4O2", and "Unknown" for other values.
 */

const drink = "H20";

switch (drink) {
  case "H2O":
    console.log("Question #10 ", "Water");
    break;
  case "C8H10N4O2":
    console.log("Question #10 ", "Coffee");
    break;
  default:
    console.log("Question #10 ", "Unknown");
}
