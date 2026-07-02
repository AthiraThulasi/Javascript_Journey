
let names = [ 'Athira', 'Beena', 'Thulasi']
console.log(names.length) // prints the length
console.log(names) // prints the elements/keys
// stored as String in Array Objects

console.log(names["0"]) // index can be passed as String // o/p-Athira

console.log(names["3"]) // Access an index outside the array  returns  undefined // no Arrayindexoutofbound exception like in java


// Add an ELEMENT in an Array
// push - append values to the end of array
// push returns new length of array

names.push("Neil")
console.log(names["3"])
names[4] = 'Athira Beena'
console.log(names)
