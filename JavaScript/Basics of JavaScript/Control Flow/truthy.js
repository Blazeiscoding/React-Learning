const userEmail = ""
// if the variable is empty it will considered as a falsy value and when variable has any value it is considered as truthy value

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

//falsy values
// false ,0,-0,BigInt 0n,"",null,undefined,NaN

// Truthy Values

// "0","false"," ",[],{},function(){}


const emptyObject ={}

if (Object.keys(emptyObject).length===0){
    console.log("object is empty");
}