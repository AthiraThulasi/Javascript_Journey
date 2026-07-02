
let names = [ 'Athira', 'Beena', 'Thulasi']
console.log(names.length) // prints the length
console.log(names) // prints the elements/keys
// stored as String in Array Objects

console.log(names["0"]) // index can be passed as String // o/p-Athira

console.log(names["3"]) // Access an index outside the array  returns  undefined // no Arrayindexoutofbound exception like in java

// PUSH()
// Add an ELEMENT in an Array
// push - append values to the end of array
// push returns new length of array

names.push("Neil")
console.log(names["3"])
names[4] = 'Athira Beena'
console.log(names)

// Add an element on 8th index , leaving 5th and 6th and 7th // O/p has all elements +  <3 empty items> // undefined
names[8] = "Amy"
console.log(names) 


//Empty Array
let arr = []
console.log(arr) // []
arr[1000] = "Athira"
console.log(arr) // [ <1000 empty items>, 'Athira' ]


// POP() - Remove last item from Array
let students = ["Jia", "Miya" , "Ameya"]
let student = students.pop() // return the last name
console.log(student) 
console.log(students)

//PUSH & POP make an array work like a STACK