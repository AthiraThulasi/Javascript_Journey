// In js all numbers are treated as one

let age = 10;
let num = 100;
let data = -100; // All numbers are 64 bit floating point

console.log(typeof age)
console.log(typeof num)
console.log(typeof data)
console.log((0.3 + 0.2) === 0.3) // === is called strict check // always use strict check for value comparisons
console.log((0.3 + 0.2) == 0.3) // == is called loose check

// Epsilon is used for decimal numbers
// defines the smallest gap between 2 numbers

console.log(Number.EPSILON)
console.log(1+Number.EPSILON)
console.log(1+Number.EPSILON/2) // If you add anything less than epsilon, js doesn't change the value of the number
// less than EPSILON means numbers are same

//To compare decimal values in javascript , use Epsilon
console.log(Math.abs((0.3+0.1)-0.4) < Number.EPSILON) // Math.abs gives +ve value


//MAX_SAFE_INTEGER
//Eventhough javascript provides 64bit Floating point , we can only access till MAX_SAFE_INTEGER which is 2^53 - 1
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER+1)