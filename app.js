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
