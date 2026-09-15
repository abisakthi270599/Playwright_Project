//Task 1 -> Function Declaration
function userProfile(name) {
    console.log("Hello",name,"!");
}
userProfile("Abirami")

//Task 2 -> Arrow Function
    let doubleNum = (a) => (a*2);
    console.log(doubleNum(5));

//Task 3 -> Anonymous Function
//setTimeout(function, delay)
    setTimeout(function () {
        console.log("This message is delayed by 2 seconds");        
    }, 2000);

    //Task 4 -> Callback Function
    function getUserData(callback) {
         setTimeout(function () {
        callback("Call back function");        
    }, 3000);
    }

    getUserData(function (message) {
        console.log(message); 
    });