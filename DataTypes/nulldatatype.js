// null = no value
// When we want to explicitly gives a no value we assihn null to that variable
// Type of null is --> Object

let user = null;
console.log(user)
console.log(typeof(user)) // type of null is object

let username;
console.log(username)
console.log(typeof(username))// type - undefined

// In javascript, nul == undefined // True

// == > loose equality > checks value
console.log(user == username) // true

// === > Strict equals > checks value + type
console.log(user === username) // false // user is of object type and username is undefined
