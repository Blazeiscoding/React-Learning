const account_id = 1142
let account_email = "hehe@gmail.com"
var account_password = "5664646"
account = "Jaipur"

console.log(account_id);
/*
Prefer not use var for functional scope and non functional scope
*/
console.table([account_email,account_id,account_password,account]);

// alert(3+3) we are using node js not browser

// null is a standalone value in it self , null is an object
// undefined is when we haven't declared any value to the variable
// symbol is used when we have to make an object unique


let passwordInnumber = Number(account_password)

console.log(typeof passwordInnumber)

// when u convert a string with number "98292" into number in javascript it is converted into number without any hassle
// but when u try to convert a string with "jaipur" into a number it gives us an output of NaN which means not a number. 


let isLoggedIn = 1

let isLoggedIninboolean = Boolean(isLoggedIn)

console.log(isLoggedIn)

console.log(isLoggedIninboolean)

// 1 is converted into true and 0 is converted into false

// == converts the value and then proceeds to the comparison of two values
// === checks the datatype and then proceeds to compare two values

let myFunction = function(){
    console.log("hello world");
}


let heros = ["Iron Man ", "Captain America", "Spider Man"]

console.log(heros);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)  , Heap(Non-Primitive)

// In Stack we get a copy of the data , And in Heap we get the reference of the data

let userOne = {
    email : "nikhil@gmail.com",
    upi : "nikhil@hdfc"

}

let userTwo = userOne

userTwo.email= "user@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);