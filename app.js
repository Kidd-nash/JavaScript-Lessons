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
console.log(bestGundam);
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
  console.log('Thank you for your purchase '+ name +
  '! We appreciate your business.');
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

 //Helper Functions
 function monitorCount(rows, columns) {
  return rows * columns;
};
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
};

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);
//Function Expressons
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
     return true;
  } else {
      return false;
  }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));
//Arrow function is when you use "=>" at the closing parenthesis
//Instead of using "function at the opening parenthesis"

//Concise body arrow Functions
const plantNeedsWatering = day =>
   day === 'Wednesday' ? true : false;

//Blocks and Scope
const city = 'New York City';

const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
 return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());
//Global Scope

var satellite = 'The Moon';
var galaxy = 'The Milky Way';
var stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());
//Block Scope

const logVisibleLightWave = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}

logVisibleLightWaves();
console.log(lightWaves); //this log will be a reference error, since lightWaves
                         //is not within its Scope

//Scope Polution
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSkies = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
/*
this kind of var sets from outside and inside a function scope is a bad practice
setting variable with similar names is quite problematic
*/

//Good Practice of Scoping
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
//Creating an array
const hobbies = ['', '', ''];
console.log(hobbies);
//Accessing elements by index, first elemet is always index 0
const famousSayings = ['Fortune favors the brave.',
'A joke is a very serious thing.', 'Where there is love there is life.'];
var listItem = famousSayings[0];

console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]); //this will log undefined
//Updating elements
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';
//Arrys with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);
utensils[3] = 'Spoon';
console.log(utensils);
//.length
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);
//push method
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('wipe dust', 'refill water');
console.log(chores);
//pop method
const houseChores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner',
'mop floor'];
const removed = chores.pop();
console.log(chores);
console.log(removed);
//More Array Methods
//shift and unshift methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice',
'pasta', 'coconut oil', 'plantains'];

groceryList.shift('orange juice');
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
//Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement (newArr) {
  newArr.pop();
}

removeElement(concept);

console.log(concept);
//Nested arrays
var numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];
//The For Loop
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}
//Looping in Reverse
for (let counter = 0; counter < 4; counter++){
  console.log(counter);
}

for (let backwardsCounter = 3; backwardsCounter >= 0; backwardsCounter--) {
  console.log(backwardsCounter);
}
//Looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}
//Nested Loops
var bobsFollowers = ['Bab', 'Bib', 'Bub', 'Beb'];
var tinasFollowers = ['Bub', 'Bob', 'Beb'];

var mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
//The while Loop
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = [];

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};
//Do while Statements
let cupsOfSugarNeeded = (1);
let cupsAdded = [0];
do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded);
//Break keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");
//Functions as data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();

console.log(isTwoPlusTwo.name);
//Function as Parameters
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
var checkA = val + 2;
var checkB = func(val);
return checkA === checkB ? func(val) : 'inconsistent results';
}

console.log();

console.log(checkConsistentOutput(addTwo, 95));
//Iterators
//For Each
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach (function(fruits) {
  console.log('I want to eat a ' + fruits);
});
//The .map method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(
  firstCharacter => firstCharacter.substring(0, 1)
);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)
//The .filter
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const small_Numbers = randomNumbers.filter(
randomNumber => {
  return randomNumber < 250;
}
);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter( longWords => {
  return longWords.length > 7;
}

);
//findIndex
const lotOfAnimals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
}

);

const startsWithS = animals.findIndex(
initialLetter => {
  return initialLetter.substring(0,1) === "s";
}
);
//reduce
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);
//Iterator Documentation
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array

const interestingWords = words.filter((word) => {return word.length > 5});

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {return word.length > 5}));
//Choosing the right iterators method
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);
//Creating Object Literals
let fasterShip = { //a fast ship
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
};
//The spaceship object has two properties Fuel Type and color. 'Fuel Type' has
//quotation marks because it contains a space character.

//Accessing properties in objects
let spaceshipOne = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

var crewCount = spaceship.numCrew;
var planetArray = spaceship.flightPath;
//Bracket notation
let spaceshipTwo = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

var isActive = spaceship['Active Mission'];

console.log(spaceship[propName]);
//Property assignment
let spaceshipThree = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold';
spaceship.numEngines = 9;
delete spaceship['Secret Mission'];
//Mehtods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShip.retreat();
alienShip.takeOff();
//Nested objects
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
};

var capFave = spaceship.crew.captain['favorite foods'][0];
spaceship.passengers = [
  {
    name: 'name'
  }
];
var firstPassenger = spaceship.passengers[0];
//Pass by reference
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
function greenEnergy(obj) {
    obj['Fuel Type'] = 'avocado oil';
}
function remotelyDisable(obj) {
    obj.disabled = true;
}

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship)
//Looping through objects
let spaceship = {
    crew: {
    captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
        },
    'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
        },
    medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
        }
    }
};

for (let role in spaceship.crew) {
    console.log(`${role}: ${spaceship.crew[role].name}`);
}
for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};
//CLASSES
//Intro
let halley = {
  _name: 'Halley',
  _behavior: 0,

  get name() {
    return this._name;
  },

  get behavior() {
    return this._behavior;
  },

  incrementBehavior() {
    this._behavior++;
  }
}
//var hally created with a class for Dog
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior ++;
  }
}
const halleys = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
//constructor method
// class Surgeon {
// //putting and underscore is prepending which is an indicator not to access directly
//   this._name = name;
//     this._department = department;
//     this._remainingVacationDays = 20;
//   }
//   get name() {
//     return this._name;
//   }
//   get department() {
//     return this._department;
//   }
//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }
//   //this part is a method to set remainingVacationDays value to a new one deducted by daysOff
//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }
//instance
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
//Method Calls
console.log(surgeonRomero.name);
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);
//Inheritance II
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  static generatePassword() {
   return Math.floor(Math.random()*10000);
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
//Inheritance III
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    //this part is important to sub classes, it used to comply to parent class
    super(name);
    this._remainingVacationDays = 20;
    this._certifications = certifications;
  }
  get certifications() {
   return this._certifications;
 }
 addCertification(newCertification) {
   this._certifications.push(newCertification);
 }
}
//when you insert more than 1 value in a parameter, enclose them in []
const nurseOlynyk = new Nurse("Olynyk", ['Trauma', 'Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications);
//
//Advanced Objects

//"This" Keyword

  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() { 
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
  };

  console.log(robot.provideInfo());

//Arrow function and this

  const robotTwo = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }

  robot.checkEnergy();

//Privacy

  const robotThree = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };

  robot._energyLevel = 'sustainable ';
  robot.recharge();

  // Getters

  const robotFour = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number') {
        return 'My current energy level is ' + this._energyLevel
      } else {
        return "System malfunction: cannot retrieve energy level"
      }
    }
  };
  
  console.log(robot.energyLevel);

//Setters

  const robotFive = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num) {
      if (typeof num === 'number' && num >= 0){
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0')
      }   
    } 
  };

  robot.numOfSensors = 100;
  console.log(robot.numOfSensors);


