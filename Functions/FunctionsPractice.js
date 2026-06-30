
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


// 3. Arrow Function // No function keyword // js recognize arrow function as fun definition
  const gratitude = () => {
    console.log("Be grateful")
  }


// 4. Calling a function inside an object - Represented as key value pair

const user = {
    name: "Athira",
    greet: function () {
        return `Hello ${this.name}`;
    }
};

console.log(user.greet());

// 5. ES6 Shorthand Method // can be used only inside object

const user = {
    smile(){
        console.log("make someone smile")
    }
}

