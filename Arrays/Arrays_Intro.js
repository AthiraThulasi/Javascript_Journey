/*
>> Arrays in js are ordered collection of values which can be accessed through index
>> Arrays are Heterogeneous - can store different Types - String,Number,Boolean,Object
>> Arrays can shrink and Grow.
>> Length is automatic > No need to declare upfront.
*/

const values = ["Athira",10, true,{role:"SDET"},[10,20,30,40]]
console.log(values[0]);
console.log(values[3].role);
console.log(values[4][1]);
console.log(values.length);


/*=================================================================================================================
Array.of()   → I HAVE VALUES → make an array >> Array.of() → creates an array from the values passed as arguments.
Array.from() → I HAVE SOMETHING ELSE → convert it to an array
=============================================================-==================================================
*/
const str = "Hello";
// 1. Using split()
const arr1 = str.split("");
console.log(arr1);  // ["H", "e", "l", "l", "o"]

// 2. Using Array.from()
const arr2 = Array.from(str);
console.log(arr2);// ["H", "e", "l", "l", "o"]

const marks = [ 10,11,12,13,14,15]
const emptyArray = [ ]
const arr = new Arr(5);

=================================================================





