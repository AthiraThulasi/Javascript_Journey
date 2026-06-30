
// 1. Function Declarations

function studyhard (){ 
    console.log("Success is yours")
}

studyhard(); // Function call


// 2. Function Expression - Function assigned to a variable 
// Anonymous function - used once or it is passed as an argument to another function

const happiness = function(){ // function has no name - Anonymous Function
    console.log("Be happy")
}





// Calling a function inside an object

const user = {
    name: "Athira",

    greet: function () {
        return `Hello ${this.name}`;
    }
};

console.log(user.greet());