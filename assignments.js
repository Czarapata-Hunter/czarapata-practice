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
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23));

//type coercion
console.log("I am " + 23 + " years old"); // converts to string
console.log("23" - "-10" - 3); // converts to number
