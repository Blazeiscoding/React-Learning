function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}

// function addTwoNumber(number1,number2){

//     console.log(number1+number2);
// }

// addTwoNumber(4,5)

function addTwoNumber(number1,number2){

    return(number1+number2);
}
const result = addTwoNumber(4,5)

// console.log("Result : " , result);

function loginUserMessage(username="Blaze"){
    if(!username){
        console.log("Please Enter a UserName");
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("Nikhil"))


// here ... is rest operator
function CalculateCartPrice(...num1){
    return num1
}

// console.log(CalculateCartPrice(200,300,400));


const user = {
    username : "Nikhil",
    price :  299
}

function HandleObjects(anyobject){
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`);

}

console.log(HandleObjects(user))
HandleObjects({
    username: "sam",
    price: 399
})


const myNewArray = [200,400,5500,600]

function returnthirdvalue(getarray){
    return getarray[2]
}
console.log(returnthirdvalue(myNewArray));