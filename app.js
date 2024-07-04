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
//comparison Operators
/*
Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==
*/
let hungerLevel=8;
if(hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}
//Logical Operators
/*
the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)
*/
let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}
//Truthy and Falsy
/*
So which values are falsy— or evaluate to false when checked as a condition?
The list of falsy values includes:

0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number
*/
let wordCount = 2;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
//Truthy and Falsy assignment
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil= tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
//Ternary Operators
isLocked ? console.log('You will need a key to open the door.') :
console.log('You will not need a key to open the door.');


isCorrect ? console.log('Correct!') : console.log('Incorrect!');


favoritePhrase ==='Love That!' ? console.log('I love that!') :
console.log("I don't love that!");
//Else If Statements - multiple else Statements
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === 'fall') {
  console.log("It's fall! Leaves are falling!");
} else if (season === 'summer') {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log('Invalid season.');
}
//The switch keywords
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}
//Magic Eight Ball project
let userName = ('');
userName === 'Friday' ? console.log('Hello, Friday!') : console.log('Hello!');
let userQuestion = ('Will I do something productive for today?');
console.log(userQuestion + ' Jane...');
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (eightBall) {
  case '0':
    console.log('It is certain');
    break;
  case '1':
    console.log('It is decidedly so');
    break;
  case '2':
    console.log('Reply hazy try again');
    break;
  case '3':
    console.log('Cannot predict now');
    break;
  case '4':
    console.log('Do not count on it');
    break;
  case '5':
    console.log('My sources say no');
    break;
  case '6':
    console.log('Outlook not so good');
    break;
  case '7':
    console.log('Signs point to yes');
    break;
}
console.log(eightBall);
/*
Here’s how our registration works. There are adult runners
(over 18 years of age) and youth runners (under 18 years of age). They can
register early or late. Runners are assigned a race number and start time based
on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the
end of the project.
*/
let raceNumber = Math.floor(Math.random() * 1000);
var registeredEarly= false;
var runnersAge= 19;

if (runnersAge >= 18 &&
registeredEarly)
{
  console.log(raceNumber + 1000);
}
else
{
  console.log('not true');
}

if (runnersAge > 18 &&
registeredEarly) {
  console.log('Race time: 9:30am, number is: ' + raceNumber);
} else if (runnersAge > 18 && registeredEarly === false) {
  console.log('Race time: 11:00am, number is: ' + raceNumber);
} else if (runnersAge < 18) {
  console.log('Race time: 12:30pm, number is: ' + raceNumber);
} else {
  console.log('Please see the registration desk.')
}

//Functions
function getReminder() {
  console.log('Water the plants.');
}

function greetInSpanish() {
  console.log('Buenas tardes');
}

//calling a function
getReminder();
greetInSpanish();
//Parameters and Arguments
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole');
//Default Parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
//Returns
function monitorCount(rows, columns) {

  return rows * columns;
}
 const numOfMonitors = monitorCount(5, 4);
 console.log(numOfMonitors);
