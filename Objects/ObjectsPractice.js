//object Literal 
// {} is called an "object literal" 
//"Literal" means writing the value directly in code, rather than constructing it through something else. 

// An object in JS is a collection of key-value pairs (called properties), where keys are strings/symbols and values can be ANY data type — including functions and other objects.

// we can store - string, number, array, boolean, object
// user_details → Variable; "last name" → Property name (key) ; property vale - "beena" 
// → Property name with space should be a string, so quotes is mandatory // Use bracket notation ([]) with quotes because the property name contains a space.
//===============================================
// Object Creation - Way 1 = Using Obj Literal
//===============================================
const user_details = {name : 'Athira',
    "last name" : "Beena",   
    YOE : 5, 
    isActive : true,
    marks :[100,85,85],
    status: undefined,
    scholarship: null,
    let : 'Happy',
    class : 'first', // keywords in js can be used as keys in obj as it will only be considered as KEYS 
    "last name" : "Thulasi", // Duplicate Key - First value is going to update with latest
    greet : function(){       //Inside an object, a function is stored as a key-value pair ; // Key: greet  | Value: function
        console.log('Work Hard')
    },

    address :{    // obj nested inside another object
        houseno: 336,
        city : 'Trivandrum',
        Country : 'India'

    }
}
console.log(user_details) // gives us javascript object



console.log(user_details.name);
console.log(user_details.YOE);
console.log(user_details.isActive);
console.log(user_details.marks);
console.log(user_details.marks[1]);
console.log(user_details.address.city);
console.log(typeof user_details.status);
//console.log(user_details["last name"]) // Use bracket notation ([]) with quotes because the property name contains a space.
//console.user_details.greet()

user_details.greet();

// How to traverse/access/read the values inside the object? use in
// Using for loop
for(let key in user_details){
    console.log(key, user_details[key]);// print key and value
}

//================================================
// Object Creation - Way 2 - Using obj constructor
//================================================
// // Object creation via constructor = new ConstructorName(args)


let user= new Object() 
    console.log(user) // {} - Create an Empty Obj

    user.name = 'Athira'; // add values to empty object
    user.role = "SDET";
    user.place ="Trivandrum"
    user.name = "Beena" // duplicate key - 'Athira get replaced by Beena
    delete user.name; // To delete a property from Obj
    console.log(user) 
//=================================================================================================
//  THE `new ConstructorName()` PATTERN
//==================================================================================================
let user1 = new Object();              // creates generic empty object {}
let list = new Array();               //creates  empty array []
let today = new Date();               // creates date object — today's date!
let pattern = new RegExp("ab+c");     // creates regex object
let err = new Error("Something broke"); // creates error object (you met these in throw!)
let mymap = new Map();                // creates Map collection
let myset = new Set();                // Set collection — unique values

// AND our own classes — same pattern!
// let homePage = new HomePage(page);   // creates page object  
class Dog {
    constructor(name) {
        this.name = name;
    }
}
let tommy = new Dog("Tommy");
console.log(tommy);            // Dog { name: 'Tommy' }
//=========================================================================================

//========================================
// Object Creation - Way 3 - Obj.create()
//========================================
// Object.create(prototype) always creates a new object WITH the given prototype -that's its entire purpose.
// Whatever we pass in becomes the new object's prototype
// Object.create is the only one where the prototype is explicitly hand-picked at creation
// Prototype means to create  obj using an existing obj // Similar to inheritance in java ( use a class to creates another class(extends class ))


let teacher = {name: 'Anu', // PROTOTYPE
    role:'Instructor',
   lang:"js"
}

let student = Object.create(teacher)
student.name = "Anna";
student.marks =[69,89]
console.log(student);
//console.log(Object.getPrototypeOf(user))
console.log(student.name);// info of current obj
console.log(Object.getPrototypeOf(teacher));

// How do you create an object with no prototype?
//Object.create(null)

const subject = Object.create(null)
console.log(subject) // [Object: null prototype] {} // obj got created, but prototype is NULL

// getPrototypeOf returns the parent if one exists, and null if there's genuinely no parent. 

//Object.getPrototypeOf(user);    // "hey user, WHO is YOUR prototype?"
                        //↑
              //the object under investigation

//you PASS IN:   user           (the child — who you're questioning)
//you GET BACK:  its prototype  (the parent — the answer)




//When does it actually return null?
// Case 1: Normal objects — ALWAYS have a parent (never null!)
let user2 = {};
Object.getPrototypeOf(user2);              // Object.prototype — the default parent

// Case 2: The chain's LAST station
Object.getPrototypeOf(Object.prototype);  // null 🛑 — the built-in end of every chain

// Case 3: Deliberately parentless object — the special case
let bare = Object.create(null);
Object.getPrototypeOf(bare);              // null — born with no parent!




