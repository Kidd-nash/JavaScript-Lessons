console.log(23);
// these two slashes are used to make single comments
/* these slashes and asterisks are used for comments
   that are quite long compared to short comments
*/
console.log('String that has capital, spaces, punctation and multiple words.');
// string usually have quotes inside the parenthesis
console.log(2011);
// however, numbers does not need quotes inside the parenthesis
/* There are 5 operations done
add: +
subtract: -
multiply: *
divide: /
remainder: %
*/
console.log('four' + 'words' + 'added' + 'together');
// concatenation is done when you have to add things together
// and apparently spaces should not be ignored
console.log('Counting the string input' .length);
//this <.length> a property used to count the number of characters in a String
console.log('    Remove whitespace   '.trim());
//these <.command> are called methods
console.log('Codecademy'.toUpperCase());
//specific methods have specific commands
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));
//next is creating variables
var bestGundam = 'GundamWing';
console.log(bestGundam):
//pb
var numOfGundamWings = 2;
console.log(numOfGundamWings);

let areGundamsGood = Yes;
console.log(areGundamsGood);

const gundamAnalysis = 'REALLY GOOD';
console.log(gundamAnalysis);
//const are constants an when reassigned will be a TypeError
gundamAnalysis = 'it is good';
//and when you do not put any value, it will read as SyntaxError
let levelUp = 10;
levelUp += 5;

console.log(levelUp);
let powerLevel = 9001;
powerLevel -= 100;

console.log(powerLevel);
let multiplyMe = 32;
multiplyMe *= 11;

console.log(multiplyMe);
let quarterMe = 1152;
quarterMe /= 4;

console.log(quarterMe);
//these are Mathematical Operators
//these next two are called increments and decrements Operators
let gainedDollar = 3;
gainedDollar++;
console.log(gainedDollar);
let lostDollar = 50;
lostDollar--;
console.log(lostDollar);
//the next one is to concatenate a string with a variable
let favoriteAnimal = 'Kuma';
console.log('My favorite animal: ' + favoriteAnimal);
//this one joins together var and string thru interpolation
var myName = 'Eric';
var myCity = 'Nuuk';
console.log(`My name is ${myName}. My favorite city is ${myCity}`);
//typeof operator, tells what type of data is the variables
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);
let anotherVariable = true;
console.log(typeof anotherVariable);
//next one is a short activity applying the lessons learned so far
//293 is the forecasted weather and is set to be the constant value
const kelvin = '293';
//celsius has a 273 diff in kelvin
var celsius = '20';
//to get fahrenheit celsius * (9/5) + 32
var fahrenheit = '33.8';
//to remove decimals, simply use a Math object
fahrenheit = Math.floor(fahrenheit);
//to print out use interpolation
console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit`);
//end of temp project

//start of Dog years project
var myAge = 23;
var earlyYears = 2;
//value for earlyYears will change
earlyYears *= 10.5;
var laterYears = 23 - 2;
//laterYears is calculated thru subtracting 2 from myAge
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
//myAgeInDogYears is the sum of earlyYears and laterYears
var myName = 'KIDO'.toLowerCase();
//this code turns the name to LowerCase
console.log(`My name is ${myName}. I am ${myAge} years old in human years
  which is ${myAgeInDogYears} years old in dog years.`)

//next is if else and more
let Gundam_sale = true;

Gundam_sale = false;

if(Gundam_sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}
