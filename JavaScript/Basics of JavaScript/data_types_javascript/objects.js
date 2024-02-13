// singleton
//Object.create
// object literals

//Symbols

const mySym = Symbol("mySym1")

const JsUser ={
    name:"Nikhil",
    "Full Name": "Nikhil Rathore",
    age : 20,
    [mySym]:"mySym1",
    location : "Delhi",
    email : "nikhil@gmail.com",
    isLoggedIn : false,
    lastLogIn : ["Monday","Saturday"]
}

// console.log(JsUser.email);

// console.log(JsUser["email"]);

// console.log(JsUser["Full Name"]);

// console.log(typeof JsUser[mySym]);

JsUser.email = "Nikhilgoogle@gmail.com"

// console.log(JsUser);

// Object.freeze(JsUser)
JsUser.email = "nikhil@google.com"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this["Full Name"]}`);
}

// console.log(JsUser.greetingTwo());



// const tinderUser = new Object() this one is a singleton object 

const tinderUser = {}

tinderUser.id= "123Abc"

tinderUser.name= "Nikhil"

tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser = {
    email : "nikhil@gmail.com",

    fullname : {
        userfullName:{
            firstname : "Nikhil ",
            lastname : "Rathore"
        }
    }
}

// console.log(regularuser.fullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)

// console.log(obj3);

const obj3 = {...obj1,...obj2} //similar to array

// console.log(obj3);


// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename : "js in hindi ",
    price : 999,
    courseInstructor : "Nikhil"
}

const {courseInstructor : instructor}= course

console.log(instructor);

//json = javascript object notation
