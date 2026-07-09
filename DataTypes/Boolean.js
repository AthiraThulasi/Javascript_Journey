// Boolean() converts a value into either true or false.
// In JavaScript, any non-zero number is truthy.
// Truthy Values → Truthy Values are values js converts to true in boolean context
// Truthy Values -> non-zero numbers, non-empty strings, objects, arrays
// Falsy Values -> Falsy values rae values ks converts to False in boolean context
// Falsy   → 0, "", null, undefined, NaN, false

let isActive = true
console.log(typeof isActive)

let isPresent = false
console.log(typeof isPresent)


console.log(Boolean(1)) // true (1 is truthy value, so Boolean converts it to TRUE)
console.log(Boolean(-1))// true (-1 is truthy)
console.log(Boolean(0)) // false // (0 is falsy, so boolean converts it to false)
console.log(Boolean("")) // false // (Empty string is falsy)

console.log(Boolean({})) // truthy (Empty object is truthy)
console.log(Boolean([])) // truthy (Empty array is truthy value)

// !! is called the double NOT operator.
// First !  → false
// Second ! → true

console.log(!!"Athira") //"Athira" is truthy - true; // !"Athira" - false '; !"Athira" - true
console.log(!!0)

