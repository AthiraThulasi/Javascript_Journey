// object Literal

// we can store - string, number, array, boolean, object
// user_details → Variable; "last name" → Property name (key) ; property vale - "beena" 
// → Property name with space should be a string, so quotes is mandatory // //   // Use bracket notation ([]) with quotes because the property name contains a space.
let user_details = {name : 'Athira',
    "last name" : "Beena",   
    YOE : 5, 
    isActive : true,
    marks :[100,85,85],
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

// How to traverse/access/read the values inside the object?

console.log(user_details.name);
console.log(user_details.YOE);
console.log(user_details.isActive);
console.log(user_details.marks);
console.log(user_details.marks[1]);
console.log(user_details.address.city);
//console.log(user_details["last name"]) // Use bracket notation ([]) with quotes because the property name contains a space.
//console.user_details.greet()

user_details.greet();

// Using for loop
for(let key in user_details){
    console.log(key, user_details[key]);
}