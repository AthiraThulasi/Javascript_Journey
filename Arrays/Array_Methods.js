
let names = [ 'Athira', 'Beena', 'Thulasi']
console.log(names.length) // prints the length
console.log(names) // prints the elements/keys
// stored as String in Array Objects

console.log(names["0"]) // index can be passed as String // o/p-Athira

console.log(names["3"]) // Access an index outside the array  returns  undefined // no Arrayindexoutofbound exception like in java
//=====================================================================================================================================
// PUSH()
// Append an ELEMENT to the END of Array
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


// POP() - Remove ELEMENT FROM END 
let students = ["Jia", "Miya" , "Ameya"]
let student1 = students.pop() // return the last name
console.log(student1) 
console.log(students)

//PUSH & POP make an array work like a STACK

let student2 = students.pop() // return miya
console.log(student2) 

let student3 = students.pop() // return jiya
console.log(student3) 

let student4 = students.pop() // return undefined as no elemets exists in array
console.log(student4) 
//===================================================================================
// SHIFT() - Removes and returns FIRST ELEMENT, All other elements SHIFT to LEFT
//======================================================================================
let numbers = [12,56,23,45]
let num = numbers.shift()
console.log(num)
console.log(numbers)
//===================================================================================
// UNSHIFT() - Adds element at START of Array + return new length
//======================================================================================
let numerals = [12,56,23,45]
let nums = numerals.unshift(100,200,300)
console.log(nums)
console.log(numerals)

//=======================================================================================
// include() - checks whether a particular elemnt is present and RETURNS BOOLEAN Value
//=======================================================================================
let emotions = ["happy", "peaceful"]
console.log(emotions.includes('happy'))