let email =". Athira.bt@gmail.com "// Handles 
console.log(email)

// toUpperCase
let emailUpperCase = email.toUpperCase(); // String is immutable, So String should be saved in a different variable not in the same 'email' variable
console.log(emailUpperCase) 

// toLowerCase
let emailLowerCase = email.toLowerCase(); // String is immutable, So String should be saved in a different variable not in the same 'email' variable
console.log(emailLowerCase) 

// trim()
let trimmedEmail = email.trim()
console.log(trimmedEmail)

//includes()
console.log(email.includes('COM')) // false
console.log(email.includes('com')) // true

//startsWith()
console.log(email.endsWith('.com'))
console.log(email.startsWith('. '))

// indexOf()
console.log(email.indexOf("@")) // 11

//slice
let slicedString = email.slice(1,5)
console.log(slicedString) // Slice accept +ve and -ve indexes

let negativeslicedString1 = email.slice(1,-5)
console.log(negativeslicedString1)

//Positive index → count from left
//Negative index → count from right

//slice(start, end)

//Start = included ✅
//End   = excluded ❌// // 

let negativeslicedString2 = email.slice(-10,-5) // equal to email.slice(9, 14) // Totallength = 19
console.log(negativeslicedString2)              //  19 - 10 = 9 //  19 - 5  = 14       


//Substring() // substring can't use -ve index
let suboutput = email.substring(1,5)
console.log(suboutput)

//indexOf()
console.log(email.indexOf("@"));