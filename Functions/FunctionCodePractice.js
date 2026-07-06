//===============================================
// Sum of two numbers  - Function Declaration
//===============================================
function sum(num1,num2){
    return(num1+num2)
}
 console.log("Sum Of Two Numbers Using Fun Declaration : "+ sum(10,10));

//===============================================
// Sum of two numbers  - Function Expression
//===============================================
const SumOfTwoNumbers = function (num1,num2){
    return num1 + num2;
}

console.log("Sum Of Two Numbers Using Fun Expression :" + SumOfTwoNumbers(100, 1));

//===============================================
// Sum of two numbers  - Arrow Fuction
//===============================================

//  NO curly braces +  RETURN is IMPLICIT
const sumUsingArrowFun1 = (num1, num2) => num1+ num2; 
console.log("Sum Of Two Numbers Using Arrow Function1 : "+ sumUsingArrowFun1(1000,10));
    
// With curly braces + RETURN is EXPLICIT
const sumUsingArrowFun2 = (num1, num2) => { return num1 + num2;} // block body // inside curly braces // Here return statement is EXPLICIT 
console.log("Sum Of Two Numbers Using Arrow Function2 : "+ sumUsingArrowFun2(2000,10));

// Common Bug: Braces Without return → undefined // function returns undefined.
const sumWithoutBracesNoReturn = (number1, number2) => { number1+ number2; };// Calculation happens, but value is never handed back
console.log (sumWithoutBracesNoReturn(10,80)); // undefined

// Returning an Object — Wrap in Parentheses
const makeUser1 = (name) => { name: name };    //  undefined
const makeUser2 = (name) => ({ name: name });  //  object
// Why: JS reads { } after => as a BLOCK, not an object
// Fix: ( ) forces it to be read as an expression