const myObject = {
    js :"JavaScript",
    cpp : "C++",
    rb :"ruby",
    py : "python"
}

for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);
}


const programming = ["js","ruby","python","cpp","html"]

for (const key in programming) {
    console.log(programming[key]);
}