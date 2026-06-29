// object Literal

const { use } = require("react");

// we can store - string, number, array, boolean, object
let user_details = {name : 'Athira', "last name" : Beena,   // user_details → Variable; "last name" → Property name (key) ;"beena" 
                                                            // → Property name with space should be a string, so quotes is mandatory
    YOE : 5, 
    isActive : true,
    marks :[100,85,85],
    greet : function(){
        console.log('Work Hard')
    },
    address :{    // obj nested inside another object
        houseno: 336,
        city : 'Trivandrum',
        Country : 'India'

    }
}
console.log(user_details) // gives us javascript object

// How to traverse/access/read the values inside the object?

console.log(user_details.name);
console.log(user_details.YOE);
console.log(user_details.isActive);
console.log(user_details.marks);
console.log(user_details.address.city);
console.log(user_details["last name"]) // Bracket notation ([]) with quotes as the variable name has space

user_details.greet();

// Using for loop
for(let key in user_details){
    console.log(key, user_details[key]);
}