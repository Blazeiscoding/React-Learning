const coding =["js","ruby","python","cpp","java"]

// coding.forEach(function (item){
//     console.log(item);

// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,array)=>{
//     console.log(item,index,array);
// })

const Mycoding =[
    {languageName : "javascript",
    languageFileName : "js"},
    {languageName : "java",
    languageFileName : "java"},
    {languageName : "python",
    languageFileName : "py"}

]

Mycoding.forEach((item)=>{
    console.log(item.languageName);
})