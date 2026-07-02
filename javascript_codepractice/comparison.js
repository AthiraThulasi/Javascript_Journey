console.log(null==undefined) // true
// JavaScript has a special rule hardcoded inside it:null and undefined are only equal to each other and to nothing else when using ==


console.log(null===undefined) // false
//===  checks two things strictly:
// Same value? YES  // typeof null // "object"
// Same type?  NO  // typeof undefined  // "undefined"

console.log("" == false);   // true  — both become 0
console.log(0 == false);    // true  — both become 0
// convert false to number: 0
// convert "" to number: 0
// 0 == 0 → true 


console.log("" === false);  // false — string vs boolean
//typeof ""       // "string"
//typeof false    // "boolean"

// When JS doesn't know what to do with [] or {} in math/string operations, it converts them to strings first.
console.log([] + []); // returns emty string
console.log(typeof ([] + []));  // check its type
console.log([] + {}); // [object Object]
console.log({} + []); // [object Object]

// [] always becomes "" (empty string)
// {} always becomes "[object Object]"
// BUT if {} is at the start of a line, JS thinks it's a code block and ignores it .


