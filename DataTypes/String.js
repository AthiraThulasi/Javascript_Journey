// Strings are immutable

let fname = 'Athira'
console.log(fname)

// tilt helps to define multi level string
let about =`Athira Beena Thulasi 
SDET
Aspiring to be a fullstack QA

`

console.log(about)
// Use Placeholder

let value = 10;
let message = `The value of data is ${value}`
console.log(value)


// Concatanation
let numb = 10;
let fn = 'Athira'
let output = `The value of data is ${numb+10} and the name of user is ${fn}` // String with tilt is flexible 
console.log(output)


// Strings are immutable - any changes will create another string
console.log(fn[0])
fn[0] ='R'; // string modification not allowed, js ignore this
console.log(fn)

// String Comparisons // Use === [Strict Equal Check]
// === checks VALUE for primitives
// === checks MEMORY LOCATION for objects
let x =`Athira`;
let y =`Athira`;
let m = `Ath`+`ira`;
let z = `Beena`;
let n = ['A','t','h','i','r','a'].join("") //    String Array // join() returns a string value
let b = new String (`Athira`) // b is a string, returns type as object
console.log(x===y) // True
console.log(x===m) // True
console.log(x===y===m) // False >> (x === y) === m ->> x === y is true >> true === "Athira" ->> // false  (boolean vs string!
console.log(x === y && y === m);  // true
console.log(x===y===z) // False 
console.log(x === n) // True


// === checks MEMORY LOCATION for objects
let s = [1,2,3];
let d = [1,2,3];
console.log(s === d); //  false → different memory locations!

// objects
let p = {name: "Athira"};
let q = {name: "Athira"};
console.log(p === q); //  false → different memory locations!

// same reference
let k = [1,2,3];
let l = k;            // n points to SAME location as m
console.log(k === l); // true → same memory location!

// String Literals vs String Objects 
let t = 'Athira'; // String Literal  // → Stack    
let i = 'Athira'; // → SAME Stack entry as x!
let o = new String('Athira') // → NEW object in Heap every time!

console.log(typeof t);  // "string"  → primitive
console.log(typeof o);  // "object"  → heap object

console.log(x === 'Athira');  // true  → compares value
console.log(y === 'Athira');  // false → compares memory location

// To get the value of an Object - use valueOf()

let g = y.valueOf( ) // .valueOf() returns the primitive string value
console.log(g)
console.log(typeof g)