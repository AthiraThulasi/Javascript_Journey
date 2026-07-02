//=========================================================================================================
// var
//=========================================================================================================

// var, let, and const are VARIABLE DECLARATION KEYWORDS in JavaScript - They are used to declare (create) variables.
// var is hoisted and initialized with undefined during the Memory Creation Phase.

var name; // Hoisting happens and 'name' is initialized with undefined.
console.log(name); // 'name' has not been assigned a value yet, so the output is: undefined

//====================================================================================================

name = 'Athira'; // Assigns the value 'Athira' to 'name'.
var name; // Nothing happens here because the declaration was already processed during hoisting.
console.log(name); // Output: Athira

//=====================================================================================================

console.log(age); // 'age' is used before its declaration.
// During hoisting, 'age' is created and initialized with undefined.
var age; // Nothing happens here because the declaration was already processed during hoisting.
// Output: undefined

//=====================================================================================================

console.log(num); // 'num' is used before its declaration.
// During hoisting, 'num' is created and initialized with undefined.
var num; // Nothing happens here because the declaration was already processed during hoisting.
num = 10; // Assigns 10 to 'num', but it is not printed because there is no console.log() after this.

//=====================================================================================================

console.log(yoe); // 'yoe' is used before its declaration.
// During hoisting, 'yoe' is created and initialized with undefined.
// Output: undefined

var yoe; // Nothing happens here because the declaration was already processed during hoisting.
yoe = 10; // Assigns 10 to 'yoe'.
console.log(yoe); // Now 'yoe' contains 10, so the output is: 10

//=====================================================================================================
// Redeclaration allowed in var
var nam = "AthiraBeena";
var nam = "Thulasi"; // Redeclaration allowed in var

console.log(nam);
//======================================================================================================
// Redeclaration not allowed in let
//let name1 = "Athi";
//let name1 = "BeenaThulasi"; 
// console.log(name1);
// SyntaxError: Identifier 'name' has already been declared

//=========================================================================================================
// Let & const
//=========================================================================================================

let status; // Hoisted, but kept in the Temporal Dead Zone (TDZ) until this declaration is executed.
status = "happy"; // By this point, 'status' has left the TDZ. This line assigns the value "happy".
console.log(status); // Output: happy

//=========================================================================================================

let plan; // Creation Phase - Hoisted, but kept in the Temporal Dead Zone (TDZ). 
         //  Excecution Phase - When this declaration executes, 'plan' leaves the TDZ and is initialized with undefined.
console.log(plan); // Output: undefined because 'plan' has been declared but no value has been assigned.

//=========================================================================================================
//console.log(day); // ReferenceError: Cannot access 'day' before initialization
//let day;
//=========================================================================================================