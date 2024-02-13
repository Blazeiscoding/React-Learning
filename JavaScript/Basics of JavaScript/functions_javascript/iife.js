// Immediately invoked function expressions (IIFE)


(function chai(){
    //named iife
    console.log("DB Connected");
})();


// To stop the pollution from the global scope we use IIFE

((name)=> {
    //no named iife
    console.log(`DB CONNECTED TWO ${name}`);
})("nikhil")