// Assignment 1
/*
let country = "United States of America";
let continent = "North America";
let population = "300 Million";

console.log(country);
console.log(continent);
console.log(population);
*/

//Assignment 2
/*
let country = "United States of America";
let continent = "North America";
let population = 300;
let isIsland = false;
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);
*/

//Assignment 3
/*
const country = "United States of America";
const continent = "North America";
let population = 300;
const isIsland = false;
const language = "English";
console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

country = "Canada";
console.log(country);
*/

//Assignment4 Basic Operators
/*
const country = "United States of America";
const continent = "North America";
const isIsland = false;
const language = "English";

let population = 300;
console.log(population / 2);
population++;
console.log(population);
console.log(population >= 6);
console.log(population >= 33);

const description =
  "The" +
  " " +
  country +
  " is in " +
  continent +
  " and its " +
  population +
  " million people speak " +
  language;
console.log(description);
*/

// Assignment 5: Strings and Template Literals
/*
const country = "America";
const population = 300;
const continent = "North America";

console.log(
  `I live in ${country}, with a population of ${population} and it is on the continent ${continent}`
);
*/
/*
const population = 30;
const portugalPopulation = 33;

if (population >= portugalPopulation) {
  console.log(
    `America's population is ${
      population - portugalPopulation
    } higher than Portugals population`
  );
} else {
  console.log(
    `America's population is somehow ${
      portugalPopulation - population
    } less than Portugals`
  );
}
*/

// Lesson 20
// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23));

// //type coercion
// console.log("I am " + 23 + " years old"); // converts to string
// console.log("23" - "-10" - 3); // converts to number
// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

// Lesson 21
// 5 falsy values = 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Hunter'));
// console.log(Boolean({}));

// const money = 1;
// if(money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if(height) {
//   console.log("Yay!");
// } else {
//   console.log("Height is Undefined");
// }

// Lesson 22

// const age = 18;
// if (age === 18) console.log("You just became an adult");

// const favorite  = Number(prompt("What is your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log("Cool! 23 is an awesome number!");
// } else if(favorite === 7) {
//   console.log("7 is also cool");
// } else {
//   console.log("Number is not cool enough to be 23 or 7");
// }

// if(favorite !== 23) console.log("Why not the 23?");

// Lesson 23

// Lesson 24

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// //   console.log("Sarah is able to drive");
// // } else {
// //   console.log("Someone else should drive");
// // }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

// Lesson 26:
const day = "saturdy";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend!");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend!");
// } else {
//   console.log("Not a valid day");
// }

// Lesson 27
//Short video showing Expressions and Statements
