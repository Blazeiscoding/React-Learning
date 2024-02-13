const user = {
    username : "Nikhil",
    price : 400,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);
    }
}

// user.welcomeMessage()
// user.username = "Rathore"
// user.welcomeMessage()

// console.log(this)
// in browser the this function returns window


// function chai(){
//     let username = "Nikhil"
//     console.log(this.username);

// }

// chai()

// const chai = function (){
//     let username = "Nikhil"
//     console.log(this.username)
// }
// chai()


const chai = () => {
    let username ="Nikhil"
    console.log(this.username);
}

// chai()


// const addtwo=(num1,num2) => {
//     return num1+num2
// }
// console.log(addtwo(5,6))

// const addtwo = (num1,num2) => (num1+num2)
const addtwo = (num1,num2) => ({username : 'Nikhil'})
console.log(addtwo(3,5));