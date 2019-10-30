//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let jobTitle = `App System Engineer`;
let geographicLocation = `Toronto`;
let annualSlary = `CAD $120K`;
let companyName = `TD Bank`;

console.log(`You will be a ${jobTitle} in ${geographicLocation}, making ${annualSlary} for ${companyName}.`);

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

let currentYear = 2019;
let birthYear = 1992;
let age = currentYear - birthYear;

console.log(`They are ${age} years old.`)

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let currentAge = 27;
let maxAge = 95;
let estAmountPerDay = 4;
let numOfDaysInYear = 365;
let totalSnack = ((numOfDaysInYear * estAmountPerDay) * (maxAge - currentAge));

console.log(`You will need ${totalSnack} snack to last you until the ripe old age of ${maxAge}`)

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
let radius = 10;
const pi = 3.14; 
let circumference = 2 * pi * radius;
let area = pi * radius * radius;

console.log(`The circumference is ${circumference}.`)
console.log(`The area is ${area}.`)

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let tempInCelsius = 24;
let tempInFahrenheit = 90;
let celsiusToFahr = (tempInCelsius * 9/5) + 32;
let fahrToCelsius = ( tempInFahrenheit - 32) * 5/9;

console.log(`${celsiusToFahr} degree F.`)
console.log(`${fahrToCelsius} degree C.`)