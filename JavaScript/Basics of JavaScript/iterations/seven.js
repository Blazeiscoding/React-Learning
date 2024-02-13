const myNums = [1,2,3]

let mytotal = myNums.reduce((acc,currval)=> {
    console.log(currval);
    return acc +currval
},0)

console.log(mytotal);