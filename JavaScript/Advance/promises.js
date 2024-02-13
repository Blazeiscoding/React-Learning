const PromiseOne = new Promise(function(resolve,reject){
    // Do any async task
    // DB Calls , cryptography , network calls 
    setTimeout(function(){
        resolve()
        console.log('Async task is completed');
    },1000)

})

PromiseOne.then(function(){
    console.log("Promise is completed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2 completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 is completed");
})

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"hehe@gmail.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"Nikhil",password:"123"})
        }
        else{
            reject('ERROR something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("Promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"Nikhil",password:"123"})
        }
        else{
            reject('ERROR JS went wrong')
        }
    },1000)

})

async function consumePromiseFive(){
    const response= await promiseFive
    console.log(response);
}
consumePromiseFive()

// async function getAllUsers(){
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json() //cause response.json also takes time
//     console.log(data);
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>console.log("Error occured"))