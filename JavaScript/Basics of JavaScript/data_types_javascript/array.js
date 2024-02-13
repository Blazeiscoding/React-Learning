//Array 

// const myArray = [0,1,2,3,4,5]

// const heros = ["marvel","dc","sony"]

// const myarr2 = new Array(1,2,3,4,5)


// //in javascript array copies created are linked to eachother

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// console.log(myArray);
// myArray.unshift(9)
// myArray.shift()

// console.log(myArray);

// const newArr = myArray.join()

// console.log(newArr);

// //slice , splice

// // slice doesn't changes anything in the array , it doesn't includes ending range
// // splice changes the value in the array and includes the ending range too

// console.log("A ", myArray);

// const myn1 = myArray.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArray);


// const myn2 = myArray.splice(1, 3)
// console.log("C ", myArray);
// console.log(myn2);

const marvel_heros= ["thor","spiderman","hulk"]

const dc_heros= ["batman","flash","superman"]

//  marvel_heros.push(dc_heros)

const all_heros=marvel_heros.concat(dc_heros)

// console.log(all_heros);

// ... is a spread operator which breaks the array into every single element

const allnew_heros = [...marvel_heros,...dc_heros]

// console.log(allnew_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7],8]

// console.log(another_array);

const new_another_array = another_array.flat()

// console.log(new_another_array);

// console.log(Array.isArray("Nikhil"));

// console.log(Array.from("Nikhil"));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));