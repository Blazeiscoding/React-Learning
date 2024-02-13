// Object Literal

const user = {
    username : "Nikhil",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        // console.log("Got user details from database");
        console.log(`UserName : ${this.username}`);
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn) {
    this.username=username;
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    // return this
    
}
const userOne = new User("Nikhil",12,true)
const userTwo = new User("Rathore",11,false)
console.log(userOne);
console.log(userTwo);