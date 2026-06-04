let name ;
name= "Athira";
console.log(name);

//let name = "Anna" // Reassignment is not allowed in let
//console.log(name);

name = "Aami" // updating name 
console.log(name);

//const PI = 3.14
//PI = 5
//console.log(PI) // TypeError: Assignment to constant variable.

//Scope level access
if(true){
    let temp = 'notknown';
    console.log(temp)
}


let fruits = [ "Apple", "orange", "Kiwi"]
console.log(typeof fruits) // type of array - object


let x ;
console.log(x); // output - undefined
console.log(typeof undefined) // String "undefined"
console.log(typeof []); // Object


let a ="10";
let b =5;
console.log(a+b) // O/P - 105 // 10 is string with + sign -> js converts 5 to string and do string concatenation - 
console.log(a-b)// O/P - 5 //  js converts 10 to number -> 10-5 = 5
console.log(5 + 2 + "3") // O/P - 73
console.log("5" + 2 + 3) // O/P - 523 // js evaluates from left to right

//+ concatenates when string is involved
// -, * , / try to convert strings to numbers 

console.log(1 + "2" + 3 + 4) // O/P - "1234"//  js evaluates from left to right -> forces numeric conversion and evaluate from left to right
//1 + "2" -> "12"
// "12" + 3 -> "123"
//"123" + 4 = "1234"

// with + operand, if either operand is a string, javascript convets the other operand to a string and concatenates.

