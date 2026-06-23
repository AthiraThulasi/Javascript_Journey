// undefined means no value

let person = {name : 'Athira'} // name is a property inside an object, not a standalone variable
//console.log(name) // ReferenceError: name is not defined

console.log(person.name) 
// Access name using dot notation
// person.name - object property
// Inside {} - We MUST access it using the object name.
//person → variable (reference / container) -> person is just a label pointing to an object, not the object's name.
// { name: "Athira" } → actual object
// In JavaScript: Objects are anonymous (no real name)
//STACK                 HEAP
//-----                --------
//person   ───────▶    { name: "Athira" }

// if an attribute is not defined in an object, and if we try to access it - Then we will get undefined error
console.log(person.age) // undefined

// Create a Function - passing a value as parameter
greet('Athira')
function greet(personName){
console.log(`Hellooo....${personName} How are you??`)// Hellooo....Athira How are you??
}

// Create a function without passing a parameter // parameter takes 'undefined'
meet()
function meet(personName){
console.log(`Hellooo,  ${personName} meet B`)// Hellooo....Athira How are you??
}

// Type of undefined - Undefined
console.log(typeof meet())