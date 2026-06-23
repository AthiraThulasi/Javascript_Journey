// fall back operators are used for falsy values
// Two fall back operators 
//  Double Question Mark - ?? [Nullish Coalescing - In js nullish means null or undefined ; ?? only reacts to these two values; Coalescing” = combining / choosing a value ]
//  Logical Operator - || [] work for all 8 falsy values ]
//  Fallback operator says - Use the value on the left. If it's not usable, fall back to the value on the right.

//Preferred choice || Backup choice
//Preferred choice ?? Backup choice

//======================================================================|
// || → use left if it is truthy, else fallback to right                |
// ?? → use left if it is not null/undefined, else fallback to right    |
//=======================================================================

// OR > || -> works for all falsy values
let username = NaN;
console.log(typeof(NaN)); // number

console.log(username || "Athira" ) 
// NaN is a falsy value
// falsy value  ||  Default Value - > gives the Default value

// ?? - Double question mark works only for undefined and Null
console.log("Athira" ?? null)
console.log( null ?? "Athira" )  // left is preferred, but only if it is not null/undefined
