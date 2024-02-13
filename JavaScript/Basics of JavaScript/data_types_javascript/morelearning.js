const name = "Hello"
const repCount = 59

console.log(name + repCount + "value");

console.log(`${name} this is Nikhil rathore and my repcount is ${repCount}`);
// this method is now mostly used or preferred

const gameName = new String ('Nikhil-Rathore')

console.log(gameName.length);

let anystring = "String"

console.log(anystring.length);


// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));



const hundreds = 100000

console.log(hundreds.toLocaleString('en-In'));


console.log((Math.random()*10 )+ 1 )


const min =10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);