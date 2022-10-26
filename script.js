/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("jones");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

// Data Types
/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javaScriptIsFun = "Yes!";
console.log(javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);

console.log(typeof null);
*/

// let, const, var
/*
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

var job = "programmer";
job = "teacher";
console.log(job);

lastName = "Czarapata";
console.log(lastName);
*/

//Basic Operators
//Math Operators
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Czarapata";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++;
x--;
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah); // >/ <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
let x, y; 
x = y = 25-10-5; 

console.log(x, y);
*/

// ** 2 = squared.

// Coding Challenge #1
/*
const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
console.log(markBMI, johnBMI);

const markMass2 = 95;
const markHeight2 = 1.88;

const johnMass2 = 85;
const johnHeight2 = 1.76;

markBMI2 = markMass2 / markHeight2 ** 2;
johnBMI2 = johnMass2 / johnHeight2 ** 2;

markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2); // WOOHOO! Got this challenge right, 100%
*/
/*
const firstName = "Hunter";
const job = "coder";
const birthYear = 1992;
const year = 2022;

const hunter =
"I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(hunter);

const hunterNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(hunterNew);

console.log(`string
multiple
lines`);
*/
/*
const age = 14;

if (age >= 18) {
  console.log("Hunter can start driving");
} else {
  const yearsLeft = 18 - age;
  console.log(`Hunter is too young. Please wait ${yearsLeft} years`);
}

const birthYear = 2001;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// Coding Challenge #2

// const massMark = 95;
// const heightMark = 1.88;

// const massJohn = 85;
// const heightJohn = 1.76;

// const markBMI = massMark / heightMark ** 2;
// const johnBMI = massJohn / heightJohn ** 2;

// if (markBMI >= johnBMI) {
//   console.log(
//     `Marks BMI is ${markBMI} and John's BMI is ${johnBMI}, making Marks BMI higher by ${
//       markBMI - johnBMI
//     }`
//   );
// } else {
//   console.log(
//     `Johns BMI is ${johnBMI} and Mark's BMI is ${markBMI}, making John's BMI higher by ${
//       johnBMI - markBMI
//     }`
//   );
// }

// Coding Challenge 3
// Calculate the Average for Both Teams

// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (88 + 91 + 110) / 3;
// const requiredScore = 100;
// console.log(dolphinsScore);
// console.log(koalasScore);

// if (dolphinsScore > koalasScore && dolphinsScore >= requiredScore) {
//   console.log("The Dolphins win!");
// } else {
//   console.log("The Dolphins had a Higher Score, but did not meet the minimum");
// }

// Coding Challenge 3 Bonus 1
// const dolphinScore = (97 + 112 + 101) / 3;
// const koalaScore = (109 + 95 + 123) / 3;
// const requiredScore = 100;

// if (dolphinScore > koalaScore && dolphinScore > requiredScore) {
//   console.log("The Dolphins Win!");
// } else if (koalaScore > dolphinScore && koalaScore > requiredScore) {
//   console.log("The Koalas Win!");
// } else if (dolphinScore > koalaScore && dolphinScore < requiredScore) {
//   console.log("The Dolphins had more pounts, but not enough!");
// } else if (koalaScore > dolphinScore && koalaScore < requiredScore) {
//   console.log("The Koalas had more points but not enough!");
// }

// Coding Challenge 3 Bonus 2

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// const scoreRequired = 100;

// if (scoreDolphins > scoreKoalas && scoreDolphins > scoreRequired) {
//   console.log("The Dolphins win the Trophy!");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas > scoreRequired) {
//   console.log("The Koala's win the Tropy!");
// } else if (scoreDolphins > scoreKoalas && scoreDolphins < scoreRequired) {
//   console.log("The Dolphins beat the Koalas, but did not have enough points!");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas < scoreRequired) {
//   console.log("The Koalas beat the Dolphins, but did not have enough points");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both teams tie, so neither team wins!");
// }
